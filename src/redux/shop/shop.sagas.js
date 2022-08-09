import { collection, getDocs } from 'firebase/firestore';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  convertCollectionsSnapshotToMap,
  db,
} from '../../firebase/firebase.utils';
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './shop.action';
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  yield console.log('I am fired');

  try {
    const collectionRef = collection(db, 'collections');
    const snapshot = yield getDocs(collectionRef);
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  //  getDocs(collectionRef)
  //    .then((snapshot) => {
  //      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //      dispatch(fetchCollectionsSuccess(collectionsMap));
  //    })
  //    .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
