import React from 'react'

function Services(props) {
  return (
    <div className='cont'>

            <div>
                <p>Services: {props.services}</p>
                <p>Expected Price: {props.Price}</p>
            </div>
    </div>
  )
}

export default Services