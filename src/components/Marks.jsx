import { geoEqualEarth, geoPath, geoGraticule } from 'd3';

const graticule = geoGraticule();
const projection = geoEqualEarth();
const path = geoPath(projection);

export const Marks = ({data: { countries, interiors}}) => (
    <>
    <g className="marks">
        <path className="globe" d={path({type: 'Sphere'})}/>
        <path className="graticule" d={path(graticule())} />
     { countries.features.map(feature => (
        <path className="countries"
        d={path(feature)} />
        ))} 
        <path/>
        <path className="interiors" d={path(interiors)} />
    </g>
    </>
)