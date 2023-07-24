import React from "react";

class Bindu extends React.Component {
    clickMe(){
        alert(" Hi Bingow you are turning 18 today ! ")
    }
    render(){
        return (
            <div>
                 <h2>Click below </h2>
            <h1 onClick={()=>this.clickMe()}>Wish You Happy Birthday {this.props.name}</h1>
            <h4 href="09/07/2023">09/07/2023</h4>
            <p>

                Thank you for coming into my life, I wish you are going to desired position in your life 
            </p>

            </div>
           
        )
    }
}
export default Bindu ;
