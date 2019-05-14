import React from 'react';

function Logout(props){
    return (
     <div>
         <strong style={{marginRight: '10px'}}>{props.userName}</strong>
         <button className="btn btn-danger" onClick={props.onHandleLogout}>Logout</button>
     </div>
    )
}

export default Logout;