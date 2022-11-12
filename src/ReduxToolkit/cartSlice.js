import { createSlice, current } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const cartSlice = createSlice({
    name: "cart",
    initialState:  [],
    reducers:{
        /***Add****/
        addToCart: (state, action) =>{
            const findProduct = state.find((product) => product.id === action.payload.id);
            if(findProduct){
                findProduct.quantity += 1;
                Swal.fire(
                    'Success!',
                    `You added "<b>${findProduct.name}</b>" to your cart`,
                    'success'
                  )
            }else{
                const productClone = {...action.payload, quantity: 1}
                state.push(productClone)
                Swal.fire(
                    'Success!',
                    `You added "<b>${productClone.name}</b>" to your cart`,
                    'success'
                  )
            }
        },


        /***Delete****/
        deleteFromCart: (state, action) =>{
            return state.filter((product) => (product.id !== action.payload.id))
        },



        increaseQuantity: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if(findProduct){
                findProduct.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if(findProduct){
                if (findProduct.quantity > 1){
                    findProduct.quantity -= 1;
                }
            }
        },
    },
    extraReducers:{}
});


export const {addToCart, deleteFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;