import React from 'react'

const FirstMenu = ({ firstList }) => (
    <ul>
        {
            firstList.map(
                (item, index) => (
                    <li key={index}>
                        <a href='./'>{item}</a>
                    </li>
                )
            )
        }
    </ul>
)


export default FirstMenu