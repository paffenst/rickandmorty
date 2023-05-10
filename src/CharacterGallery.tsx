import React from 'react';
import {Character} from "./Character";
import CharacterCard from "./CharacterCard";

type CharacterGalleryProps = {
    characters: Character[]
}
function CharacterGallery(props: CharacterGalleryProps) {

    const characterCard = props.characters.map((character) => {
        return (
            <CharacterCard character={character} key={character.id + " " + character.name}/>
        )
    })
    return (
        <div className="character-gallery">
            {characterCard}
        </div>
    );
}

export default CharacterGallery;