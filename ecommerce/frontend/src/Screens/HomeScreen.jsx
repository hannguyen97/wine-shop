import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen() {
 const dispatch = useDispatch();
 const productList = useSelector((state) =>state.productList);
 const {loading, error , products} = productList;

  useEffect(() => {
      dispatch(listProducts())
  }, [])
console.log(products)
  return (
      <div>
        { loading? (<LoadingBox></LoadingBox> )
        :
        error?(<MessageBox variant="danger">{error}</MessageBox>)
        :
       ( <ul className="products">
        {
          products.map(product =>
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img className="product-image" src={product.image} alt="product" />

                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
              </div>
            </li>)
        }



      </ul>)
        }
      </div>
  );
}

export default HomeScreen;