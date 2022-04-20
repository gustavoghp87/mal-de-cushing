import styles from '../css/Home.module.css'

export const Footer = () => (
    <footer className={styles.footer}>
        <p> Se aceptan donaciones en Bitcoin para pagar el dominio: </p>

        <p> 1AtHe23t5zHWPS5wSYtDXz2fFjZqB9FgHN </p>

        <a
            href={"https://www.maldecushing.com"}
            target={'_blank'}
            rel={'noopener noreferrer'}
        >
            maldecushing.com
            <span className={styles.logo}>
                {/* <Image src="/vercel.svg" alt="Logo" width={72} height={16} /> */}
            </span>
        </a>
    </footer>
)