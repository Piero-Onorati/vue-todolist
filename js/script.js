const app = new Vue (
    {
        el: '#app',

        data: {
            toDoList: [
                'Studiare Vue.js',
                'Terminare progetto "To-Do List" ',
                'Andare in palestra'
            ],
            newToDo: '',
            line: 'line'

        },

        methods: {
            addNewTask : function(){
                if (this.newToDo !=''){
                    this.toDoList.push(this.newToDo)
                }
                this.newToDo ='';
            },

            removeTask : function(index){
                this.toDoList.splice(index,1);
            },

            lineThrough : function(index) {
                let element = document.getElementById(index);
                element.classList.toggle('line');
            }

        }
        
    }
    
);

// Code for day + month //

const d = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

document.getElementById("month").innerHTML = months[d.getMonth()];

document.getElementById("day").innerHTML = d.getDate();
