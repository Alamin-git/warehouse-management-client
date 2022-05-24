import { useEffect, useState } from "react";

const useProductDetails = productId =>{
    const [product, setProduct] = useState({});

    useEffect(() =>{
        const url = `https://it-warehouse.herokuapp.com/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productId, product]);

    return [product]
};

export default useProductDetails;