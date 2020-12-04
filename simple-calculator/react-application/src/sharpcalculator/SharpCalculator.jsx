import React, {Component } from 'react'

class SharpCalculator extends Component{
    constructor(props){

        super(props);

        this.state = {
                num:0,
                result:0,
                operation:''
        }
    }


    handleOperation=(operationtype)=>{
       this.setState({operation:operationtype});
       this.setState({result:this.state.num});
       this.setState({num:0});
    }


    handleResult=()=>{

            if(this.state.operation == '+')
            {
            let result = parseInt(this.state.result) + parseInt(this.state.num);
            this.setState({num:result});
            }

            if (this.state.operation == "-")
            {
            let result = parseInt(this.state.result) - parseInt(this.state.num);
            this.setState({num:result});
            }

            if (this.state.operation == "*")
            {
            let result = parseInt(this.state.result) * parseInt(this.state.num);
            this.setState({num:result});
            }

            if (this.state.operation == "/")
            {
            let result = parseInt(this.state.result) / parseInt(this.state.num);
            this.setState({num:result});
            }

            if(this.state.operation == "=")
            {
            this.setState({num:0});
            this.setState({result:0});
            }
    }


    handleEvent=(value)=>{
       var tempvalue = parseInt(this.state.num) * 10 + parseInt(value);
       this.setState({num:tempvalue});
    }


    render(){

        return (
            
            <div className="main-group" style={{justifyContent: 'center'}}>
                    <h3>Sharp Calculator</h3>
                    <input type="text" classname="txtNumber" value={this.state.num}/>
                           

                    <div className="firstrow">
                        <input type="button" value="1" onClick={() => this.handleEvent("1")}/>
                        <input type="button" value="2" onClick={() => this.handleEvent("2")}/>
                        <input type="button" value="3" onClick={() => this.handleEvent("3")}/>
                        <input type="button" value="+" onClick={() => this.handleOperation("+")}/>
                        
                    </div>

                    <div className="secrow">
                        <input type="button" value="4" onClick={() => this.handleEvent("4")}/>
                        <input type="button" value="5" onClick={() => this.handleEvent("5")}/>
                        <input type="button" value="6" onClick={() => this.handleEvent("6")}/>
                        <input type="button" value="-" onClick={() => this.handleOperation("-")}/>
                    </div>

                    <div className="thirdrow">
                        <input type="button" value="7" onClick={() => this.handleEvent("7")}/>
                        <input type="button" value="8" onClick={() => this.handleEvent("8")}/>
                        <input type="button" value="9" onClick={() => this.handleEvent("9")}/>
                        <input type="button" value="*" onClick={() => this.handleOperation("*")}/>
                    </div>

                    <div className="fourthrow">
                        <input type="button" value="C" onClick={() => this.handleOperation("=")}/>
                        <input type="button" value="0" onClick={() => this.handleEvent("0")}/>
                        <input type="button" value="=" onClick={this.handleResult.bind(this)}/> 
                        <input type="button" value="/" onClick={() => this.handleOperation("/")}/>
                    </div>
            </div>
       )

    }

}

export default SharpCalculator