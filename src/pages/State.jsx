import { useState } from "react";
import Images from '../components/Images';

function State() {
    const [design, setDesign] = useState("bg-light text-dark m-0 p-5");
    const [btn1, setBtn] = useState("btn btn-outline-warning");
    const [btn2, setBtn2] = useState("btn btn-warning");

    const handleClick= () => {
        setDesign("bg-dark text-light m-0 p-5");
        setBtn("btn btn-warning");
        setBtn2("btn btn-outline-warning ");
    };
    
    const handleLight= () => {
        setDesign("bg-light text-dark text-center m-0 p-5");
        setBtn("btn btn-outline-warning ");
        setBtn2("btn btn-warning ");
    }

    return (
    <main class={design}>
        <section class="p-5 text-center">
                <h2>Gallery</h2>
                <p class="lead">This is the gallery page. Don't like white backgrounds? Click on the toggle below to change to dark mode.</p>

                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <button onClick={handleClick} class={btn1}>
                        Dark
                    </button>
                    
                    <button onClick={handleLight} class={btn2}>
                        Light
                    </button>
                </div>

                <Images />
                
        </section>
    </main>
    )
}

export default State;