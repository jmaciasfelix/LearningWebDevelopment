import React, { Fragment } from 'react'

const ButtonMenu = ({ visible, _visibleMenu }) => {
    return (
        <Fragment>
            <input type="checkbox" id="menu" value={visible} onClick={_visibleMenu} />
            <label id="btn-menu" htmlFor="menu" >
                < img src="/images/icon_menu.svg" alt="Menu" />
            </label>
        </Fragment>
    )
}

export default ButtonMenu
