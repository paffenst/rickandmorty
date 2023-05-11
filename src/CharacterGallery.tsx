import React, {ChangeEvent, useEffect, useState} from 'react';
import {Character} from "./Character";
import CharacterCard from "./CharacterCard";
import './CharacterGallery.css'
import './CharacterCard.css'
import axios from "axios";

type CharacterGalleryProps = {
    characters: Character[]
}

function CharacterGallery(props: CharacterGalleryProps) {
    const [character, setCharacters] = useState<Character[]> ([])
    const [searchText, setFilterText] = useState("")
    const filterCharacters = props.characters.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()))

    function onChangeInputUSer(event: ChangeEvent<HTMLInputElement>) {
        setFilterText(event.target.value)
    }

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results)
            })
    }, [])

    return (
        <div>
            <span>Search the character´s name:</span>
            <input placeholder={"Search ..."} onChange={onChangeInputUSer}></input>
            <div className={"character-gallery"}>
                {filterCharacters.map((character) =>
                    <div>
                        <CharacterCard character={character}/>
                    </div>)
                }
            </div>
        </div>
    )
}

export default CharacterGallery;