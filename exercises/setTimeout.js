const programStartTime = new Date().getTime();

const print = (text) => {
    const now = new Date().getTime();
    console.log(`${text} (after ${now - programStartTime} ms)`)
};

print('A');

const runBlockingTasks = (milliseconds) => {
    const startTime = new Date().getTime();
    while ( new Date().getTime() - startTime < milliseconds) ;
};

const measureExecutionTime = () => {
    const startTime = new Date.getTime();
    const endTime = new Date().getTime();
    console.log(`long blocking task took ${endTime - startTime} milliseconds`)
}

const printC = () => {
    print('C')
};

setTimeout(printC, 2000);

runBlockingTasks(3000);

const printE = () => {
    print('E');
};

const intervalID = setInterval(printE, 500);

setTimeout(() => {
    clearInterval(intervalID)
}, 7000);

console.log('B');

