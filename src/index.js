import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css'
//Nested components,react tools
//CSS
function Booklist(){
    return(
        <section  className='booklist'>
          <Book />
          <Book />
          <Book />
          <Book />
    
        </section>
        );
    }

const Book= () =>{
    return <article className='book'>
        
        <Image></Image>
        <Title>
        </Title>
        <Auther></Auther>
        
        </article>;
        };


const Image =()=><img src="https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/"  alt="book"></img>
const Title =() =><h1>Story</h1>;
const Auther = () =><h4>Shreyash</h4>;
ReactDOM.render(<Booklist/>,document.getElementById('root'))
