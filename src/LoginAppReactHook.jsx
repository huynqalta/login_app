import react, { useState } from 'react'
import { Route,BrowserRouter as Router, Switch,Link ,Redirect} from 'react-router-dom';
import Admin from './component/LoginReactHook/Admin';
import LoginForm from './component/LoginReactHook/LoginForm';
import Logoout from './component/LoginReactHook/Logoout';
function LoginAppReactHook(){
    const adminUser={
        email:'huy@123',
        password:'123123'
    }
    const [user,setUser]=useState({name:'',email:''});
    const [error,seterror]=useState('');
    const [logggedIn,setlogggedIn]=useState(false);
    const Login=details=>{
        console.log(details);
        if(details.email===adminUser.email&&details.password===adminUser.password){
            console.log("đăng nhập thành công");
            setlogggedIn(
              true
            )
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
        <Router>
          <div>
          <Switch>
            {
              (user.email!=='')?(
                <div>
                  <Route path="/admin">
                     <Admin />
                  </Route>
                    <h2>Wellcome,<span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ):(
                <div>
                    <Route path="/">
                      <LoginForm Login={Login} error={error} />
                  </Route>
                </div>
            )
            }
            <Route path="/logout">
              <Logoout />
            </Route>
          </Switch>
          </div>
      </Router>
        // <div>
        //     {
        //         (user.email!=='')?(
        //             <div>
        //                 <h2>Wellcome,<span>{user.name}</span></h2>
        //                 <button onClick={Logout}>Logout</button>
        //             </div>
        //         ):(
        //             <div>
        //                 <LoginForm  Login={Login} error={error}/>
        //             </div>
        //         )
        //     }
        // </div>
    )
}
export default LoginAppReactHook;
