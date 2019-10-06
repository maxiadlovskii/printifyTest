export const optionCreator = ({ list, idKey, textKey }) => list.map( ({ [textKey]: text, [idKey]: value, ...rest })=>({
    ...rest,
    text,
    value
}));