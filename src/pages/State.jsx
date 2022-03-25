import { useState } from "react";
import Images from '../components/Images';

function State() {
    const [design, setDesign] = useState("bg-light text-dark m-0 p-5");
    const [btn1, setBtn] = useState("btn btn-outline-warning m-2");
    const [btn2, setBtn2] = useState("btn btn-warning m-2");

    const handleClick= () => {
        setDesign("bg-dark text-light m-0 p-5");
        setBtn("btn btn-warning m-2");
        setBtn2("btn btn-outline-warning m-2");
    };
    
    const handleLight= () => {
        setDesign("bg-light text-dark text-center m-0 p-5");
        setBtn("btn btn-outline-warning m-2");
        setBtn2("btn btn-warning m-2");
    }

    return (
    <main class={design}>
        <section class="p-5 text-center">
                <h2>Gallery</h2>
                <p class="lead">This is the gallery page. Insert placeholder text that is not lorem ipsum.</p>

                <button onClick={handleClick} class={btn1} href="#">Go dark</button>
                <button onClick={handleLight} class={btn2} href="#">Go Light</button>

                <Images />
                
        </section>
    </main>
    )
}

export default State;