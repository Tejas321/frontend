import React from 'react';
import  ReactDOM  from 'react-dom';

//stateless function component
//always return JSX
//div/section/article of fragment
//className instead of class
//close every element
//formating

function Greeting(){
    return( 
    <div>
        <h4>Hello World</h4>
        <ul>
            <li>
                <a herf='#'>hello world</a>
            </li>
            <img src='' alt=''/>
        </ul>
    </div>
    );
    }

// const Greeting= () =>{
//     return React.createElement
//     ('div',{},
//     React.createElement('h1',{},'hello world'))
// }

ReactDOM.render(<Greeting/>,document.getElementById('root'))