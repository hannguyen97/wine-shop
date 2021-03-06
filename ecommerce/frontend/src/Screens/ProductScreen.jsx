import React from 'react';
import PropTypes from 'prop-types';
import data from '../data';
import { Link } from 'react-router-dom';

ProductScreen.propTypes = {
  
};

function ProductScreen(props) {
  const product= data.products.find(x => x._id === props.match.params.id);
  return (
    <div>
       <div className="back-to-result"> <Link to='/'>Back to result</Link></div>
       <div className="details">
         <div className="details-image">
              <img src={product.image} alt="product"/>
         </div>
         <div className="details-info">
           <ul>
             <li>
               <h4>{product.name}</h4>
             </li>
             <li>
               {product.rating} Stars ({product.numReviews} Reviews)
             </li>
             <li>
               Price :{product.price}
             </li>
             <li>
               Description :
                {product.description}
             </li>
           </ul>
         </div>
         <div className="details-action">
           <ul>
             <li>
               Price : {product.price}
             </li>
             <li>
               Status : {product.status}
             </li>
             <li>
               Qty : <select>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
               </select>
             </li>
             <li>
               <button className="button">Add to Cart</button>
             </li>
           </ul>
         </div>
       </div>
    </div>
  );
}

export default ProductScreen;