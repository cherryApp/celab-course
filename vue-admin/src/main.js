import { createApp } from 'vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Translator from './plugin/translator';
import AxiosModule from './plugin/axios.api';

import App from './App.vue';

createApp(App)
    .use(AxiosModule)
    .use(Translator, {
        locale: navigator.language.split('-')[0],
        url: '/translates'
    })
    .mount('#app');

// const arr = [1, 2, 3, [4, 5, 6]];
// Flat: arr.flat() => [1, 2, 3, 4, 5, 6]

/* Array.prototype.flat = function() {
    const output = [];
    for (const item of this) {
        if (Array.isArray(item)) {
            output.push( ...item.flat() );
        } else {
            output.push(item);
        }
    }

    return output;
};
const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
console.log( arr.flat() ); */

/* import { cloneDeep, isEqual } from 'lodash';
const u = {name: 'Ádám', skills: [
    {code: 1, name: 'PHP'}
]};
const u2 = cloneDeep(u);
const u3 = ({...u});
console.log(u, u2);
console.log( Object.is(u, u2) );

u3.skills[0].code = 2;
console.log(u.skills[0].code, u3.skills[0].code);

u2.skills[0].code = 3;
console.log(u.skills[0].code, u2.skills[0].code);

console.log( isEqual(u, u3) ); */
