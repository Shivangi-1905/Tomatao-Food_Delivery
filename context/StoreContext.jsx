import { createContext, useState } from "react";
import  { food_list }  from "../assets/assets";



const StoreContext = createContext(null);
export { StoreContext };

const StoreContextProvider = (props) => {

    const[cartItems,setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
    }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
}
    const removeFromCart = (itemId) => {
    setCartItems((prev) => {
        if (!prev[itemId]) return prev; // Do nothing if item not in cart
        const updatedCart = { ...prev };
        if (updatedCart[itemId] === 1) {
            delete updatedCart[itemId]; // Remove item if count is 1
        } else {
            updatedCart[itemId] -= 1; // Decrement count
        }
        return updatedCart;
    });
}

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if (cartItems[item]>0){
               let itemInfo = food_list.find((product)=>product._id === item);
               totalAmount += itemInfo.price* cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;