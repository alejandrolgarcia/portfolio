import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenArticle } from '../actions/ui';

export default function Header() {

    const dispatch = useDispatch();
    
    const { articleOpen } = useSelector(state => state.ui);

    const handleArticleVisible = (e) => {
        dispatch( uiOpenArticle() );
    }

    return(
        <header className={ (!articleOpen) ? `header` : `is-article-visible not-visible` }>
            <div className="logo">
                <span className="icon fa-hand-spock"></span>
            </div>
            <div className="content">
                <div className="inner">
                    <h1>Wicho García</h1>
                    <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br /> for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/about">
                            <a onClick={ handleArticleVisible }>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/work">
                            <a onClick={ handleArticleVisible }>Work</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a onClick={ handleArticleVisible }>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <style jsx>
                {`
                    .not-visible {
                        display: none;
                    }

                    .header {
                        display: -moz-flex;
                        display: -webkit-flex;
                        display: -ms-flex;
                        display: flex;
                        -moz-flex-direction: column;
                        -webkit-flex-direction: column;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        -moz-align-items: center;
                        -webkit-align-items: center;
                        -ms-align-items: center;
                        align-items: center;
                        -moz-transition: -moz-transform 0.325s ease-in-out, -moz-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
                        -webkit-transition: -webkit-transform 0.325s ease-in-out, -webkit-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
                        -ms-transition: -ms-transform 0.325s ease-in-out, -ms-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
                        transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
                        background-image: -moz-radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%);
                        background-image: -webkit-radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%);
                        background-image: -ms-radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%);
                        background-image: radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%);
                        max-width: 100%;
                        text-align: center;
                    }

                    .header>* {
                        -moz-transition: opacity 0.325s ease-in-out;
                        -webkit-transition: opacity 0.325s ease-in-out;
                        -ms-transition: opacity 0.325s ease-in-out;
                        transition: opacity 0.325s ease-in-out;
                        position: relative;
                        margin-top: 3.5rem;
                    }

                    .header>*:before {
                        content: '';
                        display: block;
                        position: absolute;
                        top: calc(-3.5rem - 1px);
                        left: calc(50% - 1px);
                        width: 1px;
                        height: calc(3.5rem + 1px);
                        background: #ffffff;
                    }

                    .header> :first-child {
                        margin-top: 0;
                    }

                    .header> :first-child:before {
                        display: none;
                    }

                    .logo {
                        width: 5.5rem;
                        height: 5.5rem;
                        line-height: 5.5rem;
                        border: solid 1px #ffffff;
                        border-radius: 100%;
                    }

                    .logo .icon:before {
                        font-size: 2rem;
                    }

                    .icon {
                        text-decoration: none;
                        border-bottom: none;
                        position: relative;
                    }

                    .icon:before {
                        -moz-osx-font-smoothing: grayscale;
                        -webkit-font-smoothing: antialiased;
                        display: inline-block;
                        font-style: normal;
                        font-variant: normal;
                        text-rendering: auto;
                        line-height: 1;
                        text-transform: none !important;
                        font-family: 'Font Awesome 5 Free';
                        font-weight: 400;
                    }

                    .icon:before {
                        line-height: inherit;
                    }

                    .icon.solid:before {
                        font-weight: 900;
                    }

                    .content {
                        border-style: solid;
                        border-color: #ffffff;
                        border-top-width: 1px;
                        border-bottom-width: 1px;
                        max-width: 100%;
                    }

                    .inner {
                        -moz-transition: max-height 0.75s ease, padding 0.75s ease, opacity 0.325s ease-in-out;
                        -webkit-transition: max-height 0.75s ease, padding 0.75s ease, opacity 0.325s ease-in-out;
                        -ms-transition: max-height 0.75s ease, padding 0.75s ease, opacity 0.325s ease-in-out;
                        transition: max-height 0.75s ease, padding 0.75s ease, opacity 0.325s ease-in-out;
                        -moz-transition-delay: 0.25s;
                        -webkit-transition-delay: 0.25s;
                        -ms-transition-delay: 0.25s;
                        transition-delay: 0.25s;
                        padding: 3rem 2rem;
                        max-height: 40rem;
                        overflow: hidden;
                    }

                    .inner> :last-child {
                        margin-bottom: 0;
                    }

                    .content p {
                        text-transform: uppercase;
                        letter-spacing: 0.2rem;
                        font-size: 0.8rem;
                        line-height: 2;
                    }

                    nav ul {
                        display: -moz-flex;
                        display: -webkit-flex;
                        display: -ms-flex;
                        display: flex;
                        margin-bottom: 0;
                        list-style: none;
                        padding-left: 0;
                        border: solid 1px #ffffff;
                        border-radius: 4px;
                    }

                    nav ul li {
                        padding-left: 0;
                        border-left: solid 1px #ffffff;
                    }

                    nav ul li:first-child {
                        border-left: 0;
                    }

                    nav ul li a {
                        display: block;
                        min-width: 7.5rem;
                        height: 2.75rem;
                        line-height: 2.75rem;
                        padding: 0 1.25rem 0 1.45rem;
                        text-transform: uppercase;
                        letter-spacing: 0.2rem;
                        font-size: 0.8rem;
                        border-bottom: 0;
                    }

                    nav ul li a:hover {
                        background-color: rgba(255, 255, 255, 0.075);
                    }

                    nav ul li a:active {
                        background-color: rgba(255, 255, 255, 0.175);
                    }

                    nav.use-middle:after {
                        content: '';
                        display: block;
                        position: absolute;
                        top: 0;
                        left: calc(50% - 1px);
                        width: 1px;
                        height: 100%;
                        background: #ffffff;
                    }

                    nav.use-middle ul li.is-middle {
                        border-left: 0;
                    }

                    @media screen and (max-width: 980px) {
                        .content p br {
                            display: none;
                        }
                    }

                    @media screen and (max-width: 736px) {
                        .header>* {
                            margin-top: 2rem;
                        }

                        .header>*:before {
                            top: calc(-2rem - 1px);
                            height: calc(2rem + 1px);
                        }

                        .logo {
                            width: 4.75rem;
                            height: 4.75rem;
                            line-height: 4.75rem;
                        }

                        .logo .icon:before {
                            font-size: 1.75rem;
                        }
                        
                        .content .inner {
                            padding: 2.5rem 1rem;
                        }
                        
                        .content p {
                            line-height: 1.875;
                        }
                    }

                    @media screen and (max-width: 480px) {
                        .header {
                            padding: 1.5rem 0;
                        }

                        .content .inner {
                            padding: 2.5rem 0;
                        }

                        nav ul {
                            -moz-flex-direction: column;
                            -webkit-flex-direction: column;
                            -ms-flex-direction: column;
                            flex-direction: column;
                            min-width: 10rem;
                            max-width: 100%;
                        }
                        
                        nav ul li {
                            border-left: 0;
                            border-top: solid 1px #ffffff;
                        }
                        
                        nav ul li:first-child {
                            border-top: 0;
                        }
                        
                        nav ul li a {
                            height: 3rem;
                            line-height: 3rem;
                            min-width: 0;
                            width: 100%;
                        }

                        nav.use-middle:after {
                            display: none;
                        }
                    }

                    .is-article-visible {
                        -moz-transform: scale(0.95);
                        -webkit-transform: scale(0.95);
                        -ms-transform: scale(0.95);
                        transform: scale(0.95);
                        -moz-filter: blur(0.1rem);
                        -webkit-filter: blur(0.1rem);
                        -ms-filter: blur(0.1rem);
                        filter: blur(0.1rem);
                        opacity: 0;
                    }

                `}
            </style>
        </header>
    )
}