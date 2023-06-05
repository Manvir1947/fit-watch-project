import React from "react";

const NavBar = () => {
  const navTitles = [
    { title: "PRODUCTS", href: "#products" },
    { title: "FEATURES", href: "#features" },
    { title: "MANUAL", href: "#mannual-video" },
    { title: "ESSENTIALS", href: "#essentials" },
    { title: "PRE-ORDER NOW", href: "#pre-order" },
  ];
  const navTitlesElements = navTitles.map((product) => {
    return (
      <li>
        <a className="nav-link" href={product.href}>
          {product.title}
        </a>
      </li>
    );
  });

  return (
    <div>
      <header id="header">
        <p className="logo-name">SMART FIT</p>
        <nav id="nav-bar">
          <ul id="nav-ul">{navTitlesElements}</ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
