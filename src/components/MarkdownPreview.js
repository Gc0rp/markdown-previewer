import React from 'react';
import styled from 'styled-components';
import marked from 'marked';

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

class UserInput extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text : ''
        };

        this.textChange= this.textChange.bind(this);
        this.makeDiv = this.makeDiv.bind(this);
    }

    textChange(event){

        this.setState({
            text: event.target.value
        });        
    }

    render() {
        const rt = marked(this.state.text);
        return(
            <div className="row">
                <div className="col-lg-6">  
                    <UserText onChange={this.textChange} value={this.state.text}/>
                </div>

                <div className="col-lg-6">
                    
                    <GeneratedOutput dangerouslySetInnerHTML={{ __html: rt }} />
                   
                </div>

            </div>
        );
    }
}

const MarkdownPreview = () => {
    return(
        <UserInput />        
    );
};

export default MarkdownPreview;