import React, {Fragment} from 'react';
import styled from 'styled-components';
import marked from 'marked';

import defaultMarkdownCode from '../constants/defaultMarkdownCode';

const UserText = styled.textarea `
    background-color: #473144;
    color: white;
    border: none;
    width: 100%; 
    padding: 10px;
    min-height: 100vh;
    margin: 15px auto;
`;

const GeneratedOutput = styled.div `
    width: 100%;
    background-color: #EFC69B;
    color: white;
    border: none;
    padding: 10px;
    min-height: 100vh;
    margin: 15px auto;
`;

const ScreenTile = styled.div `
    text-align: right;
    // outline: 1px solid red;
`;

class MarkdownPreview extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text : '{$defaultMarkdownCode}',
            userFullScreen : false,
            displayRender: "visible",
            renderFullScreen: false,
            displayUserInput: "visible"
        };

        this.textChange= this.textChange.bind(this);
        this.toggleUserFullScreen = this.toggleUserFullScreen.bind(this);
        this.toggleRenderFullScreen = this.toggleRenderFullScreen.bind(this);
    }

    textChange(event){

        this.setState({
            text: event.target.value
        });        
    }

    toggleUserFullScreen(){
        this.setState({
            userFullScreen: !this.state.userFullScreen
        });

        if(this.state.displayRender === "visible") {
            this.state.displayRender = "hidden";

        } else {
            this.state.displayRender = "visible";
        }

    }

    toggleRenderFullScreen(){
        this.setState({
            renderFullScreen: !this.state.renderFullScreen
        });

        if(this.state.displayUserInput === "visible") {
            this.state.displayUserInput = "hidden";
        } else {
            this.state.displayUserInput = "visible";
        }
    }

    render() {
        const rt = marked(this.state.text);
        return(
            <Fragment>
                <div className="row">
                    <div className={this.state.userFullScreen ? "col-lg-12" : "col-lg-6"}
                        style={{visibility: this.state.displayUserInput}}>
                        <div className="row" >
                            <div className="col-lg-6" style={{display: "flex"}}>
                                <i className="material-icons">edit</i> 
                                <p>Editor</p> 
                            </div>
                            
                            <ScreenTile className="col-lg-6">
                                <button type="button" className="btn btn-default" 
                                    onClick={this.toggleUserFullScreen}>
                                    <i className="material-icons"> fullscreen </i>
                                </button>
                            </ScreenTile>
                        </div>
                    </div>

                    <div className={this.state.renderFullScreen ? "col-lg-12" : "col-lg-6"}
                        style={{visibility : this.state.displayRender}}>
                        <div className="row">
                            <div className="col-lg-6" style={{display: "flex"}}>
                                <p>Previewer</p>
                                <i className="material-icons">computer</i>
                            </div>
                            <ScreenTile className="col-lg-6">
                                <button type="button" className="btn btn-default" 
                                    onClick={this.toggleRenderFullScreen}>
                                    <i className="material-icons"> fullscreen </i>
                                </button>
                            </ScreenTile> 
                        </div>
                    
                    </div>
                </div>

                <div className="row">
                    {this.state.displayUserInput === "visible" && <div className={this.state.userFullScreen 
                        ? "col-lg-12" : "col-lg-6"}>  
                        <UserText onChange={this.textChange} value={this.state.text}
                            style={{visibility : this.state.displayUserInput}} id="editor"/>
                    </div> }

                    {this.state.displayRender === "visible" && <div className={this.state.renderFullScreen 
                        ? "col-lg-12" : "col-lg-6"}>
                        <GeneratedOutput dangerouslySetInnerHTML={{ __html: rt }} 
                            style={{visibility : this.state.displayRender}} id="preview"/>
                    </div> }
                </div>
            </Fragment>
            
        );
    }
}

export default MarkdownPreview;