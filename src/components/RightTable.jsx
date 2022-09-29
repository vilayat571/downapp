import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function RightTable() {

    const data = useSelector(state => state.downReducer.text);
    console.log(data)

    return (
        <div>
            <textarea
                /* style={{
                    fontWeight:
                        text.indexOf('==') !== -1 ||
                            text.indexOf('-') !== -1 ||
                            text.indexOf('#') !== -1 ? 'bold' : '200',
                    fontStyle: text.indexOf('**') !== -1 ? 'italic' : 'normal',
                    fontSize: text.indexOf('==') !== -1 ? '26px' : text.indexOf('--') !== -1 ? '22' : text.indexOf('##') !== -1 ? '18px ' : '16px'
                }} */ value={''} disabled={true} name="area1" id="textarea1" cols="50" rows="20"></textarea>
        </div>

    )
}

export default RightTable
