import "./topbar.css"
//import  Login from "../../pages/login/Login";
import {NavLink} from "react-router-dom";


//import {Search,Person} from '@material-ui/icons'

export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft"> 
                <div className="logo"> <img src="/assets/logo1.png" alt="logo" align="left" className="logoImg"/><span className="logoText"> MyTimes </span> </div>
            </div>
                
            <div className="topbarRight"> 
                <div className="topbarLinks">
                     <span className="topbarLink"><NavLink exact activeClassName="active_class" to="/" >Home </NavLink></span> 
                     <span className="topbarLink"> <NavLink exact activeClassName="active_class" to="/help"> Help </NavLink></span>    
                     <span className="topbarLink"> <NavLink exact activeClassName="active_class" to="/login" > Login </NavLink></span>    
                    <span className="topbarLink"><NavLink exact activeClassName="active_class" to="/signup" > Sign Up</NavLink> </span>      
                </div>
                
                {/* <img src="/assets/person/1.jpg" alt="" className="topbarImg"/>  */}

            </div>        

        </div>
    )
}   