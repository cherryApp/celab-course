// Crud table class.
export class CrudTable {
    constructor(selector) {
        this.table = document.querySelector(selector);
    }

    fill(columns = [], data = []) {
        this.data = data;
        this.columns = columns;
    }

    set data(data = []) {

    }

    set columns(columns = []) {
        const tr = this.table.querySelector('thead tr');
        for (const col of columns) {
            const th = document.createElement('th');
            th.innerHTML = col.label;
            tr.appendChild(th);
        }
    }
}
