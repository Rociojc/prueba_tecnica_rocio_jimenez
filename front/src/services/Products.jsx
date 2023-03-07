import { api } from "./Api";

export const getProducts = async (setDataProducts) => {
    const resp = await api.get('api/products');
    setDataProducts(resp.data)
}

export const getProductById = async (productId, setProduct) => {
    const resp = await api.get(`api/products/${productId}`);
    setProduct(resp.data)
}