import React ,{useState} from 'react';
import axios from 'axios';
const Registration_form=()=>{
    const [send,setSend] = useState({
        FirstName:"",
        LastName:"",
        RollNo:"",
        mobilenumber:"",
        Email:"",
        Password:""
    })
    const handleChange = (e) => {
        setSend((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const postSubmit = (e) =>{
       e.preventDefault()
       axios.post('http://localhost:5000/postdata',{send})
       console.log(send)
       alert('Success')
    }
    return(
        <>
        <div className='col-md-9' style={{"float":"right",backgroundColor:"lightblue",borderRadius:"2%",marginTop:"-1%",height:"87vh"}}>
        
        <div style={{marginTop:"2%"}}><p id="form2"><b><h2><center>Registration Form</center></h2></b></p></div>
       <div  className="ddd" style={{overflowX:"scroll"}}>
         <div className="row">
         <div className="col-md-6" id="form1" >
         {/* <div className="row"> */}
           {/* <div className="col-md-3"></div> */}
           {/* <div className="col-md-6"> */}
            <form>
              <div >
                 <label style={{color:"green"}}for="Number" >Roll Number</label>
                 <input type="text" className="form-control" name="Roll Number" onChange={handleChange} placeholder="Enter your roll number"/>
              </div><br/>
              <div className="form-group">
                 <label style={{color:"green"}}>Biometric Id</label>
                 <input type="text" className="form-control" name="Biometric Id" onChange={handleChange} placeholder="Enter Biometric Id"/>
              </div>
              <div style={{color:"green"}}className="form-group">
                 <label >Name</label>
                 <input type="text" className="form-control"name="Name" onChange={handleChange} placeholder="Enter your Name"/>
              </div>
              <div className="form-group">
                 <label style={{color:"green"}}>college</label>
                 <input type="text" className="form-control" name="college"  placeholder="Enter your college name"  onChange={handleChange} />
              </div>
              <div style={{color:"green"}} className="form-group">
                 <label >Branch</label>
                 <input type="text" className="form-control" name="Branch" onChange={handleChange} placeholder="Enter Branch"/>
              </div>
              <div style={{color:"green"}}className="form-group">
                 <label >State</label>
                 <input type="text" className="form-control" name="State" onChange={handleChange} placeholder="Enter your state"/>
              </div>
              <div style={{color:"green"}}className="form-group">
                 <label >Mobile Number</label>
                 <input type="text" className="form-control" name="Mobile Number" onChange={handleChange} placeholder="Enter your mobile number"/>
              </div>
              <br></br>
                   {/* <button style={{marginBottom:"3%"}} type="submit" onClick={postSubmit} className="btn btn-primary">Submit</button> */}
            </form>      
         </div>


         <div className="col-md-6" id="form1">
         {/* <div className="row"> */}
           {/* <div className="col-md-3"></div> */}
           {/* <div className="col-md-6"> */}
            <form>
              <div >
                 <label style={{color:"green"}}for="Name" >Father Mobile</label>
                 <input type="text" className="form-control" name="Father mobile" onChange={handleChange} placeholder="Enter father mobile number"/>
              </div><br/>
              <div className="form-group">
                 <label style={{color:"green"}}>Mother mobile</label>
                 <input type="text" className="form-control" name="Mother mobile" onChange={handleChange} placeholder="Enter mother mobile number"/>
              </div>
              <div style={{color:"green"}}className="form-group">
                 <label >Guardian mobile</label>
                 <input type="text" className="form-control"name="Guardian mobile" onChange={handleChange} placeholder="Enter Guardian Mobile number"/>
              </div>
              <div className="form-group">
                 <label style={{color:"green"}}>AC/NAC</label>
                 <input type="" className="form-control" name="AC/NAC"  placeholder="Enter your requirement"  onChange={handleChange} />
              </div>
              <div style={{color:"green"}} className="form-group">
                 <label >Mess</label>
                 <input type="text" className="form-control" name="Mess" onChange={handleChange} placeholder="Enter your mess"/>
              </div>
              <div style={{color:"green"}}className="form-group">
                 <label >Set Password</label>
                 <input type="password" className="form-control" name="Set password" onChange={handleChange} placeholder="Enter password"/>
              </div>
              <div style={{color:"green"}}className="form-group">
                 <label >confirm Password</label>
                 <input type="password" className="form-control" name="confirm password" onChange={handleChange} placeholder="Enter password"/>
              </div>
              <br></br>
                   <button style={{marginBottom:"3%"}} type="submit" onClick={postSubmit} className="btn btn-primary">Submit</button>
            </form>      
         </div>
         </div>
         </div>
         </div>
        {/* </div> */}
        </>
    )
}
export default Registration_form;