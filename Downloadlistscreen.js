import React, { Component } from 'react';
import Navbar from './Navigation/Navbar';

//import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBBtnGroup } from 'mdbreact';
import Background from './images/Background.jpg';

import Logo from './images/logo-small-with-text.png';
var Result=[];
let db="";
export default class Downloadlistscreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

            UserID: "",
            storeID: "",    
            DeviceID: "",
            CompanyID: "",
            ReferenceID:"ST2800120630",
            Count:"0",
            StockTakeUsers:[],
            catalog:[],

        };
    }

    btnsubmit(){
        this.state.UserID=window.localStorage.getItem('UserID');
        this.state.storeID=window.localStorage.getItem('storeID');
        this.state.CompanyID=window.localStorage.getItem('CompanyID');

        if ((this.state.ReferenceID == "") || (this.state.ReferenceID == undefined)) {
            alert(' ReferenceID is should not be empty');
            return; 
         }
         const url ='https://partswebtest.hha.com.sa/IM/DCD/dbaccess.php?CUSTOM=ITEMCOUNT&Reference='+this.state.ReferenceID+'&CompanyID='+this.state.CompanyID+'';
         alert(url);
         fetch(url)
       
         .then(response => response.json())
         //If response is in json then in success
         .then(responseData => {
             this.setState({ Count: responseData[0].Count })
     
          alert("hii"+this.state.Count);    
         })


         var intTotalRecordcount=0;
         var intProcessRec=5000;
             intTotalRecordcount=parseInt(this.state.Count);
             var intfetch=parseInt(intTotalRecordcount/intProcessRec);			
             
             var intfetchmod=intTotalRecordcount%intProcessRec;
             if (intfetchmod>0) intfetch=intfetch+1;
             console.log("intTotalRecordcount :"+intTotalRecordcount);
             console.log("intfetch :"+intfetch);
       //  alert(intfetch);
         console.log("intfetchmod :"+intfetchmod);

             for(var intloop=1;intloop<=intfetch;intloop++)
             {
                 var intstartRecord=(intloop-1)*intProcessRec+1;
                 var intendRecord=intloop*intProcessRec;
               if(intendRecord>intTotalRecordcount) 
               {
                   intendRecord=intTotalRecordcount;		 			  
                   
               }	
            //    alert(intendRecord);	
               console.log('endrecord'+intendRecord);
              
         
             }
             console.clear();
             this.cataloginsert( 1, 100);

    }

    cataloginsert( FromNo, ToNo){
         alert(FromNo);
         alert(ToNo);
       
        const url ='https://partswebtest.hha.com.sa/IM/DCD/dbaccess.php?CUSTOM=ITEMCATALOGUE&StoreID='+this.state.storeID+'&CompanyID='+this.state.CompanyID+'&Reference='+this.state.ReferenceID+'&StartNo='+FromNo+'&EndNo='+ToNo+'';

     
        console.log(url);
        fetch(url)
        .then(response => response.json())
            .then(responseJson => {

                Result=JSON.stringify(responseJson);
            alert(Result);
            console.log(Result);
               
                })
        
    }


    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        // alert(nam);
        // alert(val);
        this.setState({ [nam]: val });
    }
   

    render() {


        return (
            <body>
                <Navbar/>
             
                <div style={{ textAlign: "center", backgroundColor: '#50C6C5', color: "white", height: 40, width: "100%" }}>
                    <label style={{ fontSize: 24, fontWeight: "bold" }}> Download List</label>
                </div>
                <form style={{ margin: 30 }}>
                 <label style={{fontWeight:"bold",fontSize:20}}>Reference :</label>

                    <input
                        type="text"
                        name="ReferenceID"
                        onChange={this.myChangeHandler}
                        value={this.state.ReferenceID}                   
                        style={{ marginleft: 50, marginTop: 10, height: 35, width: "100%", float: "center" }} /><br></br>
                </form>

                <div style={{ marginLeft:30,marginRight:25 }}>
                <input  onClick={()=>this.btnsubmit()} type="submit" value=" Submit" style={{ borderColor: "none", fontSize: 20, backgroundColor: '#159693', color: "white", marginTop: 20, height: 45, width: "100%" }} />
                </div>
             

            </body>
        );
    }
}

