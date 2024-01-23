function TodoItem(props){
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
      
     function handleDelete(deleteid)
     {
         var tempArr = activityArr.filter((item)=>{
            if(item.id != deleteid)
            {
                return true
            }

         })
         setActivityArr(tempArr)
     }
    
    
    return(
        <div>
         <div className="flex justify-between"> 
        <p>{props.index+1}.{props.item.activity}</p>
        <button className="text-red-500" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
        </div>
    )
}
export default TodoItem