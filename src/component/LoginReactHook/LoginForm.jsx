import React,{useState} from 'react'

function LoginForm({Login,error}) {
    const [details,setDetails]=useState({name:'',email:'',password:''})
    const onChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.value;
        setDetails(
            {
                ...details,
                [name]:value
            }
        )
    }
    const submitHander=(e)=>{
        e.preventDefault();
        Login(details);
    }  

    return (
        <form onSubmit={submitHander}>
            <div className="container mt-5">
                {(error!=='')?(<div className="text-danger">{error}</div>):''}
                <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" className="form-control"  placeholder="Name" name="name"  value={details.name}
                onChange={onChange} />
                </div>
                <div className="form-group">
                <input type="email" className="form-control"  placeholder="Enter email" name="email" onChange={onChange} value={details.email}
             
              />
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={onChange} value={details.password}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            
        </form>
        
    )
}

export default LoginForm;
