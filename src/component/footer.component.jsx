import React from 'react'
function Footer() {
    return (
        <>
            <footer className='footer' style={{ backgroundColor: "#A81432" }}>
                <div style={{textAlign:"center",margin:'auto'}}>
                    <span className="copyright text-white">  © {new Date().getFullYear()}{" "}Team Sentoo</span>
                </div>
            </footer>
            
            </>
    )
}
export default Footer;