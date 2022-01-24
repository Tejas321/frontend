import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css'

const books=[
{id:1,
    
    img:"https://images-eu.ssl-images-amazon.com/images/I/51wbVQTpTgL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" ,
    title:"Wings of Fire: An Autobiography of Abdul Kalam",
    auther:"A. P. J. Abdul Kalam "
},
{id:2,
    img:"https://images-na.ssl-images-amazon.com/images/I/71F4+7rk2eL._AC_UL254_SR254,254_.jpg" ,
    title:"Story book",
    auther:"Shreyash"
}
,
{id:3,
    img:"https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL254_SR254,254_.jpg" ,
    title:"Good Thoughts",
    auther:"Atharav"
}];

function Booklist(){
    return(
        <section  className='booklist'>
            {books.map((book)=>{
                return <Book key={book.id} {...book}></Book>;
            })}
        </section>
        );
    }


const Book= (props) =>{
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

ReactDOM.render(<Booklist/>,document.getElementById('root'))
