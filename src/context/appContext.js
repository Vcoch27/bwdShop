import React, { useContext, useReducer } from "react";
import reducer from "./reducer.js";
import axios from "axios";

import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  SHOW_ALERT,
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  IS_DISPLAY,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  SORT_PRODUCT_BY_PRICE,
  SORT_PRODUCT_BY_TYPE,
  PANIGATION,
  PRIVIOUS_PAGE,
  CHECK_SORT,
  CHECK_PANIGATION,
  GET_CART_ITEMS,
  CHECK_SORT_PRICE,
  CHECK_SORT_MATERIAL,
  SORT_PRODUCT_BY_MATERIAL,
} from "./action.js";
const initialState = {
  user: null,
  showAlert: false,
  textMessage: "",
  typeMessage: "",
  isLoading: false,
  showMessage: false,
  showTitle: false,
  products: [],
  currentPage: 0,
  totalPages: [],
  isSortType: false,
  itemOnCart: [],
  totalCost: 0,
  quantityOfItemInCart: 0,
  isSortMaterial: false,
  isSortPrice: false,
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [states, dispatch] = useReducer(reducer, initialState);
  const register = async function (currentUser) {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        currentUser
      );
      const { user } = response.data;
      console.log(response.data);
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user: user },
      });
      console.log(response);
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
  const login = async function (currentUser) {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        currentUser
      );
      const { name, email, token } = response.data;
      const user = { name, email, token };
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user: user },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: LOGIN_USER_ERROR,
        // payload: { msg: error.response.data.msg },
      });
    }
  };
  const showErrorMessage = () => {
    dispatch({
      type: SHOW_ALERT,
    });
  };

  const clearAlert = () => {
    dispatch({
      type: CLEAR_ALERT,
    });
  };
  const existTitle = () => {
    dispatch({ type: IS_DISPLAY });
  };
  const addProduct = async (currentProduct) => {
    console.log(currentProduct);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/add-product",
        currentProduct
      );
      const { product } = response.data;
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllProduct = async () => {
    dispatch({ type: GET_PRODUCT_BEGIN });
    try {
      const response = await axios.get(
        "http://localhost:5000/api/product/get-all-product"
      );

      dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data.product });
    } catch (error) {}
  };
  const sortProductByPrice = async ({ priceSort, page }) => {
    try {
      // console.log(priceSort);
      const response = await axios.get(
        "http://localhost:5000/api/product/sort-by-price",
        { params: { priceSort, page } }
      );
      const pageArray = [];

      for (let i = 1; i <= response.data.totalPages; i++) {
        pageArray.push(i);
      }
      // console.log(response.data.products);
      dispatch({
        type: SORT_PRODUCT_BY_PRICE,
        payload: {
          data: response.data.products,
          currentPage: response.data.currentPage,
          total: pageArray,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const sortProductByType = async ({ type, page }) => {
    try {
      // console.log(type);
      const response = await axios.get(
        "http://localhost:5000/api/product/sort-by-type",
        { params: { type, page } }
      );

      const pageArray = [];

      for (let i = 1; i <= response.data.totalPages; i++) {
        pageArray.push(i);
      }
      dispatch({
        type: SORT_PRODUCT_BY_TYPE,
        payload: {
          data: response.data.products,
          currentPage: response.data.currentPage,
          total: pageArray,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const sortProductByMaterials = async ({ material, page }) => {
    try {
      console.log({ material });
      const response = await axios.get(
        "http://localhost:5000/api/product/sort-by-material",
        { params: { material, page } }
      );
      console.log(response);
      const pageArray = [];

      for (let i = 1; i <= response.data.totalPages; i++) {
        pageArray.push(i);
      }
      dispatch({
        type: SORT_PRODUCT_BY_MATERIAL,
        payload: {
          data: response.data.products,
          currentPage: response.data.currentPage,
          total: pageArray,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const panigation = async ({ page }) => {
    try {
      // console.log(type);
      const response = await axios.get(
        "http://localhost:5000/api/product/panigation",
        { params: { page } }
      );

      const pageArray = [];
      for (let i = 1; i <= response.data.totalPages; i++) {
        pageArray.push(i);
      }

      dispatch({
        type: PANIGATION,
        payload: {
          data: response.data.products,
          currentPage: response.data.currentPage,
          total: pageArray,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const setSort = async () => {
    try {
      dispatch({ type: CHECK_SORT });
    } catch (error) {
      console.log(error);
    }
  };
  const setSortPrice = async () => {
    try {
      dispatch({ type: CHECK_SORT_PRICE });
    } catch (error) {
      console.log(error);
    }
  };
  const setSortMaterial = async () => {
    try {
      dispatch({ type: CHECK_SORT_MATERIAL });
    } catch (error) {
      console.log(error);
    }
  };
  const setPanigation = async () => {
    try {
      dispatch({ type: CHECK_PANIGATION });
    } catch (error) {}
  };
  const addProductInCart = async (currentProduct) => {
    try {
      console.log(currentProduct);
      const response = await axios.post(
        "http://localhost:5000/api/cart/add-product-in-cart",
        currentProduct
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllCart = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/cart/get-all-cart"
      );
      const items = response.data.cartItems;
      let totalCost = 0;
      // console.log(response.data);
      console.log(response.data.countItems);
      {
        items.map((item) => {
          const price = parseInt(item.product.price);
          const quantity = parseInt(item.quantity);
          totalCost = price * quantity + totalCost;
        });
      }

      dispatch({
        type: GET_CART_ITEMS,
        payload: {
          data: response.data.cartItems,
          totalCost: totalCost,
          totalItems: response.data.countItems,
        },
      });
      // console.log(states.itemOnCart);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppContext.Provider
      value={{
        ...states,
        register,
        showErrorMessage,
        clearAlert,
        login,
        existTitle,
        addProduct,
        getAllProduct,
        sortProductByPrice,
        sortProductByType,
        panigation,
        setSort,
        setPanigation,
        addProductInCart,
        getAllCart,
        setSortPrice,
        sortProductByMaterials,
        setSortMaterial,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};
export { useAppContext, AppProvider };
