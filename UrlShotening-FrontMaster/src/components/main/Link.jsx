import React from 'react'

const Link = ({ item, _copyClipBoard, keyProp }) => {
    const copyClipBoard = (e) => {
        _copyClipBoard(e, keyProp)
    }
    return (
        <div className="card-container">
            <p className="text-card"><abbr>{item.url}</abbr></p>
            <div>
                <p id={"copy-" + keyProp} className="text-card text-cyan">{item.shortUrl}</p>
                <button
                    className="btn btn-color-primary btn-styles-secundary btn-shorten btn-copy"
                    onClick={copyClipBoard}>
                    Copy
                </button>
            </div>
        </div >
    )
}

export default Link
