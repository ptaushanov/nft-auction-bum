function Logo({type}) {
    const styles = { width: "6rem", padding: "10px 0" };

    return (
        <div className="Logo">
            { type === "muted" ?
                <img style={styles} src="./images/logo-muted.svg"/> :
                <img style={styles} src="./images/logo.svg"/> 
            }
        </div>
    )
}

export default Logo;