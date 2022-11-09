import axios from 'axios'

// const initialState = {
//     contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       ]
// }  

// https://636501cef711cb49d1f26be6.mockapi.io/contacts

const instanceContacts = axios.create({
    baseUrl: 'https://636501cef711cb49d1f26be6.mockapi.io/contacts'
})

// fetchContacts "contacts/fetchAll"
// addContact "contacts/addContact"
// deleteContact "contacts/deleteContact"
export const fetchContacts = async() => {
    const data = await instanceContacts.get('/fetchAll')
    console.log('fetchContacts data: ', data)
    return data
}

const initialState = {
    contacts:  {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
  }

const contactsReducer = (store = initialState.contacts, {type, payload}) => {
    switch(type) {
        case "contacts/add":
            return [...store, payload]
        case "contacts/delete":
            console.log('STORE: ', store)
            const result = store.filter(item => item.id !== payload)
            return result

            default:
                return store
    }
}

export default contactsReducer;