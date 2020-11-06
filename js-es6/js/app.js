class App {
    constructor() {
        this.brandElement = document.querySelector('.navbar-brand');
        this.init();
    }
    
    // Get settings from the server.
    getSettings() {
        return fetch('http://localhost:3000/settings')
            .then( r => r.json() );
    }
    
    // Get user from the server.
    getUsers() {
        return fetch('http://localhost:3000/users')
            .then( r => r.json() );
    }
    
    init() {
        Promise.all([this.getSettings(), this.getUsers()])
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
