/* eslint-disable react/prop-types */
export default function Komponentas2({cash, prizaLaimejo}){
    return (
        <div className="bg-lime">
            <h3>Komponentas2</h3>
            <p>Priza laimėjo: {prizaLaimejo}</p>
            <p>Cash: {cash}</p>
        </div>
    );
}