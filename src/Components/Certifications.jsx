import React from 'react'
import './Certifications.css';

const Certifications = () => {
    return (
        <div className='containers'>
            {/* <h2>CERTIFICATIONS</h2> */}
            
            <div className='certificate-card'>
                <h1>REACT JS</h1>
                <h4>BEGINNER</h4>
                <p>i have successfully completed the simplilearn online course.</p>
                <button>explore</button>

            </div>
             
           
            <div className='certificate-card'>
                <h1>BOOTSTRAP</h1>
                <h4>BOOTCAMP</h4>
                <p>i have successfully completed the letsupgrade online 3 days bootcamp.</p>
                <button>explore</button>

            </div>
            
        </div>
    )
}

export default Certifications
