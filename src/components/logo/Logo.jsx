function Logo({type}) {
    const styles = { width: "100px", padding: "10px 0" };

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