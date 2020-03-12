import axios from "axios"
import { ADD_CART, ALL_CART, SEARCH_CART, REMOVE_CART } from "../store/constants"

export const addCart = (item) => ({
    type: ADD_CART,
    cart: item
});

export const searchCart = (searchCart) => ({
    type: SEARCH_CART,
    searchCart: searchCart
});

export const removeCart = (remove) => ({
    type: REMOVE_CART,
    remove: remove

});
export const stockCart = (stock) => ({
    type: "STOCK",
    stock

});

export const allCart = (carritos) => ({
    type: ALL_CART,
    carritos
})


export const recoverCart = (stock) => ({
    type: "RECOVER",
    stock
})
export const createCartItem = (item) => dispatch => {
    axios.post('/api/cart/add', item)
        .then(res => res.data)
        .then(carrito => dispatch(addCart(carrito)))
        .catch(err => console.log(err))
}

export const searchUserCart = (userId) => {
    return function (dispatch, getState) {
        axios.get(` /api/cart/userCart/${userId}`)
            .then((res) => { dispatch(searchCart(res.data)) })
    }
}

export const userRemoveCart = (userId, productoId) => {
    return function (dispatch, getState) {
        return axios.delete((`/api/cart/removeCart/${userId}/${productoId}`))
            .then((res) => {
                dispatch(removeCart(res.data))
            })
    }
}

export const changeStock = (idProducto, cantidad, precio) => {
    return function (dispatch, getState) {
        return axios.put('/api/cart/stock', { cantidad, idProducto })
            .then((res) => {
                let total = cantidad * precio
                dispatch(stockCart(total))
            })
    }
}


export const recoverStock = (idProducto, cantidad, precio) => {
    return function (dispatch, getState) {
        return axios.put('/api/cart/recoverStock', { cantidad, idProducto })
            .then((res) => {
                let total = cantidad * precio
                dispatch(recoverCart(total))
            })
    }
}

export const searchCarritos = (objeto) => {
    return function (dispatch, getState) {
        axios.get(`/api/wines/reviews/${objeto.idVinito}/${objeto.idUser}`)
            .then(res => res.data)
            .then(carritos => {
                dispatch(allCart(carritos))
            })
    }
}
