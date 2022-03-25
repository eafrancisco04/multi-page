import { useState } from "react";

function State() {
    //let name = "Will";
    const [name, setName] = useState("Ea Francisco");
    const [design, setDesign] = useState("bg-light text-dark position-relative overflow-hidden m-auto p-4 text-center");

    const handleClick= () => {
        setDesign("bg-dark text-light position-relative overflow-hidden m-auto p-4 text-center")
    };

    return (
        <div class="position-relative overflow-hidden m-auto p-4 text-center">
                <div class={design}>
                    <h1>Original Heading</h1>

                    <p class="lead font-weight-normal">This is a subheading. Inserting placeholder text to be changed for later (hopefully).
                    </p>

                    <button onClick={handleClick}class="btn btn-outline-secondary" href="#">Nothing here</button>
                </div>
        </div>
    )
}

export default State;