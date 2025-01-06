import React from 'react';

const ImageComponent = ({ src, alt, width, height }) => {
  return (
    <div className="col-10 col-sm-8">
      <img
        src={src}
        className="d-block mx-lg-auto img-fluid"
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
};

export default ImageComponent;