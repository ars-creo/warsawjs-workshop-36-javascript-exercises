function randomTrueOrFalse() {
    return Math.random() < 0.5;
}

function fetchSomeData() {

    return new Promise((resolve, reject) => {
        if(randomTrueOrFalse()){
            resolve(['a', 'b', 'c']);
        } else {
            reject();
        }
    });
}

fetchSomeData()
    .then(
        data => { console.log('success', data); },
        () => { console.log('error'); }
        );
