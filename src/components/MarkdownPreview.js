import React, {Fragment} from 'react';
import styled from 'styled-components';
import marked from 'marked';

import Header from './Header';

const UserText = styled.textarea `
    background-color: #473144;
    color: white;
    border: none;
    width: 100%; 
    padding: 10px;
    min-height: 50vh;
    margin: 15px auto;
`;

const GeneratedOutput = styled.div `
    width: 100%;
    background-color: #EFC69B;
    color: white;
    border: none;
    padding: 10px;
    min-height: 50vh;
    margin: 15px auto;
`;

class MarkdownPreview extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text : ''
        };

        this.textChange= this.textChange.bind(this);
    }

    textChange(event){

        this.setState({
            text: event.target.value
        });        
    }

    render() {
        const rt = marked(this.state.text);
        return(
            <Fragment>
                <Header />
            <div className="row">
                <div className="col-lg-6">  
                    <UserText onChange={this.textChange} value={this.state.text}/>
                </div>

                <div className="col-lg-6">
                    
                    <GeneratedOutput dangerouslySetInnerHTML={{ __html: rt }} />

                </div>

            </div>
            </Fragment>
            
        );
    }
}

export default MarkdownPreview;