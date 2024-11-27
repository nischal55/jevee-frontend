import axios from "axios";
import { useState } from "react"
function LoginTest() {
    const [identifier,setEmail] = useState('');
    const [password,setPass] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/api/user/login`,{identifier,password}).then((res)=>{console.log(res.data)})
    }

  return (
    <>
    <h1>Login test</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
            <br/><br/>
            <input type="password" onChange={(e)=>{setPass(e.target.value)}} required/><br/><br/>
            <input type="submit" value='submit'  className="bg-indigo-800 text-white rounded p-2"/>
        </form>  
    </>
  )
}
export default LoginTest;