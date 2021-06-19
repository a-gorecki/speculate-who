import React from "react";
import "./Card.css";
import logo from "./logo.png";

export class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = { flipped: false };

        this.handleFlip = this.handleFlip.bind(this);
    }

    handleFlip() {
        this.props.onFlip(this.props.index);
    }

    render() {
        return (
            <div className="scene">
                <div
                    className={
                        !!this.props.person.flipped && !!this.props.canFlip
                            ? "card flipped"
                            : "card"
                    }
                    id="cardClick"
                    onClick={!!this.props.canFlip ? this.handleFlip : () => {}}
                >
                    <div className="cardFace front">
                        <div className="frontContainer">
                            <img
                                className="characterImg"
                                src={this.props.person.imgSrc}
                                alt={this.props.person.name}
                            />
                            <div className="characterName">
                                <strong>{this.props.person.name}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="cardFace back">
                        <img src={logo} className="logo" alt="Speculate who!" />
                    </div>
                </div>
            </div>
        );
    }
}
