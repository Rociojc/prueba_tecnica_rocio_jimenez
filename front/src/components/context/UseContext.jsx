import { createContext, useEffect, useState } from "react";

export const UseContext = createContext();

export const UseProvider = ({children}) => {

    const _PRODUCT_LOCALSTORAGE = "lsProduct";
    const lsCart = localStorage.getItem(_PRODUCT_LOCALSTORAGE);
    const [ dataProducts, setDataProducts ] = useState([]);
    const [ product, setProduct ] = useState(null);
    const [ productCart, setProductCart ] = useState(lsCart != null ? JSON.parse(lsCart) : []);

    useEffect(() => {
        localStorage.setItem(_PRODUCT_LOCALSTORAGE, JSON.stringify(productCart));
    }, [productCart, setProductCart]);


    const addProductCart = (product)=>{
        //1.Clono el state para que me funcione en useState 
        const copyCar = [...productCart]; 

        //2. Busco si ya existe
        const productRepeat = copyCar.find((item) => item.product._id === product._id);

        //2.1 Si no existe (nuevo, lo agrego)
        if(productRepeat==null){
            copyCar.push({
                count:1,
                product:product
            })
        }else{
            //Si ya existem, sumo 1 a la cantidad
            productRepeat.count+=1;
        }
        setProductCart(copyCar)
    }

    const reduceProductCart = () => {

        const copyCar = [...productCart]; 

        const productRepeat = copyCar.find((item) => item.product._id === product._id);

        if(productRepeat.count > 1) {
            productRepeat.count-=1;
        }

        setProductCart(copyCar)
    }

    const deleteProduct = (product) => {

        const foundId = productCart.find((item) => item.product._id === product._id);

        const newCart = productCart.filter((item) => {
          return item !== foundId;
        })

        setProductCart(newCart)
      }

    return(
        <UseContext.Provider value={{ dataProducts, setDataProducts, product, setProduct, productCart, setProductCart, addProductCart, reduceProductCart, deleteProduct }}>
            {children}
        </UseContext.Provider>
    )
}