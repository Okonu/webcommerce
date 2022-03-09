import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./intro.css";
import { images } from "./Images";
import { Link } from "react-router-dom";
import { listProductCategories } from "../actions/productActions";
import MessageBox from "./MessageBox";
import Video from "../images/addvide.mp4";

function Intro() {
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
          <MessageBox variant="danger">{errorCategories}</MessageBox>
        ) : (
          categories.map((c) => (
            <div className="category_items" key={c}>
              <Link to={`/search/category/${c}`}>
                <span>{c}</span>
              </Link>
            </div>
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
              Customer Support
              <br />
              <span className="desc">Omart customer Centre</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
