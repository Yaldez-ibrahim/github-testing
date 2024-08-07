import './SelectionItems.css'

function SelectionItems(props) {
  
  return (
   <button className='SelectionItem'>
    <div className='SelectionLogo' style={{backgroundColor:props.SelectionColor}}>
        <img src={props.SelectionLogo}/>
    </div>
    <span >{props.SelectionName}</span>
   </button>
  )
}

export default SelectionItems

