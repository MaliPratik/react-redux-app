import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector,  } from 'react-redux'
import { changeValues } from '../state/user/userSlice';
import {addUser} from '../state/user/usersSlice';

function Entry() {

    let user = useSelector((state)=> state. user);
    let users = useSelector((state)=> state.users);

    let [myuser, setMyuser] = useState(user);
    const dispatch = useDispatch();

    function handleChange(e){
        e.preventDefault();
        setMyuser({...myuser, [e.target.id]: e.target.value});
        
    }
    
    function addNewUser(e){
        e.preventDefault(e);
        dispatch(addUser(myuser));
    }

    useEffect(()=>{
        dispatch(changeValues(myuser));
    }, [myuser]);

  return (
    <div>
        <form className='form-control'>
            Name:
            <input type="text" value={myuser.name} id="name" onChange={(e)=>{ handleChange(e)}} className="form-control" placeholder='Enter Name'></input><br />
            Email:
            <input type="email" value={myuser.email} id="email" onChange={(e)=>{ handleChange(e)}} className="form-control" placeholder='enter email'></input><br />
            Mobile_No:
            <input type="number" value={myuser.mobile_no} id="mobile_no" onChange={(e)=>{ handleChange(e)}} className="form-control"  placeholder='Mobile no'></input><br />
            <button onClick={(e)=>{ addNewUser(e)}} className='btn btn-primary'>Add</button>
        </form>
        <br/>
        <hr/>
        <br/>
        <div className='col-lg-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile no</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, i)=>{
                            return <tr>
                            <td>{i+1}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.mobile_no}</td>
                        </tr>
                            
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Entry;