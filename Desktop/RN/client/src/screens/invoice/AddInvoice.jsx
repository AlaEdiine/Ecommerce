import Sidebar from '../../components/Sidebar'
import "./AddInvoice.css"

const AddInvoice = () => {
  return (

    <div className="new-invoice">
      <div className="frame">
        <Sidebar></Sidebar>
        <div className="frame-wrapper">
          <div className="frame-2">
            <div className="header-wrapper">
              <header className="header">
                <div className="guidetitle">
                  <div className="guide">
                    <span className="span">Application</span>
                    <span className="text-wrapper-5">&nbsp;</span>
                    <span className="text-wrapper-6">&gt; </span>
                    <span className="text-wrapper-7">Dashboard</span>
                  </div>
                </div>
                <div className="headerprofile">
                  <div className="badgeprofile">
                    <div className="nameprofile">
                      <div className="name">
                        <span className="text-wrapper-5">Hi, </span>
                        <span className="text-wrapper-8">Alloui</span>
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
            </div>
            <div className="frame-3">
              <div className="div-wrapper">
                <div className="text-wrapper-9">New Invoice</div>
              </div>
              <div className="frame-4">
                <div className="frame-5">
                  <div className="frame-6">
                    <h1 className="h-1">INVOICE</h1>
                    <div className="receipt-jan">
                      Receipt #1923195
                      <br />
                      Jan 02, 2021
                    </div>
                  </div>
                  <div className="frame-7">
                    <p className="p">
                      <span className="text-wrapper-10">
                        Client Details
                        <br />
                      </span>
                      <span className="text-wrapper-11">
                        Arnold Schwarzenegger
                        <br />
                      </span>
                      <span className="text-wrapper-10">
                        arnodlschwarzenegger@gmail.com
                        <br />
                        260 W. Storm Street New York, NY 10025.
                      </span>
                    </p>
                    <p className="total-amount">
                      <span className="text-wrapper-10">
                        Payment to
                        <br />
                      </span>
                      <span className="text-wrapper-12">
                        Transfer bank
                        <br />
                      </span>
                      <span className="text-wrapper-10">virement / versement Espece / Chéque certifié</span>
                    </p>
                  </div>
                </div>
                <div className="frame-8">
                  <div className="tableproduct">
                    <div className="frame-9">
                      <div className="frame-10">
                        <div className="frame-11">
                          <div className="text-wrapper-13">DESCRIPTION</div>
                        </div>
                        <div className="frame-12">
                          <div className="text-wrapper-13">PRICE</div>
                          <div className="text-wrapper-13">QTY</div>
                          <div className="text-wrapper-14">SUBTOTAL</div>
                        </div>
                      </div>
                      <div className="bodytable">
                        <div className="frame-13">
                          <div className="text-wrapper-15">Leonardo Jeerymie</div>
                          <div className="text-wrapper-16">brucewillis@left4code.com</div>
                        </div>
                        <div className="frame-12">
                          <div className="text-wrapper-17">$25</div>
                          <div className="text-wrapper-18">2</div>
                          <div className="text-wrapper-17">$50</div>
                        </div>
                      </div>
                      <div className="bodytable">
                        <div className="frame-13">
                          <div className="text-wrapper-15">Leonardo Jeerymie</div>
                          <div className="text-wrapper-16">brucewillis@left4code.com</div>
                        </div>
                        <div className="frame-12">
                          <div className="text-wrapper-17">$25</div>
                          <div className="text-wrapper-17">2</div>
                          <div className="text-wrapper-17">$50</div>
                        </div>
                      </div>
                      <div className="bodytable">
                        <div className="frame-13">
                          <div className="text-wrapper-15">Leonardo Jeerymie</div>
                          <div className="text-wrapper-16">brucewillis@left4code.com</div>
                        </div>
                        <div className="frame-12">
                          <div className="text-wrapper-17">$25</div>
                          <div className="text-wrapper-17">2</div>
                          <div className="text-wrapper-17">$50</div>
                        </div>
                      </div>
                      <div className="bodytable">
                        <div className="frame-13">
                          <div className="text-wrapper-15">Leonardo Jeerymie</div>
                          <div className="text-wrapper-16">brucewillis@left4code.com</div>
                        </div>
                        <div className="frame-12">
                          <div className="text-wrapper-17">$25</div>
                          <div className="text-wrapper-17">2</div>
                          <div className="text-wrapper-17">$50</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-14">
                    <div className="taxes">Taxes</div>
                    <div className="frame-15">
                      <div className="frame-16">
                        <div className="text-wrapper-19">18 %</div>
                      </div>
                    </div>
                    <div className="frame-17">
                      <div className="frame-18">
                        <div className="text-wrapper-20">$600.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-14">
                    <div className="taxes">Discount</div>
                    <div className="frame-15">
                      <div className="frame-16">
                        <div className="text-wrapper-21">2 %</div>
                      </div>
                    </div>
                    <div className="frame-17">
                      <div className="frame-18">
                        <div className="text-wrapper-20">$115.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-7">
                  <p className="p">
                    <span className="text-wrapper-10">
                      Bank Transfer
                      <br />
                    </span>
                    <span className="text-wrapper-22">
                      Alloui Ala Eddine
                      <br />
                    </span>
                    <span className="text-wrapper-10">
                      Bank Account : 098347234832
                      <br />
                      Code : LFT133243
                    </span>
                  </p>
                  <div className="total-amount">
                    <span className="text-wrapper-10">
                      Total Amount
                      <br />
                    </span>
                    <span className="text-wrapper-23">
                      $20.600.00
                      <br />
                    </span>
                    <span className="text-wrapper-10">Taxes included</span>
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

export default AddInvoice