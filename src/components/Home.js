import codepen from '../img/codepen.svg';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';

function Home() {

    return(
        <main class="mh-100">
            <div class="position-relative overflow-hidden m-auto p-4 text-center">
                <div class="col-md-5 p-lg-5 mx-auto my-5 bg-outline-secondary text-center">
                    <h1>Hello there. Insert content here</h1>

                    <p class="lead font-weight-normal">This is a subheading. Inserting placeholder text to be changed for later (hopefully).
                    </p>

                    <a class="btn btn-outline-secondary" href="#">Nothing here</a>
                </div>
            </div>

            <div class="d-flex mh-100 p-3 flex-wrap">
                <div class="bg-dark text-center w-50 p-5 text-light">
                    <h3>Heading of Something</h3>
                    <p class="lead">
                        A subheading of something
                    </p>

                </div>

                <div class="bg-secondary text-center w-50 p-5 text-light">
                    <h3>Heading of Something</h3>
                    <p class="lead">
                        A subheading of something
                    </p>

                </div>

                <div class="bg-light text-center w-50 p-5 text-dark">
                    <h3>Heading of Something</h3>
                    <p class="lead">
                        A subheading of something
                    </p>

                </div>

                <div class=" text-center w-50 p-5 text-dark">
                    <h3>Heading of Something</h3>
                    <p class="lead">
                        A subheading of something
                    </p>

                </div>

            <div class="container m-auto p-5 text-center">
                <h5>Follow Me! Because I'm kinda great. </h5>
                <div class="d-flex m-auto w-25 justify-content-around text-center">
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