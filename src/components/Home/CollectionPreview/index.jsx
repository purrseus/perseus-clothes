import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './CollectionPreview.scss';

import ProductCard from 'common/ProductCard';

const CollectionPreview = ({ category }) => {
  const productsPreview = category.products.slice(0, 3);

  return (
    <div className={`collection-preview ${category.name}`}>
      <div className="collection-preview__header">
        <h1 className="collection-preview__header-title">{category.name}</h1>
        <Link to={`/products/${category.name}`} className="view-all">
          View all
        </Link>
      </div>

      <div className="products-preview">
        {!!productsPreview.length &&
          productsPreview.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  category: PropTypes.shape({
    products: PropTypes.array.isRequired,
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default CollectionPreview;
