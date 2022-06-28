import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import{  }from 'd3';
import { GetData } from '../components/GetData';
import { Marks } from '../components/Marks';


const url = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';
const width = 960;
const height = 500;

const Worldmap = () => {

    const data = GetData(url);
    if(!data) {
        return <pre>Loading</pre>
    } else {


    return (
        <>
        <svg width={width} height={height}>

                <Marks 
                data={data} 
                />

        </svg>
    
        </>
    
        )};

}
export default Worldmap;