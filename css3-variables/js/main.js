document.addEventListener('DOMContentLoaded', () => {
    updateTime();

    const users = [
        {name: 'Botond'},
        {name: 'Botond'},
        {name: 'Botond'},
        {name: 'Ádám'},
        {name: 'Botond'},
    ];


    const w = new Worker('js/jozsi.js');
    /* w.postMessage(JSON.stringify(
        {search: 'ádám', list: users}
    ));
    w.onmessage = (ev) => {
        console.log(ev.data);
    }; */
    w.postMessage('kezdj');
    w.onmessage = (ev) => {
        console.log(ev.data);
    };
});

const updateTime = () => {
    document.documentElement.style.setProperty('--timer-day', `'${moment().format('dd')}'`);
    document.documentElement.style.setProperty('--timer-hours', `'${moment().format('k')}'`);
    document.documentElement.style.setProperty('--timer-minutes', `'${moment().format('mm')}'`);
    document.documentElement.style.setProperty('--timer-seconds', `'${moment().format('ss')}'`);

    // requestAnimationFrame(updateTime);
    const to = setTimeout( () => {
        clearTimeout(to);
        // requestAnimationFrame(updateTime);
        updateTime();
    }, 1000);
};
