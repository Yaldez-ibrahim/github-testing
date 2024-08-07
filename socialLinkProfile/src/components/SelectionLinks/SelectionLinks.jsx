import './SelectionLinks.css'

function SelectionLinks(props){
    return(
        <button id='SelectionLinks'>
            <label>{props.LinkName}</label>
        </button>
    )
}

export default SelectionLinks