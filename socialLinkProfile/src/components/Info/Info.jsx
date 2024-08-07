import './Info.css'
import avatar from '../../assets/avatar-jessica.jpeg'
function Info(){
    return(
        <div id='InfoDiv'>
            <img src={avatar}/>
            <h2>Jessica Randall</h2>
            <h3>London, United Kingdom</h3>
            <label>"Front-end developer and avid reader."</label>
        </div>
    )
}
export default Info