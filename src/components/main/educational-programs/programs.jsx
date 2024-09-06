import React from 'react'
import eduPrograms from './../../assets/programs-image/educational-programs.jpg'
import '../educational-programs/programs.css'

function Programs() {
    return (
        <div className='educational-programs-container'>
            <div className='program-icon'>
                <img src={eduPrograms} alt="Educational-programs-image" />
            </div>

            <div className='d-grid'>
                <div className='card-body'>
                    <h3>Front-end Proqramlaşdırma</h3>
                    <p className='card-title'>HTML, CSS, Javascript və React.js ilə Front-end sahəsində <br/>axtarılan proqramçı ol.</p>
                    <button className='card-button'>Ətraflı</button>
                </div>

                <div className='card-body'>
                    <h3>Full-stack Proqramlaşdırma</h3>
                    <p className='card-title'>HTML, CSS, JS ilə Front-end biliklərini öyrəndikdən sonra C# və <br />ASP.NET Core ilə Full-stack proqramçı olacaqsan.</p>
                    <button className='card-button'>Ətraflı</button>
                </div>

                <div className='card-body'>
                    <h3>İnteryer Dizayn</h3>
                    <p className='card-title'>Autocad, 3DMAX , Photoshop və Corona ilə bu peşəyə <br />yiyələnmək bizimlə çox daha asandır.</p>
                    <button className='card-button'>Ətraflı</button>
                </div>

                <div className='card-body'>
                    <h3>General English</h3>
                    <p className='card-title'>High Result Academy şirkəti olaraq biz sizə A1-B2 proqramını <br />əhatə edən Beginner, Elementary, Pre-intermediate, Intermediate <br />və Upper-intermediate səviyyələri üzrə Ümumi <br />İngilis dili dərsləri təklif edirik.</p>
                    <button className='card-button'>Ətraflı</button>
                </div>

                <div className='card-body'>
                    <h3>IELTS</h3>
                    <p className='card-title'>IELTS proqramımız peşəkar müəllimlərimiz tərəfindən imtahan <br />proqramına uyğun 4 mövzu – oxuma, yazma, dinləmə və <br />danışıq – üzrə keçirilir.</p>
                    <button className='card-button'>Ətraflı</button>
                </div>
            </div>
        </div>
    )
}

export default Programs