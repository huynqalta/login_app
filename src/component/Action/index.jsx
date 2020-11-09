import react from 'react'

function Action(){
 const addTodo=text=>{
    return{
        type:'todos/todoAdded',
        payload:text
    }
}
}
export default Action
