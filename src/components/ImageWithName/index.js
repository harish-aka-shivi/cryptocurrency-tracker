import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const ImageWithName = ({ id, name, symbol }) => {
  const [imageSrc, setImageSrc] = useState(`https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`);

  const handleImageErr = () => {
    setImageSrc(logo);
  };

  return (
    <div className="home-img-container">
      <img
        onError={handleImageErr}
        className="home-img"
        alt={name}
        src={imageSrc}
      />
      <Link to={`/${id}`}>{name}</Link>
    </div>
  );
};

export default ImageWithName;
