import React, { useState } from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'

import products from '../products'

//this will keep track of states and fucntions in our program
export const ShopContext = createContext(null)
//here this shows the use of context api in react
const getDeafultCart = () => {
    let cart = {}
    for (let i = 1; i < products.length + 1; i++) {
        cart[`item${i}`] = 0
    }
    return cart
}

export default function ShopContextProvider(props) {

    const [cartItems, setCartItems] = useState(getDeafultCart())

    //This checks if the existing quantity is not NaN using isNaN(). If it is, we set it to 1 instead of incrementing. If it's a number, we increment as before.
    const addToCart = (itemId) => {
        setCartItems(prev => {
            const item = prev[itemId];

            if (!isNaN(item)) {
                return {
                    ...prev,
                    [itemId]: item + 1
                }
            } else {
                return {
                    ...prev,
                    [itemId]: 1
                }
            }
        })
    }


    const clearCart = () => {
        setCartItems(getDeafultCart())
    }

    const minusFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 / prev[itemId] }))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const getSubtotal = () =>{
        let subTotal = 0
        for (const item in cartItems){
            if (cartItems[item] >0){
                let itemInfo = products.find((product) => product.id === Number(item))
                subTotal += cartItems[item] * itemInfo.price 
            }
        }
        return subTotal
    }

    const getDiscounttotal = () =>{
        let disCount = 0
        for (const item in cartItems){
            if (cartItems[item] >0){
                let itemInfo = products.find((product) => product.id === Number(item))
                disCount += cartItems[item] * itemInfo.perOff 
            }
        }
        return disCount
    }



    const contextValue = { cartItems,getDiscounttotal, getSubtotal, updateCartItemCount, clearCart, addToCart, minusFromCart, removeFromCart }


   
    return (
        // this will help us keep track  of the data and monitors my code 

        <ShopContext.Provider value={contextValue}>
            {/* props.children is used to pass the children components to the provider component*/}
            {props.children}
        </ShopContext.Provider>
    )
}
