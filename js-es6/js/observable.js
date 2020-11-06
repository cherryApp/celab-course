const clock = document.querySelector('.header__clock');
/* setInterval( () => {
    const currentTime = new Date();
    const timeArray = [
        currentTime.getHours(),
        currentTime.getMinutes(),
        currentTime.getSeconds()
    ];
    clock.innerHTML = timeArray.join(':');
}); */

// Eseménykezelés: egy esemény egy függvény (addEventListener)
// Promise: egy promise, két függvény (resolve, reject)
// Observable: egy observable, három függvény (next, error, complete)

// Buszos példa:
// observer (megfigyelő): buszvezető
// observable (megfigyelhető): utas
// next: jelzés
const currentTime = () => {
    const time = new Date();
    const timeArray = [
        time.getHours(),
        time.getMinutes(),
        time.getSeconds()
    ];
    clock.innerHTML = timeArray.join(':');
};

const rxClock = rxjs.interval(1000);
    
rxClock.subscribe(
        num => currentTime(),
        err => console.error(err),
        () => console.log('complete')
    );

rxClock.pipe(
        rxjs.operators.take(10),
        rxjs.operators.map( num => num * 2 )
    )
    .subscribe(
        num => console.log(num),
        err => console.error(err),
        () => console.log('complete')
    );
