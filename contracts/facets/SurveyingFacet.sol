// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9;

import "../libraries/AppStorage.sol";
import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/dev/VRFConsumerBaseV2.sol";

contract SurveyingFacet is Modifiers {
  function startSurveying(uint256 _tokenId, uint8 _surveyingRound) external {
    require(s.parcels[_tokenId].owner == msg.sender, "RealmFacet: Not owner");
    require(!s.parcels[_tokenId].roundsClaimed[_surveyingRound], "RealmFacet: Round already claimed");
    drawRandomNumbers(_tokenId, _surveyingRound);
  }

  function drawRandomNumbers(uint256 _tokenId, uint8 _surveyingRound) internal {
    // Will revert if subscription is not set and funded.
    uint256 requestId = VRFCoordinatorV2Interface(s.vrfCoordinator).requestRandomWords(
      s.requestConfig.keyHash,
      s.requestConfig.subId,
      s.requestConfig.requestConfirmations,
      s.requestConfig.callbackGasLimit,
      s.requestConfig.numWords
    );
    s.vrfRequestIdToTokenId[requestId] = _tokenId;
    s.vrfRequestIdToSurveyingRound[requestId] = _surveyingRound;
  }

  function rawFulfillRandomWords(uint256 requestId, uint256[] memory randomWords) external {
    require(LibMeta.msgSender() == s.vrfCoordinator, "Only VRFCoordinator can fulfill");
    uint256 tokenId = s.vrfRequestIdToTokenId[requestId];
    if (s.vrfRequestIdToSurveyingRound[requestId] == 0) {
      updateRemainingAlchemicaFirstRound(tokenId, randomWords);
    } else {
      updateRemainingAlchemica(tokenId, randomWords);
    }
  }

  function updateRemainingAlchemicaFirstRound(uint256 tokenId, uint256[] memory randomWords) internal {
    for (uint8 i; i < 4; i++) {
      s.parcels[tokenId].alchemicaRemaining[i] = (randomWords[i] % s.totalAlchemicas[s.parcels[tokenId].size][i]) / 5;
    }
  }

  function updateRemainingAlchemica(uint256 tokenId, uint256[] memory randomWords) internal {
    for (uint8 i; i < 4; i++) {
      s.parcels[tokenId].alchemicaRemaining[i] = (randomWords[i] % s.totalAlchemicas[s.parcels[tokenId].size][i]) / 5;
    }
  }

  function setSurveyingRound(uint8 _surveyingRound) external onlyOwner {
    s.surveyingRound = _surveyingRound;
  }

  function setConfig(RequestConfig calldata _requestConfig) external onlyOwner {
    s.requestConfig = RequestConfig(
      _requestConfig.subId,
      _requestConfig.callbackGasLimit,
      _requestConfig.requestConfirmations,
      _requestConfig.numWords,
      _requestConfig.keyHash
    );
  }

  function setAlchemicas(uint256[4][5] calldata _alchemicas) external onlyOwner {
    for (uint8 i; i < _alchemicas.length; i++) {
      for (uint256 j; j < _alchemicas[i].length; j++) {
        s.totalAlchemicas[i][j] = _alchemicas[i][j];
      }
    }
  }

  function getAlchemicas() external view returns (uint256[4][5] memory) {
    return s.totalAlchemicas;
  }

  function subscribe() external onlyOwner {
    address[] memory consumers = new address[](1);
    consumers[0] = address(this);
    s.requestConfig.subId = VRFCoordinatorV2Interface(s.vrfCoordinator).createSubscription();
    VRFCoordinatorV2Interface(s.vrfCoordinator).addConsumer(s.requestConfig.subId, consumers[0]);
  }

  // Assumes this contract owns link
  function topUpSubscription(uint256 amount) external onlyOwner {
    LinkTokenInterface(s.linkAddress).transferAndCall(s.vrfCoordinator, amount, abi.encode(s.requestConfig.subId));
  }
}
