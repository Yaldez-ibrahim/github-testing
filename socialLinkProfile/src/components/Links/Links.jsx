import './Links.css'
import SelectionLinks from '../SelectionLinks/SelectionLinks'

function Links(){
    return(
        <div id='linksDiv'>
            <SelectionLinks LinkName="GitHub"></SelectionLinks>
            <SelectionLinks LinkName="Frontend Mentor"></SelectionLinks>
            <SelectionLinks LinkName="LinkedIn"></SelectionLinks>
            <SelectionLinks LinkName="Twitter"></SelectionLinks>
            <SelectionLinks LinkName="Instagram"></SelectionLinks>
        </div>
    )
}

export default Links