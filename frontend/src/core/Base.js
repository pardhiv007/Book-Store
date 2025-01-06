import React from 'react';
import Menu from './Menu';
import Navigation1 from "./Navigation1";
import "./BaseComponent.css";

const Base = ({className=" p=4",
     children}) => (
    // <div>
    //     <Menu />
    //     <div className='container col-xxl-8 px-4 py-5'>
    //     <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
    //             <div className='col-10 col-sm-8 col-lg-6'>
    //             <ImageComponent
    //                 src={imageSrc}
    //                 alt={imageAlt}
    //                 width={imageWidth}
    //                 height={imageHeight}
    //             />
    //             </div>
    //             <div className='col-lg-6'>
    //             <h2 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>{title}</h2>
    //             <p className='lead'>{description}</p>
    //             </div>
    //         </div>
    //         <div className={className} >{children}</div>
    //     </div>
    //     {/* <footer className='footer bg-dark mt-auto py-3'>
    //         <div className='container-fluid bg-success text-white text-center py-3'>
    //             <h4>If you to got any questions, feel free to reach out</h4>
    //             <button className='btn btn-warning btn-lg'>Contact Us</button>
    //         </div>
    //         <div className='container'>
    //             <span className='text-muted'>
    //                 An Amazing <span className='text-white'>Mern</span> bootcamp
    //             </span>
    //         </div>
    //     </footer> */}
    //     <div className='container'>
    //         <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
    //             <div className='col-md-4 d-flex align-items-center'>
    //                 <img src={logoImg} width={40} height={32} />
    //                 <span class="mb-3 mb-md-0 text-body-secondary">Book Store</span>
    //             </div>
    //             <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
    //                 <li className='ms-3'>
    //                     <span className='text-body-secondary'>For any queries contact us: bookstore@email.com</span>
    //                 </li>
    //             </ul>
    //         </footer>
    //     </div>
    // </div>
    <div className="base-component">
    <Navigation1 />
    <div className='container-fluid'>
        <div className={className} >{children}</div>
    </div>

    <footer className="footer">
      <img
        className="logofinal-2-icon"
        loading="lazy"
        alt=""
        src="/logofinal-2@2x.png"
      />
      <div className="contact">
        <h3 className="for-any-queries">
          For any queries contact: bookstore@gmail.com
        </h3>
      </div>
    </footer>
  </div>
)

export default Base;