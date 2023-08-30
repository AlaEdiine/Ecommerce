import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import Side from '../../components/Side'
import "./Transaction.css";


const Transaction = () => {
    const [deleteall, setdeleteall] = useState(false)

    const changeStatus = () => {
        setdeleteall(!deleteall)
    }
  return (

    <div className="tranictionlist">
 <Side></Side>
      <div className="container">
        <div className="sub-design">
          <div className="rectangle" />
        </div>
        <div className="main">
<Header></Header>
          <div className="tableproduct">
            <div className="frame">
              <div className="div-wrapper">
                <div className="text-wrapper-7">Transaction List</div>
              </div>
              <div className="frame-2">
                <div className="frame-3">

                <Link to="/invoice" className="link">
                  <div className="frame-wrapper">
                    <div className="frame-4">
                      <div className="text-wrapper-8">Add New Invoice</div>
                    </div>
                  </div>
                  </Link>
                  <div className="frame-wrapper">
                    <div className="frame-5">
                      <div className="text-wrapper-9">+</div>
                    </div>
                  </div>
                </div>
                <p className="p">Showing 1 to 10 of 150 entries</p>
                <div className="frame-6">
                  <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-printer.svg" />
                  <div className="frame-7">
                    <div className="frame-8">
                      <div className="text-wrapper-10">Search ...</div>
                      <img
                        className="iconsax-linear-2"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-searchnormal1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-9">
                <div className="tableproduct-2">
                  <div className="frame-10">
                    <div className="frame-11">
                      <img className="rectangle-2" alt="Rectangle" 
                      src={deleteall? "/img/group-66.png" : "/img/rectangle-44.svg" }
                       onClick={changeStatus} />
                      <div className="text-wrapper-11">INVOICE</div>
                      <div className="text-wrapper-11">BUYER NAME</div>
                      <div className="text-wrapper-11">STATUS</div>
                      <div className="text-wrapper-12">PAYMENT</div>
                      <div className="text-wrapper-12">TOTAL TRANSACTION</div>
                      <div className="text-wrapper-13">ACTIONS</div>
                    </div>
                    <div className="bodytable">
                      <div className="frame-12">
                        <img className="img-2" alt="Rectangle" src={deleteall? "/img/group-66.png" : "/img/rectangle-44.svg" }/>
                        <div className="text-wrapper-14">#INV-5467783</div>
                        <div className="frame-13">
                          <div className="text-wrapper-15">Leonardo Jeerymie</div>
                          <div className="text-wrapper-16">California, LA</div>
                        </div>
                        <div className="frame-14">
                          <img
                            className="iconsax-linear-3"
                            alt="Iconsax linear"
                            src="/img/iconsax-linear-copysuccess-4.svg"
                          />
                          <div className="text-wrapper-17">Inactive</div>
                        </div>
                        <div className="frame-13">
                          <div className="text-wrapper-15">Direct bank transfer</div>
                          <div className="text-wrapper-16">30 March, 11:00</div>
                        </div>
                        <div className="text-wrapper-18">$24,000,00</div>
                        <img className="line" alt="Line" src="/img/line-3.svg" />
                        <div className="frame-15">
                          <img
                            className="iconsax-linear-edit"
                            alt="Iconsax linear edit"
                            src="/img/iconsax-linear-edit-4.svg"
                          />
                          <div className="text-wrapper-19">Edit</div>
                        </div>
                        <div className="frame-16">
                          <img className="img" alt="Iconsax linear eye" src="/img/iconsax-linear-eye.svg" />
                          <div className="text-wrapper-19">Details</div>
                        </div>
                      </div>
                      <div className="frame-12">
                        <img className="img-2" alt="Group" src={deleteall? "/img/group-66.png" : "/img/rectangle-44.svg" } />
                        <div className="text-wrapper-14">#INV-5467783</div>
                        <div className="frame-13">
                          <div className="text-wrapper-15">Leonardo Jeerymie</div>
                          <div className="text-wrapper-16">California, LA</div>
                        </div>
                        <div className="frame-14">
                          <img
                            className="iconsax-linear-3"
                            alt="Iconsax linear"
                            src="/img/iconsax-linear-copysuccess-6.svg"
                          />
                          <div className="text-wrapper-20">Active</div>
                        </div>
                        <div className="frame-13">
                          <div className="text-wrapper-15">Checking payments</div>
                          <div className="text-wrapper-16">30 March, 11:00</div>
                        </div>
                        <div className="text-wrapper-18">$24,000,00</div>
                        <img className="line" alt="Line" src="/img/line-3.svg" />
                        <div className="frame-15">
                          <img
                            className="iconsax-linear-edit"
                            alt="Iconsax linear edit"
                            src="/img/iconsax-linear-edit-3.svg"
                          />
                          <div className="text-wrapper-19">Edit</div>
                        </div>
                        <div className="frame-16">
                          <img className="img" alt="Iconsax linear eye" src="/img/iconsax-linear-eye.svg" />
                          <div className="text-wrapper-19">Details</div>
                        </div>
                      </div>
                      <div className="frame-12">
                        <img className="img-2" alt="Rectangle" src={deleteall? "/img/group-66.png" : "/img/rectangle-44.svg" }/>
                        <div className="text-wrapper-14">#INV-5467783</div>
                        <div className="frame-13">
                          <div className="text-wrapper-15">Leonardo Jeerymie</div>
                          <div className="text-wrapper-16">California, LA</div>
                        </div>
                        <div className="frame-14">
                          <img
                            className="iconsax-linear-3"
                            alt="Iconsax linear"
                            src="/img/iconsax-linear-copysuccess.svg"
                          />
                          <div className="text-wrapper-17">Inactive</div>
                        </div>
                        <div className="frame-13">
                          <div className="text-wrapper-15">Direct bank transfer</div>
                          <div className="text-wrapper-16">30 March, 11:00</div>
                        </div>
                        <div className="text-wrapper-18">$24,000,00</div>
                        <img className="line" alt="Line" src="/img/line-3.svg" />
                        <div className="frame-15">
                          <img
                            className="iconsax-linear-edit"
                            alt="Iconsax linear edit"
                            src="/img/iconsax-linear-edit-2.svg"
                          />
                          <div className="text-wrapper-19">Edit</div>
                        </div>
                        <div className="frame-16">
                          <img className="img" alt="Iconsax linear eye" src="/img/iconsax-linear-eye.svg" />
                          <div className="text-wrapper-19">Details</div>
                        </div>
                      </div>
                      <div className="frame-12">
                        <img className="img-2" alt="Group" src={deleteall? "/img/group-66.png" : "/img/rectangle-44.svg" } />
                        <div className="text-wrapper-14">#INV-5467783</div>
                        <div className="frame-13">
                          <div className="text-wrapper-15">Leonardo Jeerymie</div>
                          <div className="text-wrapper-16">California, LA</div>
                        </div>
                        <div className="frame-14">
                          <img
                            className="iconsax-linear-3"
                            alt="Iconsax linear"
                            src="/img/iconsax-linear-copysuccess-1.svg"
                          />
                          <div className="text-wrapper-20">Active</div>
                        </div>
                        <div className="frame-13">
                          <div className="text-wrapper-15">Checking payments</div>
                          <div className="text-wrapper-16">30 March, 11:00</div>
                        </div>
                        <div className="text-wrapper-18">$24,000,00</div>
                        <img className="line" alt="Line" src="/img/line-3.svg" />
                        <div className="frame-15">
                          <img
                            className="iconsax-linear-edit"
                            alt="Iconsax linear edit"
                            src="/img/iconsax-linear-edit-1.svg"
                          />
                          <div className="text-wrapper-19">Edit</div>
                        </div>
                        <div className="frame-16">
                          <img className="img" alt="Iconsax linear eye" src="/img/iconsax-linear-eye.svg" />
                          <div className="text-wrapper-19">Details</div>
                        </div>
                      </div>
                      <div className="frame-12">
                        <img className="img-2" alt="Rectangle" src={deleteall? "/img/group-66.png" : "/img/rectangle-44.svg" } />
                        <div className="text-wrapper-14">#INV-5467783</div>
                        <div className="frame-13">
                          <div className="text-wrapper-15">Leonardo Jeerymie</div>
                          <div className="text-wrapper-16">California, LA</div>
                        </div>
                        <div className="frame-14">
                          <img
                            className="iconsax-linear-3"
                            alt="Iconsax linear"
                            src="/img/iconsax-linear-copysuccess.svg"
                          />
                          <div className="text-wrapper-17">Inactive</div>
                        </div>
                        <div className="frame-13">
                          <div className="text-wrapper-15">Direct bank transfer</div>
                          <div className="text-wrapper-16">30 March, 11:00</div>
                        </div>
                        <div className="text-wrapper-18">$24,000,00</div>
                        <img className="line" alt="Line" src="/img/line-3.svg" />
                        <div className="frame-15">
                          <img
                            className="iconsax-linear-edit"
                            alt="Iconsax linear edit"
                            src="/img/iconsax-linear-edit.svg"
                          />
                          <div className="text-wrapper-19">Edit</div>
                        </div>
                        <div className="frame-16">
                          <img className="img" alt="Iconsax linear eye" src="/img/iconsax-linear-eye.svg" />
                          <div className="text-wrapper-19">Details</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-17">
                  <div className="frame-18">
                    <div className="frame-19">
                      <div className="text-wrapper-21">Transaction Details</div>
                      <img
                        className="iconsax-linear-4"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-closesquare.svg"
                      />
                    </div>
                    <div className="frame-20">
                      <div className="frame-21">
                        <div className="frame-22">
                          <div className="text-wrapper-22">Transaction Details</div>
                          <img className="line-2" alt="Line" src="/img/line-15-1.svg" />
                          <div className="frame-23">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-archivebook.svg"
                            />
                            <div className="text-wrapper-23">Invoice:&nbsp;&nbsp;INV 535545/0908</div>
                          </div>
                          <div className="frame-23">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-calendar1.svg"
                            />
                            <p className="text-wrapper-23">Purchase Date: 24 March 2022</p>
                          </div>
                          <div className="frame-23">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-cloudadd.svg"
                            />
                            <div className="text-wrapper-23">Transaction Status:</div>
                            <div className="frame-24">
                              <div className="text-wrapper-24">Completed</div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-22">
                          <div className="text-wrapper-22">Buyer Details</div>
                          <img className="line-2" alt="Line" src="/img/line-15-1.svg" />
                          <div className="frame-23">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-personalcard.svg"
                            />
                            <div className="text-wrapper-23">Name: Djossef Aloui</div>
                          </div>
                          <div className="frame-23">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-headphone.svg"
                            />
                            <div className="text-wrapper-23">Phone Number: +71828273732</div>
                          </div>
                          <div className="frame-25">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-location.svg"
                            />
                            <p className="div-2">Address: 260 W. Storm Street New York</p>
                          </div>
                        </div>
                        <div className="frame-26">
                          <div className="text-wrapper-22">Payment Details</div>
                          <img className="line-2" alt="Line" src="/img/line-15-1.svg" />
                          <div className="frame-23">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-notepad2.svg"
                            />
                            <p className="text-wrapper-23">Payment Method: Direct bank transfer</p>
                          </div>
                          <div className="frame-23">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-mobileprogramming.svg"
                            />
                            <div className="text-wrapper-23">Total Price: $12,500.00</div>
                          </div>
                          <div className="frame-25">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-teacher.svg"
                            />
                            <div className="div-2">Discount: $600.00</div>
                          </div>
                          <div className="frame-25">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-stacks.svg"
                            />
                            <div className="div-2">TVA: $40.00 / 18%</div>
                          </div>
                          <img className="line-2" alt="Line" src="/img/line-15-1.svg" />
                          <div className="frame-25">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-walletcheck.svg"
                            />
                            <p className="div-2">
                              <span className="text-wrapper-25">
                                NET TO
                                PAY:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </span>
                              <span className="text-wrapper-26">$10,500.00</span>
                            </p>
                          </div>
                        </div>
                        <div className="frame-22">
                          <div className="text-wrapper-22">Shipping Information</div>
                          <img className="line-2" alt="Line" src="/img/line-15-1.svg" />
                          <div className="frame-23">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-personalcard.svg"
                            />
                            <div className="text-wrapper-23">Courier: Left4code Express</div>
                          </div>
                          <div className="frame-23">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-whatsapp.svg"
                            />
                            <div className="text-wrapper-23">Tracking Number: 003005580322</div>
                          </div>
                          <div className="frame-27">
                            <img
                              className="iconsax-linear-5"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-location.svg"
                            />
                            <p className="div-2">Address: 260 W. Storm Street New York, NY 10025.</p>
                          </div>
                        </div>
                      </div>
                      <div className="frame-28">
                        <div className="frame-29">
                          <div className="text-wrapper-22">Order Details</div>
                          <img className="line-3" alt="Line" src="/img/line-15.svg" />
                        </div>
                        <div className="frame-30">
                          <div className="text-wrapper-27">Product</div>
                          <div className="text-wrapper-28">Unit Price</div>
                          <div className="text-wrapper-29">Qty</div>
                          <div className="text-wrapper-30">Total</div>
                        </div>
                        <div className="frame-31">
                          <div className="frame-32">
                            <div className="rectangle-wrapper">
                              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-46-7.png" />
                            </div>
                            <div className="text-wrapper-31">Samsung galaxy ultra A12</div>
                            <div className="text-wrapper-32">$62,000.00</div>
                            <div className="text-wrapper-33">2</div>
                            <div className="text-wrapper-32">$124,000.00</div>
                          </div>
                          <div className="frame-33">
                            <div className="rectangle-wrapper">
                              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-46-6.png" />
                            </div>
                            <div className="text-wrapper-31">Samsung galaxy ultra A12</div>
                            <div className="text-wrapper-32">$62,000.00</div>
                            <div className="text-wrapper-33">2</div>
                            <div className="text-wrapper-32">$124,000.00</div>
                          </div>
                          <div className="frame-32">
                            <div className="rectangle-wrapper">
                              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-46-1.png" />
                            </div>
                            <div className="text-wrapper-31">Samsung galaxy ultra A12</div>
                            <div className="text-wrapper-32">$62,000.00</div>
                            <div className="text-wrapper-33">2</div>
                            <div className="text-wrapper-32">$124,000.00</div>
                          </div>
                          <div className="frame-33">
                            <div className="rectangle-wrapper">
                              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-46.png" />
                            </div>
                            <div className="text-wrapper-31">Samsung galaxy ultra A12</div>
                            <div className="text-wrapper-32">$62,000.00</div>
                            <div className="text-wrapper-33">2</div>
                            <div className="text-wrapper-32">$124,000.00</div>
                          </div>
                          <div className="frame-32">
                            <div className="rectangle-wrapper">
                              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-46-1.png" />
                            </div>
                            <div className="text-wrapper-31">Samsung galaxy ultra A12</div>
                            <div className="text-wrapper-32">$62,000.00</div>
                            <div className="text-wrapper-33">2</div>
                            <div className="text-wrapper-32">$124,000.00</div>
                          </div>
                          <div className="frame-33">
                            <div className="rectangle-wrapper">
                              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-46.png" />
                            </div>
                            <div className="text-wrapper-31">Samsung galaxy ultra A12</div>
                            <div className="text-wrapper-32">$62,000.00</div>
                            <div className="text-wrapper-33">2</div>
                            <div className="text-wrapper-32">$124,000.00</div>
                          </div>
                          <div className="frame-32">
                            <div className="rectangle-wrapper">
                              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-46-1.png" />
                            </div>
                            <div className="text-wrapper-31">Samsung galaxy ultra A12</div>
                            <div className="text-wrapper-32">$62,000.00</div>
                            <div className="text-wrapper-33">2</div>
                            <div className="text-wrapper-32">$124,000.00</div>
                          </div>
                          <div className="frame-33">
                            <div className="rectangle-wrapper">
                              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-46.png" />
                            </div>
                            <div className="text-wrapper-31">Samsung galaxy ultra A12</div>
                            <div className="text-wrapper-32">$62,000.00</div>
                            <div className="text-wrapper-33">2</div>
                            <div className="text-wrapper-32">$124,000.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction