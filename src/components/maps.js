import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import geoUrl from "../data/gadm40_VEN.json"

const Maps = ({ setTooltipContent }) => (
  <div>
    <ComposableMap
        projectionConfig={{
            rotate: [68, -5, 0],
            scale: 2000
        }}
    > 
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => 
            <Geography 
                fill="#DDD"  
                stroke="#FFF" 
                key={geo.rsmKey} 
                geography={geo} 
                onMouseEnter={() => {
                    const { NAME_1,LINEA,VARNAME_1} = geo.properties;
                    setTooltipContent(`${NAME_1} - Nivel de Tensión (Kv): ${LINEA} - ${VARNAME_1}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(<br/>);
                  }}
                  style={{
                    default: {
                      fill: "#22418f",
                      outline: "none"
                    },
                    hover: {
                      fill: "#88c900",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
            />)
        }
      </Geographies>
    </ComposableMap>
  </div>
)

export default Maps

