import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = (props) => {
    const navigate = useNavigate()
    const[eusername,setEusername] = useState()
    const[epassword,setPassword] = useState()
    const[ruser,setRuser] = useState(true)

    const users = props.users
    
    
   
    function handleUInput(event){
        setEusername(event.target.value)
    }
    function handlePInput(event){
        setPassword(event.target.value)
    }
   


    function checkUser()
    {
        var userfound = false

        // console.log(users)
       users.forEach(function(item){
        if(item.username === eusername && item.password === epassword){

            console.log("Login sucessfull")
            userfound = true
            navigate('/landing',{state:{user:eusername}})
        }
        // else{
        //     console.log("Login failed")
        //     setRuser(false)
        // }
       })
       if(userfound===false){
        console.log("Login failed")
        setRuser(false)
    }
    }
   

  return (
    <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ?<p>I help you manage your activities after you Login :)</p>:<p className='text-red-400'>Please signup before you Login</p>}
                

                <div className="flex flex-col gap-3">
                   <input type="text" className="w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Username" onChange={handleUInput}/>

                   <input type="text" className="w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Password"
                   onChange={handlePInput}
                   />
                

                   <button className="bg-[#8272DA] w-52 p-1 rounded-md" onClick={checkUser}>Login</button>
                   <p>Don't have an account? <Link className="underline" to={"/signup"}>Signup</Link></p>

                </div>

            </div>
            
        </div>
  )
}

export default Login