import Card from "../components/Card"
import Header from "../components/Header"

import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing()
{
    const data = useLocation()
     console.log(data.state.user)
    return(
        <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
       <Header username={data.state.user}/>
       <div className="flex justify-between gap-7 my-5 flex-wrap">
       <Card bgColor = {"#8272DA"} title={23} subtitle={"Chennai"}/>
       <Card bgColor = {"#FD6663"} title={"December"} subtitle={"14:08:25"}/>
       <Card bgColor = {"#FCA201"} title={"Built"} subtitle={"Using React"}/>
       

        </div>
        <TodoContainer />

      </div>
     
     
    </div>
    )
}
export default Landing