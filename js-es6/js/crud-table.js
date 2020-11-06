// Crud table class.
export class CrudTable {
    constructor(selector) {
        this.table = document.querySelector(selector);
        this.currentData = [];
        this.currentColumns = [];
    }

    fill(columns = [], data = []) {
        this.columns = columns;
        this.data = data;
    }

    set data(data = []) {
        const tbody = this.table.querySelector('tbody');
        for (const row of data) {
            const tr = document.createElement('tr');
            for (const col of this.currentColumns) {
                const td = document.createElement('td');
                td.innerHTML = row[col.key];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    }

    set columns(columns = []) {
        this.currentColumns = columns;
        const tr = this.table.querySelector('thead tr');
        for (const col of columns) {
            const th = document.createElement('th');
            th.innerHTML = col.label;
            tr.appendChild(th);
        }
    }
}
