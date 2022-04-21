import styles from '../css/Home.module.css'

export const Footer = () => (
    <footer className={`${styles.footer} d-flex flex-column align-items-center`}>

        <div>
            <p> Se aceptan donaciones en Bitcoin para el pago del dominio: </p>
            <p> 1AtHe23t5zHWPS5wSYtDXz2fFjZqB9FgHN </p>
        </div>

        <br />

        <div className={'bg-danger'}>
            <a
                className={'d-inline'}
                href={"https://www.maldecushing.com"}
                target={'_blank'}
                rel={'noopener noreferrer'}
            >
                www.maldecushing.com
            </a>
                
            &nbsp; | <a href={"mailto:ghc.8786@gmail.com"} className={'d-inline'}> ghc.8786@gmail.com </a>

        </div>
    </footer>
)