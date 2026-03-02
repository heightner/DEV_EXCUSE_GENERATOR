import data from '../data/excuses.json' with { type: 'json' };

const getRandomExcuse = () => {
    const excusesList = data.excuses;
    if (!excusesList || excusesList.length === 0) {
        return 'No excuses available for now. Please check back later!';
    }
    
    const randomIndex = Math.floor(Math.random() * excusesList.length);
    return excusesList[randomIndex];
}

export default getRandomExcuse;