
const factoryStar = index => {
    return {
        index
    }
}

export const createStars = (count = 10) => {
    try{
        const stars = [];
        let i;
        for(i = 0; i < count; i++){
            const star = factoryStar(i + 1);
            stars.push(star);
        }
        return [...stars];
    }
    catch(err){
        return [];
    }
}
