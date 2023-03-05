import { createContext, useEffect, useState } from "react";
import { getProducts } from "../../services/Products";

export const UseContext = createContext();

export const UseProvider = ({children}) => {

    const [ dataProducts, setDataProducts ] = useState([]);
    const [ product, setProduct ] = useState(null);
    const [ productCart, setProductCart ] = useState([]);


    return(
        <UseContext.Provider value={{ dataProducts, setDataProducts, product, setProduct, productCart, setProductCart }}>
            {children}
        </UseContext.Provider>
    )
}