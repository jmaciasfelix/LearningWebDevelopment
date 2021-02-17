import React, { Fragment } from 'react'
import PagesLinks from "./PagesLinks"
import SocialLinks from './SocialLinks'
import Details from "./Details"

export default function Footer() {
    const footerLinks = {
        features: [
            "Link Shortering",
            "Branded Links",
            "Analytics"
        ],
        resources: [
            "Blog",
            "Developers",
            "Support"
        ],
        company: [
            "About",
            "Our Team",
            "Careers",
            "Contact"
        ]
    }
    const socialLinks = [
        "fab fa-facebook-square",
        "fab fa-twitter",
        "fab fa-pinterest",
        "fab fa-instagram"
    ]

    return (
        <Fragment>
            <Details />
            <footer>
                <div className="container-footer">
                    <h2>Shortly</h2>
                    {
                        Object.keys(footerLinks).map(
                            (title) => (
                                <PagesLinks
                                    key={title}
                                    title={title}
                                    list={footerLinks[title]}
                                />
                            )
                        )
                    }
                    <ul className="wrapper-social">
                        {
                            socialLinks.map(
                                (item) => (
                                    <SocialLinks
                                        key={item}
                                        names={item}
                                    />
                                )
                            )
                        }
                    </ul>
                </div>
            </footer>
        </Fragment>
    )
}
