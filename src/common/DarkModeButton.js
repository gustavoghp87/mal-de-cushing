export const DarkModeButton = props => {

    const { isDarkMode, setIsDarkModeHandler, isEnglish } = props
    
    return (
        <div id={"darkModeBtn"}
            className={`custom-control custom-switch ${isDarkMode ? 'bg-dark' : 'bg-light'} `}
            style={{
                position: 'fixed',
                bottom: '20px',
                left: 0,
                marginLeft: '3%',
                cursor: 'pointer',
                paddingTop: '7px',
                paddingBottom: '7px',
                paddingRight: '10px',
                padding: '7px',
                color: 'inherit',
                textDecoration: 'none',
                border: '1px solid #eaeaea',
                borderRadius: '10px',
                transition: 'color 0.15s ease, border-color 0.15s ease'
            }}
        >
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            
            <input className={'custom-control-input'}
                type={'checkbox'}
                id={"customSwitches"}
                checked={isDarkMode}
                onChange={() => {
                    window.localStorage.setItem('darkModeCushing', (!isDarkMode).toString())
                    setIsDarkModeHandler(!isDarkMode)
                }}
            />
            
            <label className={`custom-control-label ${isDarkMode ? 'text-white' : ''}`}
                htmlFor={'customSwitches'}
            >
                <b> {isEnglish && isDarkMode && 'Light Mode'} </b>
                <b> {isEnglish && !isDarkMode && 'Dark Mode'} </b>
                <b> {!isEnglish && isDarkMode && 'Modo Claro'} </b>
                <b> {!isEnglish && !isDarkMode && 'Modo Oscuro'} </b>
            </label>
            
        </div>
    )
}
