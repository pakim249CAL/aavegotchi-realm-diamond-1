// SPDX-License-Identifier: UNLICENSED
// © Copyright 2021. Patent pending. All rights reserved. Perpetual Altruism Ltd.
pragma solidity ^0.8.0;

import "../interfaces/IGBMInitiator.sol";
import "../libraries/AppStorage.sol";
import "../libraries/LibDiamond.sol";

/// @title GBM auction contract Initiator
/// @dev Implementation of IGBM. Feel free to cook up your own implementation for more complex patterns.
/// @author Guillaume Gonnaud
contract SettingsFacet is IGBMInitiator, Modifiers {
    // To future developers: All the getters are called AFTER the auction ID has been generated and hence you can lookup
    // token_ID/Token contract/token kind using the main GBM contract getters(auctionId) if you want to return determinstic values

    function getInitiatorInfo() external view returns (InitiatorInfo memory) {
        return s.initiatorInfo;
    }

    function getStartTime(
        uint256 /* _auctionId */
    ) external view override returns (uint256) {
        return s.initiatorInfo.startTime;
    }

    function getEndTime(
        uint256 /* _auctionId */
    ) external view override returns (uint256) {
        return s.initiatorInfo.endTime;
    }

    function getHammerTimeDuration(
        uint256 /* _auctionId */
    ) external view override returns (uint256) {
        return s.initiatorInfo.hammerTimeDuration;
    }

    function getBidDecimals(
        uint256 /* _auctionId */
    ) external view override returns (uint256) {
        return s.initiatorInfo.bidDecimals;
    }

    function getStepMin(
        uint256 /* _auctionId */
    ) external view override returns (uint256) {
        return s.initiatorInfo.stepMin;
    }

    function getIncMin(
        uint256 /* _auctionId */
    ) external view override returns (uint256) {
        return s.initiatorInfo.incMin;
    }

    function getIncMax(
        uint256 /* _auctionId */
    ) external view override returns (uint256) {
        return s.initiatorInfo.incMax;
    }

    function getBidMultiplier(
        uint256 /* _auctionId */
    ) external view override returns (uint256) {
        return s.initiatorInfo.bidMultiplier;
    }

    function getFloorPrice(uint256) external view override returns (uint256) {
        return s.initiatorInfo.floorPrice;
    }

    /* Setter Functions */

    function setInitiatorInfo(InitiatorInfo memory _info) external onlyOwner {
        s.initiatorInfo = _info;
    }

    function setBackendPubKey(bytes memory _backendPubKey) external onlyOwner {
        s.backendPubKey = _backendPubKey;
    }

    /* function setStartTime(uint256 _startTime) external onlyOwner {
        s.initiatorInfo.startTime = _startTime;
    }
    */

    /* function setEndTime(uint256 _endTime) external {
        s.initiatorInfo.endTime = _endTime;
    }

    function setHammerTimeDuration(uint256 _hammerTimeDuration) external onlyOwner {
        s.initiatorInfo.hammerTimeDuration = _hammerTimeDuration;
    }

    function setBidDecimals(uint256 _bidDecimals) external onlyOwner {
        s.initiatorInfo.bidDecimals = _bidDecimals;
    }

    function setStepMin(uint256 _stepMin) external onlyOwner {
        s.initiatorInfo.stepMin = _stepMin;
    }

    function setIncMin(uint256 _incMin) external onlyOwner {
        s.initiatorInfo.incMin = _incMin;
    }

    function setIncMax(uint256 _incMax) external onlyOwner {
        s.initiatorInfo.incMax = _incMax;
    }

    function setBidMultiplier(uint256 _bidMultiplier) external onlyOwner {
        s.initiatorInfo.bidMultiplier = _bidMultiplier;
    }
    */

    function setFloorPrice(uint256 _floorPrice) external onlyOwner {
        s.initiatorInfo.floorPrice = _floorPrice;
    }
}