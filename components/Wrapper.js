import { useSelector } from 'react-redux';
import Bg from './Bg';
import Footer from './Footer';
import Header from './Header';

export default function Wrapper({ children }) {

    const { articleOpen } = useSelector(state => state.ui);

    return(
        <>
            <div className="wrapper">

                <Header />

                <div className={ (articleOpen) ? `main` : `not-visible` }>
                    { children }
                </div>

                <Footer />

            </div>
            <Bg />
            <style jsx>
                {`
                    .not-visible {
                        display: none;
                    }

                    .wrapper {
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
                        -moz-justify-content: space-between;
                        -webkit-justify-content: space-between;
                        -ms-justify-content: space-between;
                        justify-content: space-between;
                        position: relative;
                        min-height: 100vh;
                        width: 100%;
                        padding: 4rem 2rem;
                        z-index: 3;
                    }

                    .wrapper:before {
                        content: '';
                        display: block;
                    }

                    .main {
                        -moz-flex-grow: 1;
                        -webkit-flex-grow: 1;
                        -ms-flex-grow: 1;
                        flex-grow: 1;
                        -moz-flex-shrink: 1;
                        -webkit-flex-shrink: 1;
                        -ms-flex-shrink: 1;
                        flex-shrink: 1;
                        display: -moz-flex;
                        display: -webkit-flex;
                        display: -ms-flex;
                        display: flex;
                        -moz-align-items: center;
                        -webkit-align-items: center;
                        -ms-align-items: center;
                        align-items: center;
                        -moz-justify-content: center;
                        -webkit-justify-content: center;
                        -ms-justify-content: center;
                        justify-content: center;
                        -moz-flex-direction: column;
                        -webkit-flex-direction: column;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        position: relative;
                        max-width: 100%;
                        z-index: 3;
                    }

                    @media screen and (max-width: 1680px) {
                        .wrapper {
                            padding: 3rem 2rem;
                        }
                    }

                    @media screen and (max-width: 736px) {
                        .wrapper {
                            padding: 2rem 1rem;
                        }
                    }

                    @media screen and (max-width: 480px) {
                        .wrapper {
                            padding: 1rem;
                        }
                    }

                `}
            </style>
        </>
    )
}