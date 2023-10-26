import React from 'react'
import data from '../data'
import Food from '../components/Food'

export default function Homescreen() {
  return (
    <div>
         <div className="row">

            {data.map(food=>{

                return <div className="col-md-4">
                    <div>
                        <Food food={food}/>
                    </div>
                </div>
            })}

         </div>
      
    </div>
  )
}
