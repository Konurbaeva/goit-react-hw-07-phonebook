// export const getFilteredContacts = ({filter, contacts}) => {   
//     if (!filter) {
//         return contacts;
//     }

//     const normalizedFilter = filter.toLocaleLowerCase();
//     const filteredContacts = contacts.filter(({name, number}) => {
//         const normalizedName = name.toLocaleLowerCase();
//         const normalizedNumber = number.toLocaleLowerCase();
//         const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
//         return result;
//     })
//     return filteredContacts;
// }

// export const getFilteredContacts = ({filter}, state) => {   
//     if (!filter) {
//         return state.contacts.items;
//     }

//     const normalizedFilter = filter.toLocaleLowerCase();
//     const filteredContacts = state.contacts.items.filter(({name, number}) => {
//         const normalizedName = name.toLocaleLowerCase();
//         const normalizedNumber = number.toLocaleLowerCase();
//         const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
//         return result;
//     })

//     console.log('filteredContacts : ', filteredContacts)
//     return filteredContacts;
// }

export const getFilteredContacts = state => state.contacts.items