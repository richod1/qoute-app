import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsFillPenFill } from "react-icons/bs";
import '../App.css'

const Qoute = () => {
    const [api,setApi]=useState([])

    useEffect(()=>{
        fetch('https://type.fit/api/quotes')
        .then((response)=>response.json())
        .then((json)=>setApi(json))
        
    },[]);

    
   

    var settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <>
    <h1 className='head'>Qoute App</h1>
    <Slider {...settings}>
   {api.map((apis)=>(
    <Container>
        <Content>{apis.text}</Content>
        <Author>{apis.author} <BsFillPenFill/></Author>
    </Container>
   ))}
    
    </Slider>
    </>
  )
}

export default Qoute

const Container=styled.div`
display:flex;
width:100%;
height:100%;
background:lteal;
overflow:hidden;


`

const Content=styled.div`
border:1px solid #ccc;
padding:2rem;
border-radius:15px;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
`
const Author=styled.h5`
padding:1.2rem;
text-align:center;
align-items:center;
justify-content:center;
display:flex;


`