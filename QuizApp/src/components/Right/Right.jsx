import './Right.css'
import SelectionItems from "../SelectionItems/SelectionItems"

import HTMLLogo from "../../assets/icon-html.svg"
import CSSLogo from "../../assets/icon-css.svg"
import jsLogo from "../../assets/icon-js.svg"
import Accessbilitylogo from "../../assets/icon-accessibility.svg"

function Right(){
    const arrOfObj=[
        {SelectionName:"HTML",
         SelectionLogo: HTMLLogo,
         SelectionColor:"red"
        },
        {SelectionName:"css",
         SelectionLogo: CSSLogo,
         SelectionColor:"green"
        },
        {SelectionName:"js",
         SelectionLogo: jsLogo,
         SelectionColor:"yello"
        },
        {SelectionName:"Accessbility",
         SelectionLogo: Accessbilitylogo,
         SelectionColor:"pink"
        }
    ]
    return(
        <div id='rightDiv'>
           
           {
            arrOfObj.map((item)=>{
                return(
                  <SelectionItems
                    SelectionName={item.SelectionName}
                    SelectionLogo={item.SelectionLogo}
                    SelectionColor={item.SelectionColor}
                 ></SelectionItems>
                )
            })
           }
           
        </div>
    )
}
export default Right