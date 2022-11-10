

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     todoAdded(state, action) {
//       state.push({
//         id: action.payload.id,
//         text: action.payload.text,
//         completed: false
//       })
//     },
//     todoToggled(state, action) {
//       const todo = state.find(todo => todo.id === action.payload)
//       todo.completed = !todo.completed
//     }
//   }
// })

// export const { todoAdded, todoToggled } = contactsSlice.actions
// export default contactsSlice.reducer

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     contacts:  {
//         items: [],
//         isLoading: false,
//         error: null
//     },
//     filter: ""
//   }


// // Then, handle actions in your reducers:
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     // standard reducer logic, with auto-generated action types per reducer
//   },
//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(fetchUserById.fulfilled, (state, action) => {
//       // Add user to the state array
//       state.entities.push(action.payload)
//     })
//   },
// })

// // Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))