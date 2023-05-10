import React from 'react';
import {Character} from "./Character";
import './CharacterGallery.css'
import './CharacterCard.css'
type Props = {
    character: Character
}
function CharacterCard(props: Props) {
    return(
        <div>
            <div className={"character-card"}>
                <h2 className={"character-card"}>{props.character.name}</h2>
                <p className={"character-card"}>{props.character.status}</p>
                <img className={"character-card-image"} src={props.character.image} alt={props.character.name + " image"}/>
                <p className={"character-card"}>Origin: {props.character.origin.name}</p>
            </div>
        </div>
    )
}
export default CharacterCard;