import { useSelector } from 'react-redux';

export default function Footer() {

    const { articleOpen } = useSelector(state => state.ui);

    return(
        <footer className={ (!articleOpen) ? `footer` : `not-visible is-article-visible` }>
            <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
            <style jsx>
                {`
                    .footer {
                        -moz-transition: -moz-transform 0.325s ease-in-out, -moz-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
                        -webkit-transition: -webkit-transform 0.325s ease-in-out, -webkit-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
                        -ms-transition: -ms-transform 0.325s ease-in-out, -ms-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
                        transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
                        width: 100%;
                        max-width: 100%;
                        margin-top: 2rem;
                        text-align: center;
                    }

                    .copyright {
                        letter-spacing: 0.2rem;
                        font-size: 0.6rem;
                        opacity: 0.75;
                        margin-bottom: 0;
                        text-transform: uppercase;
                    }

                    .not-visible {
                        display: none;
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
        </footer>
    )
}