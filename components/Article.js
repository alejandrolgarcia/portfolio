import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { uiCloseArticle } from '../actions/ui';

export default function Article({ children }) {

    const dispatch = useDispatch();

    const handleClose = (e) => {
        dispatch( uiCloseArticle() );
    }

    return(
        <article className="active">
            { children }
            <Link href="/">
                <span className="close" onClick={ handleClose }>Close</span>
            </Link>
            <style jsx>
                {`
                    article {
                        -moz-transform: translateY(0.25rem);
                        -webkit-transform: translateY(0.25rem);
                        -ms-transform: translateY(0.25rem);
                        transform: translateY(0.25rem);
                        -moz-transition: opacity 0.325s ease-in-out, -moz-transform 0.325s ease-in-out;
                        -webkit-transition: opacity 0.325s ease-in-out, -webkit-transform 0.325s ease-in-out;
                        -ms-transition: opacity 0.325s ease-in-out, -ms-transform 0.325s ease-in-out;
                        transition: opacity 0.325s ease-in-out, transform 0.325s ease-in-out;
                        padding: 4.5rem 2.5rem 1.5rem 2.5rem;
                        position: relative;
                        width: 40rem;
                        max-width: 100%;
                        background-color: rgba(27, 31, 34, 0.85);
                        border-radius: 4px;
                        opacity: 0;
                    }

                    .active {
                        -moz-transform: translateY(0);
                        -webkit-transform: translateY(0);
                        -ms-transform: translateY(0);
                        transform: translateY(0);
                        opacity: 1;
                    }

                    .close {
                        display: block;
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 4rem;
                        height: 4rem;
                        cursor: pointer;
                        text-indent: 4rem;
                        overflow: hidden;
                        white-space: nowrap;
                    }

                    .close:before {
                        -moz-transition: background-color 0.2s ease-in-out;
                        -webkit-transition: background-color 0.2s ease-in-out;
                        -ms-transition: background-color 0.2s ease-in-out;
                        transition: background-color 0.2s ease-in-out;
                        content: '';
                        display: block;
                        position: absolute;
                        top: 0.75rem;
                        left: 0.75rem;
                        width: 2.5rem;
                        height: 2.5rem;
                        border-radius: 100%;
                        background-position: center;
                        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E");
                        background-size: 20px 20px;
                        background-repeat: no-repeat;
                    }

                    .close:hover:before {
                        background-color: rgba(255, 255, 255, 0.075);
                    }

                    .close:active:before {
                        background-color: rgba(255, 255, 255, 0.175);
                    }

                    @media screen and(max-width: 736px) {
                        article {
                            padding: 3.5rem 2rem 0.5rem 2rem;
                        }

                        .close:before {
                            top: 0.875rem;
                            left: 0.875rem;
                            width: 2.25rem;
                            height: 2.25rem;
                            background-size: 14px 14px;
                        }
                    }

                    @media screen and(max-width: 480px) {
                        article {
                            padding: 3rem 1.5rem 0.5rem 1.5rem;
                        }
                    }

                `}
            </style>
        </article>
    )
}