import { useState } from "react"
import TodoItem from "./TodoItem"

function TodoList(props){
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
   
    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium ">Today's Activity</h1>
        {activityArr === "" ? <p>You haven't added any activity</p> : "" }
         {
            activityArr.map((item,index)=>{
               return <div>
                <TodoItem id={item.id} item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
                
                </div>
            })
         }
    </div>
    )
}
export default TodoList