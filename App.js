import React from "react"
import Contact from "./Contact"
import Navbar from "./Navbar"

function App() {
    return (
        <>
        <Navbar/>
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Charles Koome" 
                phone="254 727349902"
                email="chalo@mandeferoper.com"
                role="Cyber Security"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Mwiyeria Kelvin"
                phone="254 758594044"
                email="mkelvo@mandeferoper.com"
                role="Software Engineer"
            />
            <Contact 
                img="./images/felix.png"
                name="Rahma Said"
                phone="254 700224304"
                email="rehe@mandeferoper.com"
                role="Network Engineer"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Chris Mukunya"
                phone="254 703614501"
                email="chris@mandeferoper.com"
                role="Cyber Security & Solutions Architect"
            />
        </div>
        </>
    )
}

export default App
