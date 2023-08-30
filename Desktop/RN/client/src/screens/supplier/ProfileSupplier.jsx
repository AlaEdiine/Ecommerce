import Header from "../../components/Header";
import Side from "../../components/Side";
import { useLocation } from "react-router";
import LoadPage from "../../components/Loading/LoadPage";
import axios from "../../api/axios";
import { useEffect, useState } from "react";
import "./ProfileSupplier.css";

const ProfileSupplier = (props) => {

  // Récupére Id Product to page -- ListProduct.jsx
  const location = useLocation();
  const SupplierUpdateByID = location.state.id;
  const [load, setLoad] = useState(false);
  const [Datasupplier, setDatasupplier] = useState([]);
  const [Datahistory, setDatahistory] = useState([]);
  const elem = "1122";
  const [DATA, setDATA] = useState([]);



  useEffect(() => {
    try {
    setLoad(true);
     axios.get(
        `/FOURNISSEUR/GET/${SupplierUpdateByID}`).then((resultReelSupplier) => {
        console.log(resultReelSupplier.data.result);
        setDatasupplier(resultReelSupplier.data.result) 
});
axios.get(`/PRODUIT/GET_ALL/${elem}`).then((result) => {
  console.log(result.data);
  setDATA(result.data);
});

    axios.get(`/FOURNISSEUR/GET/${SupplierUpdateByID}`).then((result) => {
      setLoad(false);
      setDatahistory(result.data.history);
      console.log(result.data.history);
    });
    setLoad(false);
  }
  catch {
    setLoad(false);
  }
  finally{
    setLoad(false);
  }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Pagination 

  return (

    <div className="profile-supplier">
     <Side></Side>
      <div className="container">
        <div className="sub-design">
          <div className="rectangle" />
        </div>
        <div className="main">
          <Header></Header>
          <div className="tableproduct">
            <div className="frame">
              <div className="frame">
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-7">User Info</div>
                  </div>
                </div>
                <div className="frame-2">
                  <div className="frame-3">
                    <div className="frame-4">
                      <div className="frame-5">
                        <div className="frame-6">
                          <div className="text-wrapper-8">Add New User</div>
                        </div>
                      </div>
                      <div className="frame-5">
                        <div className="frame-7">
                          <div className="text-wrapper-9">+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-11">
              <div className="frame-12">
                <div className="frame-13">
                  <div className="frame-14">
                    <div className="rectangle-wrapper">
                      <img className="rectangle-2" alt="Rectangle"  src={`http://localhost:3001/images/${Datasupplier.photo}`}/>
                    </div>
                    <div className="frame-15">
                      <div className="frame-16">
                        <div className="text-wrapper-11">Name :</div>
                        <div className="text-wrapper-12">{Datasupplier.label}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Email :</div>
                        <div className="text-wrapper-12">{Datasupplier.Email}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Category :</div>
                        <div className="text-wrapper-12">{Datasupplier.Category}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Tax registration number :</div>
                        <div className="text-wrapper-12">{Datasupplier.MF}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Mobile (1) :</div>
                        <div className="text-wrapper-12">{Datasupplier.Number1}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Mobile (2) :</div>
                        <div className="text-wrapper-12">{Datasupplier.Number2}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Fixed :</div>
                        <div className="text-wrapper-12">{Datasupplier.Fixe}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Fax :</div>
                        <div className="text-wrapper-12">{Datasupplier.Fax}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-12">
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="text-wrapper-13">Supplier Address</div>
                      <img className="line" alt="Line" src="/img/line-15.svg" />
                      <div className="frame-19">
                        <img className="iconsax-linear-3" alt="Iconsax linear" src="/img/iconsax-linear-location.svg" />
                        <p className="text-wrapper-14">Address :&nbsp;&nbsp;{Datasupplier.Adress}</p>
                      </div>
                      <div className="frame-19">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-personalcard.svg"
                        />
                        <div className="text-wrapper-14">City : {Datasupplier.City}</div>
                      </div>
                      <div className="frame-19">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-archivebook.svg"
                        />
                        <div className="text-wrapper-14">Zipcode : {Datasupplier.Zipcode}</div>
                      </div>
                      <div className="frame-19">
                        <img className="iconsax-linear-3" alt="Iconsax linear" src="/img/iconsax-linear-cloudadd.svg" />
                        <div className="text-wrapper-14"> Status:</div>
                        {Datasupplier.Status === "Active" && (
                        <div className="frame-20">
                          <div className="text-wrapper-15">{Datasupplier.Status}</div>
                        </div> )}
                        {Datasupplier.Status === "Inactive" && (
                        <div className="frame-21">
                          <div className="text-wrapper-16">{Datasupplier.Status}</div>
                        </div> )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-22">
                <div className="frame-23">
                  <div className="text-wrapper-12">Dashboard</div>
                </div>
              </div>
              <div className="frame-24">
                <div className="frame-25">
                  <div className="group">
                    <div className="rectangle-3" />
                    <div className="rectangle-4" />
                    <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-34.svg" />
                    <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-35.svg" />
                    <div className="rectangle-7" />
                  </div>
                  <div className="all-product">List Product</div>
                </div>
              </div>
              <div className="frame-26">
                <div className="tableheader">
                  <div className="overlap-group">
                    <div className="text-wrapper-17">ID</div>
                    <div className="text-wrapper-18">PRODUCT NAME</div>
                  </div>
                  <div className="text-wrapper-19">STOCK</div>
                </div>
                <div className="frame-27">
                  {DATA.filter(
                (elements) =>
                elements.Supplier.includes(Datasupplier.label)
                                  ).map((itemes , index) =>  
                  <div className="bodytable" key={itemes._id}>
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-4">
                        <p className="text-wrapper-20">{itemes.label}</p>
                        <div className="text-wrapper-21">#{index}</div>
                        <div className="text-wrapper-22">{itemes.Stock}</div>
                        <img className="line-2" alt="Line" src="/img/line-3.svg" />
                      </div>
                    </div>
                  </div>
                                  )}
                 
                </div>
              </div>
            </div>
            <div className="tableproduct-2">
              <div className="frame-28">
                <div className="frame-29">
                  <div className="text-wrapper-12">History</div>
                </div>
              </div>
              { Datahistory.map((item) =>
              <div className="frame-30" key={item._id}>
                <div className="group-2">
                  <div className="ellipse-wrapper">
                    <img className="Rounded" alt="Ellipse" src={`http://localhost:3001/images/${Datasupplier.photo}`} />
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap">
                      <div className="overlap-2">
                        <div className="overlap-group-5">
                          <img className="line-3" alt="Line" src="/img/line-17.svg" />
                          <div className="frame-31">
                            <div className="frame-32">
                              <p className="text-wrapper-23">{item.Date}</p>
                            </div>
                          </div>
                        </div>
                        <img className="line-4" alt="Line" src="/img/line-19.svg" />
                      </div>
                      <img className="line-5" alt="Line" src="/img/line-18.svg" />
                      <div className="frame-33">
                        <div className="frame-32">
                          <p className="text-wrapper-23">{item.Action}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-34">
                {item.label &&
                  <div className="group-3">
                    <div className="frame-35">
                      <div className="frame-36">
                        <div className="text-wrapper-24">{item.label}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-25">Full Name</div>
                  </div> }
                  {item.Email &&
                  <div className="group-4">
                    <div className="frame-37">
                      <div className="frame-36">
                        <div className="text-wrapper-26">{item.Email}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-27">Email</div>
                  </div> }
                  {item.Category &&
                  <div className="group-4">
                    <div className="frame-37">
                      <div className="frame-36">
                        <div className="text-wrapper-26">{item.Category}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-27">Category</div>
                  </div> }
                  {item.MF &&
                  <div className="group-4">
                    <div className="frame-37">
                      <div className="frame-36">
                        <div className="text-wrapper-28">{item.MF}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-27">TRN</div>
                  </div> }
                  {item.Adress &&
                  <div className="group-4">
                    <div className="frame-37">
                      <div className="frame-36">
                        <div className="text-wrapper-26">{item.Adress}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-27">Address</div>
                  </div> }
                  {item.City &&
                  <div className="group-4">
                    <div className="frame-37">
                      <div className="frame-36">
                        <div className="text-wrapper-26">{item.City}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-27">City</div>
                  </div> }
                  {item.Zipcode &&
                  <div className="group-4">
                    <div className="frame-37">
                      <div className="frame-36">
                        <div className="text-wrapper-26">{item.Zipcode}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-27">Zip code</div>
                  </div> }
                  {item.Number1 &&
                  <div className="group-5">
                    <div className="frame-37">
                      <div className="frame-36">
                        <div className="text-wrapper-26">{item.Number1}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-31">Phone number (1)</div>
                  </div> }
                  {item.Number2 &&
                  <div className="group-5">
                    <div className="frame-37">
                      <div className="frame-36">
                        <div className="text-wrapper-26">{item.Number2}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-32">Phone number (2)</div>
                  </div> }
                  {item.Fixe &&
                  <div className="group-5">
                    <div className="frame-37">
                      <div className="frame-36">
                        <div className="text-wrapper-26">{item.Fixe}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-32">Fixed number</div>
                  </div> }
                  {item.Fax &&
                  <div className="group-5">
                    <div className="frame-37">
                      <div className="frame-36">
                        <div className="text-wrapper-26">{item.Fax}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-32">Fax number</div>
                  </div> }
                  {item.Status &&
                  <div className="group-4">
                    <div className="frame-37">
                      <div className="frame-36">
                        <div className="text-wrapper-26">{item.Status}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-27">Status</div>
                  </div> }
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>  )
}

export default ProfileSupplier