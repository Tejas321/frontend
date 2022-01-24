import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css'
//Nested components,react tools
//CSS
const firstBook={
    img:"https://images-na.ssl-images-amazon.com/images/I/71F4+7rk2eL._AC_UL254_SR254,254_.jpg" ,
    title:"Story book",
    auther:"Shreyash"
}
const secondBook={
    img:"https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL254_SR254,254_.jpg" ,
    title:"Good Thoughts",
    auther:"Atharav"
}

function Booklist(){
    return(
        <section  className='booklist'>
          <Book img={firstBook.img} title={firstBook.title} auther={firstBook.auther}/>
           <Book img={secondBook.img} title={secondBook.title} auther={secondBook.auther}/>
          
          
        </section>
        );
    }


const Book= (props) =>{
    console.log(props)
     return <article className='book'>
        <img src={props.img}
        alt="book"></img>
        <h1>{props.title}</h1>
        <h4>{props.auther}</h4>
        
        </article>;
        };

ReactDOM.render(<Booklist/>,document.getElementById('root'))
