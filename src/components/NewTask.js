import React, { Component } from 'react';

class NewTask extends Component {
    render() {
        return (
            <div>
                <input type="text" id="toDo" name="foodName" placeholder="Enter task" onChange={this.props.onInputChange} value={this.props.input} />
                <button onClick={this.props.onSubmit}>Add</button>
            </div>
        )
    }
}

export default NewTask