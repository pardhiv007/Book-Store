import React ,{useState,useEffect}from 'react';
import "../styles.css";
import homeImg from '../images/homebg.png'
import { API } from '../backend';
import Base from './Base';
import Card from './Card';
import { getProducts } from './helper/coreapicalls';
import "./HomeDesign.css";
import "./ProductCard.css";
export default function Home() {
 // console.log("API is ",process.env.REACT_APP_BACKEND)

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);


  return (
    <Base title='Home Page' description='Welcome to the Book Store'
          imageSrc= {homeImg}
          imageAlt="Home Image"
          imageWidth={2500}
          imageHeight={300}>
      {/* <div className='row text-center'>
      <h1 className="text-white">Books</h1>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="home-design">
      <main className="content">
        <section className="hero">
          <img
            className="homepage-1-icon"
            loading="lazy"
            alt=""
            src="/homepage-1@2x.png"
          />
          <h1 className="you-can-buy-container">
            <p className="you-can-buy">YOU CAN BUY</p>
            <p className="any-book">{`ANY BOOK `}</p>
            <p className="you-have-in">{`YOU HAVE IN `}</p>
            <p className="your-mind">YOUR MIND</p>
          </h1>
        </section>
        <div className="categories">
          <h1 className="books">Books</h1>
        </div>
        <div className="row mx-5 device-details">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <div className='m-4'>
                <Card product={product} />
              </div>
              </div>
            );
          })}
        </div>
        {/* <div className="device-details">
        <div className="device-details-child" />
        {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} />
              </div>
            );
        })}
      </div> */}
      </main>
    </div>
    </Base>
  );
}
