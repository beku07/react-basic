import React from 'react';

function addFilledClass(status) {
    return status ? 'password__cell password__cell--filled' : 
    'password__cell';
}

function Password( { changeKeyboardShow, values = '' }) {
    const [ num1, num2, num3, num4 ] = values;
    return (
        <button className="password" onClick={ changeKeyboardShow }>
            <div className="password__content">
                    <div className={addFilledClass(num1)}>{num1}</div>
                    <div className={addFilledClass(num2)}>{num2}</div>
                    <div className={addFilledClass(num3)}>{num3}</div>
                    <div className={addFilledClass(num4)}>{num4}</div>
            </div>
        </button> 
    )
}

export default Password;