import React, {Component} from 'react';


class SimpleComponent extends Component {
  constructor(props){
    super(props);
  }

  render(){
      return (
          <div>
               <div>{this.props.msg}</div>
               <FirstChildComponent name = "Ram - first react app child component"></FirstChildComponent>
          </div>
      )
  }
}

class FirstChildComponent extends Component{

    render(){
        return <div>
            <h1> child component </h1>
            <div>{this.props.name}</div>
        </div>
    }
}
export default SimpleComponent;