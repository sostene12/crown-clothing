import React from 'react';
import "./custom-button.scss";

const CustomButton = ({ children,isGoogleSignin,inverted ,...otherProps }) => {
  return ( 
    <button className={`${inverted? 'inverted':'' } custom-button`} {...otherProps}>
    {children}
  </button>
  );
};

export  default CustomButton;
