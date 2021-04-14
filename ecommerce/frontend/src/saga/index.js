import { call, put, takeEvery, takeLatest,fork, take } from 'redux-saga/effects';
import { getListProducts,getListProductsFaile } from '../actions/productActions';
import { getList } from '../Apis/products';
import * as productType from './../constants/productConstants';


function* watchFetchListProductAction(){
    while(true){
    
      yield take(productType.PRODUCT_LIST_REQUEST);
      try {
      const res =  yield call(getList);
      const { status , data } = res;
      console.log(data);
   
        yield put(getListProducts(data))
      } catch (error) {
        yield put(getListProductsFaile(error))
      }
      
    }
    
}


function* rootSaga (){
    yield fork(watchFetchListProductAction);
   

}
 export default rootSaga;