import React, {Component} from 'react';
import "./FactionButton.css";

class FactionButton extends Component {
    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        this.props.buttonClick(this.props.Faction.id);
    }

    render() {
        return (
            <div className = "FactionGraphicList__Cell" onClick = {this.buttonClick}>
                <figure className = "FactionGraphicList__Fig">
                    <img className = "FactionGraphicList__Image" src = {this.props.Faction.CodexImage} alt = {this.props.Faction.Name} />
                    <figcaption className = "FactionGraphicList__Title">{this.props.Faction.Name}</figcaption>
                </figure>
            </div>
        )
        
    }
}

export default FactionButton;