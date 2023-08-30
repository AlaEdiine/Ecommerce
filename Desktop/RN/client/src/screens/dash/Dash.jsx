import React, { useState } from "react";
import Header from "../../components/Header";
import Side from "../../components/Side";
import "./Dash.css";

 const Dash = () => {
  const [toggle , settoggle] = useState(false)
  const Toggle = () =>{
    settoggle(!toggle)
  }
  return (
    <div className="dashboad">
      <Side></Side>
      <div className="container">
        <div className="sub-design">
          <div className="rectangle" />
        </div>
        <div className="main">
          <Header></Header>
          <div className="box-header">
            <div className="block">
              <div className="boxone">
                <div className="msg-1">
                  <div className="title-3">Hi Angelina,welcome back!</div>
                  <img
                    className="iconsax-broken-sound"
                    alt="Iconsax broken sound"
                    src="/img/iconsax-broken-sound.svg"
                  />
                </div>
                <div className="msg-2">
                  <div className="text-wrapper-6">My Total Assets</div>
                  <div className="text-wrapper-7">$ 142 402.210</div>
                </div>
                <div className="msg-3">
                  <div className="frame">
                    <div className="text-wrapper-8">23%</div>
                    <div className="text-wrapper-9">&gt;</div>
                  </div>
                  <p className="p">Last updated 1 hour ago</p>
                </div>
                <div className="msg-4">
                  <div className="text-wrapper-10">Total net margin</div>
                  <div className="text-wrapper-11">$ 109 000.210</div>
                </div>
                <div className="btn">
                  <div className="text-wrapper-12">Download Reports</div>
                  <img className="iconsax-linear-2" alt="Iconsax linear" src="/img/iconsax-linear-arrowdown2.svg" />
                </div>
              </div>
              <div className="STATS">
                <div className="overlap-group">
                  <img className="iconsax-linear-3" alt="Iconsax linear" src="/img/iconsax-linear-chart1.svg" />
                  <div className="TITLE">Stats Monthly</div>
                  <div className="DATE">Month : Octobre/2023</div>
                  <div className="PRICE">$ 34 778.900</div>
                </div>
              </div>
            </div>
            <div className="block-2">
              <div className="boxtwo">
                <div className="msg-5">
                  <div className="rectangle-2" />
                  <div className="frame-2">
                    <div className="div-wrapper">
                      <div className="text-wrapper-13">$ 47 578.77</div>
                    </div>
                    <div className="frame-3">
                      <div className="text-wrapper-14">Yearly budget</div>
                      <div className="rectangle-3" />
                    </div>
                  </div>
                </div>
                <p className="you-have-spent-about">
                  You have spent about 35% of your <br />
                  annual budget.
                </p>
                <div className="rectangle-4" />
              </div>
              <div className="STATS">
                <div className="overlap-group-2">
                  <div className="TITLE">Benefice</div>
                  <div className="DATE">Month : Octobre/2023</div>
                  <div className="PRICE">$ 4 565.800</div>
                  <img className="frame-4" alt="Frame" src="/img/frame-36.svg" />
                </div>
              </div>
            </div>
            <div className="block-3">
              <div className="boxthree">
                <div className="msg-6">
                  <div className="active">
                    <div className="text-wrapper-15">Active</div>
                  </div>
                  <div className="inactive">
                    <div className="text-wrapper-15">Inactive</div>
                  </div>
                </div>
                <div className="statistique">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-16">2.501</div>
                    <div className="text-wrapper-17">Active Users</div>
                    <div className="ellipse" />
                    <img className="vector" alt="Vector" src="/img/vector-4.svg" />
                  </div>
                </div>
                <div className="titlemsg">
                  <div className="frame-5">
                    <div className="rectangle-5" />
                    <p className="text-wrapper-18">17 - 30 Years old</p>
                    <div className="text-wrapper-18">62%</div>
                  </div>
                  <div className="frame-6">
                    <div className="rectangle-6" />
                    <p className="text-wrapper-18">31 - 50 Years old</p>
                    <div className="text-wrapper-18">33%</div>
                  </div>
                  <div className="frame-7">
                    <div className="rectangle-7" />
                    <p className="text-wrapper-18">&gt; =&nbsp;&nbsp;50 Years old</p>
                    <div className="text-wrapper-19">10%</div>
                  </div>
                </div>
              </div>
              <div className="STATS">
                <div className="overlap-group-2">
                  <div className="TITLE">CA - Monthly</div>
                  <div className="DATE">Month : Octobre/2023</div>
                  <div className="PRICE">$ 48 565.800</div>
                  <img className="iconsax-linear-4" alt="Iconsax linear" src="/img/iconsax-linear-dollarsquare.svg" />
                </div>
              </div>
            </div>
            <div className="allreport">
              <div className="funds">
                <div className="text-wrapper-20">AVAILABLE FUNDS</div>
                <div className="text-wrapper-21">$ 234 789.098</div>
              </div>
              <div className="report">
                <div className="title-4">Summary Report</div>
                <div className="choix">
                  <div className="overlap-group-4">
                    <div className="wekly">
                      <div className="text-wrapper-22">Weekly</div>
                    </div>
                    <div className="monthly">
                      <div className="text-wrapper-23">Monthly</div>
                    </div>
                    <div className="border" />
                  </div>
                </div>
                <div className="listreport">
                  <div className="titleone">
                    <div className="titlereport">Unpaid Loan</div>
                    <div className="subtitle">$155.430.000</div>
                    <div className="text-wrapper-24">&gt;</div>
                    <div className="text-wrapper-25">2%</div>
                  </div>
                  <div className="titleone-2">
                    <div className="titlereport">Active Funding Partner</div>
                    <div className="subtitle">52 Partner</div>
                    <div className="text-wrapper-26">&gt;</div>
                    <div className="text-wrapper-27">49%</div>
                  </div>
                  <div className="titleone-2">
                    <div className="titlereport">Paid Installment</div>
                    <div className="subtitle">$75.430.000</div>
                    <div className="text-wrapper-26">&gt;</div>
                    <div className="text-wrapper-27">36%</div>
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
                    <div className="text-wrapper-28">&gt;</div>
                    <div className="text-wrapper-25">36%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boxsubheader">
            <div className="local">
              <div className="text-wrapper-29">Official Store</div>
              <div className="rectangle-8" />
            </div>
            <div className="weeklysellers">
              <div className="text-wrapper-30">Weekly Best Sellers</div>
              <div className="styleweekly">
                <div className="frame-8">
                  <div className="ellipse-wrapper">
                    <img className="img-2" alt="Ellipse" src="/img/ellipse-3-4.png" />
                  </div>
                  <div className="group">
                    <div className="text-wrapper-31">Julia Alloui</div>
                    <div className="text-wrapper-32">Design UI/UX</div>
                  </div>
                </div>
                <div className="frame-9">
                  <div className="text-wrapper-33">137 SALES</div>
                </div>
              </div>
              <div className="styleweekly-2">
                <div className="frame-8">
                  <div className="ellipse-wrapper">
                    <img className="img-2" alt="Ellipse" src="/img/ellipse-3-4.png" />
                  </div>
                  <div className="group">
                    <div className="text-wrapper-31">Julia Alloui</div>
                    <div className="text-wrapper-32">Design UI/UX</div>
                  </div>
                </div>
                <div className="frame-9">
                  <div className="text-wrapper-33">137 SALES</div>
                </div>
              </div>
              <div className="styleweekly-3">
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <img className="img-2" alt="Ellipse" src="/img/ellipse-3-4.png" />
                  </div>
                  <div className="group">
                    <div className="text-wrapper-31">Julia Alloui</div>
                    <div className="text-wrapper-32">Design UI/UX</div>
                  </div>
                </div>
                <div className="frame-9">
                  <div className="text-wrapper-33">137 SALES</div>
                </div>
              </div>
              <div className="styleweekly-4">
                <div className="frame-8">
                  <div className="ellipse-wrapper">
                    <img className="img-2" alt="Ellipse" src="/img/ellipse-3-4.png" />
                  </div>
                  <div className="group">
                    <div className="text-wrapper-31">Julia Alloui</div>
                    <div className="text-wrapper-32">Design UI/UX</div>
                  </div>
                </div>
                <div className="frame-9">
                  <div className="text-wrapper-33">137 SALES</div>
                </div>
              </div>
            </div>
          </div>
          <div className="tableproduct">
            <div className="text-wrapper-34">Weekly Top Products</div>
            <div className="frame-11">
              <div className="tableheader">
                <div className="text-wrapper-35">IMAGES</div>
                <div className="overlap-group-5">
                  <div className="text-wrapper-36">PRODUCT NAME</div>
                  <div className="text-wrapper-37">STOCK</div>
                </div>
                <div className="text-wrapper-38">STATUS</div>
                <div className="text-wrapper-39">ACTIONS</div>
              </div>
              <div className="bodytable">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-6">
                    <div className="rectangle-wrapper">
                      <img className="img-2" alt="Rectangle" src="/img/ellipse-3.png" />
                    </div>
                    <div className="overlap-group-7">
                      <div className="text-wrapper-40">Lait Délice 1L</div>
                      <div className="text-wrapper-41">Liquide</div>
                      <div className="text-wrapper-42">50</div>
                    </div>
                    <img className="line" alt="Line" src="/img/line-3.svg" />
                    <div className="frame-12">
                      <img className="img-3" alt="Iconsax linear bag" src="/img/iconsax-linear-bag.svg" />
                      <div className="text-wrapper-43">Delete</div>
                    </div>
                    <div className="frame-13">
                      <img className="img-3" alt="Iconsax linear" src="/img/iconsax-linear-copysuccess-1.svg" />
                      <div className="text-wrapper-44">Active</div>
                    </div>
                    <div className="frame-14">
                      <img className="img-3" alt="Iconsax linear edit" src="/img/iconsax-linear-edit-3.svg" />
                      <div className="text-wrapper-45">Edit</div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap">
                    <div className="rectangle-wrapper">
                      <img className="img-2" alt="Rectangle" src="/img/rectangle-48.png" />
                    </div>
                    <div className="overlap-group-7">
                      <div className="text-wrapper-46">Lait Délice 1L</div>
                      <div className="text-wrapper-47">Liquide</div>
                      <div className="text-wrapper-48">50</div>
                    </div>
                    <img className="line" alt="Line" src="/img/line-3.svg" />
                    <div className="frame-12">
                      <img className="img-3" alt="Iconsax linear bag" src="/img/iconsax-linear-bag.svg" />
                      <div className="text-wrapper-49">Delete</div>
                    </div>
                    <div className="frame-13">
                      <img className="img-3" alt="Iconsax linear" src="/img/iconsax-linear-copysuccess.svg" />
                      <div className="text-wrapper-44">Active</div>
                    </div>
                    <div className="frame-14">
                      <img className="img-3" alt="Iconsax linear edit" src="/img/iconsax-linear-edit-2.svg" />
                      <div className="text-wrapper-50">Edit</div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-6">
                    <div className="rectangle-wrapper">
                      <img className="img-2" alt="Rectangle" src="/img/rectangle-48.png" />
                    </div>
                    <div className="overlap-group-7">
                      <div className="text-wrapper-40">Lait Délice 1L</div>
                      <div className="text-wrapper-41">Liquide</div>
                      <div className="text-wrapper-42">50</div>
                    </div>
                    <img className="line" alt="Line" src="/img/line-3.svg" />
                    <div className="frame-12">
                      <img className="img-3" alt="Iconsax linear bag" src="/img/iconsax-linear-bag.svg" />
                      <div className="text-wrapper-43">Delete</div>
                    </div>
                    <div className="frame-13">
                      <img className="img-3" alt="Iconsax linear" src="/img/iconsax-linear-copysuccess-1.svg" />
                      <div className="text-wrapper-44">Active</div>
                    </div>
                    <div className="frame-14">
                      <img className="img-3" alt="Iconsax linear edit" src="/img/iconsax-linear-edit-1.svg" />
                      <div className="text-wrapper-45">Edit</div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap">
                    <div className="rectangle-wrapper">
                      <img className="img-2" alt="Rectangle" src="/img/rectangle-48.png" />
                    </div>
                    <div className="overlap-group-7">
                      <div className="text-wrapper-46">Lait Délice 1L</div>
                      <div className="text-wrapper-47">Liquide</div>
                      <div className="text-wrapper-48">50</div>
                    </div>
                    <img className="line" alt="Line" src="/img/line-3.svg" />
                    <div className="frame-12">
                      <img className="img-3" alt="Iconsax linear bag" src="/img/iconsax-linear-bag.svg" />
                      <div className="text-wrapper-49">Delete</div>
                    </div>
                    <div className="frame-13">
                      <img className="img-3" alt="Iconsax linear" src="/img/iconsax-linear-copysuccess.svg" />
                      <div className="text-wrapper-44">Active</div>
                    </div>
                    <div className="frame-14">
                      <img className="img-3" alt="Iconsax linear edit" src="/img/iconsax-linear-edit.svg" />
                      <div className="text-wrapper-50">Edit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-15">
            <div className="activity">
              <div className="recentone">
                <div className="overlap-group-8">
                  <img className="line-2" alt="Line" src="/img/line-4-2.svg" />
                  <div className="img-wrapper">
                    <img className="img-2" alt="Rectangle" src="/img/rectangle-21-1.png" />
                  </div>
                </div>
                <div className="overlap-2">
                  <div className="text-wrapper-51">07:00 PM</div>
                  <div className="text-wrapper-52">Has joined the team</div>
                  <div className="text-wrapper-53">Djossef Alloui</div>
                </div>
              </div>
              <div className="recentone-2">
                <div className="overlap-group-8">
                  <img className="line-3" alt="Line" src="/img/line-4-1.svg" />
                  <div className="img-wrapper">
                    <img className="img-2" alt="Rectangle" src="/img/rectangle-21-1.png" />
                  </div>
                </div>
                <div className="overlap-3">
                  <div className="text-wrapper-54">13:25 PM</div>
                  <p className="has-changed-sony">
                    <span className="text-wrapper-55">Has changed </span>
                    <a href="http://localhost:3000/" rel="noopener noreferrer" target="_blank">
                      <span className="text-wrapper-56">Sony A7 III</span>
                    </a>
                    <span className="text-wrapper-55">
                      {" "}
                      price
                      <br />
                      and description
                    </span>
                  </p>
                  <div className="text-wrapper-57">Ala eddine Alloui</div>
                </div>
              </div>
              <div className="recentone-3">
                <div className="overlap-4">
                  <img className="line-4" alt="Line" src="/img/line-4.svg" />
                  <div className="img-wrapper">
                    <img className="img-2" alt="Rectangle" src="/img/rectangle-21.png" />
                  </div>
                </div>
                <div className="overlap-5">
                  <div className="text-wrapper-51">07:00 PM</div>
                  <div className="text-wrapper-58">Added 3 new photos</div>
                  <div className="text-wrapper-59">Julia Alloui</div>
                  <div className="frame-16">
                    <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-23.png" />
                  </div>
                  <div className="frame-17">
                    <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-24.png" />
                  </div>
                  <div className="frame-18">
                    <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-25.png" />
                  </div>
                </div>
              </div>
              <div className="text-wrapper-60">Recent Activities</div>
              <div className="text-wrapper-61">12 Novembre</div>
              <div className="text-wrapper-62">See More</div>
            </div>
            <div className="group-2">
              <div className="text-wrapper-63">Transactions</div>
              <div className="group-3">
                <div className="group-4">
                  <div className="overlap-group-9">
                    <div className="frame-19">
                      <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-3-3.png" />
                    </div>
                    <div className="overlap-6">
                      <div className="overlap-group-10">
                        <div className="text-wrapper-64">Julia Alloui</div>
                        <div className="text-wrapper-65">+$30</div>
                      </div>
                      <div className="text-wrapper-66">10 April 2022</div>
                    </div>
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap-group-9">
                    <img className="frame-20" alt="Frame" src="/img/frame-91-1.svg" />
                    <div className="overlap-6">
                      <div className="overlap-group-10">
                        <div className="text-wrapper-64">Safa Alloui</div>
                        <div className="text-wrapper-65">+$78</div>
                      </div>
                      <div className="text-wrapper-66">10 April 2022</div>
                    </div>
                  </div>
                </div>
                <div className="group-5">
                  <div className="overlap-group-9">
                    <div className="frame-19">
                      <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-3-2.png" />
                    </div>
                    <div className="overlap-6">
                      <div className="overlap-group-10">
                        <div className="text-wrapper-64">Djossef Alloui</div>
                        <div className="text-wrapper-65">+$35</div>
                      </div>
                      <div className="text-wrapper-66">10 April 2022</div>
                    </div>
                  </div>
                </div>
                <div className="group-6">
                  <div className="overlap-group-9">
                    <div className="frame-19">
                      <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-4-1.png" />
                    </div>
                    <div className="overlap-6">
                      <div className="overlap-group-10">
                        <div className="text-wrapper-64">Esya Alloui</div>
                        <div className="text-wrapper-65">+$48</div>
                      </div>
                      <div className="text-wrapper-66">10 April 2022</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-67">See More</div>
            </div>
            <div className="group-7">
              <div className="text-wrapper-68">Transactions</div>
              <div className="group-8">
                <div className="group-4">
                  <div className="overlap-group-9">
                    <div className="frame-19">
                      <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-3-1.png" />
                    </div>
                    <div className="overlap-6">
                      <div className="overlap-group-10">
                        <div className="text-wrapper-64">Julia Alloui</div>
                        <div className="text-wrapper-69">+$30</div>
                      </div>
                      <div className="text-wrapper-66">10 April 2022</div>
                    </div>
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap-group-9">
                    <img className="frame-20" alt="Frame" src="/img/frame-91.svg" />
                    <div className="overlap-6">
                      <div className="overlap-group-10">
                        <div className="text-wrapper-64">Safa Alloui</div>
                        <div className="text-wrapper-69">+$78</div>
                      </div>
                      <div className="text-wrapper-66">10 April 2022</div>
                    </div>
                  </div>
                </div>
                <div className="group-5">
                  <div className="overlap-group-9">
                    <div className="frame-19">
                      <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-3.png" />
                    </div>
                    <div className="overlap-6">
                      <div className="overlap-group-10">
                        <div className="text-wrapper-64">Djossef Alloui</div>
                        <div className="text-wrapper-69">+$35</div>
                      </div>
                      <div className="text-wrapper-66">10 April 2022</div>
                    </div>
                  </div>
                </div>
                <div className="group-6">
                  <div className="overlap-group-9">
                    <div className="frame-19">
                      <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-4.png" />
                    </div>
                    <div className="overlap-6">
                      <div className="overlap-group-10">
                        <div className="text-wrapper-64">Esya Alloui</div>
                        <div className="text-wrapper-69">+$48</div>
                      </div>
                      <div className="text-wrapper-66">10 April 2022</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-70">See More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash

