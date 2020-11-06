import { GateWay } from './gateway.js';

class App {
    constructor() {
        this.brandElement = document.querySelector('.navbar-brand');
        this.gateway = new GateWay();
        this.init();
    }
    
    // Initialize object.
    init() {
        Promise.all([
            this.gateway.read('settings'), 
            this.gateway.read('users')
        ])
        .then(
            serverData => {
                console.log(serverData);
                this.appName = serverData[0].appName; 
            },
            err => console.error(err)
        );
    }
    
    // Set app name.
    set appName(name) {
        this.brandElement.innerHTML = name;
    }
}

const app = new App();
