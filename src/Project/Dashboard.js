import React from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom';
const Dashboard =()=>{
return(
    <>
    <div className='head' style={{"borderRadius":"15px","margin-bottom": "1%","padding-bottom": "1%"}}>
        <p style={{"float":"left","width":"15%",marginLeft:"5%",fontWeight:"bold",fontSize:"200%"}}>Girls Hostel</p>
        <p className='p2'style={{marginLeft:"50%",fontWeight:"bold",fontSize:"200%"}}>welcome to Girls Hostel ePASS System</p>
    </div>
        <div className='col-md-3'>
        <div className='side-bar' style={{"backgroundColor":"#343a40", "width":"100%",height:"89vh",marginLeft: "-6.5%",marginTop: "0%","borderRadius":"15px","display": "flow-root","float":"left",marginRight:"0%",boxShadow:"5px 5px 5px 0px rgb(42, 40, 40)"}}>
        <ul>
            <li><Link to="/About_Hostel" style={{textDecoration:"inherit",color:"white", className:"",fontWeight:"400",fontSize:"150%"}}> About Hostel</Link></li>
            <li><Link to="/Registration_form" style={{textDecoration:"inherit",color:"white",fontWeight:"400",fontSize:"150%"}}>Registration form</Link></li>
            <li><Link to="/Students" style={{textDecoration:"inherit",color:"white",fontWeight:"400",fontSize:"150%"}}>Students</Link></li>
            <li><Link to="/Staff" style={{textDecoration:"inherit",color:"white",fontWeight:"400",fontSize:"150%"}}>Staff</Link></li>
            <li><Link to="/Home_Out_Pass " style={{textDecoration:"inherit",color:"white",fontWeight:"400",fontSize:"150%"}}>Home Out Pass</Link></li>
            <li><Link to="/Home_Out_Pass_List" style={{textDecoration:"inherit",color:"white",fontWeight:"400",fontSize:"150%"}}>Home Out Pass List</Link></li>
            <li><Link to="/Day_Out_Pass" style={{textDecoration:"inherit",color:"white",fontWeight:"400",fontSize:"150%"}}>Day Out Pass</Link></li>
            <li><Link to="/Day_Out_Pass_List" style={{textDecoration:"inherit",color:"white",fontWeight:"400",fontSize:"150%"}}>Day Out Pass List</Link></li>
            <li><Link to="/Pass_reports" style={{textDecoration:"inherit",color:"white",fontWeight:"400",fontSize:"150%"}}>Pass reports</Link></li>
            <li><Link to="Attendance_reports" style={{textDecoration:"inherit",color:"white",fontWeight:"400",fontSize:"150%"}}>Attendance reports</Link></li>
            <li><Link to="/Food_reports" style={{textDecoration:"inherit",color:"white",fontWeight:"400",fontSize:"150%"}}>Food reports</Link></li>
            <li><Link to="/Complaint" style={{textDecoration:"inherit",color:"white",fontWeight:"400",fontSize:"150%"}}>Complaints</Link></li>
            {/* <li><Link to="/view_profile" style={{textDecoration:"inherit",color:"white"}}>view profile</Link></li> */}
        </ul>
        </div>
    </div>
    </>
);
}
export default Dashboard;