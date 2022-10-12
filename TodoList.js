var title = document.getElementById("realTitle")
title.textContent = "My To Do List "

var InputBox = document.getElementById("TodoInput")
var addButton = document.getElementById("addButton")
var list = document.getElementById("list")
 var num = -1
function createline (ThisNotesId) {
        if(InputBox.value === ``) {}
        else{
        console.log(ThisNotesId)
        var newBox = document.createElement("ToDoBox")
        newBox.innerHTML = `
        <li class = "EachList"  id = "list${ThisNotesId}"></l1>
        <span> <input id = "CheckBox${ThisNotesId}" type = 'checkBox'> </input> </span>
        <span id = "Input#${ThisNotesId}">${InputBox.value}</span>     
        <span> <i class="gg-trash" id = "trashFor${ThisNotesId}"></i></span>
        `
        list.appendChild(newBox)
        InputBox.value = ``
        CheckBox = document.getElementById(`CheckBox${ThisNotesId}`)
         ThisTrash = document.getElementById(`trashFor${ThisNotesId}`)
      
        
        ThisTrash.addEventListener('click' , () => {
        console.log(`list${ThisNotesId}`)
         document.getElementById(`list${ThisNotesId}`).remove()
        })
        CheckBox.addEventListener('click' , () => {
            console.log(`list${ThisNotesId}`)
            let userList =  document.getElementById(`Input#${ThisNotesId}`).style.textDecoration
        
            
            if(userList != "line-through"){
                // console.log("no line ")
                document.getElementById(`Input#${ThisNotesId}`).style.textDecoration = "line-through"
            }else {
                document.getElementById(`Input#${ThisNotesId}`).style.textDecoration = "none"
                // console.log("you got a line bro")
                
            }
        })

        }
}   
addButton.addEventListener('click' , () => { 
    num = num + 1 
    createline(num)})

InputBox.onkeydown = checkKey;

function checkKey(e) {
    e = e 
     if (e.key == 'Enter') {
        num = num + 1
        createline(num)
      console.log('This Works')
    }

}
