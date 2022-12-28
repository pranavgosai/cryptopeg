import React from 'react'


function About() {
  return (
    <>
    <div className="container mb-3 about_container" style={{minHeight:"100%"}} >
    <div className="container main_container d-flex justify-content_around flex-wrap">
      <div className="left_container mt-5" style={{width:500}} >
        <h2>meet Pranav Gosai</h2>
        <p style={{color:"#666",letterSpacing:".5px",maringTop:2,lineHeight:2}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut laborum doloremque temporibus assumenda autem vero totam deleniti doloribus numquam, asperiores molestiae illo, blanditiis eos officiis eum voluptas quisquam veritatis nostrum, maiores ipsam cum aperiam! Natus, aspernatur nihil! Saepe explicabo provident sunt consectetur.</p>
      </div>
      <div className="right_container mt-3"  ></div>
       <img src="IMG_20220909_181123_672.jpg" style={{ width:"430px" , height: "500px"}} alt="" />   
    </div>
    </div>
    </>
    
    )
}

export default About
