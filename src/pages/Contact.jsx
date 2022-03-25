function Contact() {
    return (
        <main class="m-auto p-5 w-75 h-100 d-flex align-center">
            <div class="w-50 p-5 text-center bg-secondary">
                <h3>Contact info</h3>
                <p>Get in touch with me for something.</p>

                <h3>Phone Number:</h3>
                <h4>Email:</h4>
                <h4>Address:</h4>
                <h4>Hours:</h4>
            </div>
            
            <form class="row p-5 h-100 bg-warning" id="register-form">
                <h2>Register form</h2>
                <div class="col-md-6">
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