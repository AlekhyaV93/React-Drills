import React from 'react';
import ToDo from './ToDoComponent';

function List(props){
    const compToDo = props.foodName.map((food, index) => {
        return (
          <ToDo key={index} list={food} />
        )
      })
    return(
        <div>          
             {compToDo}
        </div>
    )
}

export default List