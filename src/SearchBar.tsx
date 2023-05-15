import {ChangeEvent} from "react";

type SearchbarProps = {
    SearchText(text: string): void
}

export default function Searchbar(props: SearchbarProps) {
    function onInputChange(event: ChangeEvent<HTMLInputElement>): void {
        props.SearchText(event.target.value);
    }

    return (
        <>
            <p>Show names: <input type={"text"} onChange={onInputChange} /></p>
        </>
    );
}