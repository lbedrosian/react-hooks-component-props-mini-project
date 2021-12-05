import React from "react";

function About({image = "https://via.placeholder.com/215", about}){
    return(
        <aside>
            <img key="image" src={image} alt="blog logo"></img>
            <p key="about">{about}</p>
        </aside>
    )
}

export default About;