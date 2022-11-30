import Button from 'elements/Buttons'
import React from 'react'

export default function MostPicked(props) {
  return (
    <section className='container' style={{marginBottom:70}} ref={props.refMostPicked}>
      <h4 className='mb-3'>
        Most Picked
      </h4>
      <div className='container-grid'>
        {
            props.data.map((items,index)=>{
                return (<div key={`mostpicked-${index}`} className={`item column-4${index===0?" row-2":" row-1"}`}>
                    <div className='card card-featured'>
                        <div className='tag'>
                            ${items.price}
                            <span className='font-weight-light'> per {items.unit}</span>
                        </div>
                        <figure className='img-wrapper'>
                            <img src={items.imageUrl} alt={items.name} className='img-cover'/>
                        </figure>
                        <div className='meta-wrapper'>
                            <Button className='stretched-link d-block text-white' type='link' href={`/properties/${items._id}`}>
                                <h5>{items.name}</h5>
                            </Button>
                            <span>
                                {items.city} {items.country}
                            </span>
                        </div>
                    </div>

                </div>)

            })
        }
      </div>

    </section>
  )
}
