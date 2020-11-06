// HTTP communication service.
class GateWay {
    constructor(endpoint = 'http://localhost:3000') {
        this.endpoint = endpoint;
    }

    read(entityName, id = '') {
        const url = `${this.endpoint}/${entityName}/${id}`;
        return fetch(url)
                .then( r => r.json() );
    }
    
    create(entityName, entity) {
        const url = `${this.endpoint}/${entityName}`;
        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(entity)
        })
        .then( r => r.json() );
    }
    
    update(entityName, entity, id) {
        const url = `${this.endpoint}/${entityName}/${id}`;
        return fetch(url, {
            method: 'PATCH',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(entity)
        })
        .then( r => r.json() );
    }
    
    delete(entityName, id) {
        const url = `${this.endpoint}/${entityName}/${id}`;
        return fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then( r => r.json() );
    }
}