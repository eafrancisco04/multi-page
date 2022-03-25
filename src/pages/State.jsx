import { useState } from "react";
import Images from '../components/Images';

function State() {
    //let name = "Will";
    const [name, setName] = useState("Ea Francisco");
    const [design, setDesign] = useState("bg-light text-dark");

    const handleClick= () => {
        setDesign("bg-dark text-light");
    };
    
    const handleLight= () => {
        setDesign("bg-light text-dark");
    }

    return (
    <main class={design}>
        <section class="m-5 p-5 text-center">
                <h2>Gallery</h2>
                <p class="lead">This is the gallery page. Insert placeholder text that is not lorem ipsum.</p>

                <button onClick={handleClick} class="btn btn-warning m-2" href="#">Go dark</button>
                <button onClick={handleLight} class="btn btn-secondary" href="#">Go Light</button>

                <Images />
                
        </section>
    </main>
    )
}

export default State;