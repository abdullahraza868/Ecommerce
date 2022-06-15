export const ADD = (item) =>{
localStorage.setItem("cartItems",item)

    return{
        type: "ADD_CART",
        payload: item
    }
}