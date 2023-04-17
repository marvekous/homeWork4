import React from "react";

class ContactsPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    inputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    clickAdd = () =>{
        console.log(this.state.value)
        this.setState({
            value: ''
        })
    }
    clickClear = () => {
        this.setState({
            value: ''
        })
    }

    render () {
        return(
            <>
            <input typr="text" value={this.state.value} onChange={this.inputChange}/>
            <button onClick={this.clickAdd} >Add</button>
            <button onClick={this.clickClear} >Clear</button>
            </>
        )
    }
}

export default ContactsPage;