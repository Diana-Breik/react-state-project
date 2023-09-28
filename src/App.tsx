import './App.css'
import {useState} from "react";
import {Character, charactersRespons} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";

export default function App() {

    const [character, setCharacter] = useState<Character[]>(charactersRespons.results)
    return(
        <div>
            <div>
                <h1>Rick and Morty</h1>
            </div>
            <div>
                <CharacterGallery characters={character}/>
           </div>

           </div>
        )

}

