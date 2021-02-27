import { Product } from './../modules/product';
import { GET_PRODUCT, GET_PRODUCT_SUCCESS, ProductUnionType, SEARCH_PRODUCT_SUCCESS } from './../actions/product.actions';

export interface ProductState {
  createdAt: {
    loaded: boolean
    success: boolean
    products: Product[]
  }
  sold: {
    loaded: boolean
    success: boolean
    products: Product[]
  },
  search: Product[]
}

const initialState = {
  createdAt: {
    loaded: false,
    success: false,
    products: []
  },
  sold: {
    loaded: false,
    success: false,
    products: []
  },
  search: []
}

export default function productReducer (state = initialState, action: ProductUnionType) {
  switch(action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        [action.sortBy]: {
          ...state[action.sortBy === 'createdAt' ? 'createdAt': 'sold'],
          loaded: false,
          success: false
        }
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        [action.sortBy]: {
          loaded: true,
          success: true,
          products: action.payload
        }
      }
    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        search: action.products
      }
    default:
      return state
  }
}
