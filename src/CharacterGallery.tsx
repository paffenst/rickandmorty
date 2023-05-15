import React, {ChangeEvent, useEffect, useState} from 'react';
import {Character} from "./Character";
import CharacterCard from "./CharacterCard";
import './CharacterGallery.css'
import './CharacterCard.css'
import axios from "axios";

type CharacterGalleryProps = {
    characters: Character[]
}

type Info = {
    next: string,
    prev: string
}

function CharacterGallery(props: CharacterGalleryProps) {
    const [info, setInfo] = useState<Info>({next: "", prev: ""})
    const [url, setUrl] = useState<string>("https://rickandmortyapi.com/api/character")
    const [character, setCharacters] = useState<Character[]>([])

    const [searchText, setFilterText] = useState("")
    const filterCharacters = props.characters.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()))

    function onClickSetUrlNext() {
        setUrl(info.next)
    }

    function onClickSetUrlPrev() {
        setUrl(info.prev)
    }

    function onChangeInputUSer(event: ChangeEvent<HTMLInputElement>) {
        setFilterText(event.target.value)
    }

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setCharacters(response.data.results)
                setInfo((response.data.info))
            })
    }, [url])

    return (
        <div>
            <span>Search the character´s name:</span>
            <input placeholder={"Search ..."} onChange={onChangeInputUSer}></input>
            {info.next == null ? <></> : <button onClick={onClickSetUrlNext}>NEXT</button>}
            {info.prev == null ? <></> : <button onClick={onClickSetUrlPrev}>PREV</button>}
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