const initialState = "";

const filterReducer = (store = initialState, { type, payload }) => {
    switch(type) {
        case "filter/set":
            return payload
        default: 
            return store;
    }
}

export default filterReducer;