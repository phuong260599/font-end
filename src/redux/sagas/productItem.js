import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import {
    GET_PRODUCT_ITEM_REQUEST,
    GET_PRODUCT_ITEM_SUCCESS,
    DELETE_PRODUCT_ITEM_REQUEST,
    DELETE_PRODUCT_ITEM_SUCCESS,
    CREATE_PRODUCT_ITEM_REQUEST,
    CREATE_PRODUCT_ITEM_SUCCESS,
    EDIT_PRODUCT_ITEM_REQUEST,
    EDIT_PRODUCT_ITEM_SUCCESS,
    UPDATE_PRODUCT_ITEM_REQUEST,
    UPDATE_PRODUCT_ITEM_SUCCESS
} from "../type/product";

//GET
function * getData() {
  const res = yield axios.get("http://localhost:3000/api/products");
  if (res.status === 200) {
    const data  = res.data;
    console.log("data", data)
    yield put({ type:GET_PRODUCT_ITEM_SUCCESS, payload: data });
  }
}


function * getProductItem() {
  yield takeLatest(GET_PRODUCT_ITEM_REQUEST, getData);
}


//DELETE
function * deletaData({id}) {
  console.log("+===========",id)
  const res = yield axios.delete(`http://localhost:3000/api/products/${id}`);
  if (res.status === 200) {
    const data  = res.data;
    console.log("data", data)
    yield put({ type:DELETE_PRODUCT_ITEM_SUCCESS, payload: data });
  }
}
function * deleteItem() {
  yield takeLatest(DELETE_PRODUCT_ITEM_REQUEST, deletaData);
}

//CREATE
function * create({data}) {
  const res = yield axios.post(`http://localhost:3000/api/products`,data);
  if (res.status === 200) {
    const data  = res.data;
    console.log("data", data)
    yield put({ type:CREATE_PRODUCT_ITEM_SUCCESS, payload: data });
  }
}
function * createItem() {
  yield takeLatest(CREATE_PRODUCT_ITEM_REQUEST, create);
}

//EDITGET
function * getProductProfile({id}) {
  const res = yield axios.get(`http://localhost:3000/api/products/${id}`);
  if (res.status === 200) {
    const data  = res.data;
    console.log("data", data)
    yield put({ type:EDIT_PRODUCT_ITEM_SUCCESS, payload: data });
  }
}
function * getEdit() {
  yield takeLatest(EDIT_PRODUCT_ITEM_REQUEST, getProductProfile);
}

//EDITGET
function * updateProductProfile({data,id}) {
  console.log(id)
  const res = yield axios.put(`http://localhost:3000/api/products/${id}`,data);
  console.log("res", res)
  if (res.status === 200) {
    const data  = res.dataEdit;
    console.log("res", res)
    yield put({ type:UPDATE_PRODUCT_ITEM_SUCCESS, payload: data });
  }
}
function * edit() {
  yield takeLatest(UPDATE_PRODUCT_ITEM_REQUEST, updateProductProfile);
}

export default function* () {
  yield all([
    getProductItem(),
    deleteItem(),
    createItem(),
    getEdit() ,
    edit()
  ]);
}
