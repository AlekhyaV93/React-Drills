import React from 'react'

function Image(props){
    return(
       <div>
           <img src={props.src} alt="Sample Image" width="200" height="200"/>
       </div> 
    )
}

export default Image