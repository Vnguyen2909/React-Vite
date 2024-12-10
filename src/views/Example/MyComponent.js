import React from "react";

class MyComponent extends React.Component {
    
    //key : value
    state = {
        myname: "Nguyen Tuan Vi",
        faecbook: "Nguyen Vi"
    }
    /*
     JSX => return block
     fragment
    */

     handleOnChangeName = (event) =>{
        this.setState({
            myname: event.target.value
        })
     }

     handleClickButton = () =>{
        console.log('hit the button')
        alert("Click me")
     }

    render (){
        // let name  = "Nguyen Vi";
        return (
            <>
             <div className="first">
                <p>Hello {this.state.myname}</p>
                <input value={this.state.myname} type="text" 
                    onChange={(event) => this.handleOnChangeName(event)}>
                </input>
             </div>
             <div className="last">
                <p>Faecbook: {this.state.faecbook}</p>
            </div>
            <div className="btn">
                <button onClick={() => {this.handleClickButton()}}>Click me</button>
            </div>
            </>
           
        )
    }
}

export default MyComponent;