import React from 'react'
import './PartofFooter.css'
import trophy from '../../../public/trophy 1.png'
import guarantee from '../../../public/guarantee.png'
import shipping from '../../../public/shipping.png'
import customerSupport from '../../../public/customer-support.png'

function PartofFooter() {
  return (
    <div id='PartofFooter'>
        <div className='advanteg'>
            <img src={trophy}/>
            <div>
                <label className='topLabel'>High Quality</label>
                <label className='bottomLabel'>crafted from top materials</label>
            </div>
        </div>
        <div className='advanteg'>
            <img src={guarantee}/>
            <div>
                <label className='topLabel'>Warranty Protectiony</label>
                <label className='bottomLabel'>Over 2 years</label>
            </div>
        </div>
        <div className='advanteg'>
            <img src={shipping}/>
            <div>
                <label className='topLabel'>Free Shipping</label>
                <label className='bottomLabel'>Order over 150 $</label>
            </div>
        </div>
        <div className='advanteg'>
            <img src={customerSupport}/>
            <div>
                <label className='topLabel'>24 / 7 Support</label>
                <label className='bottomLabel'>Dedicated support</label>
            </div>
        </div>
    </div>
  )
}

export default PartofFooter