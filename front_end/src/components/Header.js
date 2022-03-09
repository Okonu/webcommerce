import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, Route } from "react-router-dom";
import { signout } from "../actions/userActions";

import SearchBox from "./SearchBox";
export default function Header() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout())
    };
    return (
        <header className="header">
          <div>
            <div className="sidemenu">
              <Link className="brand" to="/">
                <img
                  src="https://omart.huttech.co.ke/images/logo.png"
                  alt="omart"
                  width={139}
                  height={32}
                />
              </Link>
            </div>
          </div>
          <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          <div>
            <Link to="/cart">
              <i class="fa fa-shopping-cart" aria-hidden="true" fa-lg />
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <h1> </h1>
                  </li>
                  <li>
                    <Link to="/profile"> {userInfo.name} </Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">
                      <i class="fa fa-sort" aria-hidden="true">
                        {" "}
                        Orders
                      </i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      <i class="fa fa-sign-out" aria-hidden="true">
                        {" "}
                        Sign Out
                      </i>
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">
                      <i class="fa fa-line-chart" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/productlist">
                      <i class="fa fa-list" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">
                      <i class="fa fa-users" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/support">
                      {" "}
                      <i
                        class="fa fa-question-circle "
                        aria-hidden="true"
                      />{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
    )
}
