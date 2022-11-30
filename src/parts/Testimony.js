import React from 'react'
import Star from 'elements/Star'
import testimonyAccent from 'assets/images/testimonial-landingpages-frame.jpg'
import Button from 'elements/Buttons'

export default function Testimony({data}) {
  return (
    <section className='container' style={{marginBottom:70}}>
        <div className='row align-items-center'>
            <div className='col-auto' style={{marginRight:70}}>
                <div className='testimonial-hero' style={{margin:'30px 0 0 30px'}}>
                    <img src={data.imageUrl} alt='Testimonial' className='position-absolute'style={{zIndex:1}}></img>
                    <img src={testimonyAccent} alt='Testimonial frame' className='position-absolute'style={{margin:"-30px 0 0 -30px"}}></img>
                </div>
            </div>
            <div className='col'>
                <h4 style={{marginBottom: 40}}>
                    {data.name}
                </h4>
                <Star value={data.rate} width={35} height={35} spacing={4}/>
                <h5 className='h2 font-weight-light line-height-2 my-3'>
                    {data.content}
                </h5>
                <span className='text-gray-500' style={{marginBottom:40}}>
                    {data.familyName}, {data.familyOccupation}
                </span>

                <div>
                    <Button className='btn px-5' hasShadow isPrimary type='link' href={`testimonial/${data._id}`}>
                        Read The Story
                    </Button>
                </div>
            </div>
        </div>
      
    </section>
  )
}
