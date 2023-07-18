import React from "react";

function Alert(props) {
    const capitalize = (word) =>{
     const string = word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
     return string;
    }
  return (
    <div style={{height:"45px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>}
      </div>
  );
}

export default Alert;
