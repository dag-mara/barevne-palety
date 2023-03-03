import React from "react";
import './style.css';

const SchemeColor = ({singleColor}) => (
    <div className="scheme-color" style={{ backgroundColor: singleColor}} >{singleColor}</div>
)

export default SchemeColor;