import React from "react";
import SchemeColor from './../SchemeColor';
import './style.css'


const Palette = ({name, description, image, colors, direction, attribution}) => {
    return (
      <>
        <div className="palette">
          <div className={`palette-scheme palette-scheme--${ direction }`}>
            <img className="scheme-image" src={image} alt={name} />
            <div className="scheme-colors">
              {colors.map((color) => {
                return(
                  <SchemeColor key={color} singleColor={color}/> 
                )
              })}
            </div>
          </div>
          <div className="palette-info">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Photo by <a href={attribution.url} target="_blank">{attribution.name}</a>.</p>
          </div>
        </div>
      </> 
    )
}

export default Palette;