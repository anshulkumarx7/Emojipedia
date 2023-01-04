import React from "react";

const currentDate=new Date();
const currentYear=currentDate.getFullYear();

function Footer(){
    return <footer>
        <p>Copyright &#169; {currentYear}</p>
    </footer>
}

export default Footer;