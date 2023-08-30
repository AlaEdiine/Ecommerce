import React, { useState } from "react";
import "./style.css";
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

 const Desktop = () => {
  const [toggle , settoggle] = useState(false)
  // const Toggle = () =>{
  //   settoggle(!toggle)
  // }
  return (
    <div className="desktop">
      <div className="frame">
        <Sidebar></Sidebar>
        <div className="frame-2">
          <div className="frame-3">
            <header className="header">
              <div className="guidetitle">
                <div className="guide">
                  <span className="span">Application</span>
                  <span className="text-wrapper-2">&nbsp;</span>
                  <span className="text-wrapper-3">&gt; </span>
                  <span className="text-wrapper-4">Dashboard</span>
                </div>
              </div>
              <div className="headerprofile">
                <div className="search">
                  <img className="iconsax-linear-2" alt="Iconsax linear" src="/img/iconsax-linear-searchnormal1.svg" />
                  <img className="linsearch" alt="Linsearch" src="/img/linsearch.svg" />
                  <div className="titlesearch">Search&nbsp;&nbsp;...</div>
                </div>
                <div className="badgeprofile">
                  <div className="nameprofile">
                    <div className="name">
                      <span className="text-wrapper-2">Hi, </span>
                      <span className="text-wrapper-5">Alloui</span>
                    </div>
                    <div className="title-2">Your account is Admin</div>
                  </div>
                  <div className="photos">
                    <img className="photoprofile" alt="Photoprofile" src="/img/photoprofile.png" />
                    <div className="icone-connect">
                      <div className="vert" />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="frame-4">
              <div className="frame-5">
                <div className="boxone">
                  <div className="frame-6">
                    <div className="text-wrapper-6">Hi Angelina,welcome back!</div>
                    <img
                      className="iconsax-broken-sound"
                      alt="Iconsax broken sound"
                      src="/img/iconsax-broken-sound.svg"
                    />
                  </div>
                  <div className="frame-7">
                    <div className="text-wrapper-7">My Total Assets</div>
                    <div className="text-wrapper-8">$ 142 402.210</div>
                  </div>
                  <div className="frame-8">
                    <div className="frame-9">
                      <div className="text-wrapper-9">23%</div>
                      <div className="text-wrapper-10">&gt;</div>
                    </div>
                    <p className="p">Last updated 1 hour ago</p>
                  </div>
                  <div className="frame-10">
                    <div className="text-wrapper-11">Total net margin</div>
                    <div className="text-wrapper-12">$ 109 000.210</div>
                  </div>
                  <div className="btn">
                    <div className="text-wrapper-13">Download Reports</div>
                    <img className="iconsax-linear-3" alt="Iconsax linear" src="/img/iconsax-linear-arrowdown2.svg" />
                  </div>
                </div>
                <div className="STATS">
                  <div className="overlap-group">
                    <img className="iconsax-linear-4" alt="Iconsax linear" src="/img/iconsax-linear-chart1.svg" />
                    <div className="TITLE">Stats Monthly</div>
                    <div className="DATE">Month : Octobre/2023</div>
                    <div className="PRICE">$ 34 778.900</div>
                  </div>
                </div>
              </div>
              <div className="frame-11">
                <div className="boxtwo">
                  <div className="frame-12">
                    <div className="rectangle" />
                    <div className="frame-13">
                      <div className="div-wrapper">
                        <div className="text-wrapper-14">$ 47 578.77</div>
                      </div>
                      <div className="frame-14">
                        <div className="text-wrapper-15">Yearly budget</div>
                        <div className="rectangle-2" />
                      </div>
                    </div>
                  </div>
                  <p className="you-have-spent-about">
                    You have spent about 35% of your <br />
                    annual budget.
                  </p>
                  <div className="rectangle-3" />
                </div>
                <div className="STATS">
                  <div className="overlap-group">
                    <div className="TITLE">Benefice</div>
                    <div className="DATE">Month : Octobre/2023</div>
                    <div className="PRICE">$ 4 565.800</div>
                    <img className="frame-15" alt="Frame" src="/img/frame-36.svg" />
                  </div>
                </div>
              </div>
              <div className="frame-16">
                <div className="frame-17">
                  <div className="frame-18">
                    <div className={toggle? "frame-20" : "frame-19" }>
                      <div className="text-wrapper-16">Active</div>
                    </div>
                    <div className={toggle? "frame-19" : "frame-20" }>
                      <div className="text-wrapper-16">Inactive</div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-17">2.501</div>
                      <div className="text-wrapper-18">Active Users</div>
                      <div className="ellipse" />
                      <img className="vector" alt="Vector" src="/img/vector-4.svg" />
                    </div>
                  </div>
                  <div className="frame-21">
                    <div className="frame-22">
                      <div className="rectangle-4" />
                      <p className="text-wrapper-19">17 - 30 Years old</p>
                      <div className="text-wrapper-19">62%</div>
                    </div>
                    <div className="frame-23">
                      <div className="rectangle-5" />
                      <p className="text-wrapper-19">31 - 50 Years old</p>
                      <div className="text-wrapper-19">33%</div>
                    </div>
                    <div className="frame-24">
                      <div className="rectangle-6" />
                      <p className="text-wrapper-19">&gt; =&nbsp;&nbsp;50 Years old</p>
                      <div className="text-wrapper-20">10%</div>
                    </div>
                  </div>
                </div>
                <div className="STATS">
                  <div className="overlap-group">
                    <div className="TITLE">CA - Monthly</div>
                    <div className="DATE">Month : Octobre/2023</div>
                    <div className="PRICE">$ 48 565.800</div>
                    <img className="iconsax-linear-5" alt="Iconsax linear" src="/img/iconsax-linear-dollarsquare.svg" />
                  </div>
                </div>
              </div>
              <div className="group-2">
                <div className="frame-25">
                  <div className="text-wrapper-21">AVAILABLE FUNDS</div>
                  <div className="text-wrapper-22">$ 234 789.098</div>
                </div>
                <div className="report">
                  <div className="title-3">Summary Report</div>
                  <div className="choix">
                    <div className="overlap-group-3">
                      <div className="wekly">
                        <div className="text-wrapper-23">Weekly</div>
                      </div>
                      <div className="monthly">
                        <div className="text-wrapper-24">Monthly</div>
                      </div>
                      <div className="border" />
                    </div>
                  </div>
                  <div className="listreport">
                    <div className="titleone">
                      <div className="titlereport">Unpaid Loan</div>
                      <div className="subtitle">$155.430.000</div>
                      <div className="text-wrapper-25">&gt;</div>
                      <div className="text-wrapper-26">2%</div>
                    </div>
                    <div className="titleone-2">
                      <div className="titlereport">Active Funding Partner</div>
                      <div className="subtitle">52 Partner</div>
                      <div className="text-wrapper-27">&gt;</div>
                      <div className="text-wrapper-28">49%</div>
                    </div>
                    <div className="titleone-2">
                      <div className="titlereport">Paid Installment</div>
                      <div className="subtitle">$75.430.000</div>
                      <div className="text-wrapper-27">&gt;</div>
                      <div className="text-wrapper-28">36%</div>
                    </div>
                    <div className="titleone-3">
                      <div className="titlereport">Success Payment</div>
                      <div className="subtitle">100%</div>
                    </div>
                    <div className="titleone-4">
                      <div className="titlereport">Waiting For Disbursement</div>
                      <div className="subtitle">0</div>
                    </div>
                    <div className="titleone-5">
                      <div className="titlereport">Unpaid Loan</div>
                      <div className="subtitle">$155.430.000</div>
                      <div className="text-wrapper-29">&gt;</div>
                      <div className="text-wrapper-26">36%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-26">
            <div className="group-3">
              <div className="text-wrapper-30">Official Store</div>
              <div className="rectangle-7" />
            </div>
            <div className="weeklysellers">
              <div className="text-wrapper-31">Weekly Best Sellers</div>
              <div className="group-4">
                <div className="frame-27">
                  <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-3-3.png" />
                  <div className="group-5">
                    <div className="text-wrapper-32">Julia Alloui</div>
                    <div className="text-wrapper-33">Design UI/UX</div>
                  </div>
                </div>
                <div className="frame-28">
                  <div className="text-wrapper-34">137 SALES</div>
                </div>
              </div>
              <div className="group-6">
                <div className="frame-27">
                  <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-3-3.png" />
                  <div className="group-5">
                    <div className="text-wrapper-32">Julia Alloui</div>
                    <div className="text-wrapper-33">Design UI/UX</div>
                  </div>
                </div>
                <div className="frame-28">
                  <div className="text-wrapper-34">137 SALES</div>
                </div>
              </div>
              <div className="group-7">
                <div className="frame-29">
                  <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-3-3.png" />
                  <div className="group-5">
                    <div className="text-wrapper-32">Julia Alloui</div>
                    <div className="text-wrapper-33">Design UI/UX</div>
                  </div>
                </div>
                <div className="frame-30">
                  <div className="text-wrapper-34">137 SALES</div>
                </div>
              </div>
              <div className="group-8">
                <div className="frame-27">
                  <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-3-3.png" />
                  <div className="group-5">
                    <div className="text-wrapper-32">Julia Alloui</div>
                    <div className="text-wrapper-33">Design UI/UX</div>
                  </div>
                </div>
                <div className="frame-28">
                  <div className="text-wrapper-34">137 SALES</div>
                </div>
              </div>
            </div>
          </div>
          <div className="tableproduct">
            <div className="text-wrapper-35">Weekly Top Products</div>
            <div className="frame-31">
              <div className="tableheader">
                <div className="text-wrapper-36">IMAGES</div>
                <div className="overlap-group-4">
                  <div className="text-wrapper-37">PRODUCT NAME</div>
                  <div className="text-wrapper-38">STOCK</div>
                </div>
                <div className="text-wrapper-39">STATUS</div>
                <div className="text-wrapper-40">ACTIONS</div>
              </div>
              <div className="bodytable">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-5">
                    <div className="ellipse-wrapper">
                      <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-4-3.png" />
                    </div>
                    <div className="overlap-group-6">
                      <div className="text-wrapper-41">Lait Délice 1L</div>
                      <div className="text-wrapper-42">Liquide</div>
                      <div className="text-wrapper-43">50</div>
                    </div>
                    <img className="line" alt="Line" src="/img/line-3-3.svg" />
                    <div className="frame-32">
                      <img className="img-2" alt="Iconsax linear bag" src="/img/iconsax-linear-bag.svg" />
                      <div className="text-wrapper-44">Delete</div>
                    </div>
                    <div className="frame-33">
                      <img className="img-2" alt="Iconsax linear" src="/img/iconsax-linear-copysuccess-3.svg" />
                      <div className="text-wrapper-45">Active</div>
                    </div>
                    <div className="frame-34">
                      <img className="img-2" alt="Iconsax linear edit" src="/img/iconsax-linear-edit-3.svg" />
                      <div className="text-wrapper-46">Edit</div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-5">
                    <div className="ellipse-wrapper">
                      <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-4-3.png" />
                    </div>
                    <div className="overlap-group-6">
                      <div className="text-wrapper-41">Lait Délice 1L</div>
                      <div className="text-wrapper-42">Liquide</div>
                      <div className="text-wrapper-43">50</div>
                    </div>
                    <img className="line" alt="Line" src="/img/line-3-3.svg" />
                    <div className="frame-32">
                      <img className="img-2" alt="Iconsax linear bag" src="/img/iconsax-linear-bag-1.svg" />
                      <div className="text-wrapper-44">Delete</div>
                    </div>
                    <div className="frame-33">
                      <img className="img-2" alt="Iconsax linear" src="/img/iconsax-linear-copysuccess-3.svg" />
                      <div className="text-wrapper-45">Active</div>
                    </div>
                    <div className="frame-34">
                      <img className="img-2" alt="Iconsax linear edit" src="/img/iconsax-linear-edit-3.svg" />
                      <div className="text-wrapper-46">Edit</div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-5">
                    <div className="ellipse-wrapper">
                      <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-4-3.png" />
                    </div>
                    <div className="overlap-group-6">
                      <div className="text-wrapper-41">Lait Délice 1L</div>
                      <div className="text-wrapper-42">Liquide</div>
                      <div className="text-wrapper-43">50</div>
                    </div>
                    <img className="line" alt="Line" src="/img/line-3-3.svg" />
                    <div className="frame-32">
                      <img className="img-2" alt="Iconsax linear bag" src="/img/iconsax-linear-bag-2.svg" />
                      <div className="text-wrapper-44">Delete</div>
                    </div>
                    <div className="frame-33">
                      <img className="img-2" alt="Iconsax linear" src="/img/iconsax-linear-copysuccess-3.svg" />
                      <div className="text-wrapper-45">Active</div>
                    </div>
                    <div className="frame-34">
                      <img className="img-2" alt="Iconsax linear edit" src="/img/iconsax-linear-edit-3.svg" />
                      <div className="text-wrapper-46">Edit</div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-5">
                    <div className="ellipse-wrapper">
                      <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-4-3.png" />
                    </div>
                    <div className="overlap-group-6">
                      <div className="text-wrapper-41">Lait Délice 1L</div>
                      <div className="text-wrapper-42">Liquide</div>
                      <div className="text-wrapper-43">50</div>
                    </div>
                    <img className="line" alt="Line" src="/img/line-3-3.svg" />
                    <div className="frame-32">
                      <img className="img-2" alt="Iconsax linear bag" src="/img/iconsax-linear-bag-3.svg" />
                      <div className="text-wrapper-44">Delete</div>
                    </div>
                    <div className="frame-33">
                      <img className="img-2" alt="Iconsax linear" src="/img/iconsax-linear-copysuccess-3.svg" />
                      <div className="text-wrapper-45">Active</div>
                    </div>
                    <div className="frame-34">
                      <img className="img-2" alt="Iconsax linear edit" src="/img/iconsax-linear-edit-3.svg" />
                      <div className="text-wrapper-46">Edit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-35">
            <div className="activity">
              <div className="group-9">
                <div className="overlap-group-7">
                  <div className="text-wrapper-47">07:00 PM</div>
                  <div className="text-wrapper-48">Has joined the team</div>
                  <div className="text-wrapper-49">Djossef Alloui</div>
                </div>
                <div className="overlap">
                  <div className="rectangle-wrapper">
                    <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-21.png" />
                  </div>
                  <img className="line-2" alt="Line" src="/img/line-4.svg" />
                </div>
              </div>
              <div className="group-10">
                <div className="overlap-2">
                  <div className="rectangle-9" />
                  <div className="frame-36">
                    <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-23.png" />
                    <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-24.png" />
                    <img className="rectangle-11" alt="Rectangle" src="/img/rectangle-25.png" />
                  </div>
                  <img className="line-3" alt="Line" src="/img/line-4-1.svg" />
                  <div className="text-wrapper-50">07:00 PM</div>
                  <div className="text-wrapper-51">Added 3 new photos</div>
                  <div className="text-wrapper-52">Julia Alloui</div>
                </div>
                <div className="img-wrapper">
                  <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-21-1.png" />
                </div>
              </div>
              <div className="group-11">
                <div className="overlap-3">
                  <div className="text-wrapper-47">13:25 PM</div>
                  <p className="has-changed-sony">
                    <span className="text-wrapper-53">Has changed </span>
                    <a href="http://localhost:3000/" rel="noopener noreferrer" target="_blank">
                      <span className="text-wrapper-54">Sony A7 III</span>
                    </a>
                    <span className="text-wrapper-53">
                      {" "}
                      price
                      <br /> and description
                    </span>
                  </p>
                  <div className="text-wrapper-55">Ala eddine Alloui</div>
                </div>
                <div className="img-wrapper">
                  <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-21-2.png" />
                </div>
                <img className="line-2" alt="Line" src="/img/line-4-2.svg" />
              </div>
              <div className="text-wrapper-56">Recent Activities</div>
              <div className="text-wrapper-57">12 Novembre</div>
              <div className="text-wrapper-58">View More +</div>
            </div>
            <div className="frame-37">
              <div className="text-wrapper-59">Transactions</div>
              <div className="group-12">
                <div className="group-13">
                  <div className="overlap-group-8">
                    <div className="frame-38">
                      <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-3-4.png" />
                    </div>
                    <div className="text-wrapper-60">Julia Alloui</div>
                    <div className="text-wrapper-61">10 April 2022</div>
                    <div className="text-wrapper-62">+$30</div>
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap-group-8">
                    <div className="frame-39">
                      <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-3-5.png" />
                    </div>
                    <div className="text-wrapper-63">Safa Alloui</div>
                    <div className="text-wrapper-61">10 April 2022</div>
                    <div className="text-wrapper-64">+$78</div>
                  </div>
                </div>
                <div className="group-14">
                  <div className="overlap-group-8">
                    <div className="frame-39">
                      <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-3-6.png" />
                    </div>
                    <div className="text-wrapper-63">Djossef Alloui</div>
                    <div className="text-wrapper-65">10 April 2022</div>
                    <div className="text-wrapper-66">+$35</div>
                  </div>
                </div>
                <div className="group-15">
                  <div className="overlap-group-8">
                    <div className="frame-39">
                      <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-3-7.png" />
                    </div>
                    <div className="text-wrapper-60">Esya Alloui</div>
                    <div className="text-wrapper-65">10 April 2022</div>
                    <div className="text-wrapper-67">+$48</div>
                  </div>
                </div>
                <div className="group-16">
                  <div className="overlap-group-8">
                    <div className="frame-39">
                      <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-3-8.png" />
                    </div>
                    <div className="text-wrapper-60">Esya Alloui</div>
                    <div className="text-wrapper-65">10 April 2022</div>
                    <div className="text-wrapper-67">+$48</div>
                  </div>
                </div>
                <div className="text-wrapper-68">View More +</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop

