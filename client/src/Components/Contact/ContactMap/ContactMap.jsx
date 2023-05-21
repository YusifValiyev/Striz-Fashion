import React from 'react'
import './ContactMap.css'
function ContactMap() {
    return (
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe title="This is a unique title" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=lastminute.com London Eye&t=&z=10&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <a href="https://2yu.co">2yu</a>
                    <br/>
                    <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
                </div>
            </div>
    )
}

export default ContactMap