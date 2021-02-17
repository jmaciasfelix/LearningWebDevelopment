import React, { useState, Fragment } from 'react'
import Menu from "./Menu"
import ButtonMenu from "./ButtonMenu"
import Landing from "./Landing"

const Header = () => {
    const [visible, setVisible] = useState(false)

    const _visibleMenu = () => {
        setVisible(!visible)
    }

    const title = "More than just shorter links"
    const description =
        "Build your brand’s recognition and get detailed insights on how your links are performing."
    const textBtn = "Get Started"

    const firstList = [
        "Features",
        "Pircing",
        "Resources",
    ]

    return (
        <Fragment>
            <header>
                <nav className="bar-nav">
                    <img src="/images/logo.svg" alt="Logo Shortly" />
                    <ButtonMenu
                        visible={visible}
                        _visibleMenu={_visibleMenu}
                    />
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="./">Features</a>
                            </li>
                            <li>
                                <a href="./">Pricing</a>
                            </li>
                            <li>
                                <a href="./">Resources</a>
                            </li>
                        </ul>
                        <ul>
                            <li><a href="./">Login</a></li>
                            <li><button className="btn btn-color-primary btn-styles-primary">Sign Up</button></li>
                        </ul>
                    </div>
                </nav>
                {visible ? <Menu firstList={firstList} /> : null}
            </header>
            <Landing
                title={title}
                description={description}
                textBtn={textBtn}
            />
        </Fragment>
    )
}

export default Header
