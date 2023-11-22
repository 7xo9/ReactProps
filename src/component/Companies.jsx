import React from 'react'
import Info from './Info'
import Services from './Services'

function Companies(props) {
  return (

    <div className='cont'>
        
        <div className='compcontainer'>
            <h1>CompanyName: {props.companyName}</h1>
            <p>Number of Employees: {props.EmpNum}</p>
            <p>Since: {props.since}</p>  
        </div>


        <div className='container'>
    <Info name={props.name} Language={props.Language} exp={props.exp} company={props.companyName}/>

    <Info name={props.name2} Language={props.Language2} exp={props.exp2} company={props.companyName}/>
 
    <Info name={props.name3} Language={props.Language3} exp={props.exp3} company={props.companyName}/>

    <Services services={props.services} Price={props.Price}/>

     </div>    



        
    </div>
  )
}

export default Companies