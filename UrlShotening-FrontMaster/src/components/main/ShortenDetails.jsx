import React from 'react'

const ShortenDetails = ({ cards, title, description }) => (
    <div className="shorten-details">
        <div className="shorten-txt">
            <h1>{title}</h1>
            <p>
                {description}
            </p>
        </div>
        <div className="list-cards">
            {
                cards.map(
                    (item, index) => (
                        <div className="card" key={index}>
                            <div className="brand-img">
                                <img src={item.img} alt="icon Recognition" />
                            </div>
                            <h2>
                                {item.title}
                            </h2>
                            <p>
                                {item.info}
                            </p>
                        </div>
                    )
                )
            }
        </div>
    </div>
)

export default ShortenDetails 
