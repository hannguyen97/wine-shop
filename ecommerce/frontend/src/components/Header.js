import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { signOut } from "../actions/userActions";


export default function Header(props) {
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [search , setSearch] = useState({
    keyword : ""
  })

  const singoutHandler = () => {
    dispatch(signOut());
  };
  function handleChange(e) {
    setSearch(e.target.value); 
  }
  const sendData = e => {
    e.preventDefault();
    props.onSearch(search);
  }

  
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  return (
    <div className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">MEN'S</Link>
          </div>
          <div className="search-box">
        
          <form className="bd-search d-flex align-items-center" onSubmit={sendData}>
            <input  
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            onChange={handleChange}
            />
            <button className="button" type="submit">Search</button>
          </form>
      
          </div>
          <div className="header-links">
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i class="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={singoutHandler}>
                    Sing Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
          
        </div>
              
  )
}
