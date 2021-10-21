/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface DiamondLoupeFacetInterface extends ethers.utils.Interface {
  functions: {
    "facetAddress(bytes4)": FunctionFragment;
    "facetAddresses()": FunctionFragment;
    "facetFunctionSelectors(address)": FunctionFragment;
    "facets()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "facetAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "facetFunctionSelectors",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "facets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "facetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetFunctionSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export class DiamondLoupeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DiamondLoupeFacetInterface;

  functions: {
    facetAddress(
      _functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { facetAddress_: string }>;

    facetAddresses(
      overrides?: CallOverrides
    ): Promise<[string[]] & { facetAddresses_: string[] }>;

    facetFunctionSelectors(
      _facet: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { _facetFunctionSelectors: string[] }>;

    facets(
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, string[]] & {
          facetAddress: string;
          functionSelectors: string[];
        })[]
      ] & {
        facets_: ([string, string[]] & {
          facetAddress: string;
          functionSelectors: string[];
        })[];
      }
    >;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  facetAddress(
    _functionSelector: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  facetAddresses(overrides?: CallOverrides): Promise<string[]>;

  facetFunctionSelectors(
    _facet: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  facets(
    overrides?: CallOverrides
  ): Promise<
    ([string, string[]] & {
      facetAddress: string;
      functionSelectors: string[];
    })[]
  >;

  supportsInterface(
    _interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    facetAddress(
      _functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    facetAddresses(overrides?: CallOverrides): Promise<string[]>;

    facetFunctionSelectors(
      _facet: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    facets(
      overrides?: CallOverrides
    ): Promise<
      ([string, string[]] & {
        facetAddress: string;
        functionSelectors: string[];
      })[]
    >;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    facetAddress(
      _functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    facetAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    facetFunctionSelectors(
      _facet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    facets(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    facetAddress(
      _functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facetAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    facetFunctionSelectors(
      _facet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
