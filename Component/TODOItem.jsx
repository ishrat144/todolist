import React, {useState} from "react";


function TODOItem(props) {

    
  return  (
      <div onClick={()=>{
          props.onChecked(props.id);
      }}>
      <li>{props.text}</li>
      <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/thumbs-up_1f44d.png" alt="images" />
      </div>
  );
}
export default TODOItem;