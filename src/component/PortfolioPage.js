import React from "react";

class PortfolioPage extends React.Component{
constructor(props) {
    super(props)
    this.state = {
        works: []
    }
}
clickList = () => {
    this.setState ({
        works: ['Work1', 'Work2']
    })
}
render() {
    return (
        <>
        <button onClick = {this.clickList}>Get List</button>
        <ul>
            {this.state.works.map((work, index)=>
            (<li key = {index}>{work}
            </li>
          )
         )
        }
        </ul>
        
        </>
    )
}
}

export default PortfolioPage