export function newHorizontal(v, a, b, d, x, wh) {
    //console.log(d[b]);

    const promise = new Promise((resolve, reject) => {
        const n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
        const newPosition = n < 0 ? 0 : n > wh ? wh : n;

        resolve(newPosition);
    });

    return promise;
}

export function newVertical(v, a, b, d, x, wv) {

    return new Promise((resolve, reject) => {
        const n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
        resolve(n < 0 ? 0 : n > wv ? wv : n);
    });
   // const n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    //return n < 0 ? 0 : n > wv ? wv : n;
}

export function limit(width) {
    const promise = new Promise((resolve, reject) => {
        const block = (width)/4;
        const positions = [0, width-(3*block)-100, width-(2*block)-100, width-(block)-100, width];
        resolve(positions);
    });
    return promise;
    
}
