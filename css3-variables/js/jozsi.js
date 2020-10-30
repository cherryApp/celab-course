onmessage = ev => {
    /* const command = JSON.parse(ev.data);
    const filtered = command.list.filter( 
        item => item.name.toLowerCase().indexOf(command.search.toLowerCase()) > -1
    );
    postMessage(JSON.stringify(filtered)); */
    console.time('start');
    const fibNum = fibonacci(44);
    console.timeEnd('start');
    postMessage(`${fibNum}`);
};

const fibonacci = (num) => {
    if (num <= 1) {
      return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}