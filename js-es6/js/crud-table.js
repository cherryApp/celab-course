import { GateWay } from './gateway.js';
import { Logger } from './logger.js';

// Crud table class.
export class CrudTable {
    constructor(selector) {
        this.table = document.querySelector(selector);
        this.currentData = [];
        this.currentColumns = [];
        this.gateway = new GateWay();
        this.logger = new Logger();
        this.logger.show = false;
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
                td.innerHTML = `<input name="${col.key}" class="form-control" value="${row[col.key]}">`;
                tr.appendChild(td);
            }
            this.getButtonGroup(tr);
            tbody.appendChild(tr);
        }
    }

    getButtonGroup(tr) {
        const uBtn = this.getUpdateBtn(tr);

        const bGroup = document.createElement('div');
        bGroup.className = 'btn-group';
        bGroup.appendChild(uBtn);

        const td = document.createElement('td');
        td.appendChild(bGroup);
        tr.appendChild(td);
    }

    getUpdateBtn(tr) {
        const uBtn = document.createElement('button');
        uBtn.className = 'btn btn-success';
        uBtn.innerHTML = `<i class="fa fa-refresh"></i>`;
        uBtn.addEventListener('click', (ev) => {
            const rowData = tr.rowData;
            const updatedData = {};
            const inputs = tr.querySelectorAll('input');
            Array.prototype.forEach.call(inputs, (input) => {
                const key = input.name;
                if (key !== 'id') {
                    updatedData[key] = input.value;
                }
            });
            this.gateway.update('users', updatedData, rowData.id)
                .then( resp => this.logger.log = resp )
                .catch( err => this.logger.error = err );
        });

        return uBtn;
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
