import React, { Component } from 'react';

//import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBBtnGroup } from 'mdbreact';
import Background from './images/Background.jpg';
import Logo from './images/logo-small-with-text.png';
import Onlineimg from './images/btn_Online.png';
import Offlineimg from './images/btn_Offline.png';

export default class home extends Component  {
 
  btnOfflogin() {
    this.props.history.push('/Offlineuser');
  }
  btnOnlogin(){
    this.props.history.push('/Onlineuser');
  }
render(){
  return (
    <body>
   
      <div style={{
        background: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 800,
       // backgroundAttachment: "fixed",
      }}>
        <div style={{ marginLeft: 505}} >
          <img
            src={Logo}
            alt="logo"
          />

        </div>

        <div style={{ marginLeft: 492 }}>
          <button style={{ marginTop: 115 ,backgroundColor:"#50cccc",border:"none"}} onClick={()=>this.btnOnlogin()}>
            <img
               style={{height:80}}
              src={Onlineimg}
              alt="online button"

            />
          </button>
        </div>
        <div style={{ marginLeft: 492}}>
          <button style={{ marginTop: 20,backgroundColor:"#50cccc",border:"none"}} onClick={()=>this.btnOfflogin()}>
            <img
            style={{height:80}}
              src={Offlineimg}
              alt="offline button"
            />
          </button>
        </div>
      </div>

    </body>
  );
}
}

