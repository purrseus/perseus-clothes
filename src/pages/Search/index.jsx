import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Search.scss';
import { ReactComponent as LoadingComponent } from 'assets/icons/loading-component.svg';

import CommonItem from 'common/CommonItem';
import AddToBagBtn from 'common/AddToBagBtn';
import productApi from 'api/productAPI';

const Search = () => {
  const { name } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const products = await productApi.search(name);
        !!products.length ? setResult(products) : setResult(name);
      } catch (error) {
        throw error;
      }
    })();
  }, [name]);

  return (
    <div className="search-list">
      {typeof result === 'object' && !!result.length ? (
        result.map((product, index) => {
          return (
            <div key={index} className="wrap-item">
              <CommonItem item={product} />
              <AddToBagBtn product={product} />
            </div>
          );
        })
      ) : result === name ? (
        <h1 className="no-results">oops - no results for "{result}".</h1>
      ) : (
        <LoadingComponent className="loading-component" />
      )}
    </div>
  );
};

export default Search;
