const Logo = ({type}) => {
    
    return (
        <div className="Logo">
            { type === "muted" ? <img src="./images/logo-muted.svg"/> : <img src="./images/logo.svg"/> }
        </div>
    )
}

export default Logo;