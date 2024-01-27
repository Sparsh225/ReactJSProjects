import React,{useCallback,useContext,useState} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    
    const {setUser}=useContext(UserContext)
    const handleSubmit=()=>{
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
      <input type="text" placeholder='password'  onClick={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
