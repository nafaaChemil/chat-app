import React from 'react'
import './contact.css'// Import du contact css
function Contact(){
    return (
        <div className="Contact">
            <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="photo-avatar" className='avatar' />
            <div>
                <ul className="status">
                    <li className='name'>John Doe</li>
                    <li>
                        <span className="status-online"></span>
                        <span className="status-text">online</span>
                        </li>
                </ul>
            </div>
        </div>
    )
}


export default Contact


