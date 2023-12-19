import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    // Initial Value for the states.
    initialState: {
        items: [],
    },
    // Use to modify the state.
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: () => {
            return { items: [] }; // []
        },
    },
});

// Export actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export Reducer(Combinations of all reducers functions) not reducers
export default cartSlice.reducer;
