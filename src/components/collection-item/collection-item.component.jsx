import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import {
  CollectionButton,
  CollectionFooter,
  CollectionImageContainer,
  CollectionItemContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price } = item;
  return (
    <CollectionItemContainer>
      <CollectionImageContainer
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <CollectionFooter>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </CollectionFooter>
      <CollectionButton
        as={CustomButton}
        inverted
        onClick={() => addItem(item)}
      >
        Add to cart
      </CollectionButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
