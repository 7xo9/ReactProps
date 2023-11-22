import React from 'react'

function Info(props) {
  return (
    <div className='cont'>
              <div className={props.company == "Tuwaiq" ? "red": "blue"} >
            <h4>Name: {props.name}</h4>
            <h4>Programing Language: {props.Language}</h4>
            <h4>Experince: {props.exp}</h4>
            <h4>Company: {props.company} </h4>
        </div>

    
    </div>
  )
}

export default Info