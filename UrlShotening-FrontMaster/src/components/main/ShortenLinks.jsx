import React, { useState } from 'react'
import Error from "./Error"

const ShortenLinks = ({ searchs, setSearch }) => {
    const [link, setLink] = useState("")
    const [error, setError] = useState(false)

    const _handleSetLink = (e) => {
        setLink(e.target.value)
    }

    const _handleShortenLink = (e) => {
        const URL = `https://rel.ink/api/links/`
        fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                url: link
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then(response => {
                if (response.hashid) {
                    setSearch(
                        [
                            {
                                url: link,
                                shortUrl: `https://rel.ink/${response.hashid}`
                            },
                            ...searchs
                        ]
                    )
                    document.getElementById("input-link").classList.remove("error")
                    setLink("")
                    setError(false)
                } else {
                    document.getElementById("input-link").classList.add("error")
                    setLink("")
                    setError(true)
                }
            })

    }

    return (
        <div className="shorten-links">
            <div>
                <input id="input-link" type="text" placeholder="Shorten a link here..." value={link} onChange={_handleSetLink} />
                <button className="btn btn-color-primary btn-styles-secundary" onClick={_handleShortenLink}>Shorten It!</button>
            </div>
            {error ? <Error /> : null}
        </div>
    )
}

export default ShortenLinks
