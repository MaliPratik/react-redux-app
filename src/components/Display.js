import React from 'react'
import { useSelector } from 'react-redux';

function Display() {
    let user = useSelector(state => state.user)
    console.log(user);

  return (
    <div className='row'>
        <hr/>
        <div className='col-lg-4'></div>
        <div className='col-lg-8 '>
            <b>Name:  </b>&nbsp;{user.name}<br/>
            <b>Email: </b>&nbsp;{user.email}<br/>
            <b>Mobile no: </b>&nbsp;{user.mobile_no}
        </div>
    </div>
  )
}

export default Display