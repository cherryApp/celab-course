import { GateWay } from './gateway.js';

// Logger class.
export class Logger {
    constructor() {
        this.console = true;
        this.server = true;
        this.gateway = new GateWay();
    }

    set show(canLogInConsole) {
        this.console = canLogInConsole;
    }

    set remote(canRemoteLog) {
        this.server = canRemoteLog;
    }

    set log(message) {
        if (this.console) {
            console.log(message);
        }

        if (this.server) {
            const log = {
                type: 'log',
                time: new Date(),
                message
            };
            this.gateway.create('log', log)
                .then( () => {} );
        }
    }

    set error(message) {
        if (this.console) {
            console.error(message);
        }

        if (this.server) {
            const log = {
                type: 'error',
                time: new Date(),
                message
            };
            this.gateway.create('log', log)
                .then( () => {} );
        }
    }
}