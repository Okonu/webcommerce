import React, { useEffect} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { useParams } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import Heading from '../components/Heading';
import Intro from '../components/Intro';
import './home.css'
import OmartBusiness from '../components/OmartBusiness';


export default function HomeScreen() {
  const dispatch = useDispatch();
 

 
  const { pageNumber = 1 } = useParams();
  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {users: sellers} = userTopSellersList;

  
 

  //category end
  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch,pageNumber]);
  return (
    <div className="home">
      <OmartBusiness/>
    <Intro />
    

    <Heading heading="Featured" className="heading" />
    <div className="home_row">
      {/*{data
        .filter((filrterdData) => filrterdData.category === "Supermarket")
        .slice(0, 5)
        .map((item) => (
          <Product
            id={item.id}
            key={item.id}
            title={item.desc}
            price={item.price}
            rating={item.star}
            image={item.image}
          />
        ))}*/}
    </div>
          <h1>mORACHA</h1>
    <Heading heading="Top Choices" className="heading" />
    <div className="home_row">
      {/*{data
        .filter(
          (filrterdData) => filrterdData.category === "Phones and Tablets"
        )
        .slice(0, 5)
        .map((item) => (
          <Product
            id={item.id}
            key={item.id}
            title={item.desc}
            price={item.price}
            rating={item.star}
            image={item.image}
          />
        ))}*/}
    </div>

    <Heading heading="Top Sellers" className="heading" />
      <div className="home_row">
       
        {/*{
          sellers.map((seller) => (
            <div key={seller.id}>
              <img src={seller.logo} alt={seller.seller.name}/>
              <p className="seller">{seller.seller.name}</p>
            </div>
          ))
      }*/}
    </div>
   
  </div>
  );
}
