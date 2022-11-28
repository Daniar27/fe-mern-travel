import Button from 'elements/Buttons'
import React from 'react'

export default function Categories({data}) {
  return data.map((category, index1) => {
    return <section className='container' style={{marginBottom:70}} key={`category-${index1}`}>
        <h4 className='mb-3 font-weight-medium'>
            {category.name}
        </h4>
        <div className='container-grid'>
            {
                category.items.length === 0?<div className='row'>
                    There is no destination at this category
                </div>:category.items.map((items, index2)=>{
                    return <div className='item column-3 row-1' key={`category=${index1}-item-${index2}`}>
                        <div className='card'>
                            {items.isPopular && (<div className='tag'>
                                Popular {" "} <span className='font-weight-light'>Choice</span></div>
                                )}
                                <figure className='img-wrapper' style={{height: 180}}>
                                    <img className='img-cover' src={items.imageUrl} alt={items.name}/>
                                </figure>
                                <div className='meta-wrapper'>
                                    <Button href={`/properties/${items._id}`} type='link' className='sretched-link d-block text-gray-800'>
                                            <h5 className='h4'>{items.name}</h5>
                                        </Button>
                                    <span className='text-gray-500'>
                                        {items.city}, {items.country}
                                    </span>
                                </div>
                                
                        </div>
                    </div>
                })
            }
        </div>
    </section>
  })
}
