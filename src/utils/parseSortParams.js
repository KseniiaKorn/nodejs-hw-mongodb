import { SORT_ORDER } from "../constans/index.js";

const parseSortOrder = (sortOrder) => {
    const isKnownOrder = [SORT_ORDER.ACS,
    SORT_ORDER.DESC].includes(sortOrder);
    if (isKnownOrder) return sortOrder;
    return SORT_ORDER.ACS;
};

const parseSortBy = (sortBy) => {
    const keysOfContact = [
        '_id',
        'name',
        'phoneNumber',
        'email',
        'isFavourite',
        'contactType',
    ];

    if (keysOfContact.includes(sortBy)) {
        return sortBy;
    }

    return '_id';
};

export const parseSortParams = (query) => {
    const { sortOrder, sortBy } = query;

    const parsedSortOrder = parseSortOrder(sortOrder);
    const parsedSortBy = parseSortBy(sortBy);

    return {
        sortOrder: parsedSortOrder,
        sortBy: parsedSortBy,
    };
};