import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.action';

const ShopPage = ({ match, fetchCollectionsStart }) => {
  // class ShopPage extends React.Component {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  // unsubscribeFromSnapshot = null;

  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;
  //   fetchCollectionsStart();

  // const { updateCollections } = this.props;
  // const collectionRef = collection(db, 'collections');
  // getDocs(collectionRef).then((snapshot) => {
  //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
  //   updateCollections(collectionMap);
  //   this.setState({ loading: false });
  // });
  // this.unsubscribeFromSnapshot = onSnapshot(
  //   collectionRef,
  //   async (snapshot) => {
  //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
  //     updateCollections(collectionMap);
  //     this.setState({ loading: false });
  //   }
  // );
  // }

  // render() {
  // const { match } = this.props;

  return (
    <div className='shop-page'>
      <Route exact path={match.path} component={CollectionsOverviewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
  // }
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
