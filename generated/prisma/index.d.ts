
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Waitlist
 * 
 */
export type Waitlist = $Result.DefaultSelection<Prisma.$WaitlistPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model GithubInstallation
 * 
 */
export type GithubInstallation = $Result.DefaultSelection<Prisma.$GithubInstallationPayload>
/**
 * Model Repository
 * 
 */
export type Repository = $Result.DefaultSelection<Prisma.$RepositoryPayload>
/**
 * Model ShareLink
 * 
 */
export type ShareLink = $Result.DefaultSelection<Prisma.$ShareLinkPayload>
/**
 * Model ShareMember
 * 
 */
export type ShareMember = $Result.DefaultSelection<Prisma.$ShareMemberPayload>
/**
 * Model Bucket
 * 
 */
export type Bucket = $Result.DefaultSelection<Prisma.$BucketPayload>
/**
 * Model BucketRepository
 * 
 */
export type BucketRepository = $Result.DefaultSelection<Prisma.$BucketRepositoryPayload>
/**
 * Model BucketMember
 * 
 */
export type BucketMember = $Result.DefaultSelection<Prisma.$BucketMemberPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waitlist`: Exposes CRUD operations for the **Waitlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waitlists
    * const waitlists = await prisma.waitlist.findMany()
    * ```
    */
  get waitlist(): Prisma.WaitlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.githubInstallation`: Exposes CRUD operations for the **GithubInstallation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GithubInstallations
    * const githubInstallations = await prisma.githubInstallation.findMany()
    * ```
    */
  get githubInstallation(): Prisma.GithubInstallationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repository`: Exposes CRUD operations for the **Repository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repositories
    * const repositories = await prisma.repository.findMany()
    * ```
    */
  get repository(): Prisma.RepositoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareLink`: Exposes CRUD operations for the **ShareLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareLinks
    * const shareLinks = await prisma.shareLink.findMany()
    * ```
    */
  get shareLink(): Prisma.ShareLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareMember`: Exposes CRUD operations for the **ShareMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareMembers
    * const shareMembers = await prisma.shareMember.findMany()
    * ```
    */
  get shareMember(): Prisma.ShareMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bucket`: Exposes CRUD operations for the **Bucket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buckets
    * const buckets = await prisma.bucket.findMany()
    * ```
    */
  get bucket(): Prisma.BucketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bucketRepository`: Exposes CRUD operations for the **BucketRepository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BucketRepositories
    * const bucketRepositories = await prisma.bucketRepository.findMany()
    * ```
    */
  get bucketRepository(): Prisma.BucketRepositoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bucketMember`: Exposes CRUD operations for the **BucketMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BucketMembers
    * const bucketMembers = await prisma.bucketMember.findMany()
    * ```
    */
  get bucketMember(): Prisma.BucketMemberDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Waitlist: 'Waitlist',
    Order: 'Order',
    GithubInstallation: 'GithubInstallation',
    Repository: 'Repository',
    ShareLink: 'ShareLink',
    ShareMember: 'ShareMember',
    Bucket: 'Bucket',
    BucketRepository: 'BucketRepository',
    BucketMember: 'BucketMember'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "waitlist" | "order" | "githubInstallation" | "repository" | "shareLink" | "shareMember" | "bucket" | "bucketRepository" | "bucketMember"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Waitlist: {
        payload: Prisma.$WaitlistPayload<ExtArgs>
        fields: Prisma.WaitlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaitlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaitlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          findFirst: {
            args: Prisma.WaitlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaitlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          findMany: {
            args: Prisma.WaitlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>[]
          }
          create: {
            args: Prisma.WaitlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          createMany: {
            args: Prisma.WaitlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaitlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>[]
          }
          delete: {
            args: Prisma.WaitlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          update: {
            args: Prisma.WaitlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          deleteMany: {
            args: Prisma.WaitlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaitlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaitlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>[]
          }
          upsert: {
            args: Prisma.WaitlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          aggregate: {
            args: Prisma.WaitlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaitlist>
          }
          groupBy: {
            args: Prisma.WaitlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaitlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaitlistCountArgs<ExtArgs>
            result: $Utils.Optional<WaitlistCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      GithubInstallation: {
        payload: Prisma.$GithubInstallationPayload<ExtArgs>
        fields: Prisma.GithubInstallationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GithubInstallationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubInstallationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GithubInstallationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubInstallationPayload>
          }
          findFirst: {
            args: Prisma.GithubInstallationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubInstallationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GithubInstallationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubInstallationPayload>
          }
          findMany: {
            args: Prisma.GithubInstallationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubInstallationPayload>[]
          }
          create: {
            args: Prisma.GithubInstallationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubInstallationPayload>
          }
          createMany: {
            args: Prisma.GithubInstallationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GithubInstallationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubInstallationPayload>[]
          }
          delete: {
            args: Prisma.GithubInstallationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubInstallationPayload>
          }
          update: {
            args: Prisma.GithubInstallationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubInstallationPayload>
          }
          deleteMany: {
            args: Prisma.GithubInstallationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GithubInstallationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GithubInstallationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubInstallationPayload>[]
          }
          upsert: {
            args: Prisma.GithubInstallationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubInstallationPayload>
          }
          aggregate: {
            args: Prisma.GithubInstallationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGithubInstallation>
          }
          groupBy: {
            args: Prisma.GithubInstallationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GithubInstallationGroupByOutputType>[]
          }
          count: {
            args: Prisma.GithubInstallationCountArgs<ExtArgs>
            result: $Utils.Optional<GithubInstallationCountAggregateOutputType> | number
          }
        }
      }
      Repository: {
        payload: Prisma.$RepositoryPayload<ExtArgs>
        fields: Prisma.RepositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findFirst: {
            args: Prisma.RepositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findMany: {
            args: Prisma.RepositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          create: {
            args: Prisma.RepositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          createMany: {
            args: Prisma.RepositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepositoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          delete: {
            args: Prisma.RepositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          update: {
            args: Prisma.RepositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          deleteMany: {
            args: Prisma.RepositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepositoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          upsert: {
            args: Prisma.RepositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          aggregate: {
            args: Prisma.RepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepository>
          }
          groupBy: {
            args: Prisma.RepositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepositoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepositoryCountArgs<ExtArgs>
            result: $Utils.Optional<RepositoryCountAggregateOutputType> | number
          }
        }
      }
      ShareLink: {
        payload: Prisma.$ShareLinkPayload<ExtArgs>
        fields: Prisma.ShareLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          findFirst: {
            args: Prisma.ShareLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          findMany: {
            args: Prisma.ShareLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          create: {
            args: Prisma.ShareLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          createMany: {
            args: Prisma.ShareLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          delete: {
            args: Prisma.ShareLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          update: {
            args: Prisma.ShareLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          deleteMany: {
            args: Prisma.ShareLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          upsert: {
            args: Prisma.ShareLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          aggregate: {
            args: Prisma.ShareLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareLink>
          }
          groupBy: {
            args: Prisma.ShareLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ShareLinkCountAggregateOutputType> | number
          }
        }
      }
      ShareMember: {
        payload: Prisma.$ShareMemberPayload<ExtArgs>
        fields: Prisma.ShareMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareMemberPayload>
          }
          findFirst: {
            args: Prisma.ShareMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareMemberPayload>
          }
          findMany: {
            args: Prisma.ShareMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareMemberPayload>[]
          }
          create: {
            args: Prisma.ShareMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareMemberPayload>
          }
          createMany: {
            args: Prisma.ShareMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareMemberPayload>[]
          }
          delete: {
            args: Prisma.ShareMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareMemberPayload>
          }
          update: {
            args: Prisma.ShareMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareMemberPayload>
          }
          deleteMany: {
            args: Prisma.ShareMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareMemberPayload>[]
          }
          upsert: {
            args: Prisma.ShareMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareMemberPayload>
          }
          aggregate: {
            args: Prisma.ShareMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareMember>
          }
          groupBy: {
            args: Prisma.ShareMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ShareMemberCountAggregateOutputType> | number
          }
        }
      }
      Bucket: {
        payload: Prisma.$BucketPayload<ExtArgs>
        fields: Prisma.BucketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BucketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BucketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketPayload>
          }
          findFirst: {
            args: Prisma.BucketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BucketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketPayload>
          }
          findMany: {
            args: Prisma.BucketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketPayload>[]
          }
          create: {
            args: Prisma.BucketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketPayload>
          }
          createMany: {
            args: Prisma.BucketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BucketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketPayload>[]
          }
          delete: {
            args: Prisma.BucketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketPayload>
          }
          update: {
            args: Prisma.BucketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketPayload>
          }
          deleteMany: {
            args: Prisma.BucketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BucketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BucketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketPayload>[]
          }
          upsert: {
            args: Prisma.BucketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketPayload>
          }
          aggregate: {
            args: Prisma.BucketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBucket>
          }
          groupBy: {
            args: Prisma.BucketGroupByArgs<ExtArgs>
            result: $Utils.Optional<BucketGroupByOutputType>[]
          }
          count: {
            args: Prisma.BucketCountArgs<ExtArgs>
            result: $Utils.Optional<BucketCountAggregateOutputType> | number
          }
        }
      }
      BucketRepository: {
        payload: Prisma.$BucketRepositoryPayload<ExtArgs>
        fields: Prisma.BucketRepositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BucketRepositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketRepositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BucketRepositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketRepositoryPayload>
          }
          findFirst: {
            args: Prisma.BucketRepositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketRepositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BucketRepositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketRepositoryPayload>
          }
          findMany: {
            args: Prisma.BucketRepositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketRepositoryPayload>[]
          }
          create: {
            args: Prisma.BucketRepositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketRepositoryPayload>
          }
          createMany: {
            args: Prisma.BucketRepositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BucketRepositoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketRepositoryPayload>[]
          }
          delete: {
            args: Prisma.BucketRepositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketRepositoryPayload>
          }
          update: {
            args: Prisma.BucketRepositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketRepositoryPayload>
          }
          deleteMany: {
            args: Prisma.BucketRepositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BucketRepositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BucketRepositoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketRepositoryPayload>[]
          }
          upsert: {
            args: Prisma.BucketRepositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketRepositoryPayload>
          }
          aggregate: {
            args: Prisma.BucketRepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBucketRepository>
          }
          groupBy: {
            args: Prisma.BucketRepositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BucketRepositoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BucketRepositoryCountArgs<ExtArgs>
            result: $Utils.Optional<BucketRepositoryCountAggregateOutputType> | number
          }
        }
      }
      BucketMember: {
        payload: Prisma.$BucketMemberPayload<ExtArgs>
        fields: Prisma.BucketMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BucketMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BucketMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketMemberPayload>
          }
          findFirst: {
            args: Prisma.BucketMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BucketMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketMemberPayload>
          }
          findMany: {
            args: Prisma.BucketMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketMemberPayload>[]
          }
          create: {
            args: Prisma.BucketMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketMemberPayload>
          }
          createMany: {
            args: Prisma.BucketMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BucketMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketMemberPayload>[]
          }
          delete: {
            args: Prisma.BucketMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketMemberPayload>
          }
          update: {
            args: Prisma.BucketMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketMemberPayload>
          }
          deleteMany: {
            args: Prisma.BucketMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BucketMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BucketMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketMemberPayload>[]
          }
          upsert: {
            args: Prisma.BucketMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketMemberPayload>
          }
          aggregate: {
            args: Prisma.BucketMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBucketMember>
          }
          groupBy: {
            args: Prisma.BucketMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<BucketMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.BucketMemberCountArgs<ExtArgs>
            result: $Utils.Optional<BucketMemberCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    waitlist?: WaitlistOmit
    order?: OrderOmit
    githubInstallation?: GithubInstallationOmit
    repository?: RepositoryOmit
    shareLink?: ShareLinkOmit
    shareMember?: ShareMemberOmit
    bucket?: BucketOmit
    bucketRepository?: BucketRepositoryOmit
    bucketMember?: BucketMemberOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    githubInstallation: number
    shareLinks: number
    buckets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    githubInstallation?: boolean | UserCountOutputTypeCountGithubInstallationArgs
    shareLinks?: boolean | UserCountOutputTypeCountShareLinksArgs
    buckets?: boolean | UserCountOutputTypeCountBucketsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGithubInstallationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GithubInstallationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShareLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareLinkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBucketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BucketWhereInput
  }


  /**
   * Count Type GithubInstallationCountOutputType
   */

  export type GithubInstallationCountOutputType = {
    repositories: number
  }

  export type GithubInstallationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repositories?: boolean | GithubInstallationCountOutputTypeCountRepositoriesArgs
  }

  // Custom InputTypes
  /**
   * GithubInstallationCountOutputType without action
   */
  export type GithubInstallationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallationCountOutputType
     */
    select?: GithubInstallationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GithubInstallationCountOutputType without action
   */
  export type GithubInstallationCountOutputTypeCountRepositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
  }


  /**
   * Count Type RepositoryCountOutputType
   */

  export type RepositoryCountOutputType = {
    shareLinks: number
    bucketRepositories: number
  }

  export type RepositoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareLinks?: boolean | RepositoryCountOutputTypeCountShareLinksArgs
    bucketRepositories?: boolean | RepositoryCountOutputTypeCountBucketRepositoriesArgs
  }

  // Custom InputTypes
  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepositoryCountOutputType
     */
    select?: RepositoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountShareLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareLinkWhereInput
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountBucketRepositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BucketRepositoryWhereInput
  }


  /**
   * Count Type ShareLinkCountOutputType
   */

  export type ShareLinkCountOutputType = {
    members: number
  }

  export type ShareLinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ShareLinkCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * ShareLinkCountOutputType without action
   */
  export type ShareLinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLinkCountOutputType
     */
    select?: ShareLinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShareLinkCountOutputType without action
   */
  export type ShareLinkCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareMemberWhereInput
  }


  /**
   * Count Type BucketCountOutputType
   */

  export type BucketCountOutputType = {
    repositories: number
    members: number
  }

  export type BucketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repositories?: boolean | BucketCountOutputTypeCountRepositoriesArgs
    members?: boolean | BucketCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * BucketCountOutputType without action
   */
  export type BucketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketCountOutputType
     */
    select?: BucketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BucketCountOutputType without action
   */
  export type BucketCountOutputTypeCountRepositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BucketRepositoryWhereInput
  }

  /**
   * BucketCountOutputType without action
   */
  export type BucketCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BucketMemberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    githubId: string | null
    email: string | null
    username: string | null
    name: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    githubId: string | null
    email: string | null
    username: string | null
    name: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    githubId: number
    email: number
    username: number
    name: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    githubId?: true
    email?: true
    username?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    githubId?: true
    email?: true
    username?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    githubId?: true
    email?: true
    username?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    githubId: string
    email: string | null
    username: string
    name: string | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    githubInstallation?: boolean | User$githubInstallationArgs<ExtArgs>
    shareLinks?: boolean | User$shareLinksArgs<ExtArgs>
    buckets?: boolean | User$bucketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    githubId?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "githubId" | "email" | "username" | "name" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    githubInstallation?: boolean | User$githubInstallationArgs<ExtArgs>
    shareLinks?: boolean | User$shareLinksArgs<ExtArgs>
    buckets?: boolean | User$bucketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      githubInstallation: Prisma.$GithubInstallationPayload<ExtArgs>[]
      shareLinks: Prisma.$ShareLinkPayload<ExtArgs>[]
      buckets: Prisma.$BucketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      githubId: string
      email: string | null
      username: string
      name: string | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    githubInstallation<T extends User$githubInstallationArgs<ExtArgs> = {}>(args?: Subset<T, User$githubInstallationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shareLinks<T extends User$shareLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$shareLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buckets<T extends User$bucketsArgs<ExtArgs> = {}>(args?: Subset<T, User$bucketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly githubId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.githubInstallation
   */
  export type User$githubInstallationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationInclude<ExtArgs> | null
    where?: GithubInstallationWhereInput
    orderBy?: GithubInstallationOrderByWithRelationInput | GithubInstallationOrderByWithRelationInput[]
    cursor?: GithubInstallationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GithubInstallationScalarFieldEnum | GithubInstallationScalarFieldEnum[]
  }

  /**
   * User.shareLinks
   */
  export type User$shareLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    where?: ShareLinkWhereInput
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    cursor?: ShareLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * User.buckets
   */
  export type User$bucketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketInclude<ExtArgs> | null
    where?: BucketWhereInput
    orderBy?: BucketOrderByWithRelationInput | BucketOrderByWithRelationInput[]
    cursor?: BucketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BucketScalarFieldEnum | BucketScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Waitlist
   */

  export type AggregateWaitlist = {
    _count: WaitlistCountAggregateOutputType | null
    _avg: WaitlistAvgAggregateOutputType | null
    _sum: WaitlistSumAggregateOutputType | null
    _min: WaitlistMinAggregateOutputType | null
    _max: WaitlistMaxAggregateOutputType | null
  }

  export type WaitlistAvgAggregateOutputType = {
    id: number | null
  }

  export type WaitlistSumAggregateOutputType = {
    id: number | null
  }

  export type WaitlistMinAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaitlistMaxAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaitlistCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WaitlistAvgAggregateInputType = {
    id?: true
  }

  export type WaitlistSumAggregateInputType = {
    id?: true
  }

  export type WaitlistMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaitlistMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaitlistCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WaitlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waitlist to aggregate.
     */
    where?: WaitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waitlists to fetch.
     */
    orderBy?: WaitlistOrderByWithRelationInput | WaitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Waitlists
    **/
    _count?: true | WaitlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaitlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaitlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaitlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaitlistMaxAggregateInputType
  }

  export type GetWaitlistAggregateType<T extends WaitlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWaitlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaitlist[P]>
      : GetScalarType<T[P], AggregateWaitlist[P]>
  }




  export type WaitlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaitlistWhereInput
    orderBy?: WaitlistOrderByWithAggregationInput | WaitlistOrderByWithAggregationInput[]
    by: WaitlistScalarFieldEnum[] | WaitlistScalarFieldEnum
    having?: WaitlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaitlistCountAggregateInputType | true
    _avg?: WaitlistAvgAggregateInputType
    _sum?: WaitlistSumAggregateInputType
    _min?: WaitlistMinAggregateInputType
    _max?: WaitlistMaxAggregateInputType
  }

  export type WaitlistGroupByOutputType = {
    id: number
    email: string
    createdAt: Date
    updatedAt: Date
    _count: WaitlistCountAggregateOutputType | null
    _avg: WaitlistAvgAggregateOutputType | null
    _sum: WaitlistSumAggregateOutputType | null
    _min: WaitlistMinAggregateOutputType | null
    _max: WaitlistMaxAggregateOutputType | null
  }

  type GetWaitlistGroupByPayload<T extends WaitlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaitlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaitlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaitlistGroupByOutputType[P]>
            : GetScalarType<T[P], WaitlistGroupByOutputType[P]>
        }
      >
    >


  export type WaitlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["waitlist"]>

  export type WaitlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["waitlist"]>

  export type WaitlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["waitlist"]>

  export type WaitlistSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WaitlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["waitlist"]>

  export type $WaitlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Waitlist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["waitlist"]>
    composites: {}
  }

  type WaitlistGetPayload<S extends boolean | null | undefined | WaitlistDefaultArgs> = $Result.GetResult<Prisma.$WaitlistPayload, S>

  type WaitlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaitlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaitlistCountAggregateInputType | true
    }

  export interface WaitlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Waitlist'], meta: { name: 'Waitlist' } }
    /**
     * Find zero or one Waitlist that matches the filter.
     * @param {WaitlistFindUniqueArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaitlistFindUniqueArgs>(args: SelectSubset<T, WaitlistFindUniqueArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Waitlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaitlistFindUniqueOrThrowArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaitlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WaitlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waitlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistFindFirstArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaitlistFindFirstArgs>(args?: SelectSubset<T, WaitlistFindFirstArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waitlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistFindFirstOrThrowArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaitlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WaitlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Waitlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waitlists
     * const waitlists = await prisma.waitlist.findMany()
     * 
     * // Get first 10 Waitlists
     * const waitlists = await prisma.waitlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waitlistWithIdOnly = await prisma.waitlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaitlistFindManyArgs>(args?: SelectSubset<T, WaitlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Waitlist.
     * @param {WaitlistCreateArgs} args - Arguments to create a Waitlist.
     * @example
     * // Create one Waitlist
     * const Waitlist = await prisma.waitlist.create({
     *   data: {
     *     // ... data to create a Waitlist
     *   }
     * })
     * 
     */
    create<T extends WaitlistCreateArgs>(args: SelectSubset<T, WaitlistCreateArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Waitlists.
     * @param {WaitlistCreateManyArgs} args - Arguments to create many Waitlists.
     * @example
     * // Create many Waitlists
     * const waitlist = await prisma.waitlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaitlistCreateManyArgs>(args?: SelectSubset<T, WaitlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Waitlists and returns the data saved in the database.
     * @param {WaitlistCreateManyAndReturnArgs} args - Arguments to create many Waitlists.
     * @example
     * // Create many Waitlists
     * const waitlist = await prisma.waitlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Waitlists and only return the `id`
     * const waitlistWithIdOnly = await prisma.waitlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaitlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WaitlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Waitlist.
     * @param {WaitlistDeleteArgs} args - Arguments to delete one Waitlist.
     * @example
     * // Delete one Waitlist
     * const Waitlist = await prisma.waitlist.delete({
     *   where: {
     *     // ... filter to delete one Waitlist
     *   }
     * })
     * 
     */
    delete<T extends WaitlistDeleteArgs>(args: SelectSubset<T, WaitlistDeleteArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Waitlist.
     * @param {WaitlistUpdateArgs} args - Arguments to update one Waitlist.
     * @example
     * // Update one Waitlist
     * const waitlist = await prisma.waitlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaitlistUpdateArgs>(args: SelectSubset<T, WaitlistUpdateArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Waitlists.
     * @param {WaitlistDeleteManyArgs} args - Arguments to filter Waitlists to delete.
     * @example
     * // Delete a few Waitlists
     * const { count } = await prisma.waitlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaitlistDeleteManyArgs>(args?: SelectSubset<T, WaitlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waitlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waitlists
     * const waitlist = await prisma.waitlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaitlistUpdateManyArgs>(args: SelectSubset<T, WaitlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waitlists and returns the data updated in the database.
     * @param {WaitlistUpdateManyAndReturnArgs} args - Arguments to update many Waitlists.
     * @example
     * // Update many Waitlists
     * const waitlist = await prisma.waitlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Waitlists and only return the `id`
     * const waitlistWithIdOnly = await prisma.waitlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaitlistUpdateManyAndReturnArgs>(args: SelectSubset<T, WaitlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Waitlist.
     * @param {WaitlistUpsertArgs} args - Arguments to update or create a Waitlist.
     * @example
     * // Update or create a Waitlist
     * const waitlist = await prisma.waitlist.upsert({
     *   create: {
     *     // ... data to create a Waitlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waitlist we want to update
     *   }
     * })
     */
    upsert<T extends WaitlistUpsertArgs>(args: SelectSubset<T, WaitlistUpsertArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Waitlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistCountArgs} args - Arguments to filter Waitlists to count.
     * @example
     * // Count the number of Waitlists
     * const count = await prisma.waitlist.count({
     *   where: {
     *     // ... the filter for the Waitlists we want to count
     *   }
     * })
    **/
    count<T extends WaitlistCountArgs>(
      args?: Subset<T, WaitlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaitlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waitlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaitlistAggregateArgs>(args: Subset<T, WaitlistAggregateArgs>): Prisma.PrismaPromise<GetWaitlistAggregateType<T>>

    /**
     * Group by Waitlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaitlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaitlistGroupByArgs['orderBy'] }
        : { orderBy?: WaitlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaitlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaitlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Waitlist model
   */
  readonly fields: WaitlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Waitlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaitlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Waitlist model
   */
  interface WaitlistFieldRefs {
    readonly id: FieldRef<"Waitlist", 'Int'>
    readonly email: FieldRef<"Waitlist", 'String'>
    readonly createdAt: FieldRef<"Waitlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Waitlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Waitlist findUnique
   */
  export type WaitlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Filter, which Waitlist to fetch.
     */
    where: WaitlistWhereUniqueInput
  }

  /**
   * Waitlist findUniqueOrThrow
   */
  export type WaitlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Filter, which Waitlist to fetch.
     */
    where: WaitlistWhereUniqueInput
  }

  /**
   * Waitlist findFirst
   */
  export type WaitlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Filter, which Waitlist to fetch.
     */
    where?: WaitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waitlists to fetch.
     */
    orderBy?: WaitlistOrderByWithRelationInput | WaitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waitlists.
     */
    cursor?: WaitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waitlists.
     */
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * Waitlist findFirstOrThrow
   */
  export type WaitlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Filter, which Waitlist to fetch.
     */
    where?: WaitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waitlists to fetch.
     */
    orderBy?: WaitlistOrderByWithRelationInput | WaitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waitlists.
     */
    cursor?: WaitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waitlists.
     */
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * Waitlist findMany
   */
  export type WaitlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Filter, which Waitlists to fetch.
     */
    where?: WaitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waitlists to fetch.
     */
    orderBy?: WaitlistOrderByWithRelationInput | WaitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Waitlists.
     */
    cursor?: WaitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waitlists.
     */
    skip?: number
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * Waitlist create
   */
  export type WaitlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * The data needed to create a Waitlist.
     */
    data: XOR<WaitlistCreateInput, WaitlistUncheckedCreateInput>
  }

  /**
   * Waitlist createMany
   */
  export type WaitlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Waitlists.
     */
    data: WaitlistCreateManyInput | WaitlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Waitlist createManyAndReturn
   */
  export type WaitlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * The data used to create many Waitlists.
     */
    data: WaitlistCreateManyInput | WaitlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Waitlist update
   */
  export type WaitlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * The data needed to update a Waitlist.
     */
    data: XOR<WaitlistUpdateInput, WaitlistUncheckedUpdateInput>
    /**
     * Choose, which Waitlist to update.
     */
    where: WaitlistWhereUniqueInput
  }

  /**
   * Waitlist updateMany
   */
  export type WaitlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Waitlists.
     */
    data: XOR<WaitlistUpdateManyMutationInput, WaitlistUncheckedUpdateManyInput>
    /**
     * Filter which Waitlists to update
     */
    where?: WaitlistWhereInput
    /**
     * Limit how many Waitlists to update.
     */
    limit?: number
  }

  /**
   * Waitlist updateManyAndReturn
   */
  export type WaitlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * The data used to update Waitlists.
     */
    data: XOR<WaitlistUpdateManyMutationInput, WaitlistUncheckedUpdateManyInput>
    /**
     * Filter which Waitlists to update
     */
    where?: WaitlistWhereInput
    /**
     * Limit how many Waitlists to update.
     */
    limit?: number
  }

  /**
   * Waitlist upsert
   */
  export type WaitlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * The filter to search for the Waitlist to update in case it exists.
     */
    where: WaitlistWhereUniqueInput
    /**
     * In case the Waitlist found by the `where` argument doesn't exist, create a new Waitlist with this data.
     */
    create: XOR<WaitlistCreateInput, WaitlistUncheckedCreateInput>
    /**
     * In case the Waitlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaitlistUpdateInput, WaitlistUncheckedUpdateInput>
  }

  /**
   * Waitlist delete
   */
  export type WaitlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Filter which Waitlist to delete.
     */
    where: WaitlistWhereUniqueInput
  }

  /**
   * Waitlist deleteMany
   */
  export type WaitlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waitlists to delete
     */
    where?: WaitlistWhereInput
    /**
     * Limit how many Waitlists to delete.
     */
    limit?: number
  }

  /**
   * Waitlist without action
   */
  export type WaitlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    userId: number | null
    productId: number | null
    variantId: number | null
    amount: number | null
  }

  export type OrderSumAggregateOutputType = {
    userId: number | null
    productId: number | null
    variantId: number | null
    amount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    lemonOrderId: string | null
    userId: number | null
    productId: number | null
    variantId: number | null
    amount: number | null
    purchasedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    lemonOrderId: string | null
    userId: number | null
    productId: number | null
    variantId: number | null
    amount: number | null
    purchasedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    lemonOrderId: number
    userId: number
    productId: number
    variantId: number
    amount: number
    purchasedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    userId?: true
    productId?: true
    variantId?: true
    amount?: true
  }

  export type OrderSumAggregateInputType = {
    userId?: true
    productId?: true
    variantId?: true
    amount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    lemonOrderId?: true
    userId?: true
    productId?: true
    variantId?: true
    amount?: true
    purchasedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    lemonOrderId?: true
    userId?: true
    productId?: true
    variantId?: true
    amount?: true
    purchasedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    lemonOrderId?: true
    userId?: true
    productId?: true
    variantId?: true
    amount?: true
    purchasedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    lemonOrderId: string
    userId: number
    productId: number
    variantId: number
    amount: number
    purchasedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lemonOrderId?: boolean
    userId?: boolean
    productId?: boolean
    variantId?: boolean
    amount?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lemonOrderId?: boolean
    userId?: boolean
    productId?: boolean
    variantId?: boolean
    amount?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lemonOrderId?: boolean
    userId?: boolean
    productId?: boolean
    variantId?: boolean
    amount?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    lemonOrderId?: boolean
    userId?: boolean
    productId?: boolean
    variantId?: boolean
    amount?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lemonOrderId" | "userId" | "productId" | "variantId" | "amount" | "purchasedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lemonOrderId: string
      userId: number
      productId: number
      variantId: number
      amount: number
      purchasedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly lemonOrderId: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly productId: FieldRef<"Order", 'Int'>
    readonly variantId: FieldRef<"Order", 'Int'>
    readonly amount: FieldRef<"Order", 'Float'>
    readonly purchasedAt: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model GithubInstallation
   */

  export type AggregateGithubInstallation = {
    _count: GithubInstallationCountAggregateOutputType | null
    _avg: GithubInstallationAvgAggregateOutputType | null
    _sum: GithubInstallationSumAggregateOutputType | null
    _min: GithubInstallationMinAggregateOutputType | null
    _max: GithubInstallationMaxAggregateOutputType | null
  }

  export type GithubInstallationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GithubInstallationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GithubInstallationMinAggregateOutputType = {
    id: number | null
    installationId: string | null
    userId: number | null
    repositorySelection: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GithubInstallationMaxAggregateOutputType = {
    id: number | null
    installationId: string | null
    userId: number | null
    repositorySelection: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GithubInstallationCountAggregateOutputType = {
    id: number
    installationId: number
    userId: number
    permissions: number
    repositorySelection: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GithubInstallationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GithubInstallationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GithubInstallationMinAggregateInputType = {
    id?: true
    installationId?: true
    userId?: true
    repositorySelection?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GithubInstallationMaxAggregateInputType = {
    id?: true
    installationId?: true
    userId?: true
    repositorySelection?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GithubInstallationCountAggregateInputType = {
    id?: true
    installationId?: true
    userId?: true
    permissions?: true
    repositorySelection?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GithubInstallationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GithubInstallation to aggregate.
     */
    where?: GithubInstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubInstallations to fetch.
     */
    orderBy?: GithubInstallationOrderByWithRelationInput | GithubInstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GithubInstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubInstallations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubInstallations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GithubInstallations
    **/
    _count?: true | GithubInstallationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GithubInstallationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GithubInstallationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GithubInstallationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GithubInstallationMaxAggregateInputType
  }

  export type GetGithubInstallationAggregateType<T extends GithubInstallationAggregateArgs> = {
        [P in keyof T & keyof AggregateGithubInstallation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGithubInstallation[P]>
      : GetScalarType<T[P], AggregateGithubInstallation[P]>
  }




  export type GithubInstallationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GithubInstallationWhereInput
    orderBy?: GithubInstallationOrderByWithAggregationInput | GithubInstallationOrderByWithAggregationInput[]
    by: GithubInstallationScalarFieldEnum[] | GithubInstallationScalarFieldEnum
    having?: GithubInstallationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GithubInstallationCountAggregateInputType | true
    _avg?: GithubInstallationAvgAggregateInputType
    _sum?: GithubInstallationSumAggregateInputType
    _min?: GithubInstallationMinAggregateInputType
    _max?: GithubInstallationMaxAggregateInputType
  }

  export type GithubInstallationGroupByOutputType = {
    id: number
    installationId: string
    userId: number
    permissions: JsonValue | null
    repositorySelection: string
    createdAt: Date
    updatedAt: Date
    _count: GithubInstallationCountAggregateOutputType | null
    _avg: GithubInstallationAvgAggregateOutputType | null
    _sum: GithubInstallationSumAggregateOutputType | null
    _min: GithubInstallationMinAggregateOutputType | null
    _max: GithubInstallationMaxAggregateOutputType | null
  }

  type GetGithubInstallationGroupByPayload<T extends GithubInstallationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GithubInstallationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GithubInstallationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GithubInstallationGroupByOutputType[P]>
            : GetScalarType<T[P], GithubInstallationGroupByOutputType[P]>
        }
      >
    >


  export type GithubInstallationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installationId?: boolean
    userId?: boolean
    permissions?: boolean
    repositorySelection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    repositories?: boolean | GithubInstallation$repositoriesArgs<ExtArgs>
    _count?: boolean | GithubInstallationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["githubInstallation"]>

  export type GithubInstallationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installationId?: boolean
    userId?: boolean
    permissions?: boolean
    repositorySelection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["githubInstallation"]>

  export type GithubInstallationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installationId?: boolean
    userId?: boolean
    permissions?: boolean
    repositorySelection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["githubInstallation"]>

  export type GithubInstallationSelectScalar = {
    id?: boolean
    installationId?: boolean
    userId?: boolean
    permissions?: boolean
    repositorySelection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GithubInstallationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "installationId" | "userId" | "permissions" | "repositorySelection" | "createdAt" | "updatedAt", ExtArgs["result"]["githubInstallation"]>
  export type GithubInstallationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    repositories?: boolean | GithubInstallation$repositoriesArgs<ExtArgs>
    _count?: boolean | GithubInstallationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GithubInstallationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GithubInstallationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GithubInstallationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GithubInstallation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      repositories: Prisma.$RepositoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      installationId: string
      userId: number
      permissions: Prisma.JsonValue | null
      repositorySelection: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["githubInstallation"]>
    composites: {}
  }

  type GithubInstallationGetPayload<S extends boolean | null | undefined | GithubInstallationDefaultArgs> = $Result.GetResult<Prisma.$GithubInstallationPayload, S>

  type GithubInstallationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GithubInstallationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GithubInstallationCountAggregateInputType | true
    }

  export interface GithubInstallationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GithubInstallation'], meta: { name: 'GithubInstallation' } }
    /**
     * Find zero or one GithubInstallation that matches the filter.
     * @param {GithubInstallationFindUniqueArgs} args - Arguments to find a GithubInstallation
     * @example
     * // Get one GithubInstallation
     * const githubInstallation = await prisma.githubInstallation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GithubInstallationFindUniqueArgs>(args: SelectSubset<T, GithubInstallationFindUniqueArgs<ExtArgs>>): Prisma__GithubInstallationClient<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GithubInstallation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GithubInstallationFindUniqueOrThrowArgs} args - Arguments to find a GithubInstallation
     * @example
     * // Get one GithubInstallation
     * const githubInstallation = await prisma.githubInstallation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GithubInstallationFindUniqueOrThrowArgs>(args: SelectSubset<T, GithubInstallationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GithubInstallationClient<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GithubInstallation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubInstallationFindFirstArgs} args - Arguments to find a GithubInstallation
     * @example
     * // Get one GithubInstallation
     * const githubInstallation = await prisma.githubInstallation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GithubInstallationFindFirstArgs>(args?: SelectSubset<T, GithubInstallationFindFirstArgs<ExtArgs>>): Prisma__GithubInstallationClient<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GithubInstallation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubInstallationFindFirstOrThrowArgs} args - Arguments to find a GithubInstallation
     * @example
     * // Get one GithubInstallation
     * const githubInstallation = await prisma.githubInstallation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GithubInstallationFindFirstOrThrowArgs>(args?: SelectSubset<T, GithubInstallationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GithubInstallationClient<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GithubInstallations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubInstallationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GithubInstallations
     * const githubInstallations = await prisma.githubInstallation.findMany()
     * 
     * // Get first 10 GithubInstallations
     * const githubInstallations = await prisma.githubInstallation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const githubInstallationWithIdOnly = await prisma.githubInstallation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GithubInstallationFindManyArgs>(args?: SelectSubset<T, GithubInstallationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GithubInstallation.
     * @param {GithubInstallationCreateArgs} args - Arguments to create a GithubInstallation.
     * @example
     * // Create one GithubInstallation
     * const GithubInstallation = await prisma.githubInstallation.create({
     *   data: {
     *     // ... data to create a GithubInstallation
     *   }
     * })
     * 
     */
    create<T extends GithubInstallationCreateArgs>(args: SelectSubset<T, GithubInstallationCreateArgs<ExtArgs>>): Prisma__GithubInstallationClient<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GithubInstallations.
     * @param {GithubInstallationCreateManyArgs} args - Arguments to create many GithubInstallations.
     * @example
     * // Create many GithubInstallations
     * const githubInstallation = await prisma.githubInstallation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GithubInstallationCreateManyArgs>(args?: SelectSubset<T, GithubInstallationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GithubInstallations and returns the data saved in the database.
     * @param {GithubInstallationCreateManyAndReturnArgs} args - Arguments to create many GithubInstallations.
     * @example
     * // Create many GithubInstallations
     * const githubInstallation = await prisma.githubInstallation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GithubInstallations and only return the `id`
     * const githubInstallationWithIdOnly = await prisma.githubInstallation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GithubInstallationCreateManyAndReturnArgs>(args?: SelectSubset<T, GithubInstallationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GithubInstallation.
     * @param {GithubInstallationDeleteArgs} args - Arguments to delete one GithubInstallation.
     * @example
     * // Delete one GithubInstallation
     * const GithubInstallation = await prisma.githubInstallation.delete({
     *   where: {
     *     // ... filter to delete one GithubInstallation
     *   }
     * })
     * 
     */
    delete<T extends GithubInstallationDeleteArgs>(args: SelectSubset<T, GithubInstallationDeleteArgs<ExtArgs>>): Prisma__GithubInstallationClient<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GithubInstallation.
     * @param {GithubInstallationUpdateArgs} args - Arguments to update one GithubInstallation.
     * @example
     * // Update one GithubInstallation
     * const githubInstallation = await prisma.githubInstallation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GithubInstallationUpdateArgs>(args: SelectSubset<T, GithubInstallationUpdateArgs<ExtArgs>>): Prisma__GithubInstallationClient<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GithubInstallations.
     * @param {GithubInstallationDeleteManyArgs} args - Arguments to filter GithubInstallations to delete.
     * @example
     * // Delete a few GithubInstallations
     * const { count } = await prisma.githubInstallation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GithubInstallationDeleteManyArgs>(args?: SelectSubset<T, GithubInstallationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GithubInstallations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubInstallationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GithubInstallations
     * const githubInstallation = await prisma.githubInstallation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GithubInstallationUpdateManyArgs>(args: SelectSubset<T, GithubInstallationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GithubInstallations and returns the data updated in the database.
     * @param {GithubInstallationUpdateManyAndReturnArgs} args - Arguments to update many GithubInstallations.
     * @example
     * // Update many GithubInstallations
     * const githubInstallation = await prisma.githubInstallation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GithubInstallations and only return the `id`
     * const githubInstallationWithIdOnly = await prisma.githubInstallation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GithubInstallationUpdateManyAndReturnArgs>(args: SelectSubset<T, GithubInstallationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GithubInstallation.
     * @param {GithubInstallationUpsertArgs} args - Arguments to update or create a GithubInstallation.
     * @example
     * // Update or create a GithubInstallation
     * const githubInstallation = await prisma.githubInstallation.upsert({
     *   create: {
     *     // ... data to create a GithubInstallation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GithubInstallation we want to update
     *   }
     * })
     */
    upsert<T extends GithubInstallationUpsertArgs>(args: SelectSubset<T, GithubInstallationUpsertArgs<ExtArgs>>): Prisma__GithubInstallationClient<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GithubInstallations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubInstallationCountArgs} args - Arguments to filter GithubInstallations to count.
     * @example
     * // Count the number of GithubInstallations
     * const count = await prisma.githubInstallation.count({
     *   where: {
     *     // ... the filter for the GithubInstallations we want to count
     *   }
     * })
    **/
    count<T extends GithubInstallationCountArgs>(
      args?: Subset<T, GithubInstallationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GithubInstallationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GithubInstallation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubInstallationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GithubInstallationAggregateArgs>(args: Subset<T, GithubInstallationAggregateArgs>): Prisma.PrismaPromise<GetGithubInstallationAggregateType<T>>

    /**
     * Group by GithubInstallation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubInstallationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GithubInstallationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GithubInstallationGroupByArgs['orderBy'] }
        : { orderBy?: GithubInstallationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GithubInstallationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGithubInstallationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GithubInstallation model
   */
  readonly fields: GithubInstallationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GithubInstallation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GithubInstallationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repositories<T extends GithubInstallation$repositoriesArgs<ExtArgs> = {}>(args?: Subset<T, GithubInstallation$repositoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GithubInstallation model
   */
  interface GithubInstallationFieldRefs {
    readonly id: FieldRef<"GithubInstallation", 'Int'>
    readonly installationId: FieldRef<"GithubInstallation", 'String'>
    readonly userId: FieldRef<"GithubInstallation", 'Int'>
    readonly permissions: FieldRef<"GithubInstallation", 'Json'>
    readonly repositorySelection: FieldRef<"GithubInstallation", 'String'>
    readonly createdAt: FieldRef<"GithubInstallation", 'DateTime'>
    readonly updatedAt: FieldRef<"GithubInstallation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GithubInstallation findUnique
   */
  export type GithubInstallationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationInclude<ExtArgs> | null
    /**
     * Filter, which GithubInstallation to fetch.
     */
    where: GithubInstallationWhereUniqueInput
  }

  /**
   * GithubInstallation findUniqueOrThrow
   */
  export type GithubInstallationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationInclude<ExtArgs> | null
    /**
     * Filter, which GithubInstallation to fetch.
     */
    where: GithubInstallationWhereUniqueInput
  }

  /**
   * GithubInstallation findFirst
   */
  export type GithubInstallationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationInclude<ExtArgs> | null
    /**
     * Filter, which GithubInstallation to fetch.
     */
    where?: GithubInstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubInstallations to fetch.
     */
    orderBy?: GithubInstallationOrderByWithRelationInput | GithubInstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GithubInstallations.
     */
    cursor?: GithubInstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubInstallations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubInstallations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GithubInstallations.
     */
    distinct?: GithubInstallationScalarFieldEnum | GithubInstallationScalarFieldEnum[]
  }

  /**
   * GithubInstallation findFirstOrThrow
   */
  export type GithubInstallationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationInclude<ExtArgs> | null
    /**
     * Filter, which GithubInstallation to fetch.
     */
    where?: GithubInstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubInstallations to fetch.
     */
    orderBy?: GithubInstallationOrderByWithRelationInput | GithubInstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GithubInstallations.
     */
    cursor?: GithubInstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubInstallations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubInstallations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GithubInstallations.
     */
    distinct?: GithubInstallationScalarFieldEnum | GithubInstallationScalarFieldEnum[]
  }

  /**
   * GithubInstallation findMany
   */
  export type GithubInstallationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationInclude<ExtArgs> | null
    /**
     * Filter, which GithubInstallations to fetch.
     */
    where?: GithubInstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubInstallations to fetch.
     */
    orderBy?: GithubInstallationOrderByWithRelationInput | GithubInstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GithubInstallations.
     */
    cursor?: GithubInstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubInstallations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubInstallations.
     */
    skip?: number
    distinct?: GithubInstallationScalarFieldEnum | GithubInstallationScalarFieldEnum[]
  }

  /**
   * GithubInstallation create
   */
  export type GithubInstallationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationInclude<ExtArgs> | null
    /**
     * The data needed to create a GithubInstallation.
     */
    data: XOR<GithubInstallationCreateInput, GithubInstallationUncheckedCreateInput>
  }

  /**
   * GithubInstallation createMany
   */
  export type GithubInstallationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GithubInstallations.
     */
    data: GithubInstallationCreateManyInput | GithubInstallationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GithubInstallation createManyAndReturn
   */
  export type GithubInstallationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * The data used to create many GithubInstallations.
     */
    data: GithubInstallationCreateManyInput | GithubInstallationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GithubInstallation update
   */
  export type GithubInstallationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationInclude<ExtArgs> | null
    /**
     * The data needed to update a GithubInstallation.
     */
    data: XOR<GithubInstallationUpdateInput, GithubInstallationUncheckedUpdateInput>
    /**
     * Choose, which GithubInstallation to update.
     */
    where: GithubInstallationWhereUniqueInput
  }

  /**
   * GithubInstallation updateMany
   */
  export type GithubInstallationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GithubInstallations.
     */
    data: XOR<GithubInstallationUpdateManyMutationInput, GithubInstallationUncheckedUpdateManyInput>
    /**
     * Filter which GithubInstallations to update
     */
    where?: GithubInstallationWhereInput
    /**
     * Limit how many GithubInstallations to update.
     */
    limit?: number
  }

  /**
   * GithubInstallation updateManyAndReturn
   */
  export type GithubInstallationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * The data used to update GithubInstallations.
     */
    data: XOR<GithubInstallationUpdateManyMutationInput, GithubInstallationUncheckedUpdateManyInput>
    /**
     * Filter which GithubInstallations to update
     */
    where?: GithubInstallationWhereInput
    /**
     * Limit how many GithubInstallations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GithubInstallation upsert
   */
  export type GithubInstallationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationInclude<ExtArgs> | null
    /**
     * The filter to search for the GithubInstallation to update in case it exists.
     */
    where: GithubInstallationWhereUniqueInput
    /**
     * In case the GithubInstallation found by the `where` argument doesn't exist, create a new GithubInstallation with this data.
     */
    create: XOR<GithubInstallationCreateInput, GithubInstallationUncheckedCreateInput>
    /**
     * In case the GithubInstallation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GithubInstallationUpdateInput, GithubInstallationUncheckedUpdateInput>
  }

  /**
   * GithubInstallation delete
   */
  export type GithubInstallationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationInclude<ExtArgs> | null
    /**
     * Filter which GithubInstallation to delete.
     */
    where: GithubInstallationWhereUniqueInput
  }

  /**
   * GithubInstallation deleteMany
   */
  export type GithubInstallationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GithubInstallations to delete
     */
    where?: GithubInstallationWhereInput
    /**
     * Limit how many GithubInstallations to delete.
     */
    limit?: number
  }

  /**
   * GithubInstallation.repositories
   */
  export type GithubInstallation$repositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    cursor?: RepositoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * GithubInstallation without action
   */
  export type GithubInstallationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubInstallation
     */
    select?: GithubInstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubInstallation
     */
    omit?: GithubInstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubInstallationInclude<ExtArgs> | null
  }


  /**
   * Model Repository
   */

  export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  export type RepositoryAvgAggregateOutputType = {
    id: number | null
    githubRepoId: number | null
    stars: number | null
    forks: number | null
    watchers: number | null
    members: number | null
  }

  export type RepositorySumAggregateOutputType = {
    id: number | null
    githubRepoId: number | null
    stars: number | null
    forks: number | null
    watchers: number | null
    members: number | null
  }

  export type RepositoryMinAggregateOutputType = {
    id: number | null
    githubRepoId: number | null
    installationId: string | null
    name: string | null
    description: string | null
    stars: number | null
    forks: number | null
    watchers: number | null
    members: number | null
    lastFetched: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepositoryMaxAggregateOutputType = {
    id: number | null
    githubRepoId: number | null
    installationId: string | null
    name: string | null
    description: string | null
    stars: number | null
    forks: number | null
    watchers: number | null
    members: number | null
    lastFetched: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepositoryCountAggregateOutputType = {
    id: number
    githubRepoId: number
    installationId: number
    name: number
    description: number
    languages: number
    stars: number
    forks: number
    watchers: number
    members: number
    lastFetched: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RepositoryAvgAggregateInputType = {
    id?: true
    githubRepoId?: true
    stars?: true
    forks?: true
    watchers?: true
    members?: true
  }

  export type RepositorySumAggregateInputType = {
    id?: true
    githubRepoId?: true
    stars?: true
    forks?: true
    watchers?: true
    members?: true
  }

  export type RepositoryMinAggregateInputType = {
    id?: true
    githubRepoId?: true
    installationId?: true
    name?: true
    description?: true
    stars?: true
    forks?: true
    watchers?: true
    members?: true
    lastFetched?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepositoryMaxAggregateInputType = {
    id?: true
    githubRepoId?: true
    installationId?: true
    name?: true
    description?: true
    stars?: true
    forks?: true
    watchers?: true
    members?: true
    lastFetched?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepositoryCountAggregateInputType = {
    id?: true
    githubRepoId?: true
    installationId?: true
    name?: true
    description?: true
    languages?: true
    stars?: true
    forks?: true
    watchers?: true
    members?: true
    lastFetched?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repository to aggregate.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repositories
    **/
    _count?: true | RepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepositoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepositorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepositoryMaxAggregateInputType
  }

  export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepository[P]>
      : GetScalarType<T[P], AggregateRepository[P]>
  }




  export type RepositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithAggregationInput | RepositoryOrderByWithAggregationInput[]
    by: RepositoryScalarFieldEnum[] | RepositoryScalarFieldEnum
    having?: RepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepositoryCountAggregateInputType | true
    _avg?: RepositoryAvgAggregateInputType
    _sum?: RepositorySumAggregateInputType
    _min?: RepositoryMinAggregateInputType
    _max?: RepositoryMaxAggregateInputType
  }

  export type RepositoryGroupByOutputType = {
    id: number
    githubRepoId: number
    installationId: string
    name: string
    description: string | null
    languages: JsonValue | null
    stars: number
    forks: number
    watchers: number
    members: number | null
    lastFetched: Date
    createdAt: Date
    updatedAt: Date
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  type GetRepositoryGroupByPayload<T extends RepositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
        }
      >
    >


  export type RepositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubRepoId?: boolean
    installationId?: boolean
    name?: boolean
    description?: boolean
    languages?: boolean
    stars?: boolean
    forks?: boolean
    watchers?: boolean
    members?: boolean
    lastFetched?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    installation?: boolean | GithubInstallationDefaultArgs<ExtArgs>
    shareLinks?: boolean | Repository$shareLinksArgs<ExtArgs>
    bucketRepositories?: boolean | Repository$bucketRepositoriesArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubRepoId?: boolean
    installationId?: boolean
    name?: boolean
    description?: boolean
    languages?: boolean
    stars?: boolean
    forks?: boolean
    watchers?: boolean
    members?: boolean
    lastFetched?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    installation?: boolean | GithubInstallationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubRepoId?: boolean
    installationId?: boolean
    name?: boolean
    description?: boolean
    languages?: boolean
    stars?: boolean
    forks?: boolean
    watchers?: boolean
    members?: boolean
    lastFetched?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    installation?: boolean | GithubInstallationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectScalar = {
    id?: boolean
    githubRepoId?: boolean
    installationId?: boolean
    name?: boolean
    description?: boolean
    languages?: boolean
    stars?: boolean
    forks?: boolean
    watchers?: boolean
    members?: boolean
    lastFetched?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RepositoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "githubRepoId" | "installationId" | "name" | "description" | "languages" | "stars" | "forks" | "watchers" | "members" | "lastFetched" | "createdAt" | "updatedAt", ExtArgs["result"]["repository"]>
  export type RepositoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installation?: boolean | GithubInstallationDefaultArgs<ExtArgs>
    shareLinks?: boolean | Repository$shareLinksArgs<ExtArgs>
    bucketRepositories?: boolean | Repository$bucketRepositoriesArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepositoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installation?: boolean | GithubInstallationDefaultArgs<ExtArgs>
  }
  export type RepositoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installation?: boolean | GithubInstallationDefaultArgs<ExtArgs>
  }

  export type $RepositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repository"
    objects: {
      installation: Prisma.$GithubInstallationPayload<ExtArgs>
      shareLinks: Prisma.$ShareLinkPayload<ExtArgs>[]
      bucketRepositories: Prisma.$BucketRepositoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      githubRepoId: number
      installationId: string
      name: string
      description: string | null
      languages: Prisma.JsonValue | null
      stars: number
      forks: number
      watchers: number
      members: number | null
      lastFetched: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["repository"]>
    composites: {}
  }

  type RepositoryGetPayload<S extends boolean | null | undefined | RepositoryDefaultArgs> = $Result.GetResult<Prisma.$RepositoryPayload, S>

  type RepositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepositoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepositoryCountAggregateInputType | true
    }

  export interface RepositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repository'], meta: { name: 'Repository' } }
    /**
     * Find zero or one Repository that matches the filter.
     * @param {RepositoryFindUniqueArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepositoryFindUniqueArgs>(args: SelectSubset<T, RepositoryFindUniqueArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repository that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepositoryFindUniqueOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepositoryFindFirstArgs>(args?: SelectSubset<T, RepositoryFindFirstArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repositories
     * const repositories = await prisma.repository.findMany()
     * 
     * // Get first 10 Repositories
     * const repositories = await prisma.repository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repositoryWithIdOnly = await prisma.repository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepositoryFindManyArgs>(args?: SelectSubset<T, RepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repository.
     * @param {RepositoryCreateArgs} args - Arguments to create a Repository.
     * @example
     * // Create one Repository
     * const Repository = await prisma.repository.create({
     *   data: {
     *     // ... data to create a Repository
     *   }
     * })
     * 
     */
    create<T extends RepositoryCreateArgs>(args: SelectSubset<T, RepositoryCreateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repositories.
     * @param {RepositoryCreateManyArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepositoryCreateManyArgs>(args?: SelectSubset<T, RepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repositories and returns the data saved in the database.
     * @param {RepositoryCreateManyAndReturnArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepositoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RepositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repository.
     * @param {RepositoryDeleteArgs} args - Arguments to delete one Repository.
     * @example
     * // Delete one Repository
     * const Repository = await prisma.repository.delete({
     *   where: {
     *     // ... filter to delete one Repository
     *   }
     * })
     * 
     */
    delete<T extends RepositoryDeleteArgs>(args: SelectSubset<T, RepositoryDeleteArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repository.
     * @param {RepositoryUpdateArgs} args - Arguments to update one Repository.
     * @example
     * // Update one Repository
     * const repository = await prisma.repository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepositoryUpdateArgs>(args: SelectSubset<T, RepositoryUpdateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repositories.
     * @param {RepositoryDeleteManyArgs} args - Arguments to filter Repositories to delete.
     * @example
     * // Delete a few Repositories
     * const { count } = await prisma.repository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepositoryDeleteManyArgs>(args?: SelectSubset<T, RepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepositoryUpdateManyArgs>(args: SelectSubset<T, RepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories and returns the data updated in the database.
     * @param {RepositoryUpdateManyAndReturnArgs} args - Arguments to update many Repositories.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepositoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RepositoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repository.
     * @param {RepositoryUpsertArgs} args - Arguments to update or create a Repository.
     * @example
     * // Update or create a Repository
     * const repository = await prisma.repository.upsert({
     *   create: {
     *     // ... data to create a Repository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repository we want to update
     *   }
     * })
     */
    upsert<T extends RepositoryUpsertArgs>(args: SelectSubset<T, RepositoryUpsertArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryCountArgs} args - Arguments to filter Repositories to count.
     * @example
     * // Count the number of Repositories
     * const count = await prisma.repository.count({
     *   where: {
     *     // ... the filter for the Repositories we want to count
     *   }
     * })
    **/
    count<T extends RepositoryCountArgs>(
      args?: Subset<T, RepositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepositoryAggregateArgs>(args: Subset<T, RepositoryAggregateArgs>): Prisma.PrismaPromise<GetRepositoryAggregateType<T>>

    /**
     * Group by Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepositoryGroupByArgs['orderBy'] }
        : { orderBy?: RepositoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repository model
   */
  readonly fields: RepositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    installation<T extends GithubInstallationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GithubInstallationDefaultArgs<ExtArgs>>): Prisma__GithubInstallationClient<$Result.GetResult<Prisma.$GithubInstallationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shareLinks<T extends Repository$shareLinksArgs<ExtArgs> = {}>(args?: Subset<T, Repository$shareLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bucketRepositories<T extends Repository$bucketRepositoriesArgs<ExtArgs> = {}>(args?: Subset<T, Repository$bucketRepositoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Repository model
   */
  interface RepositoryFieldRefs {
    readonly id: FieldRef<"Repository", 'Int'>
    readonly githubRepoId: FieldRef<"Repository", 'Int'>
    readonly installationId: FieldRef<"Repository", 'String'>
    readonly name: FieldRef<"Repository", 'String'>
    readonly description: FieldRef<"Repository", 'String'>
    readonly languages: FieldRef<"Repository", 'Json'>
    readonly stars: FieldRef<"Repository", 'Int'>
    readonly forks: FieldRef<"Repository", 'Int'>
    readonly watchers: FieldRef<"Repository", 'Int'>
    readonly members: FieldRef<"Repository", 'Int'>
    readonly lastFetched: FieldRef<"Repository", 'DateTime'>
    readonly createdAt: FieldRef<"Repository", 'DateTime'>
    readonly updatedAt: FieldRef<"Repository", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Repository findUnique
   */
  export type RepositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findUniqueOrThrow
   */
  export type RepositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findFirst
   */
  export type RepositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findFirstOrThrow
   */
  export type RepositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findMany
   */
  export type RepositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repositories to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository create
   */
  export type RepositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Repository.
     */
    data: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
  }

  /**
   * Repository createMany
   */
  export type RepositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repository createManyAndReturn
   */
  export type RepositoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repository update
   */
  export type RepositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Repository.
     */
    data: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
    /**
     * Choose, which Repository to update.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository updateMany
   */
  export type RepositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
  }

  /**
   * Repository updateManyAndReturn
   */
  export type RepositoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repository upsert
   */
  export type RepositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Repository to update in case it exists.
     */
    where: RepositoryWhereUniqueInput
    /**
     * In case the Repository found by the `where` argument doesn't exist, create a new Repository with this data.
     */
    create: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
    /**
     * In case the Repository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
  }

  /**
   * Repository delete
   */
  export type RepositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter which Repository to delete.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository deleteMany
   */
  export type RepositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repositories to delete
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to delete.
     */
    limit?: number
  }

  /**
   * Repository.shareLinks
   */
  export type Repository$shareLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    where?: ShareLinkWhereInput
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    cursor?: ShareLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * Repository.bucketRepositories
   */
  export type Repository$bucketRepositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
    where?: BucketRepositoryWhereInput
    orderBy?: BucketRepositoryOrderByWithRelationInput | BucketRepositoryOrderByWithRelationInput[]
    cursor?: BucketRepositoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BucketRepositoryScalarFieldEnum | BucketRepositoryScalarFieldEnum[]
  }

  /**
   * Repository without action
   */
  export type RepositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
  }


  /**
   * Model ShareLink
   */

  export type AggregateShareLink = {
    _count: ShareLinkCountAggregateOutputType | null
    _avg: ShareLinkAvgAggregateOutputType | null
    _sum: ShareLinkSumAggregateOutputType | null
    _min: ShareLinkMinAggregateOutputType | null
    _max: ShareLinkMaxAggregateOutputType | null
  }

  export type ShareLinkAvgAggregateOutputType = {
    userId: number | null
    repositoryId: number | null
    maxMembers: number | null
    memberCount: number | null
  }

  export type ShareLinkSumAggregateOutputType = {
    userId: number | null
    repositoryId: number | null
    maxMembers: number | null
    memberCount: number | null
  }

  export type ShareLinkMinAggregateOutputType = {
    id: string | null
    userId: number | null
    repositoryId: number | null
    token: string | null
    name: string | null
    description: string | null
    password: string | null
    expiresAt: Date | null
    maxMembers: number | null
    memberCount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShareLinkMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    repositoryId: number | null
    token: string | null
    name: string | null
    description: string | null
    password: string | null
    expiresAt: Date | null
    maxMembers: number | null
    memberCount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShareLinkCountAggregateOutputType = {
    id: number
    userId: number
    repositoryId: number
    token: number
    name: number
    description: number
    password: number
    expiresAt: number
    maxMembers: number
    memberCount: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShareLinkAvgAggregateInputType = {
    userId?: true
    repositoryId?: true
    maxMembers?: true
    memberCount?: true
  }

  export type ShareLinkSumAggregateInputType = {
    userId?: true
    repositoryId?: true
    maxMembers?: true
    memberCount?: true
  }

  export type ShareLinkMinAggregateInputType = {
    id?: true
    userId?: true
    repositoryId?: true
    token?: true
    name?: true
    description?: true
    password?: true
    expiresAt?: true
    maxMembers?: true
    memberCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShareLinkMaxAggregateInputType = {
    id?: true
    userId?: true
    repositoryId?: true
    token?: true
    name?: true
    description?: true
    password?: true
    expiresAt?: true
    maxMembers?: true
    memberCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShareLinkCountAggregateInputType = {
    id?: true
    userId?: true
    repositoryId?: true
    token?: true
    name?: true
    description?: true
    password?: true
    expiresAt?: true
    maxMembers?: true
    memberCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShareLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareLink to aggregate.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareLinks
    **/
    _count?: true | ShareLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShareLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShareLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareLinkMaxAggregateInputType
  }

  export type GetShareLinkAggregateType<T extends ShareLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateShareLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareLink[P]>
      : GetScalarType<T[P], AggregateShareLink[P]>
  }




  export type ShareLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareLinkWhereInput
    orderBy?: ShareLinkOrderByWithAggregationInput | ShareLinkOrderByWithAggregationInput[]
    by: ShareLinkScalarFieldEnum[] | ShareLinkScalarFieldEnum
    having?: ShareLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareLinkCountAggregateInputType | true
    _avg?: ShareLinkAvgAggregateInputType
    _sum?: ShareLinkSumAggregateInputType
    _min?: ShareLinkMinAggregateInputType
    _max?: ShareLinkMaxAggregateInputType
  }

  export type ShareLinkGroupByOutputType = {
    id: string
    userId: number
    repositoryId: number
    token: string
    name: string | null
    description: string | null
    password: string | null
    expiresAt: Date | null
    maxMembers: number | null
    memberCount: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ShareLinkCountAggregateOutputType | null
    _avg: ShareLinkAvgAggregateOutputType | null
    _sum: ShareLinkSumAggregateOutputType | null
    _min: ShareLinkMinAggregateOutputType | null
    _max: ShareLinkMaxAggregateOutputType | null
  }

  type GetShareLinkGroupByPayload<T extends ShareLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ShareLinkGroupByOutputType[P]>
        }
      >
    >


  export type ShareLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repositoryId?: boolean
    token?: boolean
    name?: boolean
    description?: boolean
    password?: boolean
    expiresAt?: boolean
    maxMembers?: boolean
    memberCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    members?: boolean | ShareLink$membersArgs<ExtArgs>
    _count?: boolean | ShareLinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repositoryId?: boolean
    token?: boolean
    name?: boolean
    description?: boolean
    password?: boolean
    expiresAt?: boolean
    maxMembers?: boolean
    memberCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repositoryId?: boolean
    token?: boolean
    name?: boolean
    description?: boolean
    password?: boolean
    expiresAt?: boolean
    maxMembers?: boolean
    memberCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectScalar = {
    id?: boolean
    userId?: boolean
    repositoryId?: boolean
    token?: boolean
    name?: boolean
    description?: boolean
    password?: boolean
    expiresAt?: boolean
    maxMembers?: boolean
    memberCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShareLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "repositoryId" | "token" | "name" | "description" | "password" | "expiresAt" | "maxMembers" | "memberCount" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["shareLink"]>
  export type ShareLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    members?: boolean | ShareLink$membersArgs<ExtArgs>
    _count?: boolean | ShareLinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShareLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }
  export type ShareLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }

  export type $ShareLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareLink"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      repository: Prisma.$RepositoryPayload<ExtArgs>
      members: Prisma.$ShareMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      repositoryId: number
      token: string
      name: string | null
      description: string | null
      password: string | null
      expiresAt: Date | null
      maxMembers: number | null
      memberCount: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shareLink"]>
    composites: {}
  }

  type ShareLinkGetPayload<S extends boolean | null | undefined | ShareLinkDefaultArgs> = $Result.GetResult<Prisma.$ShareLinkPayload, S>

  type ShareLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareLinkCountAggregateInputType | true
    }

  export interface ShareLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareLink'], meta: { name: 'ShareLink' } }
    /**
     * Find zero or one ShareLink that matches the filter.
     * @param {ShareLinkFindUniqueArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareLinkFindUniqueArgs>(args: SelectSubset<T, ShareLinkFindUniqueArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareLinkFindUniqueOrThrowArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindFirstArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareLinkFindFirstArgs>(args?: SelectSubset<T, ShareLinkFindFirstArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindFirstOrThrowArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareLinks
     * const shareLinks = await prisma.shareLink.findMany()
     * 
     * // Get first 10 ShareLinks
     * const shareLinks = await prisma.shareLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareLinkFindManyArgs>(args?: SelectSubset<T, ShareLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareLink.
     * @param {ShareLinkCreateArgs} args - Arguments to create a ShareLink.
     * @example
     * // Create one ShareLink
     * const ShareLink = await prisma.shareLink.create({
     *   data: {
     *     // ... data to create a ShareLink
     *   }
     * })
     * 
     */
    create<T extends ShareLinkCreateArgs>(args: SelectSubset<T, ShareLinkCreateArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareLinks.
     * @param {ShareLinkCreateManyArgs} args - Arguments to create many ShareLinks.
     * @example
     * // Create many ShareLinks
     * const shareLink = await prisma.shareLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareLinkCreateManyArgs>(args?: SelectSubset<T, ShareLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareLinks and returns the data saved in the database.
     * @param {ShareLinkCreateManyAndReturnArgs} args - Arguments to create many ShareLinks.
     * @example
     * // Create many ShareLinks
     * const shareLink = await prisma.shareLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareLinks and only return the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareLink.
     * @param {ShareLinkDeleteArgs} args - Arguments to delete one ShareLink.
     * @example
     * // Delete one ShareLink
     * const ShareLink = await prisma.shareLink.delete({
     *   where: {
     *     // ... filter to delete one ShareLink
     *   }
     * })
     * 
     */
    delete<T extends ShareLinkDeleteArgs>(args: SelectSubset<T, ShareLinkDeleteArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareLink.
     * @param {ShareLinkUpdateArgs} args - Arguments to update one ShareLink.
     * @example
     * // Update one ShareLink
     * const shareLink = await prisma.shareLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareLinkUpdateArgs>(args: SelectSubset<T, ShareLinkUpdateArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareLinks.
     * @param {ShareLinkDeleteManyArgs} args - Arguments to filter ShareLinks to delete.
     * @example
     * // Delete a few ShareLinks
     * const { count } = await prisma.shareLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareLinkDeleteManyArgs>(args?: SelectSubset<T, ShareLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareLinks
     * const shareLink = await prisma.shareLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareLinkUpdateManyArgs>(args: SelectSubset<T, ShareLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareLinks and returns the data updated in the database.
     * @param {ShareLinkUpdateManyAndReturnArgs} args - Arguments to update many ShareLinks.
     * @example
     * // Update many ShareLinks
     * const shareLink = await prisma.shareLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareLinks and only return the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareLink.
     * @param {ShareLinkUpsertArgs} args - Arguments to update or create a ShareLink.
     * @example
     * // Update or create a ShareLink
     * const shareLink = await prisma.shareLink.upsert({
     *   create: {
     *     // ... data to create a ShareLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareLink we want to update
     *   }
     * })
     */
    upsert<T extends ShareLinkUpsertArgs>(args: SelectSubset<T, ShareLinkUpsertArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkCountArgs} args - Arguments to filter ShareLinks to count.
     * @example
     * // Count the number of ShareLinks
     * const count = await prisma.shareLink.count({
     *   where: {
     *     // ... the filter for the ShareLinks we want to count
     *   }
     * })
    **/
    count<T extends ShareLinkCountArgs>(
      args?: Subset<T, ShareLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareLinkAggregateArgs>(args: Subset<T, ShareLinkAggregateArgs>): Prisma.PrismaPromise<GetShareLinkAggregateType<T>>

    /**
     * Group by ShareLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareLinkGroupByArgs['orderBy'] }
        : { orderBy?: ShareLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareLink model
   */
  readonly fields: ShareLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repository<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends ShareLink$membersArgs<ExtArgs> = {}>(args?: Subset<T, ShareLink$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShareLink model
   */
  interface ShareLinkFieldRefs {
    readonly id: FieldRef<"ShareLink", 'String'>
    readonly userId: FieldRef<"ShareLink", 'Int'>
    readonly repositoryId: FieldRef<"ShareLink", 'Int'>
    readonly token: FieldRef<"ShareLink", 'String'>
    readonly name: FieldRef<"ShareLink", 'String'>
    readonly description: FieldRef<"ShareLink", 'String'>
    readonly password: FieldRef<"ShareLink", 'String'>
    readonly expiresAt: FieldRef<"ShareLink", 'DateTime'>
    readonly maxMembers: FieldRef<"ShareLink", 'Int'>
    readonly memberCount: FieldRef<"ShareLink", 'Int'>
    readonly isActive: FieldRef<"ShareLink", 'Boolean'>
    readonly createdAt: FieldRef<"ShareLink", 'DateTime'>
    readonly updatedAt: FieldRef<"ShareLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShareLink findUnique
   */
  export type ShareLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink findUniqueOrThrow
   */
  export type ShareLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink findFirst
   */
  export type ShareLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareLinks.
     */
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink findFirstOrThrow
   */
  export type ShareLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareLinks.
     */
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink findMany
   */
  export type ShareLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLinks to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink create
   */
  export type ShareLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareLink.
     */
    data: XOR<ShareLinkCreateInput, ShareLinkUncheckedCreateInput>
  }

  /**
   * ShareLink createMany
   */
  export type ShareLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareLinks.
     */
    data: ShareLinkCreateManyInput | ShareLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShareLink createManyAndReturn
   */
  export type ShareLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data used to create many ShareLinks.
     */
    data: ShareLinkCreateManyInput | ShareLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareLink update
   */
  export type ShareLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareLink.
     */
    data: XOR<ShareLinkUpdateInput, ShareLinkUncheckedUpdateInput>
    /**
     * Choose, which ShareLink to update.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink updateMany
   */
  export type ShareLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareLinks.
     */
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShareLinks to update
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to update.
     */
    limit?: number
  }

  /**
   * ShareLink updateManyAndReturn
   */
  export type ShareLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data used to update ShareLinks.
     */
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShareLinks to update
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareLink upsert
   */
  export type ShareLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareLink to update in case it exists.
     */
    where: ShareLinkWhereUniqueInput
    /**
     * In case the ShareLink found by the `where` argument doesn't exist, create a new ShareLink with this data.
     */
    create: XOR<ShareLinkCreateInput, ShareLinkUncheckedCreateInput>
    /**
     * In case the ShareLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareLinkUpdateInput, ShareLinkUncheckedUpdateInput>
  }

  /**
   * ShareLink delete
   */
  export type ShareLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter which ShareLink to delete.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink deleteMany
   */
  export type ShareLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareLinks to delete
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to delete.
     */
    limit?: number
  }

  /**
   * ShareLink.members
   */
  export type ShareLink$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberInclude<ExtArgs> | null
    where?: ShareMemberWhereInput
    orderBy?: ShareMemberOrderByWithRelationInput | ShareMemberOrderByWithRelationInput[]
    cursor?: ShareMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareMemberScalarFieldEnum | ShareMemberScalarFieldEnum[]
  }

  /**
   * ShareLink without action
   */
  export type ShareLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
  }


  /**
   * Model ShareMember
   */

  export type AggregateShareMember = {
    _count: ShareMemberCountAggregateOutputType | null
    _min: ShareMemberMinAggregateOutputType | null
    _max: ShareMemberMaxAggregateOutputType | null
  }

  export type ShareMemberMinAggregateOutputType = {
    id: string | null
    shareLinkId: string | null
    ipAddress: string | null
    joinedAt: Date | null
  }

  export type ShareMemberMaxAggregateOutputType = {
    id: string | null
    shareLinkId: string | null
    ipAddress: string | null
    joinedAt: Date | null
  }

  export type ShareMemberCountAggregateOutputType = {
    id: number
    shareLinkId: number
    ipAddress: number
    joinedAt: number
    _all: number
  }


  export type ShareMemberMinAggregateInputType = {
    id?: true
    shareLinkId?: true
    ipAddress?: true
    joinedAt?: true
  }

  export type ShareMemberMaxAggregateInputType = {
    id?: true
    shareLinkId?: true
    ipAddress?: true
    joinedAt?: true
  }

  export type ShareMemberCountAggregateInputType = {
    id?: true
    shareLinkId?: true
    ipAddress?: true
    joinedAt?: true
    _all?: true
  }

  export type ShareMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareMember to aggregate.
     */
    where?: ShareMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareMembers to fetch.
     */
    orderBy?: ShareMemberOrderByWithRelationInput | ShareMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareMembers
    **/
    _count?: true | ShareMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareMemberMaxAggregateInputType
  }

  export type GetShareMemberAggregateType<T extends ShareMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateShareMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareMember[P]>
      : GetScalarType<T[P], AggregateShareMember[P]>
  }




  export type ShareMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareMemberWhereInput
    orderBy?: ShareMemberOrderByWithAggregationInput | ShareMemberOrderByWithAggregationInput[]
    by: ShareMemberScalarFieldEnum[] | ShareMemberScalarFieldEnum
    having?: ShareMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareMemberCountAggregateInputType | true
    _min?: ShareMemberMinAggregateInputType
    _max?: ShareMemberMaxAggregateInputType
  }

  export type ShareMemberGroupByOutputType = {
    id: string
    shareLinkId: string
    ipAddress: string | null
    joinedAt: Date
    _count: ShareMemberCountAggregateOutputType | null
    _min: ShareMemberMinAggregateOutputType | null
    _max: ShareMemberMaxAggregateOutputType | null
  }

  type GetShareMemberGroupByPayload<T extends ShareMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ShareMemberGroupByOutputType[P]>
        }
      >
    >


  export type ShareMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareLinkId?: boolean
    ipAddress?: boolean
    joinedAt?: boolean
    shareLink?: boolean | ShareLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareMember"]>

  export type ShareMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareLinkId?: boolean
    ipAddress?: boolean
    joinedAt?: boolean
    shareLink?: boolean | ShareLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareMember"]>

  export type ShareMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareLinkId?: boolean
    ipAddress?: boolean
    joinedAt?: boolean
    shareLink?: boolean | ShareLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareMember"]>

  export type ShareMemberSelectScalar = {
    id?: boolean
    shareLinkId?: boolean
    ipAddress?: boolean
    joinedAt?: boolean
  }

  export type ShareMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shareLinkId" | "ipAddress" | "joinedAt", ExtArgs["result"]["shareMember"]>
  export type ShareMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareLink?: boolean | ShareLinkDefaultArgs<ExtArgs>
  }
  export type ShareMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareLink?: boolean | ShareLinkDefaultArgs<ExtArgs>
  }
  export type ShareMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareLink?: boolean | ShareLinkDefaultArgs<ExtArgs>
  }

  export type $ShareMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareMember"
    objects: {
      shareLink: Prisma.$ShareLinkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shareLinkId: string
      ipAddress: string | null
      joinedAt: Date
    }, ExtArgs["result"]["shareMember"]>
    composites: {}
  }

  type ShareMemberGetPayload<S extends boolean | null | undefined | ShareMemberDefaultArgs> = $Result.GetResult<Prisma.$ShareMemberPayload, S>

  type ShareMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareMemberCountAggregateInputType | true
    }

  export interface ShareMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareMember'], meta: { name: 'ShareMember' } }
    /**
     * Find zero or one ShareMember that matches the filter.
     * @param {ShareMemberFindUniqueArgs} args - Arguments to find a ShareMember
     * @example
     * // Get one ShareMember
     * const shareMember = await prisma.shareMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareMemberFindUniqueArgs>(args: SelectSubset<T, ShareMemberFindUniqueArgs<ExtArgs>>): Prisma__ShareMemberClient<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareMemberFindUniqueOrThrowArgs} args - Arguments to find a ShareMember
     * @example
     * // Get one ShareMember
     * const shareMember = await prisma.shareMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareMemberClient<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareMemberFindFirstArgs} args - Arguments to find a ShareMember
     * @example
     * // Get one ShareMember
     * const shareMember = await prisma.shareMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareMemberFindFirstArgs>(args?: SelectSubset<T, ShareMemberFindFirstArgs<ExtArgs>>): Prisma__ShareMemberClient<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareMemberFindFirstOrThrowArgs} args - Arguments to find a ShareMember
     * @example
     * // Get one ShareMember
     * const shareMember = await prisma.shareMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareMemberClient<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareMembers
     * const shareMembers = await prisma.shareMember.findMany()
     * 
     * // Get first 10 ShareMembers
     * const shareMembers = await prisma.shareMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareMemberWithIdOnly = await prisma.shareMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareMemberFindManyArgs>(args?: SelectSubset<T, ShareMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareMember.
     * @param {ShareMemberCreateArgs} args - Arguments to create a ShareMember.
     * @example
     * // Create one ShareMember
     * const ShareMember = await prisma.shareMember.create({
     *   data: {
     *     // ... data to create a ShareMember
     *   }
     * })
     * 
     */
    create<T extends ShareMemberCreateArgs>(args: SelectSubset<T, ShareMemberCreateArgs<ExtArgs>>): Prisma__ShareMemberClient<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareMembers.
     * @param {ShareMemberCreateManyArgs} args - Arguments to create many ShareMembers.
     * @example
     * // Create many ShareMembers
     * const shareMember = await prisma.shareMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareMemberCreateManyArgs>(args?: SelectSubset<T, ShareMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareMembers and returns the data saved in the database.
     * @param {ShareMemberCreateManyAndReturnArgs} args - Arguments to create many ShareMembers.
     * @example
     * // Create many ShareMembers
     * const shareMember = await prisma.shareMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareMembers and only return the `id`
     * const shareMemberWithIdOnly = await prisma.shareMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareMember.
     * @param {ShareMemberDeleteArgs} args - Arguments to delete one ShareMember.
     * @example
     * // Delete one ShareMember
     * const ShareMember = await prisma.shareMember.delete({
     *   where: {
     *     // ... filter to delete one ShareMember
     *   }
     * })
     * 
     */
    delete<T extends ShareMemberDeleteArgs>(args: SelectSubset<T, ShareMemberDeleteArgs<ExtArgs>>): Prisma__ShareMemberClient<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareMember.
     * @param {ShareMemberUpdateArgs} args - Arguments to update one ShareMember.
     * @example
     * // Update one ShareMember
     * const shareMember = await prisma.shareMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareMemberUpdateArgs>(args: SelectSubset<T, ShareMemberUpdateArgs<ExtArgs>>): Prisma__ShareMemberClient<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareMembers.
     * @param {ShareMemberDeleteManyArgs} args - Arguments to filter ShareMembers to delete.
     * @example
     * // Delete a few ShareMembers
     * const { count } = await prisma.shareMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareMemberDeleteManyArgs>(args?: SelectSubset<T, ShareMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareMembers
     * const shareMember = await prisma.shareMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareMemberUpdateManyArgs>(args: SelectSubset<T, ShareMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareMembers and returns the data updated in the database.
     * @param {ShareMemberUpdateManyAndReturnArgs} args - Arguments to update many ShareMembers.
     * @example
     * // Update many ShareMembers
     * const shareMember = await prisma.shareMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareMembers and only return the `id`
     * const shareMemberWithIdOnly = await prisma.shareMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareMember.
     * @param {ShareMemberUpsertArgs} args - Arguments to update or create a ShareMember.
     * @example
     * // Update or create a ShareMember
     * const shareMember = await prisma.shareMember.upsert({
     *   create: {
     *     // ... data to create a ShareMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareMember we want to update
     *   }
     * })
     */
    upsert<T extends ShareMemberUpsertArgs>(args: SelectSubset<T, ShareMemberUpsertArgs<ExtArgs>>): Prisma__ShareMemberClient<$Result.GetResult<Prisma.$ShareMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareMemberCountArgs} args - Arguments to filter ShareMembers to count.
     * @example
     * // Count the number of ShareMembers
     * const count = await prisma.shareMember.count({
     *   where: {
     *     // ... the filter for the ShareMembers we want to count
     *   }
     * })
    **/
    count<T extends ShareMemberCountArgs>(
      args?: Subset<T, ShareMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareMemberAggregateArgs>(args: Subset<T, ShareMemberAggregateArgs>): Prisma.PrismaPromise<GetShareMemberAggregateType<T>>

    /**
     * Group by ShareMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareMemberGroupByArgs['orderBy'] }
        : { orderBy?: ShareMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareMember model
   */
  readonly fields: ShareMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shareLink<T extends ShareLinkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShareLinkDefaultArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShareMember model
   */
  interface ShareMemberFieldRefs {
    readonly id: FieldRef<"ShareMember", 'String'>
    readonly shareLinkId: FieldRef<"ShareMember", 'String'>
    readonly ipAddress: FieldRef<"ShareMember", 'String'>
    readonly joinedAt: FieldRef<"ShareMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShareMember findUnique
   */
  export type ShareMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberInclude<ExtArgs> | null
    /**
     * Filter, which ShareMember to fetch.
     */
    where: ShareMemberWhereUniqueInput
  }

  /**
   * ShareMember findUniqueOrThrow
   */
  export type ShareMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberInclude<ExtArgs> | null
    /**
     * Filter, which ShareMember to fetch.
     */
    where: ShareMemberWhereUniqueInput
  }

  /**
   * ShareMember findFirst
   */
  export type ShareMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberInclude<ExtArgs> | null
    /**
     * Filter, which ShareMember to fetch.
     */
    where?: ShareMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareMembers to fetch.
     */
    orderBy?: ShareMemberOrderByWithRelationInput | ShareMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareMembers.
     */
    cursor?: ShareMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareMembers.
     */
    distinct?: ShareMemberScalarFieldEnum | ShareMemberScalarFieldEnum[]
  }

  /**
   * ShareMember findFirstOrThrow
   */
  export type ShareMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberInclude<ExtArgs> | null
    /**
     * Filter, which ShareMember to fetch.
     */
    where?: ShareMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareMembers to fetch.
     */
    orderBy?: ShareMemberOrderByWithRelationInput | ShareMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareMembers.
     */
    cursor?: ShareMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareMembers.
     */
    distinct?: ShareMemberScalarFieldEnum | ShareMemberScalarFieldEnum[]
  }

  /**
   * ShareMember findMany
   */
  export type ShareMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberInclude<ExtArgs> | null
    /**
     * Filter, which ShareMembers to fetch.
     */
    where?: ShareMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareMembers to fetch.
     */
    orderBy?: ShareMemberOrderByWithRelationInput | ShareMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareMembers.
     */
    cursor?: ShareMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareMembers.
     */
    skip?: number
    distinct?: ShareMemberScalarFieldEnum | ShareMemberScalarFieldEnum[]
  }

  /**
   * ShareMember create
   */
  export type ShareMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareMember.
     */
    data: XOR<ShareMemberCreateInput, ShareMemberUncheckedCreateInput>
  }

  /**
   * ShareMember createMany
   */
  export type ShareMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareMembers.
     */
    data: ShareMemberCreateManyInput | ShareMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShareMember createManyAndReturn
   */
  export type ShareMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ShareMembers.
     */
    data: ShareMemberCreateManyInput | ShareMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareMember update
   */
  export type ShareMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareMember.
     */
    data: XOR<ShareMemberUpdateInput, ShareMemberUncheckedUpdateInput>
    /**
     * Choose, which ShareMember to update.
     */
    where: ShareMemberWhereUniqueInput
  }

  /**
   * ShareMember updateMany
   */
  export type ShareMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareMembers.
     */
    data: XOR<ShareMemberUpdateManyMutationInput, ShareMemberUncheckedUpdateManyInput>
    /**
     * Filter which ShareMembers to update
     */
    where?: ShareMemberWhereInput
    /**
     * Limit how many ShareMembers to update.
     */
    limit?: number
  }

  /**
   * ShareMember updateManyAndReturn
   */
  export type ShareMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * The data used to update ShareMembers.
     */
    data: XOR<ShareMemberUpdateManyMutationInput, ShareMemberUncheckedUpdateManyInput>
    /**
     * Filter which ShareMembers to update
     */
    where?: ShareMemberWhereInput
    /**
     * Limit how many ShareMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareMember upsert
   */
  export type ShareMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareMember to update in case it exists.
     */
    where: ShareMemberWhereUniqueInput
    /**
     * In case the ShareMember found by the `where` argument doesn't exist, create a new ShareMember with this data.
     */
    create: XOR<ShareMemberCreateInput, ShareMemberUncheckedCreateInput>
    /**
     * In case the ShareMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareMemberUpdateInput, ShareMemberUncheckedUpdateInput>
  }

  /**
   * ShareMember delete
   */
  export type ShareMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberInclude<ExtArgs> | null
    /**
     * Filter which ShareMember to delete.
     */
    where: ShareMemberWhereUniqueInput
  }

  /**
   * ShareMember deleteMany
   */
  export type ShareMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareMembers to delete
     */
    where?: ShareMemberWhereInput
    /**
     * Limit how many ShareMembers to delete.
     */
    limit?: number
  }

  /**
   * ShareMember without action
   */
  export type ShareMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareMember
     */
    select?: ShareMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareMember
     */
    omit?: ShareMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareMemberInclude<ExtArgs> | null
  }


  /**
   * Model Bucket
   */

  export type AggregateBucket = {
    _count: BucketCountAggregateOutputType | null
    _avg: BucketAvgAggregateOutputType | null
    _sum: BucketSumAggregateOutputType | null
    _min: BucketMinAggregateOutputType | null
    _max: BucketMaxAggregateOutputType | null
  }

  export type BucketAvgAggregateOutputType = {
    userId: number | null
    maxMembers: number | null
    memberCount: number | null
  }

  export type BucketSumAggregateOutputType = {
    userId: number | null
    maxMembers: number | null
    memberCount: number | null
  }

  export type BucketMinAggregateOutputType = {
    id: string | null
    userId: number | null
    token: string | null
    name: string | null
    description: string | null
    password: string | null
    expiresAt: Date | null
    maxMembers: number | null
    memberCount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BucketMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    token: string | null
    name: string | null
    description: string | null
    password: string | null
    expiresAt: Date | null
    maxMembers: number | null
    memberCount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BucketCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    name: number
    description: number
    password: number
    expiresAt: number
    maxMembers: number
    memberCount: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BucketAvgAggregateInputType = {
    userId?: true
    maxMembers?: true
    memberCount?: true
  }

  export type BucketSumAggregateInputType = {
    userId?: true
    maxMembers?: true
    memberCount?: true
  }

  export type BucketMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    name?: true
    description?: true
    password?: true
    expiresAt?: true
    maxMembers?: true
    memberCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BucketMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    name?: true
    description?: true
    password?: true
    expiresAt?: true
    maxMembers?: true
    memberCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BucketCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    name?: true
    description?: true
    password?: true
    expiresAt?: true
    maxMembers?: true
    memberCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BucketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bucket to aggregate.
     */
    where?: BucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buckets to fetch.
     */
    orderBy?: BucketOrderByWithRelationInput | BucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buckets
    **/
    _count?: true | BucketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BucketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BucketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BucketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BucketMaxAggregateInputType
  }

  export type GetBucketAggregateType<T extends BucketAggregateArgs> = {
        [P in keyof T & keyof AggregateBucket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBucket[P]>
      : GetScalarType<T[P], AggregateBucket[P]>
  }




  export type BucketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BucketWhereInput
    orderBy?: BucketOrderByWithAggregationInput | BucketOrderByWithAggregationInput[]
    by: BucketScalarFieldEnum[] | BucketScalarFieldEnum
    having?: BucketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BucketCountAggregateInputType | true
    _avg?: BucketAvgAggregateInputType
    _sum?: BucketSumAggregateInputType
    _min?: BucketMinAggregateInputType
    _max?: BucketMaxAggregateInputType
  }

  export type BucketGroupByOutputType = {
    id: string
    userId: number
    token: string
    name: string | null
    description: string | null
    password: string | null
    expiresAt: Date | null
    maxMembers: number | null
    memberCount: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BucketCountAggregateOutputType | null
    _avg: BucketAvgAggregateOutputType | null
    _sum: BucketSumAggregateOutputType | null
    _min: BucketMinAggregateOutputType | null
    _max: BucketMaxAggregateOutputType | null
  }

  type GetBucketGroupByPayload<T extends BucketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BucketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BucketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BucketGroupByOutputType[P]>
            : GetScalarType<T[P], BucketGroupByOutputType[P]>
        }
      >
    >


  export type BucketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    name?: boolean
    description?: boolean
    password?: boolean
    expiresAt?: boolean
    maxMembers?: boolean
    memberCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    repositories?: boolean | Bucket$repositoriesArgs<ExtArgs>
    members?: boolean | Bucket$membersArgs<ExtArgs>
    _count?: boolean | BucketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucket"]>

  export type BucketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    name?: boolean
    description?: boolean
    password?: boolean
    expiresAt?: boolean
    maxMembers?: boolean
    memberCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucket"]>

  export type BucketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    name?: boolean
    description?: boolean
    password?: boolean
    expiresAt?: boolean
    maxMembers?: boolean
    memberCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucket"]>

  export type BucketSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    name?: boolean
    description?: boolean
    password?: boolean
    expiresAt?: boolean
    maxMembers?: boolean
    memberCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BucketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "name" | "description" | "password" | "expiresAt" | "maxMembers" | "memberCount" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["bucket"]>
  export type BucketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    repositories?: boolean | Bucket$repositoriesArgs<ExtArgs>
    members?: boolean | Bucket$membersArgs<ExtArgs>
    _count?: boolean | BucketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BucketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BucketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BucketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bucket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      repositories: Prisma.$BucketRepositoryPayload<ExtArgs>[]
      members: Prisma.$BucketMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      token: string
      name: string | null
      description: string | null
      password: string | null
      expiresAt: Date | null
      maxMembers: number | null
      memberCount: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bucket"]>
    composites: {}
  }

  type BucketGetPayload<S extends boolean | null | undefined | BucketDefaultArgs> = $Result.GetResult<Prisma.$BucketPayload, S>

  type BucketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BucketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BucketCountAggregateInputType | true
    }

  export interface BucketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bucket'], meta: { name: 'Bucket' } }
    /**
     * Find zero or one Bucket that matches the filter.
     * @param {BucketFindUniqueArgs} args - Arguments to find a Bucket
     * @example
     * // Get one Bucket
     * const bucket = await prisma.bucket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BucketFindUniqueArgs>(args: SelectSubset<T, BucketFindUniqueArgs<ExtArgs>>): Prisma__BucketClient<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bucket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BucketFindUniqueOrThrowArgs} args - Arguments to find a Bucket
     * @example
     * // Get one Bucket
     * const bucket = await prisma.bucket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BucketFindUniqueOrThrowArgs>(args: SelectSubset<T, BucketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BucketClient<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bucket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketFindFirstArgs} args - Arguments to find a Bucket
     * @example
     * // Get one Bucket
     * const bucket = await prisma.bucket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BucketFindFirstArgs>(args?: SelectSubset<T, BucketFindFirstArgs<ExtArgs>>): Prisma__BucketClient<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bucket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketFindFirstOrThrowArgs} args - Arguments to find a Bucket
     * @example
     * // Get one Bucket
     * const bucket = await prisma.bucket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BucketFindFirstOrThrowArgs>(args?: SelectSubset<T, BucketFindFirstOrThrowArgs<ExtArgs>>): Prisma__BucketClient<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buckets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buckets
     * const buckets = await prisma.bucket.findMany()
     * 
     * // Get first 10 Buckets
     * const buckets = await prisma.bucket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bucketWithIdOnly = await prisma.bucket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BucketFindManyArgs>(args?: SelectSubset<T, BucketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bucket.
     * @param {BucketCreateArgs} args - Arguments to create a Bucket.
     * @example
     * // Create one Bucket
     * const Bucket = await prisma.bucket.create({
     *   data: {
     *     // ... data to create a Bucket
     *   }
     * })
     * 
     */
    create<T extends BucketCreateArgs>(args: SelectSubset<T, BucketCreateArgs<ExtArgs>>): Prisma__BucketClient<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buckets.
     * @param {BucketCreateManyArgs} args - Arguments to create many Buckets.
     * @example
     * // Create many Buckets
     * const bucket = await prisma.bucket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BucketCreateManyArgs>(args?: SelectSubset<T, BucketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buckets and returns the data saved in the database.
     * @param {BucketCreateManyAndReturnArgs} args - Arguments to create many Buckets.
     * @example
     * // Create many Buckets
     * const bucket = await prisma.bucket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buckets and only return the `id`
     * const bucketWithIdOnly = await prisma.bucket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BucketCreateManyAndReturnArgs>(args?: SelectSubset<T, BucketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bucket.
     * @param {BucketDeleteArgs} args - Arguments to delete one Bucket.
     * @example
     * // Delete one Bucket
     * const Bucket = await prisma.bucket.delete({
     *   where: {
     *     // ... filter to delete one Bucket
     *   }
     * })
     * 
     */
    delete<T extends BucketDeleteArgs>(args: SelectSubset<T, BucketDeleteArgs<ExtArgs>>): Prisma__BucketClient<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bucket.
     * @param {BucketUpdateArgs} args - Arguments to update one Bucket.
     * @example
     * // Update one Bucket
     * const bucket = await prisma.bucket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BucketUpdateArgs>(args: SelectSubset<T, BucketUpdateArgs<ExtArgs>>): Prisma__BucketClient<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buckets.
     * @param {BucketDeleteManyArgs} args - Arguments to filter Buckets to delete.
     * @example
     * // Delete a few Buckets
     * const { count } = await prisma.bucket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BucketDeleteManyArgs>(args?: SelectSubset<T, BucketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buckets
     * const bucket = await prisma.bucket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BucketUpdateManyArgs>(args: SelectSubset<T, BucketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buckets and returns the data updated in the database.
     * @param {BucketUpdateManyAndReturnArgs} args - Arguments to update many Buckets.
     * @example
     * // Update many Buckets
     * const bucket = await prisma.bucket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buckets and only return the `id`
     * const bucketWithIdOnly = await prisma.bucket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BucketUpdateManyAndReturnArgs>(args: SelectSubset<T, BucketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bucket.
     * @param {BucketUpsertArgs} args - Arguments to update or create a Bucket.
     * @example
     * // Update or create a Bucket
     * const bucket = await prisma.bucket.upsert({
     *   create: {
     *     // ... data to create a Bucket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bucket we want to update
     *   }
     * })
     */
    upsert<T extends BucketUpsertArgs>(args: SelectSubset<T, BucketUpsertArgs<ExtArgs>>): Prisma__BucketClient<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketCountArgs} args - Arguments to filter Buckets to count.
     * @example
     * // Count the number of Buckets
     * const count = await prisma.bucket.count({
     *   where: {
     *     // ... the filter for the Buckets we want to count
     *   }
     * })
    **/
    count<T extends BucketCountArgs>(
      args?: Subset<T, BucketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BucketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bucket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BucketAggregateArgs>(args: Subset<T, BucketAggregateArgs>): Prisma.PrismaPromise<GetBucketAggregateType<T>>

    /**
     * Group by Bucket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BucketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BucketGroupByArgs['orderBy'] }
        : { orderBy?: BucketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BucketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBucketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bucket model
   */
  readonly fields: BucketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bucket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BucketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repositories<T extends Bucket$repositoriesArgs<ExtArgs> = {}>(args?: Subset<T, Bucket$repositoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Bucket$membersArgs<ExtArgs> = {}>(args?: Subset<T, Bucket$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bucket model
   */
  interface BucketFieldRefs {
    readonly id: FieldRef<"Bucket", 'String'>
    readonly userId: FieldRef<"Bucket", 'Int'>
    readonly token: FieldRef<"Bucket", 'String'>
    readonly name: FieldRef<"Bucket", 'String'>
    readonly description: FieldRef<"Bucket", 'String'>
    readonly password: FieldRef<"Bucket", 'String'>
    readonly expiresAt: FieldRef<"Bucket", 'DateTime'>
    readonly maxMembers: FieldRef<"Bucket", 'Int'>
    readonly memberCount: FieldRef<"Bucket", 'Int'>
    readonly isActive: FieldRef<"Bucket", 'Boolean'>
    readonly createdAt: FieldRef<"Bucket", 'DateTime'>
    readonly updatedAt: FieldRef<"Bucket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bucket findUnique
   */
  export type BucketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketInclude<ExtArgs> | null
    /**
     * Filter, which Bucket to fetch.
     */
    where: BucketWhereUniqueInput
  }

  /**
   * Bucket findUniqueOrThrow
   */
  export type BucketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketInclude<ExtArgs> | null
    /**
     * Filter, which Bucket to fetch.
     */
    where: BucketWhereUniqueInput
  }

  /**
   * Bucket findFirst
   */
  export type BucketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketInclude<ExtArgs> | null
    /**
     * Filter, which Bucket to fetch.
     */
    where?: BucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buckets to fetch.
     */
    orderBy?: BucketOrderByWithRelationInput | BucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buckets.
     */
    cursor?: BucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buckets.
     */
    distinct?: BucketScalarFieldEnum | BucketScalarFieldEnum[]
  }

  /**
   * Bucket findFirstOrThrow
   */
  export type BucketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketInclude<ExtArgs> | null
    /**
     * Filter, which Bucket to fetch.
     */
    where?: BucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buckets to fetch.
     */
    orderBy?: BucketOrderByWithRelationInput | BucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buckets.
     */
    cursor?: BucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buckets.
     */
    distinct?: BucketScalarFieldEnum | BucketScalarFieldEnum[]
  }

  /**
   * Bucket findMany
   */
  export type BucketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketInclude<ExtArgs> | null
    /**
     * Filter, which Buckets to fetch.
     */
    where?: BucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buckets to fetch.
     */
    orderBy?: BucketOrderByWithRelationInput | BucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buckets.
     */
    cursor?: BucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buckets.
     */
    skip?: number
    distinct?: BucketScalarFieldEnum | BucketScalarFieldEnum[]
  }

  /**
   * Bucket create
   */
  export type BucketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketInclude<ExtArgs> | null
    /**
     * The data needed to create a Bucket.
     */
    data: XOR<BucketCreateInput, BucketUncheckedCreateInput>
  }

  /**
   * Bucket createMany
   */
  export type BucketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buckets.
     */
    data: BucketCreateManyInput | BucketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bucket createManyAndReturn
   */
  export type BucketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * The data used to create many Buckets.
     */
    data: BucketCreateManyInput | BucketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bucket update
   */
  export type BucketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketInclude<ExtArgs> | null
    /**
     * The data needed to update a Bucket.
     */
    data: XOR<BucketUpdateInput, BucketUncheckedUpdateInput>
    /**
     * Choose, which Bucket to update.
     */
    where: BucketWhereUniqueInput
  }

  /**
   * Bucket updateMany
   */
  export type BucketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buckets.
     */
    data: XOR<BucketUpdateManyMutationInput, BucketUncheckedUpdateManyInput>
    /**
     * Filter which Buckets to update
     */
    where?: BucketWhereInput
    /**
     * Limit how many Buckets to update.
     */
    limit?: number
  }

  /**
   * Bucket updateManyAndReturn
   */
  export type BucketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * The data used to update Buckets.
     */
    data: XOR<BucketUpdateManyMutationInput, BucketUncheckedUpdateManyInput>
    /**
     * Filter which Buckets to update
     */
    where?: BucketWhereInput
    /**
     * Limit how many Buckets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bucket upsert
   */
  export type BucketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketInclude<ExtArgs> | null
    /**
     * The filter to search for the Bucket to update in case it exists.
     */
    where: BucketWhereUniqueInput
    /**
     * In case the Bucket found by the `where` argument doesn't exist, create a new Bucket with this data.
     */
    create: XOR<BucketCreateInput, BucketUncheckedCreateInput>
    /**
     * In case the Bucket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BucketUpdateInput, BucketUncheckedUpdateInput>
  }

  /**
   * Bucket delete
   */
  export type BucketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketInclude<ExtArgs> | null
    /**
     * Filter which Bucket to delete.
     */
    where: BucketWhereUniqueInput
  }

  /**
   * Bucket deleteMany
   */
  export type BucketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buckets to delete
     */
    where?: BucketWhereInput
    /**
     * Limit how many Buckets to delete.
     */
    limit?: number
  }

  /**
   * Bucket.repositories
   */
  export type Bucket$repositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
    where?: BucketRepositoryWhereInput
    orderBy?: BucketRepositoryOrderByWithRelationInput | BucketRepositoryOrderByWithRelationInput[]
    cursor?: BucketRepositoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BucketRepositoryScalarFieldEnum | BucketRepositoryScalarFieldEnum[]
  }

  /**
   * Bucket.members
   */
  export type Bucket$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberInclude<ExtArgs> | null
    where?: BucketMemberWhereInput
    orderBy?: BucketMemberOrderByWithRelationInput | BucketMemberOrderByWithRelationInput[]
    cursor?: BucketMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BucketMemberScalarFieldEnum | BucketMemberScalarFieldEnum[]
  }

  /**
   * Bucket without action
   */
  export type BucketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bucket
     */
    select?: BucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bucket
     */
    omit?: BucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketInclude<ExtArgs> | null
  }


  /**
   * Model BucketRepository
   */

  export type AggregateBucketRepository = {
    _count: BucketRepositoryCountAggregateOutputType | null
    _avg: BucketRepositoryAvgAggregateOutputType | null
    _sum: BucketRepositorySumAggregateOutputType | null
    _min: BucketRepositoryMinAggregateOutputType | null
    _max: BucketRepositoryMaxAggregateOutputType | null
  }

  export type BucketRepositoryAvgAggregateOutputType = {
    repositoryId: number | null
  }

  export type BucketRepositorySumAggregateOutputType = {
    repositoryId: number | null
  }

  export type BucketRepositoryMinAggregateOutputType = {
    id: string | null
    bucketId: string | null
    repositoryId: number | null
    createdAt: Date | null
  }

  export type BucketRepositoryMaxAggregateOutputType = {
    id: string | null
    bucketId: string | null
    repositoryId: number | null
    createdAt: Date | null
  }

  export type BucketRepositoryCountAggregateOutputType = {
    id: number
    bucketId: number
    repositoryId: number
    createdAt: number
    _all: number
  }


  export type BucketRepositoryAvgAggregateInputType = {
    repositoryId?: true
  }

  export type BucketRepositorySumAggregateInputType = {
    repositoryId?: true
  }

  export type BucketRepositoryMinAggregateInputType = {
    id?: true
    bucketId?: true
    repositoryId?: true
    createdAt?: true
  }

  export type BucketRepositoryMaxAggregateInputType = {
    id?: true
    bucketId?: true
    repositoryId?: true
    createdAt?: true
  }

  export type BucketRepositoryCountAggregateInputType = {
    id?: true
    bucketId?: true
    repositoryId?: true
    createdAt?: true
    _all?: true
  }

  export type BucketRepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BucketRepository to aggregate.
     */
    where?: BucketRepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketRepositories to fetch.
     */
    orderBy?: BucketRepositoryOrderByWithRelationInput | BucketRepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BucketRepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketRepositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketRepositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BucketRepositories
    **/
    _count?: true | BucketRepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BucketRepositoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BucketRepositorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BucketRepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BucketRepositoryMaxAggregateInputType
  }

  export type GetBucketRepositoryAggregateType<T extends BucketRepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBucketRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBucketRepository[P]>
      : GetScalarType<T[P], AggregateBucketRepository[P]>
  }




  export type BucketRepositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BucketRepositoryWhereInput
    orderBy?: BucketRepositoryOrderByWithAggregationInput | BucketRepositoryOrderByWithAggregationInput[]
    by: BucketRepositoryScalarFieldEnum[] | BucketRepositoryScalarFieldEnum
    having?: BucketRepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BucketRepositoryCountAggregateInputType | true
    _avg?: BucketRepositoryAvgAggregateInputType
    _sum?: BucketRepositorySumAggregateInputType
    _min?: BucketRepositoryMinAggregateInputType
    _max?: BucketRepositoryMaxAggregateInputType
  }

  export type BucketRepositoryGroupByOutputType = {
    id: string
    bucketId: string
    repositoryId: number
    createdAt: Date
    _count: BucketRepositoryCountAggregateOutputType | null
    _avg: BucketRepositoryAvgAggregateOutputType | null
    _sum: BucketRepositorySumAggregateOutputType | null
    _min: BucketRepositoryMinAggregateOutputType | null
    _max: BucketRepositoryMaxAggregateOutputType | null
  }

  type GetBucketRepositoryGroupByPayload<T extends BucketRepositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BucketRepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BucketRepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BucketRepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], BucketRepositoryGroupByOutputType[P]>
        }
      >
    >


  export type BucketRepositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bucketId?: boolean
    repositoryId?: boolean
    createdAt?: boolean
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucketRepository"]>

  export type BucketRepositorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bucketId?: boolean
    repositoryId?: boolean
    createdAt?: boolean
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucketRepository"]>

  export type BucketRepositorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bucketId?: boolean
    repositoryId?: boolean
    createdAt?: boolean
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucketRepository"]>

  export type BucketRepositorySelectScalar = {
    id?: boolean
    bucketId?: boolean
    repositoryId?: boolean
    createdAt?: boolean
  }

  export type BucketRepositoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bucketId" | "repositoryId" | "createdAt", ExtArgs["result"]["bucketRepository"]>
  export type BucketRepositoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }
  export type BucketRepositoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }
  export type BucketRepositoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }

  export type $BucketRepositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BucketRepository"
    objects: {
      bucket: Prisma.$BucketPayload<ExtArgs>
      repository: Prisma.$RepositoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bucketId: string
      repositoryId: number
      createdAt: Date
    }, ExtArgs["result"]["bucketRepository"]>
    composites: {}
  }

  type BucketRepositoryGetPayload<S extends boolean | null | undefined | BucketRepositoryDefaultArgs> = $Result.GetResult<Prisma.$BucketRepositoryPayload, S>

  type BucketRepositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BucketRepositoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BucketRepositoryCountAggregateInputType | true
    }

  export interface BucketRepositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BucketRepository'], meta: { name: 'BucketRepository' } }
    /**
     * Find zero or one BucketRepository that matches the filter.
     * @param {BucketRepositoryFindUniqueArgs} args - Arguments to find a BucketRepository
     * @example
     * // Get one BucketRepository
     * const bucketRepository = await prisma.bucketRepository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BucketRepositoryFindUniqueArgs>(args: SelectSubset<T, BucketRepositoryFindUniqueArgs<ExtArgs>>): Prisma__BucketRepositoryClient<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BucketRepository that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BucketRepositoryFindUniqueOrThrowArgs} args - Arguments to find a BucketRepository
     * @example
     * // Get one BucketRepository
     * const bucketRepository = await prisma.bucketRepository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BucketRepositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BucketRepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BucketRepositoryClient<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BucketRepository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketRepositoryFindFirstArgs} args - Arguments to find a BucketRepository
     * @example
     * // Get one BucketRepository
     * const bucketRepository = await prisma.bucketRepository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BucketRepositoryFindFirstArgs>(args?: SelectSubset<T, BucketRepositoryFindFirstArgs<ExtArgs>>): Prisma__BucketRepositoryClient<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BucketRepository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketRepositoryFindFirstOrThrowArgs} args - Arguments to find a BucketRepository
     * @example
     * // Get one BucketRepository
     * const bucketRepository = await prisma.bucketRepository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BucketRepositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BucketRepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BucketRepositoryClient<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BucketRepositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketRepositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BucketRepositories
     * const bucketRepositories = await prisma.bucketRepository.findMany()
     * 
     * // Get first 10 BucketRepositories
     * const bucketRepositories = await prisma.bucketRepository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bucketRepositoryWithIdOnly = await prisma.bucketRepository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BucketRepositoryFindManyArgs>(args?: SelectSubset<T, BucketRepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BucketRepository.
     * @param {BucketRepositoryCreateArgs} args - Arguments to create a BucketRepository.
     * @example
     * // Create one BucketRepository
     * const BucketRepository = await prisma.bucketRepository.create({
     *   data: {
     *     // ... data to create a BucketRepository
     *   }
     * })
     * 
     */
    create<T extends BucketRepositoryCreateArgs>(args: SelectSubset<T, BucketRepositoryCreateArgs<ExtArgs>>): Prisma__BucketRepositoryClient<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BucketRepositories.
     * @param {BucketRepositoryCreateManyArgs} args - Arguments to create many BucketRepositories.
     * @example
     * // Create many BucketRepositories
     * const bucketRepository = await prisma.bucketRepository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BucketRepositoryCreateManyArgs>(args?: SelectSubset<T, BucketRepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BucketRepositories and returns the data saved in the database.
     * @param {BucketRepositoryCreateManyAndReturnArgs} args - Arguments to create many BucketRepositories.
     * @example
     * // Create many BucketRepositories
     * const bucketRepository = await prisma.bucketRepository.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BucketRepositories and only return the `id`
     * const bucketRepositoryWithIdOnly = await prisma.bucketRepository.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BucketRepositoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BucketRepositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BucketRepository.
     * @param {BucketRepositoryDeleteArgs} args - Arguments to delete one BucketRepository.
     * @example
     * // Delete one BucketRepository
     * const BucketRepository = await prisma.bucketRepository.delete({
     *   where: {
     *     // ... filter to delete one BucketRepository
     *   }
     * })
     * 
     */
    delete<T extends BucketRepositoryDeleteArgs>(args: SelectSubset<T, BucketRepositoryDeleteArgs<ExtArgs>>): Prisma__BucketRepositoryClient<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BucketRepository.
     * @param {BucketRepositoryUpdateArgs} args - Arguments to update one BucketRepository.
     * @example
     * // Update one BucketRepository
     * const bucketRepository = await prisma.bucketRepository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BucketRepositoryUpdateArgs>(args: SelectSubset<T, BucketRepositoryUpdateArgs<ExtArgs>>): Prisma__BucketRepositoryClient<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BucketRepositories.
     * @param {BucketRepositoryDeleteManyArgs} args - Arguments to filter BucketRepositories to delete.
     * @example
     * // Delete a few BucketRepositories
     * const { count } = await prisma.bucketRepository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BucketRepositoryDeleteManyArgs>(args?: SelectSubset<T, BucketRepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BucketRepositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketRepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BucketRepositories
     * const bucketRepository = await prisma.bucketRepository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BucketRepositoryUpdateManyArgs>(args: SelectSubset<T, BucketRepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BucketRepositories and returns the data updated in the database.
     * @param {BucketRepositoryUpdateManyAndReturnArgs} args - Arguments to update many BucketRepositories.
     * @example
     * // Update many BucketRepositories
     * const bucketRepository = await prisma.bucketRepository.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BucketRepositories and only return the `id`
     * const bucketRepositoryWithIdOnly = await prisma.bucketRepository.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BucketRepositoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BucketRepositoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BucketRepository.
     * @param {BucketRepositoryUpsertArgs} args - Arguments to update or create a BucketRepository.
     * @example
     * // Update or create a BucketRepository
     * const bucketRepository = await prisma.bucketRepository.upsert({
     *   create: {
     *     // ... data to create a BucketRepository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BucketRepository we want to update
     *   }
     * })
     */
    upsert<T extends BucketRepositoryUpsertArgs>(args: SelectSubset<T, BucketRepositoryUpsertArgs<ExtArgs>>): Prisma__BucketRepositoryClient<$Result.GetResult<Prisma.$BucketRepositoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BucketRepositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketRepositoryCountArgs} args - Arguments to filter BucketRepositories to count.
     * @example
     * // Count the number of BucketRepositories
     * const count = await prisma.bucketRepository.count({
     *   where: {
     *     // ... the filter for the BucketRepositories we want to count
     *   }
     * })
    **/
    count<T extends BucketRepositoryCountArgs>(
      args?: Subset<T, BucketRepositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BucketRepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BucketRepository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketRepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BucketRepositoryAggregateArgs>(args: Subset<T, BucketRepositoryAggregateArgs>): Prisma.PrismaPromise<GetBucketRepositoryAggregateType<T>>

    /**
     * Group by BucketRepository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketRepositoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BucketRepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BucketRepositoryGroupByArgs['orderBy'] }
        : { orderBy?: BucketRepositoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BucketRepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBucketRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BucketRepository model
   */
  readonly fields: BucketRepositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BucketRepository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BucketRepositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bucket<T extends BucketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BucketDefaultArgs<ExtArgs>>): Prisma__BucketClient<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repository<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BucketRepository model
   */
  interface BucketRepositoryFieldRefs {
    readonly id: FieldRef<"BucketRepository", 'String'>
    readonly bucketId: FieldRef<"BucketRepository", 'String'>
    readonly repositoryId: FieldRef<"BucketRepository", 'Int'>
    readonly createdAt: FieldRef<"BucketRepository", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BucketRepository findUnique
   */
  export type BucketRepositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
    /**
     * Filter, which BucketRepository to fetch.
     */
    where: BucketRepositoryWhereUniqueInput
  }

  /**
   * BucketRepository findUniqueOrThrow
   */
  export type BucketRepositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
    /**
     * Filter, which BucketRepository to fetch.
     */
    where: BucketRepositoryWhereUniqueInput
  }

  /**
   * BucketRepository findFirst
   */
  export type BucketRepositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
    /**
     * Filter, which BucketRepository to fetch.
     */
    where?: BucketRepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketRepositories to fetch.
     */
    orderBy?: BucketRepositoryOrderByWithRelationInput | BucketRepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BucketRepositories.
     */
    cursor?: BucketRepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketRepositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketRepositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BucketRepositories.
     */
    distinct?: BucketRepositoryScalarFieldEnum | BucketRepositoryScalarFieldEnum[]
  }

  /**
   * BucketRepository findFirstOrThrow
   */
  export type BucketRepositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
    /**
     * Filter, which BucketRepository to fetch.
     */
    where?: BucketRepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketRepositories to fetch.
     */
    orderBy?: BucketRepositoryOrderByWithRelationInput | BucketRepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BucketRepositories.
     */
    cursor?: BucketRepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketRepositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketRepositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BucketRepositories.
     */
    distinct?: BucketRepositoryScalarFieldEnum | BucketRepositoryScalarFieldEnum[]
  }

  /**
   * BucketRepository findMany
   */
  export type BucketRepositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
    /**
     * Filter, which BucketRepositories to fetch.
     */
    where?: BucketRepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketRepositories to fetch.
     */
    orderBy?: BucketRepositoryOrderByWithRelationInput | BucketRepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BucketRepositories.
     */
    cursor?: BucketRepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketRepositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketRepositories.
     */
    skip?: number
    distinct?: BucketRepositoryScalarFieldEnum | BucketRepositoryScalarFieldEnum[]
  }

  /**
   * BucketRepository create
   */
  export type BucketRepositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BucketRepository.
     */
    data: XOR<BucketRepositoryCreateInput, BucketRepositoryUncheckedCreateInput>
  }

  /**
   * BucketRepository createMany
   */
  export type BucketRepositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BucketRepositories.
     */
    data: BucketRepositoryCreateManyInput | BucketRepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BucketRepository createManyAndReturn
   */
  export type BucketRepositoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * The data used to create many BucketRepositories.
     */
    data: BucketRepositoryCreateManyInput | BucketRepositoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BucketRepository update
   */
  export type BucketRepositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BucketRepository.
     */
    data: XOR<BucketRepositoryUpdateInput, BucketRepositoryUncheckedUpdateInput>
    /**
     * Choose, which BucketRepository to update.
     */
    where: BucketRepositoryWhereUniqueInput
  }

  /**
   * BucketRepository updateMany
   */
  export type BucketRepositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BucketRepositories.
     */
    data: XOR<BucketRepositoryUpdateManyMutationInput, BucketRepositoryUncheckedUpdateManyInput>
    /**
     * Filter which BucketRepositories to update
     */
    where?: BucketRepositoryWhereInput
    /**
     * Limit how many BucketRepositories to update.
     */
    limit?: number
  }

  /**
   * BucketRepository updateManyAndReturn
   */
  export type BucketRepositoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * The data used to update BucketRepositories.
     */
    data: XOR<BucketRepositoryUpdateManyMutationInput, BucketRepositoryUncheckedUpdateManyInput>
    /**
     * Filter which BucketRepositories to update
     */
    where?: BucketRepositoryWhereInput
    /**
     * Limit how many BucketRepositories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BucketRepository upsert
   */
  export type BucketRepositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BucketRepository to update in case it exists.
     */
    where: BucketRepositoryWhereUniqueInput
    /**
     * In case the BucketRepository found by the `where` argument doesn't exist, create a new BucketRepository with this data.
     */
    create: XOR<BucketRepositoryCreateInput, BucketRepositoryUncheckedCreateInput>
    /**
     * In case the BucketRepository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BucketRepositoryUpdateInput, BucketRepositoryUncheckedUpdateInput>
  }

  /**
   * BucketRepository delete
   */
  export type BucketRepositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
    /**
     * Filter which BucketRepository to delete.
     */
    where: BucketRepositoryWhereUniqueInput
  }

  /**
   * BucketRepository deleteMany
   */
  export type BucketRepositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BucketRepositories to delete
     */
    where?: BucketRepositoryWhereInput
    /**
     * Limit how many BucketRepositories to delete.
     */
    limit?: number
  }

  /**
   * BucketRepository without action
   */
  export type BucketRepositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketRepository
     */
    select?: BucketRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketRepository
     */
    omit?: BucketRepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketRepositoryInclude<ExtArgs> | null
  }


  /**
   * Model BucketMember
   */

  export type AggregateBucketMember = {
    _count: BucketMemberCountAggregateOutputType | null
    _min: BucketMemberMinAggregateOutputType | null
    _max: BucketMemberMaxAggregateOutputType | null
  }

  export type BucketMemberMinAggregateOutputType = {
    id: string | null
    bucketId: string | null
    ipAddress: string | null
    joinedAt: Date | null
  }

  export type BucketMemberMaxAggregateOutputType = {
    id: string | null
    bucketId: string | null
    ipAddress: string | null
    joinedAt: Date | null
  }

  export type BucketMemberCountAggregateOutputType = {
    id: number
    bucketId: number
    ipAddress: number
    joinedAt: number
    _all: number
  }


  export type BucketMemberMinAggregateInputType = {
    id?: true
    bucketId?: true
    ipAddress?: true
    joinedAt?: true
  }

  export type BucketMemberMaxAggregateInputType = {
    id?: true
    bucketId?: true
    ipAddress?: true
    joinedAt?: true
  }

  export type BucketMemberCountAggregateInputType = {
    id?: true
    bucketId?: true
    ipAddress?: true
    joinedAt?: true
    _all?: true
  }

  export type BucketMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BucketMember to aggregate.
     */
    where?: BucketMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketMembers to fetch.
     */
    orderBy?: BucketMemberOrderByWithRelationInput | BucketMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BucketMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BucketMembers
    **/
    _count?: true | BucketMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BucketMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BucketMemberMaxAggregateInputType
  }

  export type GetBucketMemberAggregateType<T extends BucketMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateBucketMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBucketMember[P]>
      : GetScalarType<T[P], AggregateBucketMember[P]>
  }




  export type BucketMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BucketMemberWhereInput
    orderBy?: BucketMemberOrderByWithAggregationInput | BucketMemberOrderByWithAggregationInput[]
    by: BucketMemberScalarFieldEnum[] | BucketMemberScalarFieldEnum
    having?: BucketMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BucketMemberCountAggregateInputType | true
    _min?: BucketMemberMinAggregateInputType
    _max?: BucketMemberMaxAggregateInputType
  }

  export type BucketMemberGroupByOutputType = {
    id: string
    bucketId: string
    ipAddress: string | null
    joinedAt: Date
    _count: BucketMemberCountAggregateOutputType | null
    _min: BucketMemberMinAggregateOutputType | null
    _max: BucketMemberMaxAggregateOutputType | null
  }

  type GetBucketMemberGroupByPayload<T extends BucketMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BucketMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BucketMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BucketMemberGroupByOutputType[P]>
            : GetScalarType<T[P], BucketMemberGroupByOutputType[P]>
        }
      >
    >


  export type BucketMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bucketId?: boolean
    ipAddress?: boolean
    joinedAt?: boolean
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucketMember"]>

  export type BucketMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bucketId?: boolean
    ipAddress?: boolean
    joinedAt?: boolean
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucketMember"]>

  export type BucketMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bucketId?: boolean
    ipAddress?: boolean
    joinedAt?: boolean
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucketMember"]>

  export type BucketMemberSelectScalar = {
    id?: boolean
    bucketId?: boolean
    ipAddress?: boolean
    joinedAt?: boolean
  }

  export type BucketMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bucketId" | "ipAddress" | "joinedAt", ExtArgs["result"]["bucketMember"]>
  export type BucketMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
  }
  export type BucketMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
  }
  export type BucketMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bucket?: boolean | BucketDefaultArgs<ExtArgs>
  }

  export type $BucketMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BucketMember"
    objects: {
      bucket: Prisma.$BucketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bucketId: string
      ipAddress: string | null
      joinedAt: Date
    }, ExtArgs["result"]["bucketMember"]>
    composites: {}
  }

  type BucketMemberGetPayload<S extends boolean | null | undefined | BucketMemberDefaultArgs> = $Result.GetResult<Prisma.$BucketMemberPayload, S>

  type BucketMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BucketMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BucketMemberCountAggregateInputType | true
    }

  export interface BucketMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BucketMember'], meta: { name: 'BucketMember' } }
    /**
     * Find zero or one BucketMember that matches the filter.
     * @param {BucketMemberFindUniqueArgs} args - Arguments to find a BucketMember
     * @example
     * // Get one BucketMember
     * const bucketMember = await prisma.bucketMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BucketMemberFindUniqueArgs>(args: SelectSubset<T, BucketMemberFindUniqueArgs<ExtArgs>>): Prisma__BucketMemberClient<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BucketMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BucketMemberFindUniqueOrThrowArgs} args - Arguments to find a BucketMember
     * @example
     * // Get one BucketMember
     * const bucketMember = await prisma.bucketMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BucketMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, BucketMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BucketMemberClient<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BucketMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketMemberFindFirstArgs} args - Arguments to find a BucketMember
     * @example
     * // Get one BucketMember
     * const bucketMember = await prisma.bucketMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BucketMemberFindFirstArgs>(args?: SelectSubset<T, BucketMemberFindFirstArgs<ExtArgs>>): Prisma__BucketMemberClient<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BucketMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketMemberFindFirstOrThrowArgs} args - Arguments to find a BucketMember
     * @example
     * // Get one BucketMember
     * const bucketMember = await prisma.bucketMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BucketMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, BucketMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__BucketMemberClient<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BucketMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BucketMembers
     * const bucketMembers = await prisma.bucketMember.findMany()
     * 
     * // Get first 10 BucketMembers
     * const bucketMembers = await prisma.bucketMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bucketMemberWithIdOnly = await prisma.bucketMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BucketMemberFindManyArgs>(args?: SelectSubset<T, BucketMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BucketMember.
     * @param {BucketMemberCreateArgs} args - Arguments to create a BucketMember.
     * @example
     * // Create one BucketMember
     * const BucketMember = await prisma.bucketMember.create({
     *   data: {
     *     // ... data to create a BucketMember
     *   }
     * })
     * 
     */
    create<T extends BucketMemberCreateArgs>(args: SelectSubset<T, BucketMemberCreateArgs<ExtArgs>>): Prisma__BucketMemberClient<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BucketMembers.
     * @param {BucketMemberCreateManyArgs} args - Arguments to create many BucketMembers.
     * @example
     * // Create many BucketMembers
     * const bucketMember = await prisma.bucketMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BucketMemberCreateManyArgs>(args?: SelectSubset<T, BucketMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BucketMembers and returns the data saved in the database.
     * @param {BucketMemberCreateManyAndReturnArgs} args - Arguments to create many BucketMembers.
     * @example
     * // Create many BucketMembers
     * const bucketMember = await prisma.bucketMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BucketMembers and only return the `id`
     * const bucketMemberWithIdOnly = await prisma.bucketMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BucketMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, BucketMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BucketMember.
     * @param {BucketMemberDeleteArgs} args - Arguments to delete one BucketMember.
     * @example
     * // Delete one BucketMember
     * const BucketMember = await prisma.bucketMember.delete({
     *   where: {
     *     // ... filter to delete one BucketMember
     *   }
     * })
     * 
     */
    delete<T extends BucketMemberDeleteArgs>(args: SelectSubset<T, BucketMemberDeleteArgs<ExtArgs>>): Prisma__BucketMemberClient<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BucketMember.
     * @param {BucketMemberUpdateArgs} args - Arguments to update one BucketMember.
     * @example
     * // Update one BucketMember
     * const bucketMember = await prisma.bucketMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BucketMemberUpdateArgs>(args: SelectSubset<T, BucketMemberUpdateArgs<ExtArgs>>): Prisma__BucketMemberClient<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BucketMembers.
     * @param {BucketMemberDeleteManyArgs} args - Arguments to filter BucketMembers to delete.
     * @example
     * // Delete a few BucketMembers
     * const { count } = await prisma.bucketMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BucketMemberDeleteManyArgs>(args?: SelectSubset<T, BucketMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BucketMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BucketMembers
     * const bucketMember = await prisma.bucketMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BucketMemberUpdateManyArgs>(args: SelectSubset<T, BucketMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BucketMembers and returns the data updated in the database.
     * @param {BucketMemberUpdateManyAndReturnArgs} args - Arguments to update many BucketMembers.
     * @example
     * // Update many BucketMembers
     * const bucketMember = await prisma.bucketMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BucketMembers and only return the `id`
     * const bucketMemberWithIdOnly = await prisma.bucketMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BucketMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, BucketMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BucketMember.
     * @param {BucketMemberUpsertArgs} args - Arguments to update or create a BucketMember.
     * @example
     * // Update or create a BucketMember
     * const bucketMember = await prisma.bucketMember.upsert({
     *   create: {
     *     // ... data to create a BucketMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BucketMember we want to update
     *   }
     * })
     */
    upsert<T extends BucketMemberUpsertArgs>(args: SelectSubset<T, BucketMemberUpsertArgs<ExtArgs>>): Prisma__BucketMemberClient<$Result.GetResult<Prisma.$BucketMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BucketMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketMemberCountArgs} args - Arguments to filter BucketMembers to count.
     * @example
     * // Count the number of BucketMembers
     * const count = await prisma.bucketMember.count({
     *   where: {
     *     // ... the filter for the BucketMembers we want to count
     *   }
     * })
    **/
    count<T extends BucketMemberCountArgs>(
      args?: Subset<T, BucketMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BucketMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BucketMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BucketMemberAggregateArgs>(args: Subset<T, BucketMemberAggregateArgs>): Prisma.PrismaPromise<GetBucketMemberAggregateType<T>>

    /**
     * Group by BucketMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BucketMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BucketMemberGroupByArgs['orderBy'] }
        : { orderBy?: BucketMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BucketMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBucketMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BucketMember model
   */
  readonly fields: BucketMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BucketMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BucketMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bucket<T extends BucketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BucketDefaultArgs<ExtArgs>>): Prisma__BucketClient<$Result.GetResult<Prisma.$BucketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BucketMember model
   */
  interface BucketMemberFieldRefs {
    readonly id: FieldRef<"BucketMember", 'String'>
    readonly bucketId: FieldRef<"BucketMember", 'String'>
    readonly ipAddress: FieldRef<"BucketMember", 'String'>
    readonly joinedAt: FieldRef<"BucketMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BucketMember findUnique
   */
  export type BucketMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberInclude<ExtArgs> | null
    /**
     * Filter, which BucketMember to fetch.
     */
    where: BucketMemberWhereUniqueInput
  }

  /**
   * BucketMember findUniqueOrThrow
   */
  export type BucketMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberInclude<ExtArgs> | null
    /**
     * Filter, which BucketMember to fetch.
     */
    where: BucketMemberWhereUniqueInput
  }

  /**
   * BucketMember findFirst
   */
  export type BucketMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberInclude<ExtArgs> | null
    /**
     * Filter, which BucketMember to fetch.
     */
    where?: BucketMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketMembers to fetch.
     */
    orderBy?: BucketMemberOrderByWithRelationInput | BucketMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BucketMembers.
     */
    cursor?: BucketMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BucketMembers.
     */
    distinct?: BucketMemberScalarFieldEnum | BucketMemberScalarFieldEnum[]
  }

  /**
   * BucketMember findFirstOrThrow
   */
  export type BucketMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberInclude<ExtArgs> | null
    /**
     * Filter, which BucketMember to fetch.
     */
    where?: BucketMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketMembers to fetch.
     */
    orderBy?: BucketMemberOrderByWithRelationInput | BucketMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BucketMembers.
     */
    cursor?: BucketMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BucketMembers.
     */
    distinct?: BucketMemberScalarFieldEnum | BucketMemberScalarFieldEnum[]
  }

  /**
   * BucketMember findMany
   */
  export type BucketMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberInclude<ExtArgs> | null
    /**
     * Filter, which BucketMembers to fetch.
     */
    where?: BucketMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketMembers to fetch.
     */
    orderBy?: BucketMemberOrderByWithRelationInput | BucketMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BucketMembers.
     */
    cursor?: BucketMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketMembers.
     */
    skip?: number
    distinct?: BucketMemberScalarFieldEnum | BucketMemberScalarFieldEnum[]
  }

  /**
   * BucketMember create
   */
  export type BucketMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a BucketMember.
     */
    data: XOR<BucketMemberCreateInput, BucketMemberUncheckedCreateInput>
  }

  /**
   * BucketMember createMany
   */
  export type BucketMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BucketMembers.
     */
    data: BucketMemberCreateManyInput | BucketMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BucketMember createManyAndReturn
   */
  export type BucketMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * The data used to create many BucketMembers.
     */
    data: BucketMemberCreateManyInput | BucketMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BucketMember update
   */
  export type BucketMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a BucketMember.
     */
    data: XOR<BucketMemberUpdateInput, BucketMemberUncheckedUpdateInput>
    /**
     * Choose, which BucketMember to update.
     */
    where: BucketMemberWhereUniqueInput
  }

  /**
   * BucketMember updateMany
   */
  export type BucketMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BucketMembers.
     */
    data: XOR<BucketMemberUpdateManyMutationInput, BucketMemberUncheckedUpdateManyInput>
    /**
     * Filter which BucketMembers to update
     */
    where?: BucketMemberWhereInput
    /**
     * Limit how many BucketMembers to update.
     */
    limit?: number
  }

  /**
   * BucketMember updateManyAndReturn
   */
  export type BucketMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * The data used to update BucketMembers.
     */
    data: XOR<BucketMemberUpdateManyMutationInput, BucketMemberUncheckedUpdateManyInput>
    /**
     * Filter which BucketMembers to update
     */
    where?: BucketMemberWhereInput
    /**
     * Limit how many BucketMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BucketMember upsert
   */
  export type BucketMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the BucketMember to update in case it exists.
     */
    where: BucketMemberWhereUniqueInput
    /**
     * In case the BucketMember found by the `where` argument doesn't exist, create a new BucketMember with this data.
     */
    create: XOR<BucketMemberCreateInput, BucketMemberUncheckedCreateInput>
    /**
     * In case the BucketMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BucketMemberUpdateInput, BucketMemberUncheckedUpdateInput>
  }

  /**
   * BucketMember delete
   */
  export type BucketMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberInclude<ExtArgs> | null
    /**
     * Filter which BucketMember to delete.
     */
    where: BucketMemberWhereUniqueInput
  }

  /**
   * BucketMember deleteMany
   */
  export type BucketMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BucketMembers to delete
     */
    where?: BucketMemberWhereInput
    /**
     * Limit how many BucketMembers to delete.
     */
    limit?: number
  }

  /**
   * BucketMember without action
   */
  export type BucketMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketMember
     */
    select?: BucketMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BucketMember
     */
    omit?: BucketMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketMemberInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    githubId: 'githubId',
    email: 'email',
    username: 'username',
    name: 'name',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WaitlistScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WaitlistScalarFieldEnum = (typeof WaitlistScalarFieldEnum)[keyof typeof WaitlistScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    lemonOrderId: 'lemonOrderId',
    userId: 'userId',
    productId: 'productId',
    variantId: 'variantId',
    amount: 'amount',
    purchasedAt: 'purchasedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const GithubInstallationScalarFieldEnum: {
    id: 'id',
    installationId: 'installationId',
    userId: 'userId',
    permissions: 'permissions',
    repositorySelection: 'repositorySelection',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GithubInstallationScalarFieldEnum = (typeof GithubInstallationScalarFieldEnum)[keyof typeof GithubInstallationScalarFieldEnum]


  export const RepositoryScalarFieldEnum: {
    id: 'id',
    githubRepoId: 'githubRepoId',
    installationId: 'installationId',
    name: 'name',
    description: 'description',
    languages: 'languages',
    stars: 'stars',
    forks: 'forks',
    watchers: 'watchers',
    members: 'members',
    lastFetched: 'lastFetched',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum]


  export const ShareLinkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    repositoryId: 'repositoryId',
    token: 'token',
    name: 'name',
    description: 'description',
    password: 'password',
    expiresAt: 'expiresAt',
    maxMembers: 'maxMembers',
    memberCount: 'memberCount',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShareLinkScalarFieldEnum = (typeof ShareLinkScalarFieldEnum)[keyof typeof ShareLinkScalarFieldEnum]


  export const ShareMemberScalarFieldEnum: {
    id: 'id',
    shareLinkId: 'shareLinkId',
    ipAddress: 'ipAddress',
    joinedAt: 'joinedAt'
  };

  export type ShareMemberScalarFieldEnum = (typeof ShareMemberScalarFieldEnum)[keyof typeof ShareMemberScalarFieldEnum]


  export const BucketScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    name: 'name',
    description: 'description',
    password: 'password',
    expiresAt: 'expiresAt',
    maxMembers: 'maxMembers',
    memberCount: 'memberCount',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BucketScalarFieldEnum = (typeof BucketScalarFieldEnum)[keyof typeof BucketScalarFieldEnum]


  export const BucketRepositoryScalarFieldEnum: {
    id: 'id',
    bucketId: 'bucketId',
    repositoryId: 'repositoryId',
    createdAt: 'createdAt'
  };

  export type BucketRepositoryScalarFieldEnum = (typeof BucketRepositoryScalarFieldEnum)[keyof typeof BucketRepositoryScalarFieldEnum]


  export const BucketMemberScalarFieldEnum: {
    id: 'id',
    bucketId: 'bucketId',
    ipAddress: 'ipAddress',
    joinedAt: 'joinedAt'
  };

  export type BucketMemberScalarFieldEnum = (typeof BucketMemberScalarFieldEnum)[keyof typeof BucketMemberScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    githubId?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    githubInstallation?: GithubInstallationListRelationFilter
    shareLinks?: ShareLinkListRelationFilter
    buckets?: BucketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    githubId?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    githubInstallation?: GithubInstallationOrderByRelationAggregateInput
    shareLinks?: ShareLinkOrderByRelationAggregateInput
    buckets?: BucketOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    githubId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    githubInstallation?: GithubInstallationListRelationFilter
    shareLinks?: ShareLinkListRelationFilter
    buckets?: BucketListRelationFilter
  }, "id" | "githubId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    githubId?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    githubId?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WaitlistWhereInput = {
    AND?: WaitlistWhereInput | WaitlistWhereInput[]
    OR?: WaitlistWhereInput[]
    NOT?: WaitlistWhereInput | WaitlistWhereInput[]
    id?: IntFilter<"Waitlist"> | number
    email?: StringFilter<"Waitlist"> | string
    createdAt?: DateTimeFilter<"Waitlist"> | Date | string
    updatedAt?: DateTimeFilter<"Waitlist"> | Date | string
  }

  export type WaitlistOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaitlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: WaitlistWhereInput | WaitlistWhereInput[]
    OR?: WaitlistWhereInput[]
    NOT?: WaitlistWhereInput | WaitlistWhereInput[]
    createdAt?: DateTimeFilter<"Waitlist"> | Date | string
    updatedAt?: DateTimeFilter<"Waitlist"> | Date | string
  }, "id" | "email">

  export type WaitlistOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WaitlistCountOrderByAggregateInput
    _avg?: WaitlistAvgOrderByAggregateInput
    _max?: WaitlistMaxOrderByAggregateInput
    _min?: WaitlistMinOrderByAggregateInput
    _sum?: WaitlistSumOrderByAggregateInput
  }

  export type WaitlistScalarWhereWithAggregatesInput = {
    AND?: WaitlistScalarWhereWithAggregatesInput | WaitlistScalarWhereWithAggregatesInput[]
    OR?: WaitlistScalarWhereWithAggregatesInput[]
    NOT?: WaitlistScalarWhereWithAggregatesInput | WaitlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Waitlist"> | number
    email?: StringWithAggregatesFilter<"Waitlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Waitlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Waitlist"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    lemonOrderId?: StringFilter<"Order"> | string
    userId?: IntFilter<"Order"> | number
    productId?: IntFilter<"Order"> | number
    variantId?: IntFilter<"Order"> | number
    amount?: FloatFilter<"Order"> | number
    purchasedAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    lemonOrderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    amount?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lemonOrderId?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: IntFilter<"Order"> | number
    productId?: IntFilter<"Order"> | number
    variantId?: IntFilter<"Order"> | number
    amount?: FloatFilter<"Order"> | number
    purchasedAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "lemonOrderId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    lemonOrderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    amount?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    lemonOrderId?: StringWithAggregatesFilter<"Order"> | string
    userId?: IntWithAggregatesFilter<"Order"> | number
    productId?: IntWithAggregatesFilter<"Order"> | number
    variantId?: IntWithAggregatesFilter<"Order"> | number
    amount?: FloatWithAggregatesFilter<"Order"> | number
    purchasedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type GithubInstallationWhereInput = {
    AND?: GithubInstallationWhereInput | GithubInstallationWhereInput[]
    OR?: GithubInstallationWhereInput[]
    NOT?: GithubInstallationWhereInput | GithubInstallationWhereInput[]
    id?: IntFilter<"GithubInstallation"> | number
    installationId?: StringFilter<"GithubInstallation"> | string
    userId?: IntFilter<"GithubInstallation"> | number
    permissions?: JsonNullableFilter<"GithubInstallation">
    repositorySelection?: StringFilter<"GithubInstallation"> | string
    createdAt?: DateTimeFilter<"GithubInstallation"> | Date | string
    updatedAt?: DateTimeFilter<"GithubInstallation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repositories?: RepositoryListRelationFilter
  }

  export type GithubInstallationOrderByWithRelationInput = {
    id?: SortOrder
    installationId?: SortOrder
    userId?: SortOrder
    permissions?: SortOrderInput | SortOrder
    repositorySelection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    repositories?: RepositoryOrderByRelationAggregateInput
  }

  export type GithubInstallationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    installationId?: string
    AND?: GithubInstallationWhereInput | GithubInstallationWhereInput[]
    OR?: GithubInstallationWhereInput[]
    NOT?: GithubInstallationWhereInput | GithubInstallationWhereInput[]
    userId?: IntFilter<"GithubInstallation"> | number
    permissions?: JsonNullableFilter<"GithubInstallation">
    repositorySelection?: StringFilter<"GithubInstallation"> | string
    createdAt?: DateTimeFilter<"GithubInstallation"> | Date | string
    updatedAt?: DateTimeFilter<"GithubInstallation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repositories?: RepositoryListRelationFilter
  }, "id" | "installationId">

  export type GithubInstallationOrderByWithAggregationInput = {
    id?: SortOrder
    installationId?: SortOrder
    userId?: SortOrder
    permissions?: SortOrderInput | SortOrder
    repositorySelection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GithubInstallationCountOrderByAggregateInput
    _avg?: GithubInstallationAvgOrderByAggregateInput
    _max?: GithubInstallationMaxOrderByAggregateInput
    _min?: GithubInstallationMinOrderByAggregateInput
    _sum?: GithubInstallationSumOrderByAggregateInput
  }

  export type GithubInstallationScalarWhereWithAggregatesInput = {
    AND?: GithubInstallationScalarWhereWithAggregatesInput | GithubInstallationScalarWhereWithAggregatesInput[]
    OR?: GithubInstallationScalarWhereWithAggregatesInput[]
    NOT?: GithubInstallationScalarWhereWithAggregatesInput | GithubInstallationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GithubInstallation"> | number
    installationId?: StringWithAggregatesFilter<"GithubInstallation"> | string
    userId?: IntWithAggregatesFilter<"GithubInstallation"> | number
    permissions?: JsonNullableWithAggregatesFilter<"GithubInstallation">
    repositorySelection?: StringWithAggregatesFilter<"GithubInstallation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GithubInstallation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GithubInstallation"> | Date | string
  }

  export type RepositoryWhereInput = {
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    id?: IntFilter<"Repository"> | number
    githubRepoId?: IntFilter<"Repository"> | number
    installationId?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    description?: StringNullableFilter<"Repository"> | string | null
    languages?: JsonNullableFilter<"Repository">
    stars?: IntFilter<"Repository"> | number
    forks?: IntFilter<"Repository"> | number
    watchers?: IntFilter<"Repository"> | number
    members?: IntNullableFilter<"Repository"> | number | null
    lastFetched?: DateTimeFilter<"Repository"> | Date | string
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    updatedAt?: DateTimeFilter<"Repository"> | Date | string
    installation?: XOR<GithubInstallationScalarRelationFilter, GithubInstallationWhereInput>
    shareLinks?: ShareLinkListRelationFilter
    bucketRepositories?: BucketRepositoryListRelationFilter
  }

  export type RepositoryOrderByWithRelationInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    installationId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    stars?: SortOrder
    forks?: SortOrder
    watchers?: SortOrder
    members?: SortOrderInput | SortOrder
    lastFetched?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    installation?: GithubInstallationOrderByWithRelationInput
    shareLinks?: ShareLinkOrderByRelationAggregateInput
    bucketRepositories?: BucketRepositoryOrderByRelationAggregateInput
  }

  export type RepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    githubRepoId?: number
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    installationId?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    description?: StringNullableFilter<"Repository"> | string | null
    languages?: JsonNullableFilter<"Repository">
    stars?: IntFilter<"Repository"> | number
    forks?: IntFilter<"Repository"> | number
    watchers?: IntFilter<"Repository"> | number
    members?: IntNullableFilter<"Repository"> | number | null
    lastFetched?: DateTimeFilter<"Repository"> | Date | string
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    updatedAt?: DateTimeFilter<"Repository"> | Date | string
    installation?: XOR<GithubInstallationScalarRelationFilter, GithubInstallationWhereInput>
    shareLinks?: ShareLinkListRelationFilter
    bucketRepositories?: BucketRepositoryListRelationFilter
  }, "id" | "githubRepoId">

  export type RepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    installationId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    stars?: SortOrder
    forks?: SortOrder
    watchers?: SortOrder
    members?: SortOrderInput | SortOrder
    lastFetched?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RepositoryCountOrderByAggregateInput
    _avg?: RepositoryAvgOrderByAggregateInput
    _max?: RepositoryMaxOrderByAggregateInput
    _min?: RepositoryMinOrderByAggregateInput
    _sum?: RepositorySumOrderByAggregateInput
  }

  export type RepositoryScalarWhereWithAggregatesInput = {
    AND?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    OR?: RepositoryScalarWhereWithAggregatesInput[]
    NOT?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Repository"> | number
    githubRepoId?: IntWithAggregatesFilter<"Repository"> | number
    installationId?: StringWithAggregatesFilter<"Repository"> | string
    name?: StringWithAggregatesFilter<"Repository"> | string
    description?: StringNullableWithAggregatesFilter<"Repository"> | string | null
    languages?: JsonNullableWithAggregatesFilter<"Repository">
    stars?: IntWithAggregatesFilter<"Repository"> | number
    forks?: IntWithAggregatesFilter<"Repository"> | number
    watchers?: IntWithAggregatesFilter<"Repository"> | number
    members?: IntNullableWithAggregatesFilter<"Repository"> | number | null
    lastFetched?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
  }

  export type ShareLinkWhereInput = {
    AND?: ShareLinkWhereInput | ShareLinkWhereInput[]
    OR?: ShareLinkWhereInput[]
    NOT?: ShareLinkWhereInput | ShareLinkWhereInput[]
    id?: StringFilter<"ShareLink"> | string
    userId?: IntFilter<"ShareLink"> | number
    repositoryId?: IntFilter<"ShareLink"> | number
    token?: StringFilter<"ShareLink"> | string
    name?: StringNullableFilter<"ShareLink"> | string | null
    description?: StringNullableFilter<"ShareLink"> | string | null
    password?: StringNullableFilter<"ShareLink"> | string | null
    expiresAt?: DateTimeNullableFilter<"ShareLink"> | Date | string | null
    maxMembers?: IntNullableFilter<"ShareLink"> | number | null
    memberCount?: IntFilter<"ShareLink"> | number
    isActive?: BoolFilter<"ShareLink"> | boolean
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    updatedAt?: DateTimeFilter<"ShareLink"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    members?: ShareMemberListRelationFilter
  }

  export type ShareLinkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    repositoryId?: SortOrder
    token?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    maxMembers?: SortOrderInput | SortOrder
    memberCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    repository?: RepositoryOrderByWithRelationInput
    members?: ShareMemberOrderByRelationAggregateInput
  }

  export type ShareLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ShareLinkWhereInput | ShareLinkWhereInput[]
    OR?: ShareLinkWhereInput[]
    NOT?: ShareLinkWhereInput | ShareLinkWhereInput[]
    userId?: IntFilter<"ShareLink"> | number
    repositoryId?: IntFilter<"ShareLink"> | number
    name?: StringNullableFilter<"ShareLink"> | string | null
    description?: StringNullableFilter<"ShareLink"> | string | null
    password?: StringNullableFilter<"ShareLink"> | string | null
    expiresAt?: DateTimeNullableFilter<"ShareLink"> | Date | string | null
    maxMembers?: IntNullableFilter<"ShareLink"> | number | null
    memberCount?: IntFilter<"ShareLink"> | number
    isActive?: BoolFilter<"ShareLink"> | boolean
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    updatedAt?: DateTimeFilter<"ShareLink"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    members?: ShareMemberListRelationFilter
  }, "id" | "token">

  export type ShareLinkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    repositoryId?: SortOrder
    token?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    maxMembers?: SortOrderInput | SortOrder
    memberCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShareLinkCountOrderByAggregateInput
    _avg?: ShareLinkAvgOrderByAggregateInput
    _max?: ShareLinkMaxOrderByAggregateInput
    _min?: ShareLinkMinOrderByAggregateInput
    _sum?: ShareLinkSumOrderByAggregateInput
  }

  export type ShareLinkScalarWhereWithAggregatesInput = {
    AND?: ShareLinkScalarWhereWithAggregatesInput | ShareLinkScalarWhereWithAggregatesInput[]
    OR?: ShareLinkScalarWhereWithAggregatesInput[]
    NOT?: ShareLinkScalarWhereWithAggregatesInput | ShareLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShareLink"> | string
    userId?: IntWithAggregatesFilter<"ShareLink"> | number
    repositoryId?: IntWithAggregatesFilter<"ShareLink"> | number
    token?: StringWithAggregatesFilter<"ShareLink"> | string
    name?: StringNullableWithAggregatesFilter<"ShareLink"> | string | null
    description?: StringNullableWithAggregatesFilter<"ShareLink"> | string | null
    password?: StringNullableWithAggregatesFilter<"ShareLink"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ShareLink"> | Date | string | null
    maxMembers?: IntNullableWithAggregatesFilter<"ShareLink"> | number | null
    memberCount?: IntWithAggregatesFilter<"ShareLink"> | number
    isActive?: BoolWithAggregatesFilter<"ShareLink"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ShareLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShareLink"> | Date | string
  }

  export type ShareMemberWhereInput = {
    AND?: ShareMemberWhereInput | ShareMemberWhereInput[]
    OR?: ShareMemberWhereInput[]
    NOT?: ShareMemberWhereInput | ShareMemberWhereInput[]
    id?: StringFilter<"ShareMember"> | string
    shareLinkId?: StringFilter<"ShareMember"> | string
    ipAddress?: StringNullableFilter<"ShareMember"> | string | null
    joinedAt?: DateTimeFilter<"ShareMember"> | Date | string
    shareLink?: XOR<ShareLinkScalarRelationFilter, ShareLinkWhereInput>
  }

  export type ShareMemberOrderByWithRelationInput = {
    id?: SortOrder
    shareLinkId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    shareLink?: ShareLinkOrderByWithRelationInput
  }

  export type ShareMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShareMemberWhereInput | ShareMemberWhereInput[]
    OR?: ShareMemberWhereInput[]
    NOT?: ShareMemberWhereInput | ShareMemberWhereInput[]
    shareLinkId?: StringFilter<"ShareMember"> | string
    ipAddress?: StringNullableFilter<"ShareMember"> | string | null
    joinedAt?: DateTimeFilter<"ShareMember"> | Date | string
    shareLink?: XOR<ShareLinkScalarRelationFilter, ShareLinkWhereInput>
  }, "id">

  export type ShareMemberOrderByWithAggregationInput = {
    id?: SortOrder
    shareLinkId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    _count?: ShareMemberCountOrderByAggregateInput
    _max?: ShareMemberMaxOrderByAggregateInput
    _min?: ShareMemberMinOrderByAggregateInput
  }

  export type ShareMemberScalarWhereWithAggregatesInput = {
    AND?: ShareMemberScalarWhereWithAggregatesInput | ShareMemberScalarWhereWithAggregatesInput[]
    OR?: ShareMemberScalarWhereWithAggregatesInput[]
    NOT?: ShareMemberScalarWhereWithAggregatesInput | ShareMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShareMember"> | string
    shareLinkId?: StringWithAggregatesFilter<"ShareMember"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"ShareMember"> | string | null
    joinedAt?: DateTimeWithAggregatesFilter<"ShareMember"> | Date | string
  }

  export type BucketWhereInput = {
    AND?: BucketWhereInput | BucketWhereInput[]
    OR?: BucketWhereInput[]
    NOT?: BucketWhereInput | BucketWhereInput[]
    id?: StringFilter<"Bucket"> | string
    userId?: IntFilter<"Bucket"> | number
    token?: StringFilter<"Bucket"> | string
    name?: StringNullableFilter<"Bucket"> | string | null
    description?: StringNullableFilter<"Bucket"> | string | null
    password?: StringNullableFilter<"Bucket"> | string | null
    expiresAt?: DateTimeNullableFilter<"Bucket"> | Date | string | null
    maxMembers?: IntNullableFilter<"Bucket"> | number | null
    memberCount?: IntFilter<"Bucket"> | number
    isActive?: BoolFilter<"Bucket"> | boolean
    createdAt?: DateTimeFilter<"Bucket"> | Date | string
    updatedAt?: DateTimeFilter<"Bucket"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repositories?: BucketRepositoryListRelationFilter
    members?: BucketMemberListRelationFilter
  }

  export type BucketOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    maxMembers?: SortOrderInput | SortOrder
    memberCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    repositories?: BucketRepositoryOrderByRelationAggregateInput
    members?: BucketMemberOrderByRelationAggregateInput
  }

  export type BucketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: BucketWhereInput | BucketWhereInput[]
    OR?: BucketWhereInput[]
    NOT?: BucketWhereInput | BucketWhereInput[]
    userId?: IntFilter<"Bucket"> | number
    name?: StringNullableFilter<"Bucket"> | string | null
    description?: StringNullableFilter<"Bucket"> | string | null
    password?: StringNullableFilter<"Bucket"> | string | null
    expiresAt?: DateTimeNullableFilter<"Bucket"> | Date | string | null
    maxMembers?: IntNullableFilter<"Bucket"> | number | null
    memberCount?: IntFilter<"Bucket"> | number
    isActive?: BoolFilter<"Bucket"> | boolean
    createdAt?: DateTimeFilter<"Bucket"> | Date | string
    updatedAt?: DateTimeFilter<"Bucket"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repositories?: BucketRepositoryListRelationFilter
    members?: BucketMemberListRelationFilter
  }, "id" | "token">

  export type BucketOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    maxMembers?: SortOrderInput | SortOrder
    memberCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BucketCountOrderByAggregateInput
    _avg?: BucketAvgOrderByAggregateInput
    _max?: BucketMaxOrderByAggregateInput
    _min?: BucketMinOrderByAggregateInput
    _sum?: BucketSumOrderByAggregateInput
  }

  export type BucketScalarWhereWithAggregatesInput = {
    AND?: BucketScalarWhereWithAggregatesInput | BucketScalarWhereWithAggregatesInput[]
    OR?: BucketScalarWhereWithAggregatesInput[]
    NOT?: BucketScalarWhereWithAggregatesInput | BucketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bucket"> | string
    userId?: IntWithAggregatesFilter<"Bucket"> | number
    token?: StringWithAggregatesFilter<"Bucket"> | string
    name?: StringNullableWithAggregatesFilter<"Bucket"> | string | null
    description?: StringNullableWithAggregatesFilter<"Bucket"> | string | null
    password?: StringNullableWithAggregatesFilter<"Bucket"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Bucket"> | Date | string | null
    maxMembers?: IntNullableWithAggregatesFilter<"Bucket"> | number | null
    memberCount?: IntWithAggregatesFilter<"Bucket"> | number
    isActive?: BoolWithAggregatesFilter<"Bucket"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Bucket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bucket"> | Date | string
  }

  export type BucketRepositoryWhereInput = {
    AND?: BucketRepositoryWhereInput | BucketRepositoryWhereInput[]
    OR?: BucketRepositoryWhereInput[]
    NOT?: BucketRepositoryWhereInput | BucketRepositoryWhereInput[]
    id?: StringFilter<"BucketRepository"> | string
    bucketId?: StringFilter<"BucketRepository"> | string
    repositoryId?: IntFilter<"BucketRepository"> | number
    createdAt?: DateTimeFilter<"BucketRepository"> | Date | string
    bucket?: XOR<BucketScalarRelationFilter, BucketWhereInput>
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
  }

  export type BucketRepositoryOrderByWithRelationInput = {
    id?: SortOrder
    bucketId?: SortOrder
    repositoryId?: SortOrder
    createdAt?: SortOrder
    bucket?: BucketOrderByWithRelationInput
    repository?: RepositoryOrderByWithRelationInput
  }

  export type BucketRepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BucketRepositoryWhereInput | BucketRepositoryWhereInput[]
    OR?: BucketRepositoryWhereInput[]
    NOT?: BucketRepositoryWhereInput | BucketRepositoryWhereInput[]
    bucketId?: StringFilter<"BucketRepository"> | string
    repositoryId?: IntFilter<"BucketRepository"> | number
    createdAt?: DateTimeFilter<"BucketRepository"> | Date | string
    bucket?: XOR<BucketScalarRelationFilter, BucketWhereInput>
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
  }, "id">

  export type BucketRepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    bucketId?: SortOrder
    repositoryId?: SortOrder
    createdAt?: SortOrder
    _count?: BucketRepositoryCountOrderByAggregateInput
    _avg?: BucketRepositoryAvgOrderByAggregateInput
    _max?: BucketRepositoryMaxOrderByAggregateInput
    _min?: BucketRepositoryMinOrderByAggregateInput
    _sum?: BucketRepositorySumOrderByAggregateInput
  }

  export type BucketRepositoryScalarWhereWithAggregatesInput = {
    AND?: BucketRepositoryScalarWhereWithAggregatesInput | BucketRepositoryScalarWhereWithAggregatesInput[]
    OR?: BucketRepositoryScalarWhereWithAggregatesInput[]
    NOT?: BucketRepositoryScalarWhereWithAggregatesInput | BucketRepositoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BucketRepository"> | string
    bucketId?: StringWithAggregatesFilter<"BucketRepository"> | string
    repositoryId?: IntWithAggregatesFilter<"BucketRepository"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BucketRepository"> | Date | string
  }

  export type BucketMemberWhereInput = {
    AND?: BucketMemberWhereInput | BucketMemberWhereInput[]
    OR?: BucketMemberWhereInput[]
    NOT?: BucketMemberWhereInput | BucketMemberWhereInput[]
    id?: StringFilter<"BucketMember"> | string
    bucketId?: StringFilter<"BucketMember"> | string
    ipAddress?: StringNullableFilter<"BucketMember"> | string | null
    joinedAt?: DateTimeFilter<"BucketMember"> | Date | string
    bucket?: XOR<BucketScalarRelationFilter, BucketWhereInput>
  }

  export type BucketMemberOrderByWithRelationInput = {
    id?: SortOrder
    bucketId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    bucket?: BucketOrderByWithRelationInput
  }

  export type BucketMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BucketMemberWhereInput | BucketMemberWhereInput[]
    OR?: BucketMemberWhereInput[]
    NOT?: BucketMemberWhereInput | BucketMemberWhereInput[]
    bucketId?: StringFilter<"BucketMember"> | string
    ipAddress?: StringNullableFilter<"BucketMember"> | string | null
    joinedAt?: DateTimeFilter<"BucketMember"> | Date | string
    bucket?: XOR<BucketScalarRelationFilter, BucketWhereInput>
  }, "id">

  export type BucketMemberOrderByWithAggregationInput = {
    id?: SortOrder
    bucketId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    _count?: BucketMemberCountOrderByAggregateInput
    _max?: BucketMemberMaxOrderByAggregateInput
    _min?: BucketMemberMinOrderByAggregateInput
  }

  export type BucketMemberScalarWhereWithAggregatesInput = {
    AND?: BucketMemberScalarWhereWithAggregatesInput | BucketMemberScalarWhereWithAggregatesInput[]
    OR?: BucketMemberScalarWhereWithAggregatesInput[]
    NOT?: BucketMemberScalarWhereWithAggregatesInput | BucketMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BucketMember"> | string
    bucketId?: StringWithAggregatesFilter<"BucketMember"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"BucketMember"> | string | null
    joinedAt?: DateTimeWithAggregatesFilter<"BucketMember"> | Date | string
  }

  export type UserCreateInput = {
    githubId: string
    email?: string | null
    username: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    githubInstallation?: GithubInstallationCreateNestedManyWithoutUserInput
    shareLinks?: ShareLinkCreateNestedManyWithoutUserInput
    buckets?: BucketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    githubId: string
    email?: string | null
    username: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    githubInstallation?: GithubInstallationUncheckedCreateNestedManyWithoutUserInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutUserInput
    buckets?: BucketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    githubInstallation?: GithubInstallationUpdateManyWithoutUserNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutUserNestedInput
    buckets?: BucketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    githubInstallation?: GithubInstallationUncheckedUpdateManyWithoutUserNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutUserNestedInput
    buckets?: BucketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    githubId: string
    email?: string | null
    username: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistCreateInput = {
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaitlistUncheckedCreateInput = {
    id?: number
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaitlistUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistCreateManyInput = {
    id?: number
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaitlistUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    lemonOrderId: string
    productId: number
    variantId: number
    amount: number
    purchasedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    lemonOrderId: string
    userId: number
    productId: number
    variantId: number
    amount: number
    purchasedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lemonOrderId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lemonOrderId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    lemonOrderId: string
    userId: number
    productId: number
    variantId: number
    amount: number
    purchasedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lemonOrderId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lemonOrderId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GithubInstallationCreateInput = {
    installationId: string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGithubInstallationInput
    repositories?: RepositoryCreateNestedManyWithoutInstallationInput
  }

  export type GithubInstallationUncheckedCreateInput = {
    id?: number
    installationId: string
    userId: number
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection: string
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryUncheckedCreateNestedManyWithoutInstallationInput
  }

  export type GithubInstallationUpdateInput = {
    installationId?: StringFieldUpdateOperationsInput | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGithubInstallationNestedInput
    repositories?: RepositoryUpdateManyWithoutInstallationNestedInput
  }

  export type GithubInstallationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    installationId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUncheckedUpdateManyWithoutInstallationNestedInput
  }

  export type GithubInstallationCreateManyInput = {
    id?: number
    installationId: string
    userId: number
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GithubInstallationUpdateManyMutationInput = {
    installationId?: StringFieldUpdateOperationsInput | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GithubInstallationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    installationId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryCreateInput = {
    githubRepoId: number
    name: string
    description?: string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars: number
    forks: number
    watchers: number
    members?: number | null
    lastFetched?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    installation: GithubInstallationCreateNestedOneWithoutRepositoriesInput
    shareLinks?: ShareLinkCreateNestedManyWithoutRepositoryInput
    bucketRepositories?: BucketRepositoryCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateInput = {
    id?: number
    githubRepoId: number
    installationId: string
    name: string
    description?: string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars: number
    forks: number
    watchers: number
    members?: number | null
    lastFetched?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutRepositoryInput
    bucketRepositories?: BucketRepositoryUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUpdateInput = {
    githubRepoId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars?: IntFieldUpdateOperationsInput | number
    forks?: IntFieldUpdateOperationsInput | number
    watchers?: IntFieldUpdateOperationsInput | number
    members?: NullableIntFieldUpdateOperationsInput | number | null
    lastFetched?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installation?: GithubInstallationUpdateOneRequiredWithoutRepositoriesNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutRepositoryNestedInput
    bucketRepositories?: BucketRepositoryUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubRepoId?: IntFieldUpdateOperationsInput | number
    installationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars?: IntFieldUpdateOperationsInput | number
    forks?: IntFieldUpdateOperationsInput | number
    watchers?: IntFieldUpdateOperationsInput | number
    members?: NullableIntFieldUpdateOperationsInput | number | null
    lastFetched?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutRepositoryNestedInput
    bucketRepositories?: BucketRepositoryUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryCreateManyInput = {
    id?: number
    githubRepoId: number
    installationId: string
    name: string
    description?: string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars: number
    forks: number
    watchers: number
    members?: number | null
    lastFetched?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepositoryUpdateManyMutationInput = {
    githubRepoId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars?: IntFieldUpdateOperationsInput | number
    forks?: IntFieldUpdateOperationsInput | number
    watchers?: IntFieldUpdateOperationsInput | number
    members?: NullableIntFieldUpdateOperationsInput | number | null
    lastFetched?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubRepoId?: IntFieldUpdateOperationsInput | number
    installationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars?: IntFieldUpdateOperationsInput | number
    forks?: IntFieldUpdateOperationsInput | number
    watchers?: IntFieldUpdateOperationsInput | number
    members?: NullableIntFieldUpdateOperationsInput | number | null
    lastFetched?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkCreateInput = {
    id?: string
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutShareLinksInput
    repository: RepositoryCreateNestedOneWithoutShareLinksInput
    members?: ShareMemberCreateNestedManyWithoutShareLinkInput
  }

  export type ShareLinkUncheckedCreateInput = {
    id?: string
    userId: number
    repositoryId: number
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ShareMemberUncheckedCreateNestedManyWithoutShareLinkInput
  }

  export type ShareLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShareLinksNestedInput
    repository?: RepositoryUpdateOneRequiredWithoutShareLinksNestedInput
    members?: ShareMemberUpdateManyWithoutShareLinkNestedInput
  }

  export type ShareLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    repositoryId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ShareMemberUncheckedUpdateManyWithoutShareLinkNestedInput
  }

  export type ShareLinkCreateManyInput = {
    id?: string
    userId: number
    repositoryId: number
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShareLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    repositoryId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareMemberCreateInput = {
    id?: string
    ipAddress?: string | null
    joinedAt?: Date | string
    shareLink: ShareLinkCreateNestedOneWithoutMembersInput
  }

  export type ShareMemberUncheckedCreateInput = {
    id?: string
    shareLinkId: string
    ipAddress?: string | null
    joinedAt?: Date | string
  }

  export type ShareMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareLink?: ShareLinkUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ShareMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareLinkId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareMemberCreateManyInput = {
    id?: string
    shareLinkId: string
    ipAddress?: string | null
    joinedAt?: Date | string
  }

  export type ShareMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareLinkId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketCreateInput = {
    id?: string
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBucketsInput
    repositories?: BucketRepositoryCreateNestedManyWithoutBucketInput
    members?: BucketMemberCreateNestedManyWithoutBucketInput
  }

  export type BucketUncheckedCreateInput = {
    id?: string
    userId: number
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: BucketRepositoryUncheckedCreateNestedManyWithoutBucketInput
    members?: BucketMemberUncheckedCreateNestedManyWithoutBucketInput
  }

  export type BucketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBucketsNestedInput
    repositories?: BucketRepositoryUpdateManyWithoutBucketNestedInput
    members?: BucketMemberUpdateManyWithoutBucketNestedInput
  }

  export type BucketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: BucketRepositoryUncheckedUpdateManyWithoutBucketNestedInput
    members?: BucketMemberUncheckedUpdateManyWithoutBucketNestedInput
  }

  export type BucketCreateManyInput = {
    id?: string
    userId: number
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BucketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketRepositoryCreateInput = {
    id?: string
    createdAt?: Date | string
    bucket: BucketCreateNestedOneWithoutRepositoriesInput
    repository: RepositoryCreateNestedOneWithoutBucketRepositoriesInput
  }

  export type BucketRepositoryUncheckedCreateInput = {
    id?: string
    bucketId: string
    repositoryId: number
    createdAt?: Date | string
  }

  export type BucketRepositoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bucket?: BucketUpdateOneRequiredWithoutRepositoriesNestedInput
    repository?: RepositoryUpdateOneRequiredWithoutBucketRepositoriesNestedInput
  }

  export type BucketRepositoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bucketId?: StringFieldUpdateOperationsInput | string
    repositoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketRepositoryCreateManyInput = {
    id?: string
    bucketId: string
    repositoryId: number
    createdAt?: Date | string
  }

  export type BucketRepositoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketRepositoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bucketId?: StringFieldUpdateOperationsInput | string
    repositoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketMemberCreateInput = {
    id?: string
    ipAddress?: string | null
    joinedAt?: Date | string
    bucket: BucketCreateNestedOneWithoutMembersInput
  }

  export type BucketMemberUncheckedCreateInput = {
    id?: string
    bucketId: string
    ipAddress?: string | null
    joinedAt?: Date | string
  }

  export type BucketMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bucket?: BucketUpdateOneRequiredWithoutMembersNestedInput
  }

  export type BucketMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bucketId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketMemberCreateManyInput = {
    id?: string
    bucketId: string
    ipAddress?: string | null
    joinedAt?: Date | string
  }

  export type BucketMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bucketId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type GithubInstallationListRelationFilter = {
    every?: GithubInstallationWhereInput
    some?: GithubInstallationWhereInput
    none?: GithubInstallationWhereInput
  }

  export type ShareLinkListRelationFilter = {
    every?: ShareLinkWhereInput
    some?: ShareLinkWhereInput
    none?: ShareLinkWhereInput
  }

  export type BucketListRelationFilter = {
    every?: BucketWhereInput
    some?: BucketWhereInput
    none?: BucketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GithubInstallationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShareLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BucketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WaitlistCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaitlistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WaitlistMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaitlistMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaitlistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    lemonOrderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    amount?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    amount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    lemonOrderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    amount?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    lemonOrderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    amount?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RepositoryListRelationFilter = {
    every?: RepositoryWhereInput
    some?: RepositoryWhereInput
    none?: RepositoryWhereInput
  }

  export type RepositoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GithubInstallationCountOrderByAggregateInput = {
    id?: SortOrder
    installationId?: SortOrder
    userId?: SortOrder
    permissions?: SortOrder
    repositorySelection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GithubInstallationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type GithubInstallationMaxOrderByAggregateInput = {
    id?: SortOrder
    installationId?: SortOrder
    userId?: SortOrder
    repositorySelection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GithubInstallationMinOrderByAggregateInput = {
    id?: SortOrder
    installationId?: SortOrder
    userId?: SortOrder
    repositorySelection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GithubInstallationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GithubInstallationScalarRelationFilter = {
    is?: GithubInstallationWhereInput
    isNot?: GithubInstallationWhereInput
  }

  export type BucketRepositoryListRelationFilter = {
    every?: BucketRepositoryWhereInput
    some?: BucketRepositoryWhereInput
    none?: BucketRepositoryWhereInput
  }

  export type BucketRepositoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    installationId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    languages?: SortOrder
    stars?: SortOrder
    forks?: SortOrder
    watchers?: SortOrder
    members?: SortOrder
    lastFetched?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositoryAvgOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    stars?: SortOrder
    forks?: SortOrder
    watchers?: SortOrder
    members?: SortOrder
  }

  export type RepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    installationId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    stars?: SortOrder
    forks?: SortOrder
    watchers?: SortOrder
    members?: SortOrder
    lastFetched?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    installationId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    stars?: SortOrder
    forks?: SortOrder
    watchers?: SortOrder
    members?: SortOrder
    lastFetched?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositorySumOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    stars?: SortOrder
    forks?: SortOrder
    watchers?: SortOrder
    members?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RepositoryScalarRelationFilter = {
    is?: RepositoryWhereInput
    isNot?: RepositoryWhereInput
  }

  export type ShareMemberListRelationFilter = {
    every?: ShareMemberWhereInput
    some?: ShareMemberWhereInput
    none?: ShareMemberWhereInput
  }

  export type ShareMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShareLinkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repositoryId?: SortOrder
    token?: SortOrder
    name?: SortOrder
    description?: SortOrder
    password?: SortOrder
    expiresAt?: SortOrder
    maxMembers?: SortOrder
    memberCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShareLinkAvgOrderByAggregateInput = {
    userId?: SortOrder
    repositoryId?: SortOrder
    maxMembers?: SortOrder
    memberCount?: SortOrder
  }

  export type ShareLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repositoryId?: SortOrder
    token?: SortOrder
    name?: SortOrder
    description?: SortOrder
    password?: SortOrder
    expiresAt?: SortOrder
    maxMembers?: SortOrder
    memberCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShareLinkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repositoryId?: SortOrder
    token?: SortOrder
    name?: SortOrder
    description?: SortOrder
    password?: SortOrder
    expiresAt?: SortOrder
    maxMembers?: SortOrder
    memberCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShareLinkSumOrderByAggregateInput = {
    userId?: SortOrder
    repositoryId?: SortOrder
    maxMembers?: SortOrder
    memberCount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ShareLinkScalarRelationFilter = {
    is?: ShareLinkWhereInput
    isNot?: ShareLinkWhereInput
  }

  export type ShareMemberCountOrderByAggregateInput = {
    id?: SortOrder
    shareLinkId?: SortOrder
    ipAddress?: SortOrder
    joinedAt?: SortOrder
  }

  export type ShareMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    shareLinkId?: SortOrder
    ipAddress?: SortOrder
    joinedAt?: SortOrder
  }

  export type ShareMemberMinOrderByAggregateInput = {
    id?: SortOrder
    shareLinkId?: SortOrder
    ipAddress?: SortOrder
    joinedAt?: SortOrder
  }

  export type BucketMemberListRelationFilter = {
    every?: BucketMemberWhereInput
    some?: BucketMemberWhereInput
    none?: BucketMemberWhereInput
  }

  export type BucketMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BucketCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    name?: SortOrder
    description?: SortOrder
    password?: SortOrder
    expiresAt?: SortOrder
    maxMembers?: SortOrder
    memberCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BucketAvgOrderByAggregateInput = {
    userId?: SortOrder
    maxMembers?: SortOrder
    memberCount?: SortOrder
  }

  export type BucketMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    name?: SortOrder
    description?: SortOrder
    password?: SortOrder
    expiresAt?: SortOrder
    maxMembers?: SortOrder
    memberCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BucketMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    name?: SortOrder
    description?: SortOrder
    password?: SortOrder
    expiresAt?: SortOrder
    maxMembers?: SortOrder
    memberCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BucketSumOrderByAggregateInput = {
    userId?: SortOrder
    maxMembers?: SortOrder
    memberCount?: SortOrder
  }

  export type BucketScalarRelationFilter = {
    is?: BucketWhereInput
    isNot?: BucketWhereInput
  }

  export type BucketRepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    bucketId?: SortOrder
    repositoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type BucketRepositoryAvgOrderByAggregateInput = {
    repositoryId?: SortOrder
  }

  export type BucketRepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    bucketId?: SortOrder
    repositoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type BucketRepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    bucketId?: SortOrder
    repositoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type BucketRepositorySumOrderByAggregateInput = {
    repositoryId?: SortOrder
  }

  export type BucketMemberCountOrderByAggregateInput = {
    id?: SortOrder
    bucketId?: SortOrder
    ipAddress?: SortOrder
    joinedAt?: SortOrder
  }

  export type BucketMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    bucketId?: SortOrder
    ipAddress?: SortOrder
    joinedAt?: SortOrder
  }

  export type BucketMemberMinOrderByAggregateInput = {
    id?: SortOrder
    bucketId?: SortOrder
    ipAddress?: SortOrder
    joinedAt?: SortOrder
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type GithubInstallationCreateNestedManyWithoutUserInput = {
    create?: XOR<GithubInstallationCreateWithoutUserInput, GithubInstallationUncheckedCreateWithoutUserInput> | GithubInstallationCreateWithoutUserInput[] | GithubInstallationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GithubInstallationCreateOrConnectWithoutUserInput | GithubInstallationCreateOrConnectWithoutUserInput[]
    createMany?: GithubInstallationCreateManyUserInputEnvelope
    connect?: GithubInstallationWhereUniqueInput | GithubInstallationWhereUniqueInput[]
  }

  export type ShareLinkCreateNestedManyWithoutUserInput = {
    create?: XOR<ShareLinkCreateWithoutUserInput, ShareLinkUncheckedCreateWithoutUserInput> | ShareLinkCreateWithoutUserInput[] | ShareLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutUserInput | ShareLinkCreateOrConnectWithoutUserInput[]
    createMany?: ShareLinkCreateManyUserInputEnvelope
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
  }

  export type BucketCreateNestedManyWithoutUserInput = {
    create?: XOR<BucketCreateWithoutUserInput, BucketUncheckedCreateWithoutUserInput> | BucketCreateWithoutUserInput[] | BucketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketCreateOrConnectWithoutUserInput | BucketCreateOrConnectWithoutUserInput[]
    createMany?: BucketCreateManyUserInputEnvelope
    connect?: BucketWhereUniqueInput | BucketWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type GithubInstallationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GithubInstallationCreateWithoutUserInput, GithubInstallationUncheckedCreateWithoutUserInput> | GithubInstallationCreateWithoutUserInput[] | GithubInstallationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GithubInstallationCreateOrConnectWithoutUserInput | GithubInstallationCreateOrConnectWithoutUserInput[]
    createMany?: GithubInstallationCreateManyUserInputEnvelope
    connect?: GithubInstallationWhereUniqueInput | GithubInstallationWhereUniqueInput[]
  }

  export type ShareLinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShareLinkCreateWithoutUserInput, ShareLinkUncheckedCreateWithoutUserInput> | ShareLinkCreateWithoutUserInput[] | ShareLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutUserInput | ShareLinkCreateOrConnectWithoutUserInput[]
    createMany?: ShareLinkCreateManyUserInputEnvelope
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
  }

  export type BucketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BucketCreateWithoutUserInput, BucketUncheckedCreateWithoutUserInput> | BucketCreateWithoutUserInput[] | BucketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketCreateOrConnectWithoutUserInput | BucketCreateOrConnectWithoutUserInput[]
    createMany?: BucketCreateManyUserInputEnvelope
    connect?: BucketWhereUniqueInput | BucketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type GithubInstallationUpdateManyWithoutUserNestedInput = {
    create?: XOR<GithubInstallationCreateWithoutUserInput, GithubInstallationUncheckedCreateWithoutUserInput> | GithubInstallationCreateWithoutUserInput[] | GithubInstallationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GithubInstallationCreateOrConnectWithoutUserInput | GithubInstallationCreateOrConnectWithoutUserInput[]
    upsert?: GithubInstallationUpsertWithWhereUniqueWithoutUserInput | GithubInstallationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GithubInstallationCreateManyUserInputEnvelope
    set?: GithubInstallationWhereUniqueInput | GithubInstallationWhereUniqueInput[]
    disconnect?: GithubInstallationWhereUniqueInput | GithubInstallationWhereUniqueInput[]
    delete?: GithubInstallationWhereUniqueInput | GithubInstallationWhereUniqueInput[]
    connect?: GithubInstallationWhereUniqueInput | GithubInstallationWhereUniqueInput[]
    update?: GithubInstallationUpdateWithWhereUniqueWithoutUserInput | GithubInstallationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GithubInstallationUpdateManyWithWhereWithoutUserInput | GithubInstallationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GithubInstallationScalarWhereInput | GithubInstallationScalarWhereInput[]
  }

  export type ShareLinkUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShareLinkCreateWithoutUserInput, ShareLinkUncheckedCreateWithoutUserInput> | ShareLinkCreateWithoutUserInput[] | ShareLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutUserInput | ShareLinkCreateOrConnectWithoutUserInput[]
    upsert?: ShareLinkUpsertWithWhereUniqueWithoutUserInput | ShareLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShareLinkCreateManyUserInputEnvelope
    set?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    disconnect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    delete?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    update?: ShareLinkUpdateWithWhereUniqueWithoutUserInput | ShareLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShareLinkUpdateManyWithWhereWithoutUserInput | ShareLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
  }

  export type BucketUpdateManyWithoutUserNestedInput = {
    create?: XOR<BucketCreateWithoutUserInput, BucketUncheckedCreateWithoutUserInput> | BucketCreateWithoutUserInput[] | BucketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketCreateOrConnectWithoutUserInput | BucketCreateOrConnectWithoutUserInput[]
    upsert?: BucketUpsertWithWhereUniqueWithoutUserInput | BucketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BucketCreateManyUserInputEnvelope
    set?: BucketWhereUniqueInput | BucketWhereUniqueInput[]
    disconnect?: BucketWhereUniqueInput | BucketWhereUniqueInput[]
    delete?: BucketWhereUniqueInput | BucketWhereUniqueInput[]
    connect?: BucketWhereUniqueInput | BucketWhereUniqueInput[]
    update?: BucketUpdateWithWhereUniqueWithoutUserInput | BucketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BucketUpdateManyWithWhereWithoutUserInput | BucketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BucketScalarWhereInput | BucketScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type GithubInstallationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GithubInstallationCreateWithoutUserInput, GithubInstallationUncheckedCreateWithoutUserInput> | GithubInstallationCreateWithoutUserInput[] | GithubInstallationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GithubInstallationCreateOrConnectWithoutUserInput | GithubInstallationCreateOrConnectWithoutUserInput[]
    upsert?: GithubInstallationUpsertWithWhereUniqueWithoutUserInput | GithubInstallationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GithubInstallationCreateManyUserInputEnvelope
    set?: GithubInstallationWhereUniqueInput | GithubInstallationWhereUniqueInput[]
    disconnect?: GithubInstallationWhereUniqueInput | GithubInstallationWhereUniqueInput[]
    delete?: GithubInstallationWhereUniqueInput | GithubInstallationWhereUniqueInput[]
    connect?: GithubInstallationWhereUniqueInput | GithubInstallationWhereUniqueInput[]
    update?: GithubInstallationUpdateWithWhereUniqueWithoutUserInput | GithubInstallationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GithubInstallationUpdateManyWithWhereWithoutUserInput | GithubInstallationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GithubInstallationScalarWhereInput | GithubInstallationScalarWhereInput[]
  }

  export type ShareLinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShareLinkCreateWithoutUserInput, ShareLinkUncheckedCreateWithoutUserInput> | ShareLinkCreateWithoutUserInput[] | ShareLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutUserInput | ShareLinkCreateOrConnectWithoutUserInput[]
    upsert?: ShareLinkUpsertWithWhereUniqueWithoutUserInput | ShareLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShareLinkCreateManyUserInputEnvelope
    set?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    disconnect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    delete?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    update?: ShareLinkUpdateWithWhereUniqueWithoutUserInput | ShareLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShareLinkUpdateManyWithWhereWithoutUserInput | ShareLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
  }

  export type BucketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BucketCreateWithoutUserInput, BucketUncheckedCreateWithoutUserInput> | BucketCreateWithoutUserInput[] | BucketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketCreateOrConnectWithoutUserInput | BucketCreateOrConnectWithoutUserInput[]
    upsert?: BucketUpsertWithWhereUniqueWithoutUserInput | BucketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BucketCreateManyUserInputEnvelope
    set?: BucketWhereUniqueInput | BucketWhereUniqueInput[]
    disconnect?: BucketWhereUniqueInput | BucketWhereUniqueInput[]
    delete?: BucketWhereUniqueInput | BucketWhereUniqueInput[]
    connect?: BucketWhereUniqueInput | BucketWhereUniqueInput[]
    update?: BucketUpdateWithWhereUniqueWithoutUserInput | BucketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BucketUpdateManyWithWhereWithoutUserInput | BucketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BucketScalarWhereInput | BucketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserCreateNestedOneWithoutGithubInstallationInput = {
    create?: XOR<UserCreateWithoutGithubInstallationInput, UserUncheckedCreateWithoutGithubInstallationInput>
    connectOrCreate?: UserCreateOrConnectWithoutGithubInstallationInput
    connect?: UserWhereUniqueInput
  }

  export type RepositoryCreateNestedManyWithoutInstallationInput = {
    create?: XOR<RepositoryCreateWithoutInstallationInput, RepositoryUncheckedCreateWithoutInstallationInput> | RepositoryCreateWithoutInstallationInput[] | RepositoryUncheckedCreateWithoutInstallationInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutInstallationInput | RepositoryCreateOrConnectWithoutInstallationInput[]
    createMany?: RepositoryCreateManyInstallationInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type RepositoryUncheckedCreateNestedManyWithoutInstallationInput = {
    create?: XOR<RepositoryCreateWithoutInstallationInput, RepositoryUncheckedCreateWithoutInstallationInput> | RepositoryCreateWithoutInstallationInput[] | RepositoryUncheckedCreateWithoutInstallationInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutInstallationInput | RepositoryCreateOrConnectWithoutInstallationInput[]
    createMany?: RepositoryCreateManyInstallationInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGithubInstallationNestedInput = {
    create?: XOR<UserCreateWithoutGithubInstallationInput, UserUncheckedCreateWithoutGithubInstallationInput>
    connectOrCreate?: UserCreateOrConnectWithoutGithubInstallationInput
    upsert?: UserUpsertWithoutGithubInstallationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGithubInstallationInput, UserUpdateWithoutGithubInstallationInput>, UserUncheckedUpdateWithoutGithubInstallationInput>
  }

  export type RepositoryUpdateManyWithoutInstallationNestedInput = {
    create?: XOR<RepositoryCreateWithoutInstallationInput, RepositoryUncheckedCreateWithoutInstallationInput> | RepositoryCreateWithoutInstallationInput[] | RepositoryUncheckedCreateWithoutInstallationInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutInstallationInput | RepositoryCreateOrConnectWithoutInstallationInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutInstallationInput | RepositoryUpsertWithWhereUniqueWithoutInstallationInput[]
    createMany?: RepositoryCreateManyInstallationInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutInstallationInput | RepositoryUpdateWithWhereUniqueWithoutInstallationInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutInstallationInput | RepositoryUpdateManyWithWhereWithoutInstallationInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type RepositoryUncheckedUpdateManyWithoutInstallationNestedInput = {
    create?: XOR<RepositoryCreateWithoutInstallationInput, RepositoryUncheckedCreateWithoutInstallationInput> | RepositoryCreateWithoutInstallationInput[] | RepositoryUncheckedCreateWithoutInstallationInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutInstallationInput | RepositoryCreateOrConnectWithoutInstallationInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutInstallationInput | RepositoryUpsertWithWhereUniqueWithoutInstallationInput[]
    createMany?: RepositoryCreateManyInstallationInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutInstallationInput | RepositoryUpdateWithWhereUniqueWithoutInstallationInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutInstallationInput | RepositoryUpdateManyWithWhereWithoutInstallationInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type GithubInstallationCreateNestedOneWithoutRepositoriesInput = {
    create?: XOR<GithubInstallationCreateWithoutRepositoriesInput, GithubInstallationUncheckedCreateWithoutRepositoriesInput>
    connectOrCreate?: GithubInstallationCreateOrConnectWithoutRepositoriesInput
    connect?: GithubInstallationWhereUniqueInput
  }

  export type ShareLinkCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<ShareLinkCreateWithoutRepositoryInput, ShareLinkUncheckedCreateWithoutRepositoryInput> | ShareLinkCreateWithoutRepositoryInput[] | ShareLinkUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutRepositoryInput | ShareLinkCreateOrConnectWithoutRepositoryInput[]
    createMany?: ShareLinkCreateManyRepositoryInputEnvelope
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
  }

  export type BucketRepositoryCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<BucketRepositoryCreateWithoutRepositoryInput, BucketRepositoryUncheckedCreateWithoutRepositoryInput> | BucketRepositoryCreateWithoutRepositoryInput[] | BucketRepositoryUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: BucketRepositoryCreateOrConnectWithoutRepositoryInput | BucketRepositoryCreateOrConnectWithoutRepositoryInput[]
    createMany?: BucketRepositoryCreateManyRepositoryInputEnvelope
    connect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
  }

  export type ShareLinkUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<ShareLinkCreateWithoutRepositoryInput, ShareLinkUncheckedCreateWithoutRepositoryInput> | ShareLinkCreateWithoutRepositoryInput[] | ShareLinkUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutRepositoryInput | ShareLinkCreateOrConnectWithoutRepositoryInput[]
    createMany?: ShareLinkCreateManyRepositoryInputEnvelope
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
  }

  export type BucketRepositoryUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<BucketRepositoryCreateWithoutRepositoryInput, BucketRepositoryUncheckedCreateWithoutRepositoryInput> | BucketRepositoryCreateWithoutRepositoryInput[] | BucketRepositoryUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: BucketRepositoryCreateOrConnectWithoutRepositoryInput | BucketRepositoryCreateOrConnectWithoutRepositoryInput[]
    createMany?: BucketRepositoryCreateManyRepositoryInputEnvelope
    connect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GithubInstallationUpdateOneRequiredWithoutRepositoriesNestedInput = {
    create?: XOR<GithubInstallationCreateWithoutRepositoriesInput, GithubInstallationUncheckedCreateWithoutRepositoriesInput>
    connectOrCreate?: GithubInstallationCreateOrConnectWithoutRepositoriesInput
    upsert?: GithubInstallationUpsertWithoutRepositoriesInput
    connect?: GithubInstallationWhereUniqueInput
    update?: XOR<XOR<GithubInstallationUpdateToOneWithWhereWithoutRepositoriesInput, GithubInstallationUpdateWithoutRepositoriesInput>, GithubInstallationUncheckedUpdateWithoutRepositoriesInput>
  }

  export type ShareLinkUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<ShareLinkCreateWithoutRepositoryInput, ShareLinkUncheckedCreateWithoutRepositoryInput> | ShareLinkCreateWithoutRepositoryInput[] | ShareLinkUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutRepositoryInput | ShareLinkCreateOrConnectWithoutRepositoryInput[]
    upsert?: ShareLinkUpsertWithWhereUniqueWithoutRepositoryInput | ShareLinkUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: ShareLinkCreateManyRepositoryInputEnvelope
    set?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    disconnect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    delete?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    update?: ShareLinkUpdateWithWhereUniqueWithoutRepositoryInput | ShareLinkUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: ShareLinkUpdateManyWithWhereWithoutRepositoryInput | ShareLinkUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
  }

  export type BucketRepositoryUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<BucketRepositoryCreateWithoutRepositoryInput, BucketRepositoryUncheckedCreateWithoutRepositoryInput> | BucketRepositoryCreateWithoutRepositoryInput[] | BucketRepositoryUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: BucketRepositoryCreateOrConnectWithoutRepositoryInput | BucketRepositoryCreateOrConnectWithoutRepositoryInput[]
    upsert?: BucketRepositoryUpsertWithWhereUniqueWithoutRepositoryInput | BucketRepositoryUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: BucketRepositoryCreateManyRepositoryInputEnvelope
    set?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    disconnect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    delete?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    connect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    update?: BucketRepositoryUpdateWithWhereUniqueWithoutRepositoryInput | BucketRepositoryUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: BucketRepositoryUpdateManyWithWhereWithoutRepositoryInput | BucketRepositoryUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: BucketRepositoryScalarWhereInput | BucketRepositoryScalarWhereInput[]
  }

  export type ShareLinkUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<ShareLinkCreateWithoutRepositoryInput, ShareLinkUncheckedCreateWithoutRepositoryInput> | ShareLinkCreateWithoutRepositoryInput[] | ShareLinkUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutRepositoryInput | ShareLinkCreateOrConnectWithoutRepositoryInput[]
    upsert?: ShareLinkUpsertWithWhereUniqueWithoutRepositoryInput | ShareLinkUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: ShareLinkCreateManyRepositoryInputEnvelope
    set?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    disconnect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    delete?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    update?: ShareLinkUpdateWithWhereUniqueWithoutRepositoryInput | ShareLinkUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: ShareLinkUpdateManyWithWhereWithoutRepositoryInput | ShareLinkUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
  }

  export type BucketRepositoryUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<BucketRepositoryCreateWithoutRepositoryInput, BucketRepositoryUncheckedCreateWithoutRepositoryInput> | BucketRepositoryCreateWithoutRepositoryInput[] | BucketRepositoryUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: BucketRepositoryCreateOrConnectWithoutRepositoryInput | BucketRepositoryCreateOrConnectWithoutRepositoryInput[]
    upsert?: BucketRepositoryUpsertWithWhereUniqueWithoutRepositoryInput | BucketRepositoryUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: BucketRepositoryCreateManyRepositoryInputEnvelope
    set?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    disconnect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    delete?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    connect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    update?: BucketRepositoryUpdateWithWhereUniqueWithoutRepositoryInput | BucketRepositoryUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: BucketRepositoryUpdateManyWithWhereWithoutRepositoryInput | BucketRepositoryUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: BucketRepositoryScalarWhereInput | BucketRepositoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutShareLinksInput = {
    create?: XOR<UserCreateWithoutShareLinksInput, UserUncheckedCreateWithoutShareLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutShareLinksInput
    connect?: UserWhereUniqueInput
  }

  export type RepositoryCreateNestedOneWithoutShareLinksInput = {
    create?: XOR<RepositoryCreateWithoutShareLinksInput, RepositoryUncheckedCreateWithoutShareLinksInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutShareLinksInput
    connect?: RepositoryWhereUniqueInput
  }

  export type ShareMemberCreateNestedManyWithoutShareLinkInput = {
    create?: XOR<ShareMemberCreateWithoutShareLinkInput, ShareMemberUncheckedCreateWithoutShareLinkInput> | ShareMemberCreateWithoutShareLinkInput[] | ShareMemberUncheckedCreateWithoutShareLinkInput[]
    connectOrCreate?: ShareMemberCreateOrConnectWithoutShareLinkInput | ShareMemberCreateOrConnectWithoutShareLinkInput[]
    createMany?: ShareMemberCreateManyShareLinkInputEnvelope
    connect?: ShareMemberWhereUniqueInput | ShareMemberWhereUniqueInput[]
  }

  export type ShareMemberUncheckedCreateNestedManyWithoutShareLinkInput = {
    create?: XOR<ShareMemberCreateWithoutShareLinkInput, ShareMemberUncheckedCreateWithoutShareLinkInput> | ShareMemberCreateWithoutShareLinkInput[] | ShareMemberUncheckedCreateWithoutShareLinkInput[]
    connectOrCreate?: ShareMemberCreateOrConnectWithoutShareLinkInput | ShareMemberCreateOrConnectWithoutShareLinkInput[]
    createMany?: ShareMemberCreateManyShareLinkInputEnvelope
    connect?: ShareMemberWhereUniqueInput | ShareMemberWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutShareLinksNestedInput = {
    create?: XOR<UserCreateWithoutShareLinksInput, UserUncheckedCreateWithoutShareLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutShareLinksInput
    upsert?: UserUpsertWithoutShareLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShareLinksInput, UserUpdateWithoutShareLinksInput>, UserUncheckedUpdateWithoutShareLinksInput>
  }

  export type RepositoryUpdateOneRequiredWithoutShareLinksNestedInput = {
    create?: XOR<RepositoryCreateWithoutShareLinksInput, RepositoryUncheckedCreateWithoutShareLinksInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutShareLinksInput
    upsert?: RepositoryUpsertWithoutShareLinksInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutShareLinksInput, RepositoryUpdateWithoutShareLinksInput>, RepositoryUncheckedUpdateWithoutShareLinksInput>
  }

  export type ShareMemberUpdateManyWithoutShareLinkNestedInput = {
    create?: XOR<ShareMemberCreateWithoutShareLinkInput, ShareMemberUncheckedCreateWithoutShareLinkInput> | ShareMemberCreateWithoutShareLinkInput[] | ShareMemberUncheckedCreateWithoutShareLinkInput[]
    connectOrCreate?: ShareMemberCreateOrConnectWithoutShareLinkInput | ShareMemberCreateOrConnectWithoutShareLinkInput[]
    upsert?: ShareMemberUpsertWithWhereUniqueWithoutShareLinkInput | ShareMemberUpsertWithWhereUniqueWithoutShareLinkInput[]
    createMany?: ShareMemberCreateManyShareLinkInputEnvelope
    set?: ShareMemberWhereUniqueInput | ShareMemberWhereUniqueInput[]
    disconnect?: ShareMemberWhereUniqueInput | ShareMemberWhereUniqueInput[]
    delete?: ShareMemberWhereUniqueInput | ShareMemberWhereUniqueInput[]
    connect?: ShareMemberWhereUniqueInput | ShareMemberWhereUniqueInput[]
    update?: ShareMemberUpdateWithWhereUniqueWithoutShareLinkInput | ShareMemberUpdateWithWhereUniqueWithoutShareLinkInput[]
    updateMany?: ShareMemberUpdateManyWithWhereWithoutShareLinkInput | ShareMemberUpdateManyWithWhereWithoutShareLinkInput[]
    deleteMany?: ShareMemberScalarWhereInput | ShareMemberScalarWhereInput[]
  }

  export type ShareMemberUncheckedUpdateManyWithoutShareLinkNestedInput = {
    create?: XOR<ShareMemberCreateWithoutShareLinkInput, ShareMemberUncheckedCreateWithoutShareLinkInput> | ShareMemberCreateWithoutShareLinkInput[] | ShareMemberUncheckedCreateWithoutShareLinkInput[]
    connectOrCreate?: ShareMemberCreateOrConnectWithoutShareLinkInput | ShareMemberCreateOrConnectWithoutShareLinkInput[]
    upsert?: ShareMemberUpsertWithWhereUniqueWithoutShareLinkInput | ShareMemberUpsertWithWhereUniqueWithoutShareLinkInput[]
    createMany?: ShareMemberCreateManyShareLinkInputEnvelope
    set?: ShareMemberWhereUniqueInput | ShareMemberWhereUniqueInput[]
    disconnect?: ShareMemberWhereUniqueInput | ShareMemberWhereUniqueInput[]
    delete?: ShareMemberWhereUniqueInput | ShareMemberWhereUniqueInput[]
    connect?: ShareMemberWhereUniqueInput | ShareMemberWhereUniqueInput[]
    update?: ShareMemberUpdateWithWhereUniqueWithoutShareLinkInput | ShareMemberUpdateWithWhereUniqueWithoutShareLinkInput[]
    updateMany?: ShareMemberUpdateManyWithWhereWithoutShareLinkInput | ShareMemberUpdateManyWithWhereWithoutShareLinkInput[]
    deleteMany?: ShareMemberScalarWhereInput | ShareMemberScalarWhereInput[]
  }

  export type ShareLinkCreateNestedOneWithoutMembersInput = {
    create?: XOR<ShareLinkCreateWithoutMembersInput, ShareLinkUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ShareLinkCreateOrConnectWithoutMembersInput
    connect?: ShareLinkWhereUniqueInput
  }

  export type ShareLinkUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ShareLinkCreateWithoutMembersInput, ShareLinkUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ShareLinkCreateOrConnectWithoutMembersInput
    upsert?: ShareLinkUpsertWithoutMembersInput
    connect?: ShareLinkWhereUniqueInput
    update?: XOR<XOR<ShareLinkUpdateToOneWithWhereWithoutMembersInput, ShareLinkUpdateWithoutMembersInput>, ShareLinkUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutBucketsInput = {
    create?: XOR<UserCreateWithoutBucketsInput, UserUncheckedCreateWithoutBucketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBucketsInput
    connect?: UserWhereUniqueInput
  }

  export type BucketRepositoryCreateNestedManyWithoutBucketInput = {
    create?: XOR<BucketRepositoryCreateWithoutBucketInput, BucketRepositoryUncheckedCreateWithoutBucketInput> | BucketRepositoryCreateWithoutBucketInput[] | BucketRepositoryUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: BucketRepositoryCreateOrConnectWithoutBucketInput | BucketRepositoryCreateOrConnectWithoutBucketInput[]
    createMany?: BucketRepositoryCreateManyBucketInputEnvelope
    connect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
  }

  export type BucketMemberCreateNestedManyWithoutBucketInput = {
    create?: XOR<BucketMemberCreateWithoutBucketInput, BucketMemberUncheckedCreateWithoutBucketInput> | BucketMemberCreateWithoutBucketInput[] | BucketMemberUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: BucketMemberCreateOrConnectWithoutBucketInput | BucketMemberCreateOrConnectWithoutBucketInput[]
    createMany?: BucketMemberCreateManyBucketInputEnvelope
    connect?: BucketMemberWhereUniqueInput | BucketMemberWhereUniqueInput[]
  }

  export type BucketRepositoryUncheckedCreateNestedManyWithoutBucketInput = {
    create?: XOR<BucketRepositoryCreateWithoutBucketInput, BucketRepositoryUncheckedCreateWithoutBucketInput> | BucketRepositoryCreateWithoutBucketInput[] | BucketRepositoryUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: BucketRepositoryCreateOrConnectWithoutBucketInput | BucketRepositoryCreateOrConnectWithoutBucketInput[]
    createMany?: BucketRepositoryCreateManyBucketInputEnvelope
    connect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
  }

  export type BucketMemberUncheckedCreateNestedManyWithoutBucketInput = {
    create?: XOR<BucketMemberCreateWithoutBucketInput, BucketMemberUncheckedCreateWithoutBucketInput> | BucketMemberCreateWithoutBucketInput[] | BucketMemberUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: BucketMemberCreateOrConnectWithoutBucketInput | BucketMemberCreateOrConnectWithoutBucketInput[]
    createMany?: BucketMemberCreateManyBucketInputEnvelope
    connect?: BucketMemberWhereUniqueInput | BucketMemberWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBucketsNestedInput = {
    create?: XOR<UserCreateWithoutBucketsInput, UserUncheckedCreateWithoutBucketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBucketsInput
    upsert?: UserUpsertWithoutBucketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBucketsInput, UserUpdateWithoutBucketsInput>, UserUncheckedUpdateWithoutBucketsInput>
  }

  export type BucketRepositoryUpdateManyWithoutBucketNestedInput = {
    create?: XOR<BucketRepositoryCreateWithoutBucketInput, BucketRepositoryUncheckedCreateWithoutBucketInput> | BucketRepositoryCreateWithoutBucketInput[] | BucketRepositoryUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: BucketRepositoryCreateOrConnectWithoutBucketInput | BucketRepositoryCreateOrConnectWithoutBucketInput[]
    upsert?: BucketRepositoryUpsertWithWhereUniqueWithoutBucketInput | BucketRepositoryUpsertWithWhereUniqueWithoutBucketInput[]
    createMany?: BucketRepositoryCreateManyBucketInputEnvelope
    set?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    disconnect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    delete?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    connect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    update?: BucketRepositoryUpdateWithWhereUniqueWithoutBucketInput | BucketRepositoryUpdateWithWhereUniqueWithoutBucketInput[]
    updateMany?: BucketRepositoryUpdateManyWithWhereWithoutBucketInput | BucketRepositoryUpdateManyWithWhereWithoutBucketInput[]
    deleteMany?: BucketRepositoryScalarWhereInput | BucketRepositoryScalarWhereInput[]
  }

  export type BucketMemberUpdateManyWithoutBucketNestedInput = {
    create?: XOR<BucketMemberCreateWithoutBucketInput, BucketMemberUncheckedCreateWithoutBucketInput> | BucketMemberCreateWithoutBucketInput[] | BucketMemberUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: BucketMemberCreateOrConnectWithoutBucketInput | BucketMemberCreateOrConnectWithoutBucketInput[]
    upsert?: BucketMemberUpsertWithWhereUniqueWithoutBucketInput | BucketMemberUpsertWithWhereUniqueWithoutBucketInput[]
    createMany?: BucketMemberCreateManyBucketInputEnvelope
    set?: BucketMemberWhereUniqueInput | BucketMemberWhereUniqueInput[]
    disconnect?: BucketMemberWhereUniqueInput | BucketMemberWhereUniqueInput[]
    delete?: BucketMemberWhereUniqueInput | BucketMemberWhereUniqueInput[]
    connect?: BucketMemberWhereUniqueInput | BucketMemberWhereUniqueInput[]
    update?: BucketMemberUpdateWithWhereUniqueWithoutBucketInput | BucketMemberUpdateWithWhereUniqueWithoutBucketInput[]
    updateMany?: BucketMemberUpdateManyWithWhereWithoutBucketInput | BucketMemberUpdateManyWithWhereWithoutBucketInput[]
    deleteMany?: BucketMemberScalarWhereInput | BucketMemberScalarWhereInput[]
  }

  export type BucketRepositoryUncheckedUpdateManyWithoutBucketNestedInput = {
    create?: XOR<BucketRepositoryCreateWithoutBucketInput, BucketRepositoryUncheckedCreateWithoutBucketInput> | BucketRepositoryCreateWithoutBucketInput[] | BucketRepositoryUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: BucketRepositoryCreateOrConnectWithoutBucketInput | BucketRepositoryCreateOrConnectWithoutBucketInput[]
    upsert?: BucketRepositoryUpsertWithWhereUniqueWithoutBucketInput | BucketRepositoryUpsertWithWhereUniqueWithoutBucketInput[]
    createMany?: BucketRepositoryCreateManyBucketInputEnvelope
    set?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    disconnect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    delete?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    connect?: BucketRepositoryWhereUniqueInput | BucketRepositoryWhereUniqueInput[]
    update?: BucketRepositoryUpdateWithWhereUniqueWithoutBucketInput | BucketRepositoryUpdateWithWhereUniqueWithoutBucketInput[]
    updateMany?: BucketRepositoryUpdateManyWithWhereWithoutBucketInput | BucketRepositoryUpdateManyWithWhereWithoutBucketInput[]
    deleteMany?: BucketRepositoryScalarWhereInput | BucketRepositoryScalarWhereInput[]
  }

  export type BucketMemberUncheckedUpdateManyWithoutBucketNestedInput = {
    create?: XOR<BucketMemberCreateWithoutBucketInput, BucketMemberUncheckedCreateWithoutBucketInput> | BucketMemberCreateWithoutBucketInput[] | BucketMemberUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: BucketMemberCreateOrConnectWithoutBucketInput | BucketMemberCreateOrConnectWithoutBucketInput[]
    upsert?: BucketMemberUpsertWithWhereUniqueWithoutBucketInput | BucketMemberUpsertWithWhereUniqueWithoutBucketInput[]
    createMany?: BucketMemberCreateManyBucketInputEnvelope
    set?: BucketMemberWhereUniqueInput | BucketMemberWhereUniqueInput[]
    disconnect?: BucketMemberWhereUniqueInput | BucketMemberWhereUniqueInput[]
    delete?: BucketMemberWhereUniqueInput | BucketMemberWhereUniqueInput[]
    connect?: BucketMemberWhereUniqueInput | BucketMemberWhereUniqueInput[]
    update?: BucketMemberUpdateWithWhereUniqueWithoutBucketInput | BucketMemberUpdateWithWhereUniqueWithoutBucketInput[]
    updateMany?: BucketMemberUpdateManyWithWhereWithoutBucketInput | BucketMemberUpdateManyWithWhereWithoutBucketInput[]
    deleteMany?: BucketMemberScalarWhereInput | BucketMemberScalarWhereInput[]
  }

  export type BucketCreateNestedOneWithoutRepositoriesInput = {
    create?: XOR<BucketCreateWithoutRepositoriesInput, BucketUncheckedCreateWithoutRepositoriesInput>
    connectOrCreate?: BucketCreateOrConnectWithoutRepositoriesInput
    connect?: BucketWhereUniqueInput
  }

  export type RepositoryCreateNestedOneWithoutBucketRepositoriesInput = {
    create?: XOR<RepositoryCreateWithoutBucketRepositoriesInput, RepositoryUncheckedCreateWithoutBucketRepositoriesInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutBucketRepositoriesInput
    connect?: RepositoryWhereUniqueInput
  }

  export type BucketUpdateOneRequiredWithoutRepositoriesNestedInput = {
    create?: XOR<BucketCreateWithoutRepositoriesInput, BucketUncheckedCreateWithoutRepositoriesInput>
    connectOrCreate?: BucketCreateOrConnectWithoutRepositoriesInput
    upsert?: BucketUpsertWithoutRepositoriesInput
    connect?: BucketWhereUniqueInput
    update?: XOR<XOR<BucketUpdateToOneWithWhereWithoutRepositoriesInput, BucketUpdateWithoutRepositoriesInput>, BucketUncheckedUpdateWithoutRepositoriesInput>
  }

  export type RepositoryUpdateOneRequiredWithoutBucketRepositoriesNestedInput = {
    create?: XOR<RepositoryCreateWithoutBucketRepositoriesInput, RepositoryUncheckedCreateWithoutBucketRepositoriesInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutBucketRepositoriesInput
    upsert?: RepositoryUpsertWithoutBucketRepositoriesInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutBucketRepositoriesInput, RepositoryUpdateWithoutBucketRepositoriesInput>, RepositoryUncheckedUpdateWithoutBucketRepositoriesInput>
  }

  export type BucketCreateNestedOneWithoutMembersInput = {
    create?: XOR<BucketCreateWithoutMembersInput, BucketUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BucketCreateOrConnectWithoutMembersInput
    connect?: BucketWhereUniqueInput
  }

  export type BucketUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<BucketCreateWithoutMembersInput, BucketUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BucketCreateOrConnectWithoutMembersInput
    upsert?: BucketUpsertWithoutMembersInput
    connect?: BucketWhereUniqueInput
    update?: XOR<XOR<BucketUpdateToOneWithWhereWithoutMembersInput, BucketUpdateWithoutMembersInput>, BucketUncheckedUpdateWithoutMembersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    lemonOrderId: string
    productId: number
    variantId: number
    amount: number
    purchasedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    lemonOrderId: string
    productId: number
    variantId: number
    amount: number
    purchasedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GithubInstallationCreateWithoutUserInput = {
    installationId: string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection: string
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryCreateNestedManyWithoutInstallationInput
  }

  export type GithubInstallationUncheckedCreateWithoutUserInput = {
    id?: number
    installationId: string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection: string
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryUncheckedCreateNestedManyWithoutInstallationInput
  }

  export type GithubInstallationCreateOrConnectWithoutUserInput = {
    where: GithubInstallationWhereUniqueInput
    create: XOR<GithubInstallationCreateWithoutUserInput, GithubInstallationUncheckedCreateWithoutUserInput>
  }

  export type GithubInstallationCreateManyUserInputEnvelope = {
    data: GithubInstallationCreateManyUserInput | GithubInstallationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShareLinkCreateWithoutUserInput = {
    id?: string
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutShareLinksInput
    members?: ShareMemberCreateNestedManyWithoutShareLinkInput
  }

  export type ShareLinkUncheckedCreateWithoutUserInput = {
    id?: string
    repositoryId: number
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ShareMemberUncheckedCreateNestedManyWithoutShareLinkInput
  }

  export type ShareLinkCreateOrConnectWithoutUserInput = {
    where: ShareLinkWhereUniqueInput
    create: XOR<ShareLinkCreateWithoutUserInput, ShareLinkUncheckedCreateWithoutUserInput>
  }

  export type ShareLinkCreateManyUserInputEnvelope = {
    data: ShareLinkCreateManyUserInput | ShareLinkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BucketCreateWithoutUserInput = {
    id?: string
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: BucketRepositoryCreateNestedManyWithoutBucketInput
    members?: BucketMemberCreateNestedManyWithoutBucketInput
  }

  export type BucketUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: BucketRepositoryUncheckedCreateNestedManyWithoutBucketInput
    members?: BucketMemberUncheckedCreateNestedManyWithoutBucketInput
  }

  export type BucketCreateOrConnectWithoutUserInput = {
    where: BucketWhereUniqueInput
    create: XOR<BucketCreateWithoutUserInput, BucketUncheckedCreateWithoutUserInput>
  }

  export type BucketCreateManyUserInputEnvelope = {
    data: BucketCreateManyUserInput | BucketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    lemonOrderId?: StringFilter<"Order"> | string
    userId?: IntFilter<"Order"> | number
    productId?: IntFilter<"Order"> | number
    variantId?: IntFilter<"Order"> | number
    amount?: FloatFilter<"Order"> | number
    purchasedAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type GithubInstallationUpsertWithWhereUniqueWithoutUserInput = {
    where: GithubInstallationWhereUniqueInput
    update: XOR<GithubInstallationUpdateWithoutUserInput, GithubInstallationUncheckedUpdateWithoutUserInput>
    create: XOR<GithubInstallationCreateWithoutUserInput, GithubInstallationUncheckedCreateWithoutUserInput>
  }

  export type GithubInstallationUpdateWithWhereUniqueWithoutUserInput = {
    where: GithubInstallationWhereUniqueInput
    data: XOR<GithubInstallationUpdateWithoutUserInput, GithubInstallationUncheckedUpdateWithoutUserInput>
  }

  export type GithubInstallationUpdateManyWithWhereWithoutUserInput = {
    where: GithubInstallationScalarWhereInput
    data: XOR<GithubInstallationUpdateManyMutationInput, GithubInstallationUncheckedUpdateManyWithoutUserInput>
  }

  export type GithubInstallationScalarWhereInput = {
    AND?: GithubInstallationScalarWhereInput | GithubInstallationScalarWhereInput[]
    OR?: GithubInstallationScalarWhereInput[]
    NOT?: GithubInstallationScalarWhereInput | GithubInstallationScalarWhereInput[]
    id?: IntFilter<"GithubInstallation"> | number
    installationId?: StringFilter<"GithubInstallation"> | string
    userId?: IntFilter<"GithubInstallation"> | number
    permissions?: JsonNullableFilter<"GithubInstallation">
    repositorySelection?: StringFilter<"GithubInstallation"> | string
    createdAt?: DateTimeFilter<"GithubInstallation"> | Date | string
    updatedAt?: DateTimeFilter<"GithubInstallation"> | Date | string
  }

  export type ShareLinkUpsertWithWhereUniqueWithoutUserInput = {
    where: ShareLinkWhereUniqueInput
    update: XOR<ShareLinkUpdateWithoutUserInput, ShareLinkUncheckedUpdateWithoutUserInput>
    create: XOR<ShareLinkCreateWithoutUserInput, ShareLinkUncheckedCreateWithoutUserInput>
  }

  export type ShareLinkUpdateWithWhereUniqueWithoutUserInput = {
    where: ShareLinkWhereUniqueInput
    data: XOR<ShareLinkUpdateWithoutUserInput, ShareLinkUncheckedUpdateWithoutUserInput>
  }

  export type ShareLinkUpdateManyWithWhereWithoutUserInput = {
    where: ShareLinkScalarWhereInput
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyWithoutUserInput>
  }

  export type ShareLinkScalarWhereInput = {
    AND?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
    OR?: ShareLinkScalarWhereInput[]
    NOT?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
    id?: StringFilter<"ShareLink"> | string
    userId?: IntFilter<"ShareLink"> | number
    repositoryId?: IntFilter<"ShareLink"> | number
    token?: StringFilter<"ShareLink"> | string
    name?: StringNullableFilter<"ShareLink"> | string | null
    description?: StringNullableFilter<"ShareLink"> | string | null
    password?: StringNullableFilter<"ShareLink"> | string | null
    expiresAt?: DateTimeNullableFilter<"ShareLink"> | Date | string | null
    maxMembers?: IntNullableFilter<"ShareLink"> | number | null
    memberCount?: IntFilter<"ShareLink"> | number
    isActive?: BoolFilter<"ShareLink"> | boolean
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    updatedAt?: DateTimeFilter<"ShareLink"> | Date | string
  }

  export type BucketUpsertWithWhereUniqueWithoutUserInput = {
    where: BucketWhereUniqueInput
    update: XOR<BucketUpdateWithoutUserInput, BucketUncheckedUpdateWithoutUserInput>
    create: XOR<BucketCreateWithoutUserInput, BucketUncheckedCreateWithoutUserInput>
  }

  export type BucketUpdateWithWhereUniqueWithoutUserInput = {
    where: BucketWhereUniqueInput
    data: XOR<BucketUpdateWithoutUserInput, BucketUncheckedUpdateWithoutUserInput>
  }

  export type BucketUpdateManyWithWhereWithoutUserInput = {
    where: BucketScalarWhereInput
    data: XOR<BucketUpdateManyMutationInput, BucketUncheckedUpdateManyWithoutUserInput>
  }

  export type BucketScalarWhereInput = {
    AND?: BucketScalarWhereInput | BucketScalarWhereInput[]
    OR?: BucketScalarWhereInput[]
    NOT?: BucketScalarWhereInput | BucketScalarWhereInput[]
    id?: StringFilter<"Bucket"> | string
    userId?: IntFilter<"Bucket"> | number
    token?: StringFilter<"Bucket"> | string
    name?: StringNullableFilter<"Bucket"> | string | null
    description?: StringNullableFilter<"Bucket"> | string | null
    password?: StringNullableFilter<"Bucket"> | string | null
    expiresAt?: DateTimeNullableFilter<"Bucket"> | Date | string | null
    maxMembers?: IntNullableFilter<"Bucket"> | number | null
    memberCount?: IntFilter<"Bucket"> | number
    isActive?: BoolFilter<"Bucket"> | boolean
    createdAt?: DateTimeFilter<"Bucket"> | Date | string
    updatedAt?: DateTimeFilter<"Bucket"> | Date | string
  }

  export type UserCreateWithoutOrdersInput = {
    githubId: string
    email?: string | null
    username: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    githubInstallation?: GithubInstallationCreateNestedManyWithoutUserInput
    shareLinks?: ShareLinkCreateNestedManyWithoutUserInput
    buckets?: BucketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    githubId: string
    email?: string | null
    username: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    githubInstallation?: GithubInstallationUncheckedCreateNestedManyWithoutUserInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutUserInput
    buckets?: BucketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubInstallation?: GithubInstallationUpdateManyWithoutUserNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutUserNestedInput
    buckets?: BucketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubInstallation?: GithubInstallationUncheckedUpdateManyWithoutUserNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutUserNestedInput
    buckets?: BucketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGithubInstallationInput = {
    githubId: string
    email?: string | null
    username: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    shareLinks?: ShareLinkCreateNestedManyWithoutUserInput
    buckets?: BucketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGithubInstallationInput = {
    id?: number
    githubId: string
    email?: string | null
    username: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutUserInput
    buckets?: BucketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGithubInstallationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGithubInstallationInput, UserUncheckedCreateWithoutGithubInstallationInput>
  }

  export type RepositoryCreateWithoutInstallationInput = {
    githubRepoId: number
    name: string
    description?: string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars: number
    forks: number
    watchers: number
    members?: number | null
    lastFetched?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareLinks?: ShareLinkCreateNestedManyWithoutRepositoryInput
    bucketRepositories?: BucketRepositoryCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateWithoutInstallationInput = {
    id?: number
    githubRepoId: number
    name: string
    description?: string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars: number
    forks: number
    watchers: number
    members?: number | null
    lastFetched?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutRepositoryInput
    bucketRepositories?: BucketRepositoryUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryCreateOrConnectWithoutInstallationInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutInstallationInput, RepositoryUncheckedCreateWithoutInstallationInput>
  }

  export type RepositoryCreateManyInstallationInputEnvelope = {
    data: RepositoryCreateManyInstallationInput | RepositoryCreateManyInstallationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGithubInstallationInput = {
    update: XOR<UserUpdateWithoutGithubInstallationInput, UserUncheckedUpdateWithoutGithubInstallationInput>
    create: XOR<UserCreateWithoutGithubInstallationInput, UserUncheckedCreateWithoutGithubInstallationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGithubInstallationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGithubInstallationInput, UserUncheckedUpdateWithoutGithubInstallationInput>
  }

  export type UserUpdateWithoutGithubInstallationInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutUserNestedInput
    buckets?: BucketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGithubInstallationInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutUserNestedInput
    buckets?: BucketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RepositoryUpsertWithWhereUniqueWithoutInstallationInput = {
    where: RepositoryWhereUniqueInput
    update: XOR<RepositoryUpdateWithoutInstallationInput, RepositoryUncheckedUpdateWithoutInstallationInput>
    create: XOR<RepositoryCreateWithoutInstallationInput, RepositoryUncheckedCreateWithoutInstallationInput>
  }

  export type RepositoryUpdateWithWhereUniqueWithoutInstallationInput = {
    where: RepositoryWhereUniqueInput
    data: XOR<RepositoryUpdateWithoutInstallationInput, RepositoryUncheckedUpdateWithoutInstallationInput>
  }

  export type RepositoryUpdateManyWithWhereWithoutInstallationInput = {
    where: RepositoryScalarWhereInput
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyWithoutInstallationInput>
  }

  export type RepositoryScalarWhereInput = {
    AND?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    OR?: RepositoryScalarWhereInput[]
    NOT?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    id?: IntFilter<"Repository"> | number
    githubRepoId?: IntFilter<"Repository"> | number
    installationId?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    description?: StringNullableFilter<"Repository"> | string | null
    languages?: JsonNullableFilter<"Repository">
    stars?: IntFilter<"Repository"> | number
    forks?: IntFilter<"Repository"> | number
    watchers?: IntFilter<"Repository"> | number
    members?: IntNullableFilter<"Repository"> | number | null
    lastFetched?: DateTimeFilter<"Repository"> | Date | string
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    updatedAt?: DateTimeFilter<"Repository"> | Date | string
  }

  export type GithubInstallationCreateWithoutRepositoriesInput = {
    installationId: string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGithubInstallationInput
  }

  export type GithubInstallationUncheckedCreateWithoutRepositoriesInput = {
    id?: number
    installationId: string
    userId: number
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GithubInstallationCreateOrConnectWithoutRepositoriesInput = {
    where: GithubInstallationWhereUniqueInput
    create: XOR<GithubInstallationCreateWithoutRepositoriesInput, GithubInstallationUncheckedCreateWithoutRepositoriesInput>
  }

  export type ShareLinkCreateWithoutRepositoryInput = {
    id?: string
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutShareLinksInput
    members?: ShareMemberCreateNestedManyWithoutShareLinkInput
  }

  export type ShareLinkUncheckedCreateWithoutRepositoryInput = {
    id?: string
    userId: number
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ShareMemberUncheckedCreateNestedManyWithoutShareLinkInput
  }

  export type ShareLinkCreateOrConnectWithoutRepositoryInput = {
    where: ShareLinkWhereUniqueInput
    create: XOR<ShareLinkCreateWithoutRepositoryInput, ShareLinkUncheckedCreateWithoutRepositoryInput>
  }

  export type ShareLinkCreateManyRepositoryInputEnvelope = {
    data: ShareLinkCreateManyRepositoryInput | ShareLinkCreateManyRepositoryInput[]
    skipDuplicates?: boolean
  }

  export type BucketRepositoryCreateWithoutRepositoryInput = {
    id?: string
    createdAt?: Date | string
    bucket: BucketCreateNestedOneWithoutRepositoriesInput
  }

  export type BucketRepositoryUncheckedCreateWithoutRepositoryInput = {
    id?: string
    bucketId: string
    createdAt?: Date | string
  }

  export type BucketRepositoryCreateOrConnectWithoutRepositoryInput = {
    where: BucketRepositoryWhereUniqueInput
    create: XOR<BucketRepositoryCreateWithoutRepositoryInput, BucketRepositoryUncheckedCreateWithoutRepositoryInput>
  }

  export type BucketRepositoryCreateManyRepositoryInputEnvelope = {
    data: BucketRepositoryCreateManyRepositoryInput | BucketRepositoryCreateManyRepositoryInput[]
    skipDuplicates?: boolean
  }

  export type GithubInstallationUpsertWithoutRepositoriesInput = {
    update: XOR<GithubInstallationUpdateWithoutRepositoriesInput, GithubInstallationUncheckedUpdateWithoutRepositoriesInput>
    create: XOR<GithubInstallationCreateWithoutRepositoriesInput, GithubInstallationUncheckedCreateWithoutRepositoriesInput>
    where?: GithubInstallationWhereInput
  }

  export type GithubInstallationUpdateToOneWithWhereWithoutRepositoriesInput = {
    where?: GithubInstallationWhereInput
    data: XOR<GithubInstallationUpdateWithoutRepositoriesInput, GithubInstallationUncheckedUpdateWithoutRepositoriesInput>
  }

  export type GithubInstallationUpdateWithoutRepositoriesInput = {
    installationId?: StringFieldUpdateOperationsInput | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGithubInstallationNestedInput
  }

  export type GithubInstallationUncheckedUpdateWithoutRepositoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    installationId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: ShareLinkWhereUniqueInput
    update: XOR<ShareLinkUpdateWithoutRepositoryInput, ShareLinkUncheckedUpdateWithoutRepositoryInput>
    create: XOR<ShareLinkCreateWithoutRepositoryInput, ShareLinkUncheckedCreateWithoutRepositoryInput>
  }

  export type ShareLinkUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: ShareLinkWhereUniqueInput
    data: XOR<ShareLinkUpdateWithoutRepositoryInput, ShareLinkUncheckedUpdateWithoutRepositoryInput>
  }

  export type ShareLinkUpdateManyWithWhereWithoutRepositoryInput = {
    where: ShareLinkScalarWhereInput
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyWithoutRepositoryInput>
  }

  export type BucketRepositoryUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: BucketRepositoryWhereUniqueInput
    update: XOR<BucketRepositoryUpdateWithoutRepositoryInput, BucketRepositoryUncheckedUpdateWithoutRepositoryInput>
    create: XOR<BucketRepositoryCreateWithoutRepositoryInput, BucketRepositoryUncheckedCreateWithoutRepositoryInput>
  }

  export type BucketRepositoryUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: BucketRepositoryWhereUniqueInput
    data: XOR<BucketRepositoryUpdateWithoutRepositoryInput, BucketRepositoryUncheckedUpdateWithoutRepositoryInput>
  }

  export type BucketRepositoryUpdateManyWithWhereWithoutRepositoryInput = {
    where: BucketRepositoryScalarWhereInput
    data: XOR<BucketRepositoryUpdateManyMutationInput, BucketRepositoryUncheckedUpdateManyWithoutRepositoryInput>
  }

  export type BucketRepositoryScalarWhereInput = {
    AND?: BucketRepositoryScalarWhereInput | BucketRepositoryScalarWhereInput[]
    OR?: BucketRepositoryScalarWhereInput[]
    NOT?: BucketRepositoryScalarWhereInput | BucketRepositoryScalarWhereInput[]
    id?: StringFilter<"BucketRepository"> | string
    bucketId?: StringFilter<"BucketRepository"> | string
    repositoryId?: IntFilter<"BucketRepository"> | number
    createdAt?: DateTimeFilter<"BucketRepository"> | Date | string
  }

  export type UserCreateWithoutShareLinksInput = {
    githubId: string
    email?: string | null
    username: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    githubInstallation?: GithubInstallationCreateNestedManyWithoutUserInput
    buckets?: BucketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShareLinksInput = {
    id?: number
    githubId: string
    email?: string | null
    username: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    githubInstallation?: GithubInstallationUncheckedCreateNestedManyWithoutUserInput
    buckets?: BucketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShareLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShareLinksInput, UserUncheckedCreateWithoutShareLinksInput>
  }

  export type RepositoryCreateWithoutShareLinksInput = {
    githubRepoId: number
    name: string
    description?: string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars: number
    forks: number
    watchers: number
    members?: number | null
    lastFetched?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    installation: GithubInstallationCreateNestedOneWithoutRepositoriesInput
    bucketRepositories?: BucketRepositoryCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateWithoutShareLinksInput = {
    id?: number
    githubRepoId: number
    installationId: string
    name: string
    description?: string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars: number
    forks: number
    watchers: number
    members?: number | null
    lastFetched?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bucketRepositories?: BucketRepositoryUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryCreateOrConnectWithoutShareLinksInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutShareLinksInput, RepositoryUncheckedCreateWithoutShareLinksInput>
  }

  export type ShareMemberCreateWithoutShareLinkInput = {
    id?: string
    ipAddress?: string | null
    joinedAt?: Date | string
  }

  export type ShareMemberUncheckedCreateWithoutShareLinkInput = {
    id?: string
    ipAddress?: string | null
    joinedAt?: Date | string
  }

  export type ShareMemberCreateOrConnectWithoutShareLinkInput = {
    where: ShareMemberWhereUniqueInput
    create: XOR<ShareMemberCreateWithoutShareLinkInput, ShareMemberUncheckedCreateWithoutShareLinkInput>
  }

  export type ShareMemberCreateManyShareLinkInputEnvelope = {
    data: ShareMemberCreateManyShareLinkInput | ShareMemberCreateManyShareLinkInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutShareLinksInput = {
    update: XOR<UserUpdateWithoutShareLinksInput, UserUncheckedUpdateWithoutShareLinksInput>
    create: XOR<UserCreateWithoutShareLinksInput, UserUncheckedCreateWithoutShareLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShareLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShareLinksInput, UserUncheckedUpdateWithoutShareLinksInput>
  }

  export type UserUpdateWithoutShareLinksInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    githubInstallation?: GithubInstallationUpdateManyWithoutUserNestedInput
    buckets?: BucketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShareLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    githubInstallation?: GithubInstallationUncheckedUpdateManyWithoutUserNestedInput
    buckets?: BucketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RepositoryUpsertWithoutShareLinksInput = {
    update: XOR<RepositoryUpdateWithoutShareLinksInput, RepositoryUncheckedUpdateWithoutShareLinksInput>
    create: XOR<RepositoryCreateWithoutShareLinksInput, RepositoryUncheckedCreateWithoutShareLinksInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutShareLinksInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutShareLinksInput, RepositoryUncheckedUpdateWithoutShareLinksInput>
  }

  export type RepositoryUpdateWithoutShareLinksInput = {
    githubRepoId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars?: IntFieldUpdateOperationsInput | number
    forks?: IntFieldUpdateOperationsInput | number
    watchers?: IntFieldUpdateOperationsInput | number
    members?: NullableIntFieldUpdateOperationsInput | number | null
    lastFetched?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installation?: GithubInstallationUpdateOneRequiredWithoutRepositoriesNestedInput
    bucketRepositories?: BucketRepositoryUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutShareLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubRepoId?: IntFieldUpdateOperationsInput | number
    installationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars?: IntFieldUpdateOperationsInput | number
    forks?: IntFieldUpdateOperationsInput | number
    watchers?: IntFieldUpdateOperationsInput | number
    members?: NullableIntFieldUpdateOperationsInput | number | null
    lastFetched?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bucketRepositories?: BucketRepositoryUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type ShareMemberUpsertWithWhereUniqueWithoutShareLinkInput = {
    where: ShareMemberWhereUniqueInput
    update: XOR<ShareMemberUpdateWithoutShareLinkInput, ShareMemberUncheckedUpdateWithoutShareLinkInput>
    create: XOR<ShareMemberCreateWithoutShareLinkInput, ShareMemberUncheckedCreateWithoutShareLinkInput>
  }

  export type ShareMemberUpdateWithWhereUniqueWithoutShareLinkInput = {
    where: ShareMemberWhereUniqueInput
    data: XOR<ShareMemberUpdateWithoutShareLinkInput, ShareMemberUncheckedUpdateWithoutShareLinkInput>
  }

  export type ShareMemberUpdateManyWithWhereWithoutShareLinkInput = {
    where: ShareMemberScalarWhereInput
    data: XOR<ShareMemberUpdateManyMutationInput, ShareMemberUncheckedUpdateManyWithoutShareLinkInput>
  }

  export type ShareMemberScalarWhereInput = {
    AND?: ShareMemberScalarWhereInput | ShareMemberScalarWhereInput[]
    OR?: ShareMemberScalarWhereInput[]
    NOT?: ShareMemberScalarWhereInput | ShareMemberScalarWhereInput[]
    id?: StringFilter<"ShareMember"> | string
    shareLinkId?: StringFilter<"ShareMember"> | string
    ipAddress?: StringNullableFilter<"ShareMember"> | string | null
    joinedAt?: DateTimeFilter<"ShareMember"> | Date | string
  }

  export type ShareLinkCreateWithoutMembersInput = {
    id?: string
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutShareLinksInput
    repository: RepositoryCreateNestedOneWithoutShareLinksInput
  }

  export type ShareLinkUncheckedCreateWithoutMembersInput = {
    id?: string
    userId: number
    repositoryId: number
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShareLinkCreateOrConnectWithoutMembersInput = {
    where: ShareLinkWhereUniqueInput
    create: XOR<ShareLinkCreateWithoutMembersInput, ShareLinkUncheckedCreateWithoutMembersInput>
  }

  export type ShareLinkUpsertWithoutMembersInput = {
    update: XOR<ShareLinkUpdateWithoutMembersInput, ShareLinkUncheckedUpdateWithoutMembersInput>
    create: XOR<ShareLinkCreateWithoutMembersInput, ShareLinkUncheckedCreateWithoutMembersInput>
    where?: ShareLinkWhereInput
  }

  export type ShareLinkUpdateToOneWithWhereWithoutMembersInput = {
    where?: ShareLinkWhereInput
    data: XOR<ShareLinkUpdateWithoutMembersInput, ShareLinkUncheckedUpdateWithoutMembersInput>
  }

  export type ShareLinkUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShareLinksNestedInput
    repository?: RepositoryUpdateOneRequiredWithoutShareLinksNestedInput
  }

  export type ShareLinkUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    repositoryId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutBucketsInput = {
    githubId: string
    email?: string | null
    username: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    githubInstallation?: GithubInstallationCreateNestedManyWithoutUserInput
    shareLinks?: ShareLinkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBucketsInput = {
    id?: number
    githubId: string
    email?: string | null
    username: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    githubInstallation?: GithubInstallationUncheckedCreateNestedManyWithoutUserInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBucketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBucketsInput, UserUncheckedCreateWithoutBucketsInput>
  }

  export type BucketRepositoryCreateWithoutBucketInput = {
    id?: string
    createdAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutBucketRepositoriesInput
  }

  export type BucketRepositoryUncheckedCreateWithoutBucketInput = {
    id?: string
    repositoryId: number
    createdAt?: Date | string
  }

  export type BucketRepositoryCreateOrConnectWithoutBucketInput = {
    where: BucketRepositoryWhereUniqueInput
    create: XOR<BucketRepositoryCreateWithoutBucketInput, BucketRepositoryUncheckedCreateWithoutBucketInput>
  }

  export type BucketRepositoryCreateManyBucketInputEnvelope = {
    data: BucketRepositoryCreateManyBucketInput | BucketRepositoryCreateManyBucketInput[]
    skipDuplicates?: boolean
  }

  export type BucketMemberCreateWithoutBucketInput = {
    id?: string
    ipAddress?: string | null
    joinedAt?: Date | string
  }

  export type BucketMemberUncheckedCreateWithoutBucketInput = {
    id?: string
    ipAddress?: string | null
    joinedAt?: Date | string
  }

  export type BucketMemberCreateOrConnectWithoutBucketInput = {
    where: BucketMemberWhereUniqueInput
    create: XOR<BucketMemberCreateWithoutBucketInput, BucketMemberUncheckedCreateWithoutBucketInput>
  }

  export type BucketMemberCreateManyBucketInputEnvelope = {
    data: BucketMemberCreateManyBucketInput | BucketMemberCreateManyBucketInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBucketsInput = {
    update: XOR<UserUpdateWithoutBucketsInput, UserUncheckedUpdateWithoutBucketsInput>
    create: XOR<UserCreateWithoutBucketsInput, UserUncheckedCreateWithoutBucketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBucketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBucketsInput, UserUncheckedUpdateWithoutBucketsInput>
  }

  export type UserUpdateWithoutBucketsInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    githubInstallation?: GithubInstallationUpdateManyWithoutUserNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBucketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    githubInstallation?: GithubInstallationUncheckedUpdateManyWithoutUserNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BucketRepositoryUpsertWithWhereUniqueWithoutBucketInput = {
    where: BucketRepositoryWhereUniqueInput
    update: XOR<BucketRepositoryUpdateWithoutBucketInput, BucketRepositoryUncheckedUpdateWithoutBucketInput>
    create: XOR<BucketRepositoryCreateWithoutBucketInput, BucketRepositoryUncheckedCreateWithoutBucketInput>
  }

  export type BucketRepositoryUpdateWithWhereUniqueWithoutBucketInput = {
    where: BucketRepositoryWhereUniqueInput
    data: XOR<BucketRepositoryUpdateWithoutBucketInput, BucketRepositoryUncheckedUpdateWithoutBucketInput>
  }

  export type BucketRepositoryUpdateManyWithWhereWithoutBucketInput = {
    where: BucketRepositoryScalarWhereInput
    data: XOR<BucketRepositoryUpdateManyMutationInput, BucketRepositoryUncheckedUpdateManyWithoutBucketInput>
  }

  export type BucketMemberUpsertWithWhereUniqueWithoutBucketInput = {
    where: BucketMemberWhereUniqueInput
    update: XOR<BucketMemberUpdateWithoutBucketInput, BucketMemberUncheckedUpdateWithoutBucketInput>
    create: XOR<BucketMemberCreateWithoutBucketInput, BucketMemberUncheckedCreateWithoutBucketInput>
  }

  export type BucketMemberUpdateWithWhereUniqueWithoutBucketInput = {
    where: BucketMemberWhereUniqueInput
    data: XOR<BucketMemberUpdateWithoutBucketInput, BucketMemberUncheckedUpdateWithoutBucketInput>
  }

  export type BucketMemberUpdateManyWithWhereWithoutBucketInput = {
    where: BucketMemberScalarWhereInput
    data: XOR<BucketMemberUpdateManyMutationInput, BucketMemberUncheckedUpdateManyWithoutBucketInput>
  }

  export type BucketMemberScalarWhereInput = {
    AND?: BucketMemberScalarWhereInput | BucketMemberScalarWhereInput[]
    OR?: BucketMemberScalarWhereInput[]
    NOT?: BucketMemberScalarWhereInput | BucketMemberScalarWhereInput[]
    id?: StringFilter<"BucketMember"> | string
    bucketId?: StringFilter<"BucketMember"> | string
    ipAddress?: StringNullableFilter<"BucketMember"> | string | null
    joinedAt?: DateTimeFilter<"BucketMember"> | Date | string
  }

  export type BucketCreateWithoutRepositoriesInput = {
    id?: string
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBucketsInput
    members?: BucketMemberCreateNestedManyWithoutBucketInput
  }

  export type BucketUncheckedCreateWithoutRepositoriesInput = {
    id?: string
    userId: number
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: BucketMemberUncheckedCreateNestedManyWithoutBucketInput
  }

  export type BucketCreateOrConnectWithoutRepositoriesInput = {
    where: BucketWhereUniqueInput
    create: XOR<BucketCreateWithoutRepositoriesInput, BucketUncheckedCreateWithoutRepositoriesInput>
  }

  export type RepositoryCreateWithoutBucketRepositoriesInput = {
    githubRepoId: number
    name: string
    description?: string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars: number
    forks: number
    watchers: number
    members?: number | null
    lastFetched?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    installation: GithubInstallationCreateNestedOneWithoutRepositoriesInput
    shareLinks?: ShareLinkCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateWithoutBucketRepositoriesInput = {
    id?: number
    githubRepoId: number
    installationId: string
    name: string
    description?: string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars: number
    forks: number
    watchers: number
    members?: number | null
    lastFetched?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryCreateOrConnectWithoutBucketRepositoriesInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutBucketRepositoriesInput, RepositoryUncheckedCreateWithoutBucketRepositoriesInput>
  }

  export type BucketUpsertWithoutRepositoriesInput = {
    update: XOR<BucketUpdateWithoutRepositoriesInput, BucketUncheckedUpdateWithoutRepositoriesInput>
    create: XOR<BucketCreateWithoutRepositoriesInput, BucketUncheckedCreateWithoutRepositoriesInput>
    where?: BucketWhereInput
  }

  export type BucketUpdateToOneWithWhereWithoutRepositoriesInput = {
    where?: BucketWhereInput
    data: XOR<BucketUpdateWithoutRepositoriesInput, BucketUncheckedUpdateWithoutRepositoriesInput>
  }

  export type BucketUpdateWithoutRepositoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBucketsNestedInput
    members?: BucketMemberUpdateManyWithoutBucketNestedInput
  }

  export type BucketUncheckedUpdateWithoutRepositoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BucketMemberUncheckedUpdateManyWithoutBucketNestedInput
  }

  export type RepositoryUpsertWithoutBucketRepositoriesInput = {
    update: XOR<RepositoryUpdateWithoutBucketRepositoriesInput, RepositoryUncheckedUpdateWithoutBucketRepositoriesInput>
    create: XOR<RepositoryCreateWithoutBucketRepositoriesInput, RepositoryUncheckedCreateWithoutBucketRepositoriesInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutBucketRepositoriesInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutBucketRepositoriesInput, RepositoryUncheckedUpdateWithoutBucketRepositoriesInput>
  }

  export type RepositoryUpdateWithoutBucketRepositoriesInput = {
    githubRepoId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars?: IntFieldUpdateOperationsInput | number
    forks?: IntFieldUpdateOperationsInput | number
    watchers?: IntFieldUpdateOperationsInput | number
    members?: NullableIntFieldUpdateOperationsInput | number | null
    lastFetched?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installation?: GithubInstallationUpdateOneRequiredWithoutRepositoriesNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutBucketRepositoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubRepoId?: IntFieldUpdateOperationsInput | number
    installationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars?: IntFieldUpdateOperationsInput | number
    forks?: IntFieldUpdateOperationsInput | number
    watchers?: IntFieldUpdateOperationsInput | number
    members?: NullableIntFieldUpdateOperationsInput | number | null
    lastFetched?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type BucketCreateWithoutMembersInput = {
    id?: string
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBucketsInput
    repositories?: BucketRepositoryCreateNestedManyWithoutBucketInput
  }

  export type BucketUncheckedCreateWithoutMembersInput = {
    id?: string
    userId: number
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: BucketRepositoryUncheckedCreateNestedManyWithoutBucketInput
  }

  export type BucketCreateOrConnectWithoutMembersInput = {
    where: BucketWhereUniqueInput
    create: XOR<BucketCreateWithoutMembersInput, BucketUncheckedCreateWithoutMembersInput>
  }

  export type BucketUpsertWithoutMembersInput = {
    update: XOR<BucketUpdateWithoutMembersInput, BucketUncheckedUpdateWithoutMembersInput>
    create: XOR<BucketCreateWithoutMembersInput, BucketUncheckedCreateWithoutMembersInput>
    where?: BucketWhereInput
  }

  export type BucketUpdateToOneWithWhereWithoutMembersInput = {
    where?: BucketWhereInput
    data: XOR<BucketUpdateWithoutMembersInput, BucketUncheckedUpdateWithoutMembersInput>
  }

  export type BucketUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBucketsNestedInput
    repositories?: BucketRepositoryUpdateManyWithoutBucketNestedInput
  }

  export type BucketUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: BucketRepositoryUncheckedUpdateManyWithoutBucketNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    lemonOrderId: string
    productId: number
    variantId: number
    amount: number
    purchasedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GithubInstallationCreateManyUserInput = {
    id?: number
    installationId: string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShareLinkCreateManyUserInput = {
    id?: string
    repositoryId: number
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BucketCreateManyUserInput = {
    id?: string
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lemonOrderId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lemonOrderId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lemonOrderId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GithubInstallationUpdateWithoutUserInput = {
    installationId?: StringFieldUpdateOperationsInput | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUpdateManyWithoutInstallationNestedInput
  }

  export type GithubInstallationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    installationId?: StringFieldUpdateOperationsInput | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUncheckedUpdateManyWithoutInstallationNestedInput
  }

  export type GithubInstallationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    installationId?: StringFieldUpdateOperationsInput | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    repositorySelection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutShareLinksNestedInput
    members?: ShareMemberUpdateManyWithoutShareLinkNestedInput
  }

  export type ShareLinkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ShareMemberUncheckedUpdateManyWithoutShareLinkNestedInput
  }

  export type ShareLinkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: BucketRepositoryUpdateManyWithoutBucketNestedInput
    members?: BucketMemberUpdateManyWithoutBucketNestedInput
  }

  export type BucketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: BucketRepositoryUncheckedUpdateManyWithoutBucketNestedInput
    members?: BucketMemberUncheckedUpdateManyWithoutBucketNestedInput
  }

  export type BucketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryCreateManyInstallationInput = {
    id?: number
    githubRepoId: number
    name: string
    description?: string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars: number
    forks: number
    watchers: number
    members?: number | null
    lastFetched?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepositoryUpdateWithoutInstallationInput = {
    githubRepoId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars?: IntFieldUpdateOperationsInput | number
    forks?: IntFieldUpdateOperationsInput | number
    watchers?: IntFieldUpdateOperationsInput | number
    members?: NullableIntFieldUpdateOperationsInput | number | null
    lastFetched?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareLinks?: ShareLinkUpdateManyWithoutRepositoryNestedInput
    bucketRepositories?: BucketRepositoryUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutInstallationInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubRepoId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars?: IntFieldUpdateOperationsInput | number
    forks?: IntFieldUpdateOperationsInput | number
    watchers?: IntFieldUpdateOperationsInput | number
    members?: NullableIntFieldUpdateOperationsInput | number | null
    lastFetched?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutRepositoryNestedInput
    bucketRepositories?: BucketRepositoryUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateManyWithoutInstallationInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubRepoId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableJsonNullValueInput | InputJsonValue
    stars?: IntFieldUpdateOperationsInput | number
    forks?: IntFieldUpdateOperationsInput | number
    watchers?: IntFieldUpdateOperationsInput | number
    members?: NullableIntFieldUpdateOperationsInput | number | null
    lastFetched?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkCreateManyRepositoryInput = {
    id?: string
    userId: number
    token: string
    name?: string | null
    description?: string | null
    password?: string | null
    expiresAt?: Date | string | null
    maxMembers?: number | null
    memberCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BucketRepositoryCreateManyRepositoryInput = {
    id?: string
    bucketId: string
    createdAt?: Date | string
  }

  export type ShareLinkUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShareLinksNestedInput
    members?: ShareMemberUpdateManyWithoutShareLinkNestedInput
  }

  export type ShareLinkUncheckedUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ShareMemberUncheckedUpdateManyWithoutShareLinkNestedInput
  }

  export type ShareLinkUncheckedUpdateManyWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketRepositoryUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bucket?: BucketUpdateOneRequiredWithoutRepositoriesNestedInput
  }

  export type BucketRepositoryUncheckedUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    bucketId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketRepositoryUncheckedUpdateManyWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    bucketId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareMemberCreateManyShareLinkInput = {
    id?: string
    ipAddress?: string | null
    joinedAt?: Date | string
  }

  export type ShareMemberUpdateWithoutShareLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareMemberUncheckedUpdateWithoutShareLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareMemberUncheckedUpdateManyWithoutShareLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketRepositoryCreateManyBucketInput = {
    id?: string
    repositoryId: number
    createdAt?: Date | string
  }

  export type BucketMemberCreateManyBucketInput = {
    id?: string
    ipAddress?: string | null
    joinedAt?: Date | string
  }

  export type BucketRepositoryUpdateWithoutBucketInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutBucketRepositoriesNestedInput
  }

  export type BucketRepositoryUncheckedUpdateWithoutBucketInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketRepositoryUncheckedUpdateManyWithoutBucketInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketMemberUpdateWithoutBucketInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketMemberUncheckedUpdateWithoutBucketInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketMemberUncheckedUpdateManyWithoutBucketInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}