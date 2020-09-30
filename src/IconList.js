import React, { Component } from 'react';

class IconList extends Component {

    static defaultProps = {
        options : ["dizzy", "angry", "flushed", "grin", "smile", "laugh", "surprise", "tired"]
    }

    state = {
        emjArr : ["sad-cry", "meh-rolling-eyes"]
    }

    addEmoji = () => {
        let randInd = Math.floor(Math.random() * this.props.options.length);
        let newEmj = this.props.options[randInd];
        this.setState({
            emjArr : [...this.state.emjArr, newEmj]
        })
    }
 
    render() {
        return (
            <div>
                <p><button onClick={this.addEmoji}>Add Emoji</button>  :  
                {this.state.emjArr.map(emj => {
                    return(
                        <i className={`far fa-${emj}`}></i>
                    )
                })}
                </p>
            </div>
        );
    }
}

export default IconList;