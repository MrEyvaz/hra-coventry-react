import React from 'react'
import './form.css'

function Form() {
    return (
        <div className='question-container'>
            <div className='question-text'>
                <h3>Sualın var?</h3>
                <h3>Gəl görüşək</h3>
                <p>Başlamaq üçün heç vaxt gec deyil. Bizimlə görüş təyin et və tədris proqramı <br />ilə yaxından tanış ol</p>
            </div>

            <div className='question-form '>
                <div className='form-row'>
                    <input className='name' type="text" placeholder='Ad' />
                    <input className='surname' type="text" placeholder='Soyad' />
                </div>
                <input className='number' type="text" placeholder='Nömrə' />
                <div className='form-btn'>
                    <button>Müraciət et</button>
                </div>
            </div>
        </div>
    )
}

export default Form