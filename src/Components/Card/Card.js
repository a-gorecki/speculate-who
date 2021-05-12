import React from "react";
import "./Card.css"
import logo from "./logo.png"

export class Card extends React.Component{

    constructor(props){
        super(props)

        this.state = {flipped: false}
        
        this.handleFlip = this.handleFlip.bind(this)
    }

    handleFlip(){
        this.setState({flipped: this.state.flipped ? false : true})
    }


    render(){
        return(
            <div className="scene">
                <div className={this.state.flipped ? "card flipped" : "card"} id="cardClick" onClick={this.handleFlip}>
                    
                    <div className="cardFace front">
                        <div className="frontContainer">
                            <img className="characterImg" src={this.props.person.imgSrc} alt={this.props.person.name} />
                            <h1 className="characterName" >{this.props.person.name}</h1>
                        </div>
                        
                    </div>

                    <div className="cardFace back">
                        <img src={logo} className="logo" alt="Speculate who!"/>
                    </div>
                </div>
            </div>
        )
    }
}