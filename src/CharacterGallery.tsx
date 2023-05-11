import React, {ChangeEvent, useState} from 'react';
import {Character} from "./Character";
import CharacterCard from "./CharacterCard";
import './CharacterGallery.css'
import './CharacterCard.css'

type CharacterGalleryProps = {
    characters: Character[]
}

function CharacterGallery(props: CharacterGalleryProps) {

    const [searchText, setFilterText] = useState("")
    const filterCharacters = props.characters.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()))

    function onChangeInputUSer(event: ChangeEvent<HTMLInputElement>) {
        setFilterText(event.target.value)
    }

    return (
        <div>
            <span>Search the character´s name:</span>
            <input placeholder={"Search ..."} onChange={onChangeInputUSer}></input>
            <div className={"character-gallery"}>
                {filterCharacters.map((character) =>
                    <div className={"character-card"}>
                        <CharacterCard character={character}/>
                    </div>)}
            </div>
        </div>
    )
}

export default CharacterGallery;