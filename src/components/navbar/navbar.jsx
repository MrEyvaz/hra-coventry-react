import React from 'react'
import '../navbar/navbar.css'
import hraImage from '../assets/navbar-image/hra-image.png';

function Navbar() {
    return (
        <div className='d-flex-nav'>
            <div className='nav-image'>
                <img src={hraImage} alt="Hra-image" />
            </div>

            <div className='nav-links'>
                <ul>
                    <li>Akademiya</li>
                    <li>Tədris proqramları</li>
                    <li>Təqaüd</li>
                    <li>Əlaqə</li>
                    <button>Müraciət et</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar