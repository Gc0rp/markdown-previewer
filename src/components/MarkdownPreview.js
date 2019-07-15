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

class RenderText extends React.Component {

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
        console.log(marked(this.state.text));
    }

    render() {
        const text = marked(this.state.text);
        return(
            <div className="row">
                <div className="col-lg-6">  
                    <UserText onChange={this.textChange} value={this.state.text}/>
                </div>

                <div className="col-lg-6">
                    <GeneratedOutput>
                        {text}
                        <h1>Testing Text</h1>
                    </GeneratedOutput>
                </div>
            </div>
        );
    }
}

const MarkdownPreview = () => {
    return(
        <RenderText />        
    );
};

export default MarkdownPreview;