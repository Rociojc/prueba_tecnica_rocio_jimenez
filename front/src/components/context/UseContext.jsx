import { createContext, useEffect, useState } from "react";
import { getProducts } from "../../services/Products";

export const UseContext = createContext();

export const UseProvider = ({children}) => {

    const [ dataProducts, setDataProducts ] = useState([]);
    const [ product, setProduct ] = useState(null);
    const [ productCart, setProductCart ] = useState([]);


    const addProductCart = (product)=>{
        //1.Clono el state para que me funcione en useState 
        const copyCar = [...productCart]; 

        //2. Busco si ya existe
        // console.log(product,'product')
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

        // console.log(productCart)
    }

    const reduceProductCart = () => {

        const copyCar = [...productCart]; 

        const productRepeat = copyCar.find((item) => item.product._id === product._id);

        if(productRepeat.count > 1) {
            productRepeat.count-=1;
        }

        setProductCart(copyCar)

        // console.log(productCart)
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