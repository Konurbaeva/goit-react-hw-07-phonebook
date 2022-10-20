export const getFilteredContacts =({contacts, filter}) => {
    if(!filter){
        return contacts
    }
   return contacts.name.toLowerCase().includes(filter.toLowerCase())
}
