import React from 'react'

import FirstMenu from "./FirstMenu"
import SecondMenu from "./SecondMenu"

const Menu = ({ firstList }) => (
    <div className="wrapper-menu">
        <FirstMenu
            firstList={firstList}
        />
        <SecondMenu />
    </div>
)

export default Menu