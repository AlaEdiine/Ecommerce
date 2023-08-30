import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./Side.css";

const Side = () => {
  const location = useLocation();
  console.log(location.pathname);
           
  return (
    <div className="side">
    <div className="all-logo">
      <div className="menu-logo">
        <img className="logo" alt="Logo" src="/img/logo.png" />
        <h1 className="title">SAPHIR</h1>
      </div>
      <img className="two-bars" alt="Two bars" src="/img/twobars.png" />
    </div>
    <div className="all-menu">
      {location.pathname === "/dash" ?
        <Link to="/dash" className="link">
        <div className="menu-hover">
          <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-categoryWHITE.svg" />
          <div className="text-wrapper">Dashboard</div>
        </div>
        </Link>
        :
        <Link to="/dash" className="link">
        <div className="list-menu">
          <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-category.svg" />
          <div className="text-wrapper-2">Dashboard</div>
        </div>
        </Link>
      }
     
 
     {location.pathname === "/user" ?
      <Link to="/user" className="link">
      <div className="menu-hover">
        <img className="img" alt="Iconsax-linear" src="/img/iconsax-linear-profile2userwhite.svg" />
        <div className="text-wrapper">User</div>
      </div>
      </Link>
      :
      <Link to="/user" className="link">
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-profile2user.svg" />
        <div className="text-wrapper-2">User</div>
      </div>
      </Link>
}
      <Link to="/supplier" className="link">
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-bezier.svg" />
        <div className="text-wrapper-2">Supplier</div>
      </div>
      </Link>
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-emptywallet.svg" />
        <div className="text-wrapper-2">Customers</div>
      </div>
      <div className="list-menu">
        <img className="img" alt="Iconsax linear cake" src="/img/iconsax-linear-cake.svg" />
        <div className="text-wrapper-2">Promos</div>
      </div>
      <Link to="/inbox" className="link">
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-message.svg" />
        <div className="text-wrapper-2">Inbox</div>
      </div>
      </Link>
      <Link to="/product" className="link">
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-convertshape.svg" />
        <div className="text-wrapper-2">Product</div>
      </div>
      </Link>
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-archivebookWHITE.svg" />
        <div className="text-wrapper-2">Purchase order</div>
      </div>
      <Link to="/transaction" className="link">
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-monero.svg" />
        <div className="text-wrapper-2">Invoices</div>
      </div>
      </Link>
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-archivetick.svg" />
        <div className="text-wrapper-2">Delivery note</div>
      </div>
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-walletcheckWHITE.svg" />
        <div className="text-wrapper-2">Situation Caisse</div>
      </div>
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-moneysend.svg" />
        <div className="text-wrapper-2">Coffre</div>
      </div>
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-walletadd1.svg" />
        <div className="text-wrapper-2">Ventes</div>
      </div>
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-walletminus.svg" />
        <div className="text-wrapper-2">Achats</div>
      </div>
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-arrangehorizontalcircle.svg" />
        <div className="text-wrapper-2">Comptabilité</div>
      </div>
      <div className="list-menu">
        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-logincurve.svg" />
        <div className="text-wrapper-2">Logout</div>
      </div>
    </div>
  </div> 
   )
}

export default Side