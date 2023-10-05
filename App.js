import React  from "react";
//import Navbar from "./Navbar";
import logo from "./images/logo.jpg";
import dinning1 from "./images/dinning1.jpg";
import order from "./images/order.png";
import chief from "./images/chief.png";
import delivery from "./images/delivery.png";
import green1 from "./images/green1.jpg";
import community from "./images/community.jpg";
import energyeffi  from "./images/energyeffi.jpg";
import stored from "./images/stored.png";
import ep from "./images/ep.png";
import foodwaste from "./images/foodwaste.png";
import post from "./images/post.jpg";
import review1 from "./images/review1.png";
import review2 from "./images/review2.png";
//import Navbar from 'react-bootstrap/Navbar';
function App(){
    return(
        <div>
          
             <img className='logo' src={logo} style={{width:'50px', height:'50px'}} alt="logo"/>
             <button style={{backgroundColor:"white", width:'300px',height:'70px',border: 'none' }}>Lunjs Pa Dora Plans</button>
             <button style={{backgroundColor:"white", width:'200px',height:'70px',border: 'none' }}>How it works</button>
             <button style={{backgroundColor:"white", width:'200px',height:'70px',border: 'none' }}>Our Menus</button>
             <button style={{backgroundColor:"white", width:'200px',height:'70px',border: 'none' }}>Sustanibility</button>
             <button style={{backgroundColor:"olivedrab",borderRadius:'10px', color:"white", marginLeft:'150px'}}>Login</button>
             <div style={{backgroundImage: `url(${dinning1})`,height:'400px'}}>
          <h1 style={{color:'white', textAlign:'center', fontSize: "3rem", alignItems:'center'}}>
            A New Digital Canteen <br/> Experience <br/> Awaits You</h1><b/>
            <div style={{textAlign:"center"}}>
              
            <button style={{borderRadius:'10px',backgroundColor:"transparent", color:"white"}}>Register Now</button>
            
            <button style={{marginLeft: "10px",borderRadius:'10px',color: "green" }}>Food For Events</button>
            
          </div>
        </div>
        <div>
          <h2 style={{fontSize:"30px",textAlign:"center",marginTop:"100px"}}>Take The Stress Out Of <span style={{color:"olivedrab"}}>Lunch-Prep!</span></h2>
        
           <table  style={{marginLeft:"300px",border:"5px solid white"}}>
            <tr  style={{textAlign:"center"}}>
              <td style={{backgroundImage: `url(${green1})`,borderRadius:'10px'}}>
              <img src={order} style={{width:'40px',height:'50px',textAlign:"center"}} alt="order"/> <br/>
              set your preference<br/>once and get your meals accordingly <br/> each day
              </td>
              <td style={{backgroundImage: `url(${green1})`, marginLeft:"50px",borderRadius:'10px'}}>
              <img src={chief} style={{width:'40px',height:'50px',}} alt="chief"/> <br/>
              Food made with fresh ingredients
              </td>
              <td style={{backgroundImage: `url(${green1})`, marginLeft:"5px",borderRadius:'10px'}}>
              <img src={delivery} style={{width:'40px',height:'50px',}} alt="delivery"/> <br/>
              set your preference<br/>once and get your meals accordingly <br/> each day
              </td>
            </tr>
           </table>
           <div style={{textAlign:"center", marginTop:"100px"}}>
            <h2 style={{fontSize:"30px"}}>Why Lunsj Pa Dora?</h2>
            <p>A healthier, happier meal whileyou work.<br/>2 Lines on
            the ethos of the brand. Lorem ipsum is imsply dummy test of
            the printing and <br/>typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s</p>
            <button style={{backgroundColor:"olivedrab",borderRadius:'10px',color:"white"}}> Our Story</button>
           </div>
        </div>
        <div style={{textAlign:"center", marginTop:"100px"}}>
          <h2 style={{fontSize:"30px",textAlign:"center"}}>Sustanibility at <span style={{color:"olivedrab"}}>Lunsj Pa Dora</span></h2>
            <table style={{marginLeft:"290px"}}>
              <tr style={{}}>
                <td>
                  <img src={stored} style={{width:"40px",height:"40px"}}/><br/>
                  Locally Sourced
                </td>
                <td >
                <img src={foodwaste} style={{width:"40px",height:"40px"}}/><br/>
                  Reduced Food Waste
                </td>
                <td >
                <img src={ep} style={{width:"40px",height:"40px"}}/><br/>
                  Eco-Friendly Package
                </td>
                <td >
                <img src={energyeffi} style={{width:"40px",height:"40px"}}/><br/>
                  Energy Efficiency
                </td>
                <td>
                <img src={community} style={{width:"40px",height:"40px"}}/><br/>
                  Community Engagement
                </td>
              </tr>
              
            </table>
            <button style={{backgroundColor:"olivedrab",borderRadius:'10px',color:"white", textAlign:"center"}} >Read More</button>

        </div>
        <div>
          <h2 style={{color:"yellowgreen",textAlign:"center", marginTop:"100px",fontSize:"30px"}}>
            Eat<span style={{color:"black"}}> It.</span> Love <span style={{color:"black"}}>It.</span> Tag <span style={{color:"black"}}>It.</span>
          </h2>
          <h3 style={{color:"yellowgreen", textAlign:"center"}}>#LunchAtMyDoor</h3>
          <img src={post} style={{width:"300px",height:"400px",marginLeft:"150px"}}/>
          <img src={post} style={{width:"300px",height:"400px"}}/>
          <img src={post} style={{width:"300px",height:"400px"}}/>
        </div>
        <div>
          <h2 style={{fontSize:"30px",textAlign:"center",marginTop:"100px"}}>Reviews</h2>
          <img src={review1} style={{marginLeft:"200px"}}/>
          <img src={review2} style={{marginLeft:"200px"}}/>
        </div>
        <div><h2 style={{textAlign:"center", marginTop:"100px",fontSize:"30px"}}>
           Our Locations
      
          </h2>
          <br/>
          <div style={{textAlign:"center"}}>
            Tokyo  Paris  Berlin  New York  Austin <br/> Texas  Vienna  Rome  MiamiAtlantic City   Cody, Wyoming
            </div>

          </div>
          <form style={{backgroundColor:"black",width:"500px", height:"300px",color:"green",align:"center",marginLeft:"400px"}}>
              Fill the form below<br/>
              <input style={{color:"green",backgroundColor:"black"}} placeholder="Your Name"></input><br/><br/>
              <input style={{color:"green",backgroundColor:"black"}} placeholder="Email"></input><br/><br/>
              
              <input style={{color:"green",backgroundColor:"black"}} placeholder="Phone Number"></input> 
              <br/>
              <br/>


              <div style={{backgroundColor:"green", color:"white"}}><strong>TRY THE LUNSJ PA DORA</strong></div>
            </form>
          <div style={{textAlign:"center", backgroundColor:"Braves Navy", height:"200px"}}>
            <b> Our address </b>
            oslo
            <button>View On Map</button>

            
            <b>Cintacft us </b>
            some@exampl.com
            <button>Send a Message</button>
          </div>
        </div>
        
    );
}





{/*import React from 'react'; 
import './App.css'; 
import Navbar from './components/Navbar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages'; 
import About from './pages/about'; 
import Events from './pages/events'; 
import AnnualReport from './pages/annual'; 
import Teams from './pages/team'; 
import Blogs from './pages/blogs'; 
import Login from './pages/Login'; 
import logo from './images/logo.jpg';


function App() { 
return ( 
	<Router> 
    
	<Navbar /> 
  <img className='logo' src={logo} style= {{width:'50px', height:'52px'}}alt='user'/>
	<Routes> 
    
		<Route path='/' exact component={Home} /> 
		<Route path='/about' component={About} /> 
		<Route path='/events' component={Events} /> 
		<Route path='/annual' component={AnnualReport} /> 
		<Route path='/team' component={Teams} /> 
		<Route path='/blogs' component={Blogs} /> 
		<Route path='/Login' component={Login} /> 
	</Routes> 
	</Router> 
); 
} 

export default App; */}




export default App;