export function getTime(level) {
    //console.log(d[b]);
    const promise = new Promise((resolve, reject) => {        
        const newPosition = 10000/level;
        resolve(newPosition);
    });
    return promise;
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