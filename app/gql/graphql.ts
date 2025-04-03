/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: { input: any; output: any; }
};

export type AppPaginator = {
  __typename?: 'AppPaginator';
  hasMorePages: Scalars['Boolean']['output'];
  lastPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GenericResponse = {
  __typename?: 'GenericResponse';
  message?: Maybe<Scalars['String']['output']>;
};

export type GetProductPaginator = {
  __typename?: 'GetProductPaginator';
  data?: Maybe<Array<Product>>;
  paginatorInfo: AppPaginator;
};

export type GetSalesResponse = {
  __typename?: 'GetSalesResponse';
  data?: Maybe<Array<SalesGroup>>;
  paginatorInfo: AppPaginator;
};

export type Mutation = {
  __typename?: 'Mutation';
  addProduct: GenericResponse;
  addSale: GenericResponse;
  deleteProduct: GenericResponse;
  logout: GenericResponse;
  updateProduct: GenericResponse;
  updateProductBatch: GenericResponse;
  userLogin: UserLoginResponse;
};


export type MutationAddProductArgs = {
  batches: Array<ProductBatch>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddSaleArgs = {
  items: Array<SaleInput>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProductBatchArgs = {
  batch_id: Scalars['Int']['input'];
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUserLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

export type Product = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  owner: User;
  owner_id: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  unit?: Maybe<Scalars['String']['output']>;
};

export type ProductBatch = {
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  stock: Scalars['Int']['input'];
};

export type Productbatch = {
  __typename?: 'Productbatch';
  expiry_date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  product: Product;
  product_id: Scalars['Int']['output'];
  stock: Scalars['Int']['output'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type Query = {
  __typename?: 'Query';
  getMe?: Maybe<User>;
  getProducts: GetProductPaginator;
  getSales: GetSalesResponse;
  productById: Product;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetProductsArgs = {
  first: Scalars['Int']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetSalesArgs = {
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryProductByIdArgs = {
  id: Scalars['Int']['input'];
};

export type Sale = {
  __typename?: 'Sale';
  id: Scalars['Int']['output'];
  owner: User;
  owner_id: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  product: Product;
  product_id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  sales_group: Scalars['String']['output'];
};

export type SaleInput = {
  product_id: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type Sales = {
  __typename?: 'Sales';
  id: Scalars['Int']['output'];
  owner_id: Scalars['Int']['output'];
  price_per_unit: Scalars['Float']['output'];
  product: Product;
  product_id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  sales_group_id: Scalars['Int']['output'];
};

export type SalesGroup = {
  __typename?: 'SalesGroup';
  id: Scalars['Int']['output'];
  owner_id: Scalars['Int']['output'];
  sales?: Maybe<Array<Sales>>;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

/** Account of a person who utilizes this application. */
export type User = {
  __typename?: 'User';
  /** When the account was created. */
  created_at: Scalars['DateTime']['output'];
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
  /** When the account was last updated. */
  updated_at: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type UserLoginResponse = {
  __typename?: 'UserLoginResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe?: { __typename?: 'User', id: string } | null };


export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: { input: any; output: any; }
};

export type AppPaginator = {
  __typename?: 'AppPaginator';
  hasMorePages: Scalars['Boolean']['output'];
  lastPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GenericResponse = {
  __typename?: 'GenericResponse';
  message?: Maybe<Scalars['String']['output']>;
};

export type GetProductPaginator = {
  __typename?: 'GetProductPaginator';
  data?: Maybe<Array<Product>>;
  paginatorInfo: AppPaginator;
};

export type GetSalesResponse = {
  __typename?: 'GetSalesResponse';
  data?: Maybe<Array<SalesGroup>>;
  paginatorInfo: AppPaginator;
};

export type Mutation = {
  __typename?: 'Mutation';
  addProduct: GenericResponse;
  addSale: GenericResponse;
  deleteProduct: GenericResponse;
  logout: GenericResponse;
  updateProduct: GenericResponse;
  updateProductBatch: GenericResponse;
  userLogin: UserLoginResponse;
};


export type MutationAddProductArgs = {
  batches: Array<ProductBatch>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddSaleArgs = {
  items: Array<SaleInput>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProductBatchArgs = {
  batch_id: Scalars['Int']['input'];
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUserLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

export type Product = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  owner: User;
  owner_id: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  unit?: Maybe<Scalars['String']['output']>;
};

export type ProductBatch = {
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  stock: Scalars['Int']['input'];
};

export type Productbatch = {
  __typename?: 'Productbatch';
  expiry_date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  product: Product;
  product_id: Scalars['Int']['output'];
  stock: Scalars['Int']['output'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type Query = {
  __typename?: 'Query';
  getMe?: Maybe<User>;
  getProducts: GetProductPaginator;
  getSales: GetSalesResponse;
  productById: Product;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetProductsArgs = {
  first: Scalars['Int']['input'];
  keyword?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetSalesArgs = {
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryProductByIdArgs = {
  id: Scalars['Int']['input'];
};

export type Sale = {
  __typename?: 'Sale';
  id: Scalars['Int']['output'];
  owner: User;
  owner_id: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  product: Product;
  product_id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  sales_group: Scalars['String']['output'];
};

export type SaleInput = {
  product_id: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type Sales = {
  __typename?: 'Sales';
  id: Scalars['Int']['output'];
  owner_id: Scalars['Int']['output'];
  price_per_unit: Scalars['Float']['output'];
  product: Product;
  product_id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  sales_group_id: Scalars['Int']['output'];
};

export type SalesGroup = {
  __typename?: 'SalesGroup';
  id: Scalars['Int']['output'];
  owner_id: Scalars['Int']['output'];
  sales?: Maybe<Array<Sales>>;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

/** Account of a person who utilizes this application. */
export type User = {
  __typename?: 'User';
  /** When the account was created. */
  created_at: Scalars['DateTime']['output'];
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
  /** When the account was last updated. */
  updated_at: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type UserLoginResponse = {
  __typename?: 'UserLoginResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe?: { __typename?: 'User', id: string } | null };
