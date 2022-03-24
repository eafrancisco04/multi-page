import picture from '../img/kaeya.jpg';

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




            </div>


            {/* <img src={picture} alt="Kaeya" /> */}
        </main>

    )

}

    export default Home;