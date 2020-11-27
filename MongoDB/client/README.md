# Tasks

## Install necessary components
- `npm i bootstrap font-awesome jquery popper.js`
1. Bootstrap (jQuery, popper.js)
1. FontAwesome
1. Axios

## Create an Axios plugin
1. Use it in the main.js.
1. The base url will be `http://localhost:3000/api`

## Create a Store
1. Name: UserStore
1. State: list, item, count, error
1. Methods: load, getItem, update, remove, find

## Create a new Vue component for display users.
1. Name: Table.vue
1. It uses the UserStore
1. It will be include to the App.vue
1. Contains a table with thead and tbody
1. Columns: based on entity fields (firstName, lastName, ...)
1. When the component is shown, it shows the users
1. A delete button on each row
1. When user clicks on the delete button, the store removes this entity
