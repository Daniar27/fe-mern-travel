import Button from 'elements/Buttons'
import React from 'react'
import IconText from './IconText'

export default function Footer() {
  return (
    <footer className='Footer' style={{marginTop:70}}>
      <div className='container'>
        <div className='row'>
            <div className='col-auto' style={{width:350}}>
                <IconText/>
                <p className='brand-tagline'>
                    We kaboom your beauty holiday instantly and memorable.
                </p>
            </div>
            <div className='col-2 mr-5'>
                <h6 className='mt-2'>For Beginners</h6>
                <ul className='list-group-flush'>
                    <li className='list-group-item'>
                        <Button type='link' href='/register'>New Account</Button>
                    </li>
                    <li className='list-group-item'>
                        <Button type='link' href='/properties'>Start Booking Room</Button>
                    </li>
                    <li className='list-group-item'>
                        <Button type='link' href='/use-payment'>Use Payments</Button>
                    </li>
                </ul>
            </div>
            <div className='col-2 mr-5'>
            <h6 className='mt-2'>Explore Us</h6>
                <ul className='list-group-flush'>
                    <li className='list-group-item'>
                        <Button type='link' href='/career'>Our Career</Button>
                    </li>
                    <li className='list-group-item'>
                        <Button type='link' href='/privacy'>Privacy</Button>
                    </li>
                    <li className='list-group-item'>
                        <Button type='link' href='/terms'>Terms & Conditions</Button>
                    </li>
                </ul>
            </div>
            <div className='col-3'>
            <h6 className='mt-2'>Connect Us</h6>
                <ul className='list-group-flush'>
                    <li className='list-group-item'>
                        <Button type='link' isExternal href='#'>support@staycation.com</Button>
                    </li>
                    <li className='list-group-item'>
                        <Button type='link' isExternal href='#'>021 - 2268 -1996</Button>
                    </li>
                    <li className='list-group-item'>
                        <span>Staycation, Kenang, Jakarta</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className='row'>
            <div  className='col text-center copyrights'>
                Copyright 2019 All right reserverd Staycation
            </div>
        </div>
      </div>
    </footer>
  )
}
