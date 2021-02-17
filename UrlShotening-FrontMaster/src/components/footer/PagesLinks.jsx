import React from 'react'

const PagesLinks = ({ title, list }) => {

    const _upperFirstLetter = (string) => (
        string.charAt(0).toUpperCase() + string.slice(1)
    )

    return (
        <ul>
            <h3>{_upperFirstLetter(title)}</h3>
            {
                list.map(
                    (item) => (
                        <li
                            key={item}
                        >
                            {item}
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default PagesLinks;
