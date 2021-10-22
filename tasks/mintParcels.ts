/* global ethers hre task */

import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parcelMetadataFromTokenIds } from "../helpers/metadataHelpers";
import { MintParcelInput } from "../types";

export interface MintParcelsTaskArgs {
  tokenIds: string;
  diamondAddress: string;
  toAddress: string;
}

task("mintParcels", "Mints parcels")
  .addParam("tokenIds", "String of token Ids separated by commas")
  .addParam("diamondAddress", "Diamond address")
  .addParam("toAddress")
  .setAction(
    async (taskArgs: MintParcelsTaskArgs, hre: HardhatRuntimeEnvironment) => {
      const tokenIds = taskArgs.tokenIds.split(",");

      const parcels: MintParcelInput[] = await parcelMetadataFromTokenIds(
        tokenIds
      );
      console.log("parcels:", parcels);

      const realmFacet = await hre.ethers.getContractAt(
        "RealmFacet",
        taskArgs.diamondAddress
      );

      const tx = await realmFacet.mintParcels(
        taskArgs.toAddress,
        tokenIds,
        parcels
      );
      await tx.wait();
      console.log(tx.hash);

      console.log(
        `Minted ${tokenIds.length} parcels starting with ${
          tokenIds[0]
        }, ending with ${tokenIds[tokenIds.length - 1]} and transferred to ${
          taskArgs.toAddress
        }`
      );
    }
  );