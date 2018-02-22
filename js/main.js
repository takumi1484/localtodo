Vue.component('todo-item', {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    template: '<div>' +
    '<input type="checkbox" v-model="todo.completed">'  +
    '<span>{{ todo.text }}</span>'  +
    '<button type="button" v-on:click="onClickRemove" class="btn-danger">削除</button>' +
    '</div>',

    methods: {
        onClickRemove: function () {
            this.$emit('remove')
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        input: ' ',
        todos: [
            { completed: true, text: ''},
            { completed: false, text: '' }
        ]
    },

    watch: {
        todos: {
            handler: function() {
                localStorage.setItem('todos', JSON.stringify(this.todos));
            },
            deep: true
        }
    },

    mounted: function() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },

    methods: {
        addTodo: function () {
            this.todos.push({
                completed: false,
                text: this.input
            })
            this.input = ' '
        }
    }
});
