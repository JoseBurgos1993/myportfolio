import React from 'react';
import './style.css';

export default function Contact(){
    return(
        <div id="contact" class="container contacts">
            <h3>How to contact me</h3>
            <hr style={{border: '1px solid lightsteelblue'}} />
            <p>Contact me through my LinkedIn or by email at burgosjd1993@gmail.com.</p>
      
            
        </div>
    );
}

/*
<form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Placeholder Exampleson" />
                </div>
                <div class="form-group">
                     <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
            </form>
*/