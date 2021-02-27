import { Product } from './../modules/product';

export const GET_PRODUCT = "GET_PRODUCT"
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS"

export interface GetProductAction {
  type: typeof GET_PRODUCT
  sortBy: string
  order: string
  limit: number
}

export interface GetProductSuccessAction {
  type: typeof GET_PRODUCT_SUCCESS
  sortBy: string
  payload: Product[]
}

export const getProduct = (sortBy: string, order: string = 'desc', limit: number = 8): GetProductAction => ({
  type: GET_PRODUCT,
  sortBy,
  order,
  limit
})

export const getProductSuccess = (payload: Product[], sortBy: string): GetProductSuccessAction => ({
  type: GET_PRODUCT_SUCCESS,
  sortBy,
  payload
})

// 搜索商品
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS"

export interface SearchProductAction {
  type: typeof SEARCH_PRODUCT
  payload: {
    category: string
    search: string
  }
}

export default interface SearchProductSuccessAction {
  type: typeof SEARCH_PRODUCT_SUCCESS
  products: Product[]
}

export const searchProduct = (payload: {
  category: string
  search: string
}): SearchProductAction => ({
  type: SEARCH_PRODUCT,
  payload
})

export const searchProductSuccess = (products: Product[]): SearchProductSuccessAction => ({
  type: SEARCH_PRODUCT_SUCCESS,
  products
})

// 筛选商品
export const FILTER_PRODUCT = "FILTER_PRODUCT"
export const FILTER_PRODUCT_SUCCESS = "FILTER_PRODUCT_SUCCESS"

export interface FilterPayload {
  order?: string
  sortBy?: string
  limit?: number
  skip: number
  filters?: {
    category: string[]
    price: number[]
  }
}

export interface FilterProductAction {
  type: typeof FILTER_PRODUCT
  payload: FilterPayload
}

export interface FilterProductSuccessAction {
  type: typeof FILTER_PRODUCT_SUCCESS
  payload: {
    size: number
    data: Product[]
  }
  skip: number
}

export const filterProduct = ({ order, sortBy, limit = 4, skip, filters }: FilterPayload): FilterProductAction => ({
  type: FILTER_PRODUCT,
  payload: {
    order,
    sortBy,
    limit,
    skip, 
    filters
  }
})

export const filterProductSuccess = (payload: {
  size: number
  data: Product[]
}, skip: number): FilterProductSuccessAction => ({
  type: FILTER_PRODUCT_SUCCESS,
  payload,
  skip
})

// 通过产品ID获取产品详情
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID"
export const GET_PRODUCT_BY_ID_SUCCESS = "GET_PRODUCT_BY_ID_SUCCESS"

export interface GetProductByIdAction {
  type: typeof GET_PRODUCT_BY_ID,
  payload: {
    productId: string
  }
}

export interface GetProductByIdSuccessAction {
  type: typeof GET_PRODUCT_BY_ID_SUCCESS,
  payload: Product
}

export const getProductById = (payload: { productId: string }): GetProductByIdAction => ({
  type: GET_PRODUCT_BY_ID,
  payload
})

export const getProductByIdSuccess = (payload: Product): GetProductByIdSuccessAction => ({
  type: GET_PRODUCT_BY_ID_SUCCESS,
  payload
})

export type ProductUnionType = 
  GetProductAction | 
  GetProductSuccessAction | 
  SearchProductAction | 
  SearchProductSuccessAction |
  FilterProductAction |
  FilterProductSuccessAction |
  GetProductByIdAction |
  GetProductByIdSuccessAction
