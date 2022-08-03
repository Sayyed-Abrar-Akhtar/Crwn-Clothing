import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <Link to={`/shop/${title.toLowerCase()}`}>
      <h1 className='title'>{title.toUpperCase()}</h1>
    </Link>
    <div className='preview'>
      {/* Performance concern => Anonymous function calls inside any components do get called again and rerender brand new when this component render or rerender  */}
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
export default CollectionPreview;
