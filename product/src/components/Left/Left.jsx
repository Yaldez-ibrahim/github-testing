import './Left.css'
import product from '../../assets/product.jpg'

function Left(){
    return(
        <div id='imgDiv'>
            <img id='proIMG' src={product}/>
        </div>
    )
}
export default Left