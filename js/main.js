Vue.component('todo-item', {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    template: '<div>' +
    '<button type="button" v-on:click="onClickRemove" class="btn-danger">削除</button>' +
    '<input type="button" class="toggle" name="toggle" value="未完のタスク" onclick="dspmsg(this)" />' +
    '<span :class="{done: todo.completed}">{{ todo.text }}</span>'  +
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
            { completed: false, text: 'テストメッセージ'},
        ]
    },
///////////////////////////////////////ローカルストレージ////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////

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

function dspmsg(btnObject){
    btnObject.value = btnObject.value=="完了したタスク"?"未完のタスク":"完了したタスク";
}


