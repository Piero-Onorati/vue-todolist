const app = new Vue (
    {
        el: '#app',

        data: {
            toDoList: [
                'Studiare Vue.js',
                'Terminare progetto "To-Do List" ',
                'Andare in palestra'
            ],
            newToDo: ''

        },

        methods: {
            addNewTask : function(){
                if (this.newToDo !=''){
                    this.toDoList.push(this.newToDo)
                }
                
            },

            removeTask : function(index){
                this.toDoList.splice(index,1)
            }

        }
    }
);