import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import { listProductCategories } from './actions/productActions';

import MapScreen from './screens/MapScreen';
import DashboardScreen from './screens/DashboardScreen';
import SupportScreen from './screens/SupportScreen';
import ChatBox from './components/ChatBox';
import Footer from './screens/Footer';

import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';



function App() {
  const cart = useSelector((state) => state.cart);
 
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  
 
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
        <div>
            <div className="sidemenu">                 
                <Link className="brand" to="/">
                  <img src="https://omart.huttech.co.ke/images/logo.png" alt="omart"width={ 139} height={32}/>
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
             <i class="fa fa-shopping-cart" aria-hidden="true" fa-lg/>
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
                    <Link to="/profile"> {userInfo.name} {' '}</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory"><i class="fa fa-sort" aria-hidden="true" > Orders</i></Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                     <i class="fa fa-sign-out" aria-hidden="true"> Sign Out</i>
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
                    <Link to="/dashboard"><i class="fa fa-line-chart" aria-hidden="true" /></Link>
                  </li>
                  <li>
                    <Link to="/productlist"><i class="fa fa-list" aria-hidden="true" /></Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist"><i class="fa fa-users" aria-hidden="true"/></Link>
                  </li>
                  <li>
                    <Link to="/support"> <i class="fa fa-question-circle " aria-hidden="true" /> </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
       {/*<div className="grid-container">*/}
{/*       
              <aside className={sidebarIsOpen ? 'open' : ''}>
                <ul className="categories">
                  <li className="categoriestop">
                      
                    <button
                      onClick={() => setSidebarIsOpen(false)}
                      className="close-sidebar"
                      type="button"
                    >
                      <i className="fa fa-close"></i>
                    </button>
                  </li>
                  {loadingCategories ? (
                    <LoadingBox></LoadingBox>
                  ) : errorCategories ? (
                    <MessageBox variant="danger">{errorCategories}</MessageBox>
                  ) : (
                    categories.map((c) => (
                      <li key={c}>
                        <Link
                          to={`/search/category/${c}`}
                          onClick={() => setSidebarIsOpen(false)}
                        >
                          {c}
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </aside>*/}
        
        <main>
          <Route path="/seller/:id" component={SellerScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/AboutUs" component={AboutUs}></Route>
          <Route path="/PrivacyPolicy" component={PrivacyPolicy}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>

          <AdminRoute
            path="/dashboard"
            component={DashboardScreen}
          ></AdminRoute>
          <AdminRoute path="/support" component={SupportScreen}></AdminRoute>

          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute>
          
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        
        <footer className="row center">
          {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
          <Footer/>
              
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
