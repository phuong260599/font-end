import {  all } from "redux-saga/effects";
import ProductItem from './productItem';

export default function* () {
  yield all([ProductItem()]);
}
