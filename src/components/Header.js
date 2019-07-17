// import React from 'react';
// import styled from 'styled-components';



// class Header extends React.Component {

//     constructor(props){
//         super(props);

//         this.state = {
//             clicked: false
//         };

//         this.toggleFullScreen = this.toggleFullScreen.bind(this);
//     }

//     toggleFullScreen(){
//         this.setState({
//             clicked: !this.state.clicked
//         });

//         console.log(this.state.clicked);
//     }

//     render() {

//         return(
//             <div className="row">
//                 <div className={this.state.clicked ? "col-lg-12" : "col-lg-6"}>
//                     <div className="row">
//                         <div className="col-lg-6" style={{display: "flex"}}>
//                             <i className="material-icons">edit</i> 
//                             <p>Editor</p> 
//                         </div>
                            
//                         <ScreenTile className="col-lg-6">
//                             <button type="button" className="btn btn-default" 
//                                 onClick={this.toggleFullScreen}>
//                                 <i className="material-icons"> fullscreen </i>
//                             </button>
//                         </ScreenTile>
//                     </div>
//                 </div>
//             </div>
//         );   
//     }
// }

// {/* <div className="row">
//                 <div className="col-lg-6">
//                     <div className="row">
//                         <div className="col-lg-6" style={{display: "flex"}}>
//                             <i className="material-icons">edit</i> 
//                             <p>Editor</p> 
//                         </div>

                                              
//                     </div>

//                 </div>

                // <div className="col-lg-6">
                //     <div className="row">
                    
                //         <div className="col-lg-6" style={{display: "flex"}}>
                //             <p>Previewer</p>
                //             <i className="material-icons">computer</i>
                //         </div>

                //         <ScreenTile className="col-lg-6">
                //             <button type="button" className="btn btn-default">
                //                 <i className="material-icons"> fullscreen </i>
                //             </button>
                //         </ScreenTile> 
                    
                //     </div>
                
//                 </div>
                
// </div> */}

// export default Header;