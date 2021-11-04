import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const aList=links.map((link)=>{
    return <a key={link} href={'#'+link}>{link}</a>;
  })
  return <nav>{aList}</nav>;
}

export default NavBar;
