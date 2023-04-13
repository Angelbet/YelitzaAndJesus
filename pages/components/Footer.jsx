import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import style from '../../styles/Home.module.css'

// Images
import logo from '../../public/images/logo.svg'
import Insta from '../../public/images/Insta.svg'
import FB from '../../public/images/FB.svg'


export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.footer_top_holder}>
                    <Link
                        href="/"
                        className={`${style.footer_logo_holder} ${style.w_inline_block} ${style.w__current}`}
                    >
                        <Image
                            src={logo}
                            loading="lazy"
                            alt=""
                            className={style.footer_logo}
                        />
                    </Link>
                    <div className={style.footer_link_holder}>
                        <Link href="/" className={style.footer_link}>
                            Home
                        </Link>
                        <Link href="/Portfolio" className={style.footer_link}>
                            Portafolio
                        </Link>
                        <Link href="/About" className={style.footer_link}>
                            Nuestra Historia
                        </Link>
                    </div>
                </div>
                <div className={style.footer_copyright_section_holder}>
                    <div className={style.footer_copyright_section}>
                        <div className={style.footer_copyright_text_holder}>
                        </div>
                        <div
                            id={style["w-node-_91250ff7-389c-eb5e-d4ae-7ae07af74cf4-0a144c54"]}
                            className={style.footer_social_media_icon_holder}
                        >
                            <Link
                                href="https://www.instagram.com/wedoflow/"
                                target="_blank"
                                className={`${style.footer_social_media_icon_container} ${style.w_inline_block}`}
                            >
                                <Image
                                    src={Insta}
                                    loading="lazy"
                                    alt=""
                                    className={style.footer_social_media_icon}
                                />
                            </Link>
                            <Link
                                href="https://www.facebook.com/wedoflow/"
                                target="_blank"
                                className={`${style.footer_social_media_icon_container} ${style.w_inline_block}`}
                            >
                                <Image
                                    src={FB}
                                    loading="lazy"
                                    alt=""
                                    className={style.footer_social_media_icon}
                                />
                            </Link>
                        </div>
                        <div className={style.footer_copyright_text_holder}>
                            <div className={style.footer_text}>
                                 By&nbsp;
                                <Link
                                    href="https://webflow.com?ref=wedoflow.com"
                                    target="_blank"
                                    className={style.footer_link}
                                >
                                    An
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
