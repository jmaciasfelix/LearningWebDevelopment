import React from 'react'

import ShortenLinks from "./ShortenLinks"
import ShortenDetails from "./ShortenDetails"
import Link from "./Link"
import useLocalStorage from "../hooks/useLocalStorage";

const Shorten = () => {
    // const [searchs, setSearch] = useState([])

    const [searchs, setSearch] = useLocalStorage("searchs", []);

    const title = "Advanced Statistics"
    const description =
        "Track how your links are performing across the web with our advanced statistics dashboard."

    const cards = [
        {
            title: "Brand Recognition",
            info: " Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
            img: "/images/icon-brand-recognition.svg"
        },
        {
            title: "Detailed Records",
            info: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
            img: "/images/icon-detailed-records.svg"
        },
        {
            title: "Fully Customizable",
            info: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
            img: "/images/icon-fully-customizable.svg"
        }
    ]

    const _copyClipBoard = (e, keyProp) => {
        const textCopy = document.getElementById("copy-" + keyProp).innerText
        const elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = textCopy;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);

        let elements = document.getElementsByClassName("btn-copy")
        Array.prototype.forEach.call(elements, function (node) {
            node.classList.remove("btn-color-secundary")
            node.classList.add("btn-color-primary")
            node.innerHTML = "Copy"
        })
        e.target.classList.remove("btn-color-primary")
        e.target.classList.add("btn-color-secundary")
        e.target.innerHTML = "Copied!"
    }

    return (
        <section className="container-shorten">
            <ShortenLinks
                searchs={searchs}
                setSearch={setSearch}
            />
            <div className="container-link">
                {
                    searchs.length ? (
                        searchs.map((item, index) => (
                            <Link
                                item={item}
                                key={index}
                                keyProp={index}
                                _copyClipBoard={_copyClipBoard}
                            />
                        ))
                    )
                        : null
                }
            </div>
            <ShortenDetails
                cards={cards}
                title={title}
                description={description}
            />
        </section>
    )
}

export default Shorten