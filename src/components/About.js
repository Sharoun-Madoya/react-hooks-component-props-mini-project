import React from "react";

function About (image, aboutText){
    return (
    <aside>
        <img src={image} alt="blog logo"/>
        <p>{aboutText}</p>
    </aside>
    )
}

export default About