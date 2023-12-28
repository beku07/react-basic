import React, { Component } from "react";
import deleteIcon from './assets/delete.svg';
import Password from "./components/Password";

// function Text(props) {
//     return(
//         <p style={{color: props.color, fontSize: props.size}}>{props.content}</p>
//     );
// }

// class Text extends Component {
//     render() {
//         return (
//             <p>My text</p>
//         );
//     }
// }


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showKeyboard: false,
            Keyboards: [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0],
            values: []
        }
    }

    render() {
        const { showKeyboard, Keyboards, values } = this.state;
        console.log(values);
        return (
            <div className="App">
               <Password 
               changeKeyboardShow={() => this.setState({showKeyboard: !showKeyboard})} 
               values={values}
               />
                <div className={`keyboard ${showKeyboard ? 'keyboard--active' : ''}`}>
                <div className="keyboard__content">
                    {Keyboards.map((num) => (
                         <button className="keyboard__cell" key={num}
                         onClick={() => this.setState({values: [...values, num]})}
                         >{num}</button>
                    ))}
                    <button className="keyboard__delete"
                    onClick={() => {values.pop();
                    this.setState( { values } )
                    }}>
                    <img src={deleteIcon} alt="delete" />
                    </button>
                </div>
                <button className="keyboard__accept" >Continue</button>
                </div>
            </div>
        );
    }
}


export default App;
  