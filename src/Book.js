import React from 'react';

export const Book= (props) =>{
    //attribute,eventHandler
    //onclick,onMouseover
    console.log(props)
    const {img,title,auther}=props;
    const clickhandler=(e)=>{
        console.log(e)
        console.log(e.target)
        alert("hello world");

    };
    const complexExample=(auther)=>{
        console.log(auther)

    }
    return <article className='book' onMouseOver={()=>{
        console.log(title)
    }}>
        <img src={img}
        alt="book"></img>
        <h1 onClick={()=>console.log(title)}>{title}</h1>
        <h4>{auther}</h4>
        <button type="button" onClick={clickhandler}>Reference example</button>
        <button type="button" onClick={()=>complexExample(auther)}>more complex</button>
        </article>;
        };
export default Book;