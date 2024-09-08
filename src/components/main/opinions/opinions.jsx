import React from 'react'
import './opinions.css'
import opinionsIcon from '../../assets/opininon-icon/opininons-icon.jpg'
import graduate1 from '../../assets/graduates-images/graduate2.jpg'
import graduate2 from '../../assets/graduates-images/graduate1.jpeg'

function Opinions() {
  return (
    <div className='opinionsOfStudents'>
      <div className='opinionsIcon'>
        <img src={opinionsIcon} alt="Opinions Icon" />
      </div>

      <div className='flex-cards'>
        <div className='flex imageAndDiv'>
          <img src={graduate1} alt="Graduate 1" style={{ borderRadius: '20px' }} />
          <div className='cardBody'>
            <h3>Nurlan Məmmədov</h3>
            <p>2022 Məzun</p>
            <p>Proqramlaşdırma sahəsində bir kurs axtarışında olarkən High <br />Result Academy-nin Full-stack proqramlaşdırma tədrisi <br />qarşıma çıxdı. Demo dərsdə iştirak etdikdən sonra təlimçinin <br />dərsi çox gözəl izah etdiyini və bütün tələblərə fərdi şəkildə <br />yanaşdığını gördüm. Academy-nin digər üstünlükləri də <br />məni burada təhsil almağa həvəsləndirdi. Hazırda <br />Academydə 1 ildir ki, Mentor olaraq çalışıram və Tech <br />komandasında Developer olaraq çalışıram.</p>
          </div>
        </div>

        <div className='flex imageAndDiv'>
          <img src={graduate2} alt="Graduate 1" />
          <div className='cardBody'>
            <h3>İbrahim Əhmədzadə</h3>
            <p>2023 Məzun</p>
            <p>High Result Academy-nin Front-end tədrisində iştirak etdim. <br />Təlimçimiz bizə bu sahənin ən dərinliklərini öyrətməklə <br />yanaşı, real iş mühitində qarşımıza çıxacaq olan problemlərə <br />də bizi hazırladı. Tədrisi bitirdikdən sonra elə akademiyada <br />Mentor olaraq çalışmağa başladım. Əlavə olaraq Tech <br />komandasında Freelance layihələrdə də çalışıram. Tech <br />komandasının varlığı məni bu tədrisdə iştirak etməyə çox <br />həvəsləndirmişdi, çünki tədrisi bitirdikdən sonra nə etməli <br />olacağımı bilmirdim. Akademiya rəhbərliyi kariyera <br />məslələrində daim mənə dəstək olurlar. Elə buna görədə <br />burada təhsil aldığım üçün çox şadam.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opinions