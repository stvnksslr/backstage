/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type {
  ContentObject,
  OpenAPIObject,
  ReferenceObject,
  RequestBodyObject,
} from 'openapi3-ts';

/**
 * This file is meant to hold Immutable overwrites of the values provided by the `openapi3-ts`
 *  package due to issues with `as const` supporting only readonly values.
 */

/**
 * From {@link https://github.com/microsoft/TypeScript/issues/13923#issuecomment-653675557}, allows
 *  us to convert from `as const` to the various OpenAPI types documented in `openapi3-ts`.
 * @public
 */
export type Immutable<T> = T extends
  | Function
  | boolean
  | number
  | string
  | null
  | undefined
  ? T
  : T extends Map<infer K, infer V>
  ? ReadonlyMap<Immutable<K>, Immutable<V>>
  : T extends Set<infer S>
  ? ReadonlySet<Immutable<S>>
  : { readonly [P in keyof T]: Immutable<T[P]> };

/**
 * @public
 */
export type ImmutableObject<T> = { readonly [K in keyof T]: Immutable<T[K]> };

/**
 * @public
 */
export type ImmutableReferenceObject = ImmutableObject<ReferenceObject>;

/**
 * @public
 */
export type ImmutableOpenAPIObject = ImmutableObject<OpenAPIObject>;

/**
 * @public
 */
export type ImmutableContentObject = ImmutableObject<ContentObject>;

/**
 * @public
 */
export type ImmutableRequestBodyObject = ImmutableObject<RequestBodyObject>;
