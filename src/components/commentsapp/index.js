import React, { useState } from "react"
import "./index.css"
const AppointmentApp = ()=>{
    const [title,Settitle]= useState("")
    const[date,Setdate]= useState("")
    const [Appointments,SetAppintments] = useState([])
    const titleInput = (e)=>{
        Settitle(e.target.value)

     }
     const dateInput = (e)=>{
           Setdate(e.target.value)
     }
     const addData = ()=>{
       if (title.trim()!=="" && date.trim()!==""){
        SetAppintments([...Appointments,{title,date}])
        Settitle("")
        Setdate("")
       }

     }
    return(
        <>
        <div className="bg-container">
        <h1 className="heading">Appointment App</h1>
        <h1 className="heading">Title</h1>
        <input type = "text" onChange={titleInput}  value = {title}/>
        <h1 className="heading">Date</h1>
        <input type = "date" className="date-input" onChange={dateInput} value = {date}/>

        <button onClick={addData}>Add</button>
        {Appointments.map((appointment,index)=>(
            <div key= {index}>
                <h1>{appointment.title}</h1>
               <p>{appointment.date}</p>
                </div>
        ))}
         
        </div>
        </>
    )
}
export default AppointmentApp