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
            tr.rowData = row;
            for (const col of this.currentColumns) {
                const td = document.createElement('td');
                td.innerHTML = `<input class="form-control" value="${row[col.key]}">`;
                tr.appendChild(td);
            }
            this.getButtonGroup(tr);
            tbody.appendChild(tr);
        }
    }

    getButtonGroup(tr) {
        const uBtn = document.createElement('button');
        uBtn.className = 'btn btn-success';
        uBtn.innerHTML = `<i class="fa fa-refresh"></i>`;
        uBtn.addEventListener('click', (ev) => {
            const data = tr.rowData;
            console.log(data);
        });

        const bGroup = document.createElement('div');
        bGroup.className = 'btn-group';
        bGroup.appendChild(uBtn);

        const td = document.createElement('td');
        td.appendChild(bGroup);
        tr.appendChild(td);
    }

    set columns(columns = []) {
        this.currentColumns = columns;
        const tr = this.table.querySelector('thead tr');
        for (const col of columns) {
            const th = document.createElement('th');
            th.innerHTML = col.label;
            tr.appendChild(th);
        }
        const th = document.createElement('th');
        tr.appendChild(th);
    }
}
