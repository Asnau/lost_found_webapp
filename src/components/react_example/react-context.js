import React, { Component } from 'react';

const mycontext = React.createContext();

class Myprovider extends Component{
  state = {
    name: 'me',
    age: 22,
    speech: 'hello'
  }

  render() {
    return(
      <mycontext.Provider value={{
        state: this.state, 
        growolder: () => this.setState({ 
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </mycontext.Provider>
    )
  }
}

const Family = (props) => (
  <div className='family'>
    <Person/>
  </div>
)

class Test extends Component {
  
  render() {
    return (
      <>
        <Myprovider>
          <div>
            <p>I am here in Test</p> 
            <Family/>
          </div>
        </Myprovider>
      </>
    );
  }
}

class Person extends Component {
  render() {
    return(
    <div className="person">
    <mycontext.Consumer>
      {(context)=> (
        <>
        <p>age: {context.state.age}</p> 
        <p>name: {context.state.name}</p> 
        <button onClick={context.growolder}>click</button>
        </>
      )}
    </mycontext.Consumer> 
    </div>
    );
  }
}



export default Test;