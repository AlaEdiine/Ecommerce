// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = () => {
//     const [toggle , settoggle] = useState(false)
//     const Toggle = () =>{
//        settoggle(!toggle)
//      }
//   return (
//     <div className={toggle? "minWidth" : "sdebar" }>
//     <div className="header-logo"  onClick={Toggle}>
//       <img className="logo" alt="Logo" src="/img/logo.png" />
//       <h1 className="title">SAPHIR</h1>
//     </div>
//     <img className="bar" alt="Bar" src="/img/bar.png" />
//     <div className="menus">
//     <Link to="/dash" className="link">
//       <div className="menu">
//         <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-category.svg" />
//         <div className="text-wrapper">Dashboard</div>
//       </div>
//       </Link>
//       <Link to="/user" className="link">
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-profile2user.svg" />
//         <div className="text-wrapper">User</div>
//       </div>
//       </Link>
//       <Link to="/seller" className="link">
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-profile2user.svg" />
//         <div className="text-wrapper">Seller</div>
//       </div>
//       </Link>
//       <Link to="/supplier" className="link">
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-bezier.svg" />
//         <div className="text-wrapper">Supplier</div>
//       </div>
//       </Link>
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-emptywallet.svg" />
//         <div className="text-wrapper">Customers</div>
//       </div>
//       <Link to="/promo" className="link">
//       <div className="menu">
//         <img className="img" alt="Iconsax linear cake" src="/img/iconsax-linear-cake.svg" />
//         <div className="text-wrapper">Promos</div>
//       </div>
//       </Link>
//       <Link to="/msg" className="link">
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-message.svg" />
//         <div className="text-wrapper">Message</div>
//       </div>
//       </Link>
//       <Link to="/product" className="link">
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-convertshape.svg" />
//         <div className="text-wrapper">Product</div>
//       </div>
//       </Link>
//       <Link to="/addpurchase" className="link">
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-archivebook.svg" />
//         <div className="text-wrapper">Purchase order</div>
//       </div>
//       </Link>
//       <Link to="/invoice" className="link">
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-monero.svg" />
//         <div className="text-wrapper">Invoices</div>
//       </div>
//       </Link>
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-archivetick.svg" />
//         <div className="text-wrapper">Delivery note</div>
//       </div>
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-walletcheck.svg" />
//         <div className="text-wrapper">Situation Caisse</div>
//       </div>
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-moneysend.svg" />
//         <div className="text-wrapper">Coffre</div>
//       </div>
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-walletadd1.svg" />
//         <div className="text-wrapper">Ventes</div>
//       </div>
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-walletminus.svg" />
//         <div className="text-wrapper">Achats</div>
//       </div>
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-arrangehorizontalcircle.svg" />
//         <div className="text-wrapper">Comptabilité</div>
//       </div>
//       <div className="menu">
//         <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-logincurve.svg" />
//         <div className="text-wrapper">Logout</div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Sidebar