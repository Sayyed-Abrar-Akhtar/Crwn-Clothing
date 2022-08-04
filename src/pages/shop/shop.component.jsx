import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';
import {
  fetchCollectionsStartAsync,
  updateCollections,
} from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {
  selectIsCollectionFetcing,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

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
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetcing,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
