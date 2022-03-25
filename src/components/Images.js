import img1 from '../img/place1.jpg';
import img2 from '../img/place2.jpg';
import img3 from '../img/place3.jpg';
import img4 from '../img/place4.jpg';
import img5 from '../img/place5.jpg';
import img6 from '../img/place6.jpg';
import img7 from '../img/place7.jpg';
import img8 from '../img/place8.jpg';
import img9 from '../img/place9.jpg';


function Images() {
    return (

        <div class="m-auto d-flex w-100 flex-wrap justify-content-center text-center">
            <div class="p-2">
                <img src={img1} class="w-100"/>
            </div>
            <div class="p-2">
                <img src={img2} class="w-100"/>
            </div>
            <div class="p-2">
                <img src={img3} class="w-100"/>
            </div>
            <div class="p-2">
                <img src={img4} class="w-100"/>
            </div>
            <div class="p-2">
                <img src={img5} class="w-100"/>
            </div>
            <div class="p-2">
                <img src={img6} class="w-100"/>
            </div>
            <div class="p-2">
                <img src={img7} class="w-100"/>
            </div>
            <div class="p-2">
                <img src={img8} class="w-100"/>
            </div>
            <div class="p-2">
                <img src={img9} class="w-100"/>
            </div>

        </div>
    )

}


export default Images;