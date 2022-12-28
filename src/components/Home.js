import React from 'react'
import "./home.css"
import Button from 'react-bootstrap/Button';


function home() {
  return (
    <div>
     <>
     <div className="container home_container ">
        <div className="home_innerdiv">
            <div className="left_div">
            <h2>welcome to <span style={{color:"#6c63ff"}} >Pranav Gosai</span></h2>
            <p style={{color:"#666", letterSpacing:".5px",margingTop:2}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quod, ipsum quasi deleniti fugiat hic inventore vitae veniam ducimus, provident dolore illo ullam! Unde ab esse, voluptatem provident deserunt vero!</p>
            
            <div className="btn_div mt-4">
            <Button variant="danger" style={{color:"#66", letterSpacing:"1px",border:"none", boderRadius:4,background:"#2f2d69",margingRight:"24"}}>youtube</Button>
            <Button variant="danger" style={{color:"#66", letterSpacing:"1px",border:"none", boderRadius:4,background:"#6c63ff" }}>youtube</Button>
            </div>
            
            </div>
            <div className="right_div">
                <img src="https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-2766.jpg?w=2000"   alt="" />
            </div>
        </div>

     </div>
     </>
    </div>
  )
}

export default home
