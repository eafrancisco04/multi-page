function Contact() {
    return (
        <main class="container-fluid m-auto p-5 w-75 h-100 d-flex align-center flex-wrap">
            <div class="p-5 w-50 text-center bg-dark text-light">
                <h3>Contact info</h3>
                <p>Get in touch with me for something.</p>

                <h5>Phone Number:</h5>
                <p>416 123 4567</p>
                <h5>Email:</h5>
                <p>myemail@gmail.com</p>
                <h5>Location:</h5>
                <p>Toronto, Canada</p>
                <h5>Hours:</h5>
                <p>Mon - Friday. 9am - 6pm</p>
            </div>
            
            <form class="row w-50 p-5 bg-info" id="register-form">
                <h2>Send Me a Message!</h2>
                <div class="col-ms-6">
                    <label for="register-firstName" class="form-label">Name</label>
                    <input type="text" class="form-control" />
                </div>
            
                <div class="col-md-6">
                    <label for="register-email" class="form-label">Email</label>
                    <input type="email" class="form-control" />
                </div>

                <div class="col-6">
                    <label for="register-firstName" class="form-label">Contact Number</label>
                    <input type="text" class="form-control" />
                </div>
                
                <div class="input-group-prepend col-12">
                    <label for="register-email" class="form-label">Your Message:</label>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="d-block mt-3">
                    <button type="submit" class="btn btn-primary">Send</button>
                </div>
          </form>
        </main>
    )

}


export default Contact;