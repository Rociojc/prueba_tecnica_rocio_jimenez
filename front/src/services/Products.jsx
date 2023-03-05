import { api } from "./Api";

export const getProducts = async (setDataProducts) => {
    try {
        const resp = await api.get('api/products');
        setDataProducts(resp.data)
    } catch (error) {
        console.error(error);
    }
}

export const getProductById = async (productId, setProduct) => {
    try {
        const resp = await api.get(`api/products/${productId}`);
        setProduct(resp.data)
        // console.log(resp.data, "producto");
    } catch (error) {
        console.error(error);
    }
}