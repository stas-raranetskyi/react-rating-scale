
const factoryItem = index => {
    return {
        index
    }
}

export const createItems = (count = 10) => {
    try{
        const items = [];
        let i;
        for(i = 0; i < count; i++){
            const item = factoryItem(i + 1);
            items.push(item);
        }
        return [...items];
    }
    catch(err){
        return [];
    }
}
