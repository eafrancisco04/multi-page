function Footer() {

    return(
        <footer class="page-footer font-small bg-dark p-3 d-flex text-light">
            <div class="container">
  <div class="row">
    <div class="col">
      <h3>Footer Text</h3>
      <p>This is assignment number 2 for class WDDM-122. It is made with React and styled with Bootstrap.</p>
    </div>
    <div class="col">
      <h3>Links</h3>
      <ul class="list-unstyled text-small">
            <li><a class="text-muted text-decoration-none" href="#">Empty Link</a></li>
            <li><a class="text-muted text-decoration-none" href="#">Empty Link2</a></li>
            <li><a class="text-muted text-decoration-none" href="#">Another Empty Link</a></li>
            <li><a class="text-muted text-decoration-none" href="#">Last Empty Link</a></li>
          </ul>

    </div>
  </div>
  <div class="row">
    <div class="col text-center">
        <small class="footer-copyright text-light">Copyright © 2022 Elizabeth Francisco</small> 
    </div>
  </div>
</div>

        </footer>

    )

}

    export default Footer;