import React from 'react'
import ImageHero from 'assets/images/img-hero.png'
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg'
import IconCity from 'assets/images/icons/ic_cities.svg'
import IconTraveler from 'assets/images/icons/ic_traveler.svg'
import IconTreasure from 'assets/images/icons/ic_treasure.svg'

import Button from 'elements/Buttons'

import NumberFormat from 'utils/NumberFormat'

export default function Hero(props) {

    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop-30,
            behavior: "smooth"
        })
    }


  return (
    <section className='container pt-4' style={{marginBottom:70}}>
      <div className='row align-items-center'>
        <div className='col-auto pr-5' style={{width: 530}}>
            <h1 className='font-weight-bold line-height-1 mb-3'>
                Forget Busy Work, <br/>
                Start Next Vacation
            </h1>
            <p className='mb-3 font-weight-light text-gray-500 w-75' style={{lineHeight:"170%"}}>
                We provide what you need to enjoy your holiday with family. Time to
                nake another memorable moments.
            </p>
            <Button className='btn px-5' hasShadow isPrimary onClick={showMostPicked}>
                Show Me Now
            </Button>

            <div className='row' style={{marginTop:50}}>
                <div className='col-auto' style={{marginRight : 30}}>
                    <img src={IconTraveler} alt={`${props.data.travelers} Travelers`} width='32' height='32'/>
                    <h6 className='mt-3'>
                        {NumberFormat(props.data.travelers)} <span className='text-gray=500 font-weight-light'> Travelers</span>
                    </h6>
                </div>

                <div className='col-auto' style={{marginRight : 35}}>
                    <img src={IconCity} alt={`${props.data.cities} cities`} width='32' height='32'/>
                    <h6 className='mt-3'>
                        {NumberFormat(props.data.cities)} <span className='text-gray=500 font-weight-light'> Cities</span>
                    </h6>
                </div>

                <div className='col-auto'>
                    <img src={IconTreasure} alt={`${props.data.treasures} Treasures`} width='32' height='32'/>
                    <h6 className='mt-3'>
                        {NumberFormat(props.data.treasures)} <span className='text-gray=500 font-weight-light'> Treasures</span>
                    </h6>
                </div>
            </div>
        </div>

        <div className='col-6 pl-5'>
            <div style={{width: 500, height:422}}>
                <img src={ImageHero} alt="Room With Couches" className='img-fluid position-absolute' style={{margin:'-30px 0 0 -30px', zIndex:1}}/>
                <img src={ImageHeroFrame} alt="Room With Couches Frame" className='img-fluid position-absolute' style={{margin:'0 -15px -15px 0'}}/>
            </div>
        </div>
      </div>
    </section>
  )
}
