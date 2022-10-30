import { nanoid } from "nanoid";

export const isDuplicate = ({name, number}, contacts) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    const result = contacts.find(contact => {
        return (normalizedName === contact.name.toLowerCase() && normalizedNumber === contact.number.toLowerCase())
    });
    return Boolean(result);
}

export const addNewContact =(name, number) => {
    return {
        type: "contacts/add",
        payload:{
            id: nanoid(),
            name,
            number
        }
    }
}


export const deleteContact = contactId=> {
    return {
        type: "contacts/delete",
        payload:contactId
    }
}