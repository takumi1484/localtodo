const vm = new Vue({
    el: '#app',
    data: {
        items: [
            { title: '領収書を準備する', isChecked: true },
            { title: 'Vue.jsハンズオンの資料を作る', isChecked: true },
            { title: '参加者の人数を確認する', isChecked: false },
            { title: 'ピザを注文する', isChecked: false },
            { title: '参加費のお釣りを準備する', isChecked: false },
            { title: '会場設営をする', isChecked: false },
        ],
        newItemTitle: '' //追加
    },
    methods: {  //methodsオプションをまるっと追加
        mounted: function(){
            this.todos = JSON.parse(localStorage.getItem('items')) || [];
        },
        deleteTodo: function(){
            this.items = this.items.filter(function (item) {
                return item.isChecked === false; //
            });
            this.saveTodo(); //ブラウザに保存
        },
        saveTodo: function(){
            localStorage.setItem('items', JSON.stringify(this.items));
        },
        addTodo: function(newTitle){
            this.items.push({
                title: newTitle,
                isChecked: false
            });
            this.newItemTitle = '';
            this.saveTodo(); //ブラウザに保存
        },
    }
})