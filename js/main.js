Vue.component('todo-item', {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    template: '<div>' +
    '<button type="button" v-on:click="onClickRemove" class="btn-danger">削除</button>' +
    '<input v-on:click="test" type="button" class="toggle" name="toggle" value="未完のタスク" onclick="dspmsg(this)" />' +
    '<span :class="{done: todo.completed}">{{ todo.text }}</span>'  +
    '</div>',

    methods: {
        onClickRemove: function () {
            this.$emit('remove')
        },
        test: function () {
            if(check=== "未完のタスク"){
                this.todo.completed = false
            }else{
                this.todo.completed = true
            }
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        input: '',
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
            if(this.input !== ''){
            this.todos.push({
                completed: false,
                text: this.input
            })}else{alert("タスクを入力してください")}
            this.input = ''
        }
    }
});
let check;
function dspmsg(btnObject){
    btnObject.value = btnObject.value=="完了したタスク"?"未完のタスク":"完了したタスク";
    check = btnObject.value;
}


