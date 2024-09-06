import React from 'react'
import '../advantages/advantages.css'
import AdvantagesIcon from '../../assets/advantages-images/advantages.png'
import Feature1 from '../../assets/advantages-images/feature1.jpg'
import Feature2 from '../../assets/advantages-images/feature2.jpg'
import Feature3 from '../../assets/advantages-images/feature3.jpg'
import Feature4 from '../../assets/advantages-images/feature4.jpg'
import Feature5 from '../../assets/advantages-images/feature5.jpg'

function Advantages() {
    return (
        <div className='container-ourAdvantages'>
            <img src={AdvantagesIcon} alt="AdvantagesIcon" />
            <div className='d-grid-features'>
                <div className='features-body'>
                    <div>
                        <img src={Feature1} alt='Feature1' />
                    </div>
                    <div className='features-title-text'>
                        <h3>
                            Modul əsaslı tədris</h3>
                        <p>
                            Modul əsaslı tədris metodikası <br />sayəsində tələbələr tədrisdən <br />maksimum şəkildə <br />faydalanmaqdadır. Hər <br />modulun sonunda tələbələr final <br />layihə təqdim edir və bu sayədə <br />hansı modulu nə səviyyədə <br />qavradıqlarını öyrənməklə <br />yanaşı, təqdim elədikləri <br />layihələr sayəsində tələbələrin <br />portfolioları da formalaşır.</p>
                    </div>
                </div>

                <div className='features-body'>
                    <div>
                        <img src={Feature2} alt='Feature2' />
                    </div>

                    <div className='features-title-text'>
                        <h3>Mentor dəstəyi</h3>
                        <p>
                            Tələbələrin həm tədris <br />müddətində həm də tədrisdən <br />sonra ən yaxın köməkçiləri <br />mentorlarımızdır. Onlar <br />tələbələrin bütün suallarına və <br />problemlərinə cavab verərək <br />qısa zamanda tədrisi <br />qavramalarına kömək olurlar.</p>
                    </div>
                </div>

                <div className='features-body'>
                    <div>
                        <img src={Feature3} alt="Feature3" />
                    </div>

                    <div className='features-title-text'>
                        <h3>
                            Video qeydiyyat</h3>
                        <p>
                            Dərslərimiz video qeydiyyata <br />alınaraq tələbələr ilə paylaşılır. <br />Həmin paylaşılan dərslər həm <br />tədris müddətində həm də <br />tədrisdən sonra belə tələbələrdə <br />qalır. Onlar istədikləri zaman <br />həmin videolara baxmaqla öz <br />biliklərini yeniləyə bilər, dərsdə <br />tam anlamadığı mövzuların <br />üzərindən keçə bilərlər.</p>
                    </div>
                </div>

                <div className='features-body'>
                    <div>
                        <img src={Feature4} alt="Feature4" />
                    </div>

                    <div className='features-title-text'>
                        <h3>
                            Zəmanətli təhsil
                        </h3>
                        <p>
                            Akademiyamız tədris <br />müddətində tədrisi tam <br />qavramayan tələbələr üçün <br />yenidən ödənişsiz olaraq <br />tədrisdə iştirak etmə imkanı <br />yaradır. Bu isə özlüyündə bizim <br />tədrisimizə verdiyimiz zəmanətin <br />bir göstəricisidir.</p>
                    </div>
                </div>

                <div className='features-body'>
                    <div>
                        <img src={Feature5} alt="Feature5" />
                    </div>

                    <div className='features-title-text'>
                        <h3>
                            Təcrübə proqramı
                        </h3>
                        <p>
                            Məzun tələblərimizin ilk iş yeri elə <br />bizim yanımızda olacaqdır. <br />Tədris rəhbərimizin rəhbərlik <br />etdiyi Tech komandası freelance <br />layihələr üzərində tələblərlə <br />birgə çalışırlar. Həmin tələbələr <br />həm layihədə işlədiyi müddətdə <br />ödəniş alır həm də komanda <br />şəklində işləməyi öyrənmiş br
                            olurlar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages