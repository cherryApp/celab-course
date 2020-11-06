import { GateWay } from './gateway.js';
import { CrudTable } from './crud-table.js';

class App {
    constructor() {
        this.brandElement = document.querySelector('.navbar-brand');
        this.gateway = new GateWay();
        this.table = new CrudTable('#crud-table');
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
                this.table.fill(serverData[0].columns);
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
