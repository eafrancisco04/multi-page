
function Card(props) {

    return(
        <div class={props.className}>
                    <h3>{props.heading}</h3>
                    <p class="lead">
                        {props.subhead}
                    </p>
                    <div class="container h-100 w-50">
                            Insert a description of something that you want to feature on this part. It can be an image too or whatever you want.
                    </div>
                    

        </div>
    )

}

    export default Card;