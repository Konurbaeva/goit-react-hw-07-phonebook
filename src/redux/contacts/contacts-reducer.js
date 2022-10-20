const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      ]
}  

const contactsReducer = (store = initialState.contacts, {type, payload}) => {
    switch(type) {
        case "contacts/add":
            return [...store, payload]
        case "contacts/delete":
               const result = store.filter(item => item.id !== payload)
               return [...store, result]

            default:
                return store
    }
}

export default contactsReducer;