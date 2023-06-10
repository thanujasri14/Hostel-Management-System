import React from 'react';
import './About_Hostel.css';
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const About_Hostel=()=>{
    return(
        <>
        
        <div className='col-md-9' style={{float:"right" ,backgroundColor:"#343a40",borderRadius:"2%",marginTop:"-1%",height:"89vh",boxShadow:"0px 0px 10px 0px rgb(42, 40, 40)"}}>
        <div className='he-ad' style={{marginBottom:"2%",marginTop:"2%"}}><center style={{fontWeight:600,color:"white"}}> Dashboard</center></div>
   
        <div className='row'style={{marginLeft:"5%"}}>
            <div className='col-md-2 ah' style={{marginLeft:"0"}}>
                <div className='col-md-0'><br/></div>
                <div className='col-md-12'><h3>Total Hostelers</h3><br/><hr/>
                <h1 style={{textAlign:"center"}}>994</h1><br/>
                </div>
            </div>
            <div className='col-md-2 ah'style={{marginLeft:"1%"}}>
            <div className='col-md-0'><br/></div>
                <div className='col-md-12'><h3 style={{textAlign:"center"}}>Attended</h3><h2/><h5 style={{textAlign:"center"}}>02-03-2023</h5><hr/>
                <h1 style={{textAlign:"center"}}>801</h1><br/>
                </div>
            </div>
            <div className='col-md-2 ah'style={{marginLeft:"1%"}}>
            <div className='col-md-0'><br/></div>
                <div className='col-md-12'><h3 style={{textAlign:"center"}}>Not Attended</h3><h5 style={{textAlign:"center"}}>02-03-2023</h5><hr/>
                <h1  style={{textAlign:"center"}}>193</h1>
                </div>
            </div>

            <div className='col-md-2 ah'style={{marginLeft:"1%"}}>
            <div className='col-md-0'><br/></div>
                <div className='col-md-12'  style={{textAlign:"center"}}><h3>Thumb Created</h3><hr/>
                <h1>989</h1><br/>
                </div>
            </div>

            <div className='col-md-2 ah'style={{marginLeft:"1%"}} >
                <div className='col-md-0'></div>
                <div className='col-md-12' style={{textAlign:"center"}}><br/><h3>Not Created</h3><br/><hr/>
                <h1>5</h1><br/>
                </div>
            </div>
        </div>

        <div className='row'style={{marginLeft:"5%"}}>
            <div className='col-md-2 ah' style={{marginLeft:"0"}}>
                <div className='col-md-0'><br/></div>
                <div className='col-md-12'style={{textAlign:"center"}}><h3>Block A</h3><h5>02-03-2023</h5><hr/>
                    <h2>375/459</h2><br/>

                </div>
            </div>
            <div className='col-md-2 ah'style={{marginLeft:"1%"}}>
            <div className='col-md-0'><br/></div>
                <div className='col-md-12' style={{textAlign:"center"}}><h3>Block B</h3><h5>02-03-2023</h5><hr/>
                        <h2>404/512</h2><br/>

                </div>
            </div>
            <div className='col-md-2 ah'style={{marginLeft:"1%"}}>
            <div className='col-md-0'><br/></div>
                <div className='col-md-12' style={{textAlign:"center"}}><h3>Block C</h3><h5>02-03-2023</h5><hr/>
                        <h2>22/23</h2><br/>

                </div>
            </div>

            <div className='col-md-2 ah'style={{marginLeft:"1%"}}>
            <div className='col-md-0'><br/></div>
                <div className='col-md-12'style={{textAlign:"center"}}><h3>North Mess</h3><h5>02-03-2023</h5><hr/>
                        <h2>152/187</h2><br/>
                </div>
            </div>

            <div className='col-md-2 ah' style={{marginLeft:"1%"}}>
                <div className='col-md-0'></div>
                <div className='col-md-12' style={{textAlign:"center"}}><br/><h3>South Mess</h3><h5>02-03-2023</h5><hr/>
                        <h2>648/806</h2><br/>
                </div>
            </div>
        </div>
        <div className='row' style={{marginLeft:"5%"}}>
            <div className='col-md-2 ah' style={{marginLeft:"0"}}>
                <div className='col-md-0'><br/></div>
                <div className='col-md-12'style={{textAlign:"center"}}><h3>Inside</h3><h5>03-03-2023</h5><hr/>
                        <h2>123</h2><br/>
                </div>
            </div>
            <div className='col-md-2 ah'style={{marginLeft:"1%"}}>
            <div className='col-md-0'><br/></div>
                <div className='col-md-12' style={{textAlign:"center"}}><h3>Outside</h3><h5>03-03-2023</h5><hr/>
                        <h2>309</h2><br/>
                </div>
            </div>
            <div className='col-md-2 ah'style={{marginLeft:"1%"}}>
            <div className='col-md-0'><br/></div>
                <div className='col-md-12' style={{textAlign:"center"}}><h3>Not punch</h3><h5>03-03-2023</h5><hr/>
                        <h2>562</h2>
                </div>
            </div>

            <div className='col-md-2 ah'style={{marginLeft:"1%"}}>
            <div className='col-md-0'><br/></div>
                <div className='col-md-12' style={{textAlign:"center"}}><h3>OwlCoder</h3><h5>02-03-2023</h5><hr/>
                        <h2>0/84</h2><br/>
                </div>
            </div>

            {/* <div className='col-md-2 ah' >
                <div className='col-md-4'></div>
                <div className='col-md-8'>Not Created
                <h1>5</h1><br/>
                </div>
            </div> */}
        </div>
    </div>
    </>
    );
}

export default About_Hostel;