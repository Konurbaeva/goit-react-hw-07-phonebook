import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// const store = configureStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

// export default store;

// export const store = configureStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );


    export const store = configureStore({ reducer: rootReducer })