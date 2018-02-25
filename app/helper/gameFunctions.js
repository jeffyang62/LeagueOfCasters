export function getTime(level) {
    //console.log(d[b]);
    const promise = new Promise((resolve, reject) => {        
        const newPosition = 2000/level;
        resolve(newPosition);
    });
    return promise;
}

export function calculateScore(level, score){
    return (level*10)+score;
}

export function getStance() {
    return Math.round(Math.random());
}

export function getStanceType() {
    return Math.floor(Math.random()*3);
}

export function getPattern() {

}

export function getScore() {

}

export function nextRound() {

}