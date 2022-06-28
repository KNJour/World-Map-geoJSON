import React, { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature, mesh } from 'topojson';

export const GetData = (url) => {

    const [data, setData] = useState(null)
    console.log(data);
    useEffect(() => {
        const row = d => {
            
            return d;
        };
        json(url, row).then(topology => {
            const { countries, land } = topology.objects;
            setData({ 
                countries: feature(topology, countries),
                interiors: mesh(topology, countries, (a,b) => a !== b)}
            )
        });
    
    }, []);
    return data;

}
