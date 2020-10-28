import React, {Component } from 'react'

class SimpleCalculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1:0,
            num2:0,
            result:0
        }
    }

    num1Change(evt){
        this.setState({num1 : evt.target.value });
    }

    num1Change(evt){
        this.setState({num2 : evt.target.value });
    }

    add=()=>{
        let result = parseInt(this.state.num1) + parseInt(this.state.num2);
        this.setState({result:result})
    }

    sub=()=>{
        let result = parseInt(this.state.num1) - parseInt(this.state.num2);
        this.setState({result:result})
    }
    render(){
        return (
            <div className="container">
                <h2>simple calculator</h2>

                <div className="form-group">
                <label htmlFor="">Num1</label>
                <input type="text" className="form-control"
                       value = {this.state.num1}
                />
                </div>

                <div className="form-group">
                <label htmlFor="">Num2</label>
                <input type="text" className="form-control"
                value = {this.state.num2}/>
                
                </div>

                <div className="form-group">
                <label htmlFor="">Result</label>
                <input type="text" className="form-control"
                value = {this.state.num2}/>
                </div>

                <div className="form-group1">
                <input type="button" value="add" className="form-control1"/>
                <input type="button" value="sub" className="form-control2"/>
                </div>

            </div>
        )
    }
}

export default SimpleCalculator