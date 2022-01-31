import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
      <>
      <br/>
      <br/>
      
    props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.alert.msg}</strong>: {capitalize(props.alert.type)}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</>
  )
}

export default Alert
