function Card(props) {

    return(
        <div class={props.className}>
                    <h3>{props.heading}</h3>
                    <p class="lead">
                        {props.subhead}
                    </p>

        </div>
    )

}

    export default Card;