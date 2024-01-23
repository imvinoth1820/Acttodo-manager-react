import { useState } from "react"

function AddTodoForm(props){

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
 
    const[newActivity,setNewActivity] = useState("")
   

    function handleChange(event){
        setNewActivity(event.target.value)
    }
    

    function addActivity() {
     if(newActivity === ""){
        alert("Add your task")
     }else{
            setActivityArr([...activityArr, {
                id: activityArr.length + 1,
                activity: newActivity
            }]);
            setNewActivity(""); 
        
    }
}

    return(

        <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>

        <div>

        <input value={newActivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next activity"/>
        <button onClick={addActivity} className="bg-black p-1 text-white border border-black">Add</button>
        </div>

    </div>

    )
}
export default AddTodoForm