import React from 'react';

export default class Question extends React.Component {
    render() {
        return (
            <div className="Question">
                <h3>{this.props.question}</h3>
            </div>
        );
    }
}