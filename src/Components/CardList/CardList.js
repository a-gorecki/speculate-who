import React from "react";
import {Card} from "../Card/Card"
import "./CardList.css"



export class CardList extends React.Component{


    render(){
        return(
            <div className="cardList">

                {
                    this.props.people.map((person, index) => <Card person={person} key={index}/>)
                }

            </div>
        )
    }
}