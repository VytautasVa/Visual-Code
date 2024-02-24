import { useEffect } from "react";
import { useState } from "react";
import './style.css';

export default function LoadMoreData(){
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchproducts(){
        try{
            setLoading(true)
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
                    count === 0 ? 0 : count * 20}`);
        
            const result = await response.json();
        
            if(result && result.products && result.products.length){
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false)
            }
            console.log(result);}

        catch(e){
        console.log(e);
        setLoading(false)
    }}   

    useEffect(() => {
        fetchproducts();
    }, [count]);

    useEffect(() => {
        console.log(products);
        if(products && products.length === 100) setDisableButton(true);
    },[products])

    if(loading){
        return <div> Loading data ! Please wait... </div>
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products && products.length ? products.map((item, index) => (
                        <div className="product" key={item.id + index}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>)) : null
                }
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load more products</button>
                {
                    disableButton ? <p> You have reached to 100 products</p> : null
                }
            </div>
        </div>)
}