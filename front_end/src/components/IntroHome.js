import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./intro.css";
import Video from "../images/addvide.mp4";
import { images } from "./Images";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import TvOutlinedIcon from "@material-ui/icons/TvOutlined";
import FitnessCenterOutlinedIcon from "@material-ui/icons/FitnessCenterOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { listProductCategories } from "../actions/productActions";
export default function IntroHome() {
  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <div className="intro">
      <div className="categories">
        {loadingCategories ? (
          <LoadingBox></LoadingBox>
        ) : errorCategories ? (
          <MessageBox variant="danger">{errorCategories}</MessageBox>
        ) : (
          categories.map((c) => (
        
              <Link
                to={`/search/category/${c}`}
              >
                <div className="category_items">
                <span> {c}</span>
                
                </div>
              </Link>
           
          ))
        )}
      </div>
      <div className="showcase">
        <span className="home_image" />
      </div>

      <div className="right_section off">
        <div className="right_section_ads">
          <video autostart="true" autoPlay muted loop src={Video} alt="Ad" />
        </div>
        <div className="right_section_content ">
          <div className="right_section_content_items">
            <img src={images.helpCenter} alt="Help center" />
            <span className="title">
              HELP CENTER
              <br />
              <span className="desc">Guide to customer Care</span>
            </span>
          </div>
          {/*<div className="right_section_content_items">
            <img src={images.easyReturn} alt="Easy Return" />
            <span className="title">
              EASY RETURN <br />
              <span className="desc">Quick Refund</span>
            </span>
          </div>
          <div className="right_section_content_items">
            <img src={images.sell} alt="Sell" />
            <span className="title">
              SELL
              <br />
              <span className="desc">Millions of Customers</span>
            </span>
          </div>*/}
        </div>
      </div>
    </div>
  );
}
