import { useState } from 'react'
import Companies from './component/Companies'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Companies services="Training" Price="15000" companyName="Tuwaiq" EmpNum={200} since={2018} name="Khalid" Language="C++" exp="3 years"  name2="Ali"
    Language2="C++" exp2="3 years" name3="Ahmed" Language3="JS" exp3="1 years" />
    

<Companies services="Production" Price="999999" companyName="Apple" EmpNum={200} since={1996} name="Ayob" Language="JS, JAVA" exp="2 years"  name2="Ali"
    Language2="Swift" exp2="6 years"  name3="Abduallh" Language3="Swift, java" exp3="1 years" />

<Companies services="Prodction" Price="34000" companyName="Mircsoft" EmpNum={200} since={1992} name="Salman" Language="Java" exp="9 years"  name2="Fahad"
    Language2="Java" exp2="21 years"  name3="Sara" Language3="Java, JS" exp3="3 years" />

    </>
  )
}

export default App
