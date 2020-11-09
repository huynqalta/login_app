import react, { useState } from 'react'
import LoginForm from './component/LoginReactHook/LoginForm';
function LoginAppReactHook(){
    const adminUser={
        email:'huy@123',
        password:'123123'
    }
    const [user,setUser]=useState({name:'',email:''});
    const [error,seterror]=useState('');
    const Login=details=>{
        console.log(details);
        if(details.email===adminUser.email&&details.password===adminUser.password){
            console.log("đăng nhập thành công");
            setUser({
                name:details.name,
                email:details.email
            })
        }
        else{
            seterror(
                "đăng nhập thất bại"
            )
        }
    }
    const Logout=()=>{
        setUser({
            name:'',
            email:''
        })
    }
    return (
        <div>
            {
                (user.email!=='')?(
                    <div>
                        <h2>Wellcome,<span>{user.name}</span></h2>
                        <button onClick={Logout}>Logout</button>
                    </div>
                ):(
                    <div>
                        <LoginForm  Login={Login} error={error}/>
                    </div>
                )
            }
        </div>
    )
}
export default LoginAppReactHook;
