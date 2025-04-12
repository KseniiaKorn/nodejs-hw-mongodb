const parseIsFavourite = (isFavourite) => {
    const isString = typeof isFavourite === 'string';
    if (!isString) return;
    const isBoolean = ["true", "false"].includes(isFavourite);
    if (isBoolean) return isFavourite;
};

const parseContactType = (contactType) => {
    const isString = typeof contactType === 'string';
    if (!isString) return;
    return contactType;
};

export const parseFilterParams = (query) => {
    const { isFavourite, contactType } = query;

    const parsedIsFavourite = parseIsFavourite(isFavourite);
    const parsedContactType = parseContactType(contactType);

    return {
        isFavourite: parsedIsFavourite,
        contactType: parsedContactType,
    };
};