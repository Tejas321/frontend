import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css'
//Nested components,react tools
//CSS
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
// const names=["rohit","sham"];
// const newNames=names.map((name)=>{
//     return <h1>{name}</h1>
    
// });
// console.log(newNames);
function Booklist(){
    return(
        <section  className='booklist'>
            {/* {newNames} */}
            {books.map((book)=>{
                // spreed out operator...
                return <Book key={book.id} {...book}></Book>;
                // return <Book key={book.id} book={book}></Book>;
                {/* <h1>{title}</h1>
                <h3>{auther}</h3> */}
            })}
        </section>
        );
    }


const Book= (props) =>{
    console.log(props)
    const {img,title,auther}=props;
    // const {img,title,auther}=props.book;
     
     return <article className='book'>
        <img src={img}
        alt="book"></img>
        <h1>{title}</h1>
        <h4>{auther}</h4>
        {/* {props.children} */}
        </article>;
        };

ReactDOM.render(<Booklist/>,document.getElementById('root'))
