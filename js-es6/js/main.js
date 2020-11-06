// Clock with old way.
const clock = document.querySelector('.header__clock');
const alertContent = document.querySelector('.alert__content');
const news = [
    {
        delay: 2000,
        content: "Továbbra is patthelyzet a választásokon"
    },
    {
        delay: 5000,
        content: "Zavargások Bugacon"
    },
    {
        delay: 8000,
        content: "Új pálinkafőzőt avattak Szarkásban"
    },
    {
        delay: 2000,
        content: "Továbbra is patthelyzet a választásokon"
    },
    {
        delay: 5000,
        content: "Zavargások Bugacon"
    },
    {
        delay: 8000,
        content: "Új pálinkafőzőt avattak Szarkásban"
    },
    {
        delay: 2000,
        content: "Továbbra is patthelyzet a választásokon"
    },
    {
        delay: 5000,
        content: "Zavargások Bugacon"
    },
    {
        delay: 8000,
        content: "Új pálinkafőzőt avattak Szarkásban"
    },
    {
        delay: 2000,
        content: "Továbbra is patthelyzet a választásokon"
    },
];

setInterval( () => {
    const currentTime = new Date();
    const timeArray = [
        currentTime.getHours(),
        currentTime.getMinutes(),
        currentTime.getSeconds()
    ];
    clock.innerHTML = timeArray.join(':');
});

// Fibonacci calculator.
/* const fibonacci = (num, memo) => {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
} */
const fibonacci = (num) => {
    if(num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num -2)
}

// Promise.
const t = console.time('p');
const timer = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const fib = fibonacci(44);
        resolve(fib);
    }, 5000);
});
/* timer.then(
    b => {
        console.log(b);
        console.timeEnd('p');
    },
    err => console.error(err)
); */

// Promise factory.
/* const numPromise = () => {
    return new Promise( (res, rej) => {
        const num = Math.round(Math.random() * 1000);
        if (num < 500) {
            rej(`Invalid number: ${num}`);
        } else {
            console.log(num);
            res(num);
        }
    });
};



numPromise()
    .then( num => numPromise() )
    .then( num => numPromise() )
    .then( num => numPromise() )
    .then( num => numPromise() )
    .then( num => numPromise() )
    .then( num => numPromise() )
    .catch( err => console.error(err) ); */

const delayFactory = (delay) => {
    return new Promise( (res, rej) => {
        const to = setTimeout( () => {
            clearTimeout(to);
            res(`delayed ${delay}ms`);
        }, delay );
    });
};
const newsDisplay = async () => {
    for (const item of news) {
        const message = await delayFactory(item.delay);
        // console.log(message);
        alertContent.innerHTML = item.content;
    }
    newsDisplay();
};

newsDisplay();

// Promise.all
console.time('p2');
Promise.all([
    delayFactory(1000),
    delayFactory(2000),
    delayFactory(5000),
    delayFactory(3000),
]).then(
    values => {
        console.timeEnd('p2');
        console.log(values);
    }
);

// Eseménykezelés: egy esemény egy függvény (addEventListener)
// Promise: egy promise, két függvény (resolve, reject)
// Observable: egy observable, három függvény (next, error, complete)
