
const factoryStar = (index, active = false) => {
    return {
        index,
        active
    }
}

export const createStars = (count = 10) => {
    try{
        const stars = [];
        let i;
        for(i = 0; i < count; i++){
            const star = factoryStar(i);
            stars.push(star);
        }
        return [...stars];
    }
    catch(err){
        return [];
    }
}
