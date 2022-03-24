import codepen from '../img/codepen.svg';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import Card from './Card.js';
import React from 'react';

function Home() {

    return(
        <main class="mh-100">
            <div class="position-relative overflow-hidden m-auto p-4 text-center">
                <div class="col-md-5 p-lg-5 mx-auto my-5 bg-outline-secondary text-center">
                    <h1>Original Heading</h1>

                    <p class="lead font-weight-normal">This is a subheading. Inserting placeholder text to be changed for later (hopefully).
                    </p>

                    <a class="btn btn-outline-secondary" href="#">Nothing here</a>
                </div>
            </div>

            <div class="d-flex mh-100 p-3 flex-wrap">
                <Card className="bg-dark text-center w-50 p-5 text-light" heading="Placeholder Headeer" subhead="This is a subheading." />
                <Card className="bg-secondary text-center w-50 p-5 text-light" heading="Headinf of Something" subhead="This is a subheading." />
                <Card className="bg-light text-center w-50 p-5 text-dark" heading="Headinf of Something" subhead="This is a subheading." />
                <Card className="bg-white text-center w-50 p-5 text-dark" heading="Headinf of Something" subhead="This is a subheading." />


            <div class="container m-auto p-5 text-center">
                <h5 class="p-3">Follow Me! Because I'm kinda great. </h5>
                <div class="d-flex m-auto p-3 w-25 justify-content-around text-center">
                    <a href="https://facebook.com" target="_blank"><img src={ facebook } width="40" height="40" alt="facebook" /></a>
                    <a href="https://twitter.com/home" target="_blank"><img src={ twitter } width="40" height="40" alt="twitter" /> </a>
                    <a href="https://linkedin.com/home" target="_blank"><img src={ linkedin } width="40" height="40" alt="linkedin" /> </a>
                    <a href="https://codepen.io" target="_blank"><img src={ codepen } width="40" height="40" alt="codepen" /> </a>
                </div>

            </div>


            </div>
        </main>

    )

}

    export default Home;