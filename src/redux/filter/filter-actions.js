import { SET_FILTER } from "./filter-types";

export const filterContact = value => {
    return {
        type: SET_FILTER,
        payload: value
    }
}