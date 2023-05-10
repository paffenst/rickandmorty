import React from 'react';
import {Character} from "./Character";
import CharacterCard from "./CharacterCard";
import './CharacterGallery.css'
import './CharacterCard.css'

type CharacterGalleryProps = {
    characters: Character[]
}
function CharacterGallery(props: CharacterGalleryProps) {

    const characterCard = props.characters.map((character) => {
        return (
            <div className={"character-card"}>
            <CharacterCard  character={character} key={character.id + " " + character.name + " " + character.image}/>
            </div>
        )
    })
    return (
        <div className={"character-gallery"}>
            {characterCard}
        </div>
    );
}

export default CharacterGallery;