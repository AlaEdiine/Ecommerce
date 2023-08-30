import { useLocation } from "react-router";
import LoadPage from "../../components/Loading/LoadPage";
import axios from "../../api/axios";
import { useEffect, useState } from "react";
import Side from "../../components/Side";
import Header from "../../components/Header";
import "./Profile.css";

const Profile = (props) => {

  // Récupére Id Product to page -- ListProduct.jsx
  const location = useLocation();
  const OuvrierUpdateById = location.state.id;

  const [load, setLoad] = useState(false);
  const [Dataouvrier, setDataouvrier] = useState([]);
  const [Datahistory, setDatahistory] = useState([]);

  useEffect(() => {
    try {
    setLoad(true);
     axios.get(
        `/OUVRIER/GET/${OuvrierUpdateById}`
      ).then((resultReelOuvrier) => {
        console.log(resultReelOuvrier.data.result);
        setDataouvrier(resultReelOuvrier.data.result);
    });
    axios.get(`/OUVRIER/GET/${OuvrierUpdateById}`).then((result) => {
      setLoad(false);
      setDatahistory(result.data.history);
    });
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

    <div className="profile-user">
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
                    <p className="p">Showing 1 to 10 of 150 entries</p>
                    <div className="frame-8">
                      <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-airpod.svg" />
                      <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-grid2.svg" />
                      <img className="img" alt="Iconsax outline" src="/img/iconsax-outline-userremove.svg" />
                      <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-bagcross.svg" />
                      <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-printer.svg" />
                      <div className="frame-9">
                        <div className="frame-10">
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
                </div>
              </div>
            </div>
            <div className="frame-11">
            {load && <LoadPage></LoadPage>}
              <div className="frame-12">
                <div className="frame-13">
                  <div className="frame-14">
                    <div className="rectangle-wrapper">
                      <img className="rectangle-2" alt="Rectangle" src={`http://localhost:3001/images/${Dataouvrier.photo}`} />
                    </div>
                    <div className="frame-15">
                      <div className="frame-16">
                        <div className="text-wrapper-11">First Name :</div>
                        <div className="text-wrapper-12">{Dataouvrier.Nom}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Last Name :</div>
                        <div className="text-wrapper-12">{Dataouvrier.Prenom}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Email :</div>
                        <div className="text-wrapper-12">{Dataouvrier.Email}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Age :</div>
                        <div className="text-wrapper-12">32 ans</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Function :</div>
                        <div className="text-wrapper-12">{Dataouvrier.Fonction}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Contract type :</div>
                        <div className="text-wrapper-12">{Dataouvrier.TypeContrat}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Day of start :</div>
                        <div className="text-wrapper-12">{Dataouvrier.DebutContrat}</div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-11">Day of end :</div>
                        <div className="text-wrapper-12">{Dataouvrier.FinContrat}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-12">
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="text-wrapper-13">User Identity</div>
                      <img className="line" alt="Line" src="/img/line-15-2.svg" />
                      <div className="frame-19">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-archivebook-1.svg"
                        />
                        <div className="text-wrapper-14">Identity type :&nbsp;&nbsp;{Dataouvrier.Identity}</div>
                      </div>
                      <div className="frame-19">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-calendar1.svg"
                        />
                        <div className="text-wrapper-14">N°&nbsp;&nbsp;:&nbsp;&nbsp;{Dataouvrier.Num_CIN_Passeport}</div>
                      </div>
                      <div className="frame-19">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-calendar1.svg"
                        />
                        <p className="text-wrapper-14">Date of issue :&nbsp;&nbsp;{Dataouvrier.DateDelivrance}</p>
                      </div>
                      <div className="frame-20">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-calendar1.svg"
                        />
                        <p className="text-wrapper-15">Date of birth: {Dataouvrier.Date_Naissance}</p>
                      </div>
                      <div className="frame-19">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-personalcard-2.svg"
                        />
                        <div className="text-wrapper-14">Gender :</div>
                        <div className="frame-19">
                          <div className="text-wrapper-16">{Dataouvrier.Genre}</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-18">
                      <div className="text-wrapper-13">User Education level</div>
                      <img className="line" alt="Line" src="/img/line-15-1.svg" />
                      <div className="frame-19">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-archivebook.svg"
                        />
                        <div className="text-wrapper-14">Diploma :&nbsp;&nbsp;{Dataouvrier.Diplome}</div>
                      </div>
                      <div className="frame-19">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-personalcard-1.svg"
                        />
                        <div className="text-wrapper-14">Specialization : {Dataouvrier.Section}</div>
                      </div>
                      <div className="frame-19">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-headphone-3.svg"
                        />
                        <p className="text-wrapper-14">Year of graduation : {Dataouvrier.YearDiplome}</p>
                      </div>
                      <div className="frame-20">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-location-1.svg"
                        />
                        <p className="text-wrapper-15">University: {Dataouvrier.University}</p>
                      </div>
                      <div className="frame-19">
                        <img className="iconsax-linear-3" alt="Iconsax linear" src="/img/iconsax-linear-cloudadd.svg" />
                        <div className="text-wrapper-14"> Status:</div>
                        {Dataouvrier.Status === "Active" && (
                        <div className="frame-21">
                          <div className="text-wrapper-16">{Dataouvrier.Status}</div>
                        </div> )}
                        {Dataouvrier.Status === "Inactive" && (
                        <div className="frame-22">
                          <div className="text-wrapper-17">{Dataouvrier.Status}</div>
                        </div> )}
                      </div>
                    </div>
                    <div className="frame-18">
                      <div className="text-wrapper-13">User Address</div>
                      <img className="line" alt="Line" src="/img/line-15.svg" />
                      <div className="frame-19">
                        <img className="iconsax-linear-3" alt="Iconsax linear" src="/img/iconsax-linear-location.svg" />
                        <p className="text-wrapper-14">Address :&nbsp;&nbsp;{Dataouvrier.Adresse}</p>
                      </div>
                      <div className="frame-19">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-personalcard.svg"
                        />
                        <div className="text-wrapper-14">City : {Dataouvrier.City}</div>
                      </div>
                      <div className="frame-19">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-headphone.svg"
                        />
                        <div className="text-wrapper-14">Zipcode : {Dataouvrier.Zipcode}</div>
                      </div>
                      <div className="frame-20">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-headphone.svg"
                        />
                        <div className="text-wrapper-15">Phone Number (1) :&nbsp;&nbsp;{Dataouvrier.Number1}</div>
                      </div>
                      <div className="frame-20">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-headphone.svg"
                        />
                        <div className="text-wrapper-15">Phone Number (2) :&nbsp;&nbsp;{Dataouvrier.Number2}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-23">
                <div className="frame-24">
                  <div className="text-wrapper-12">Dashboard</div>
                </div>
              </div>
              <div className="frame-25">
                <div className="frame-26">
                  <div className="frame-25">
                    <div className="frame-27">
                      <div className="text-wrapper-18">N° Product Vendus</div>
                      <div className="group">
                        <div className="text-wrapper-19">+ 23%</div>
                        <div className="text-wrapper-20">&gt;</div>
                      </div>
                    </div>
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group">
                        <img className="line-2" alt="Line" src="/img/line-6-3.svg" />
                        <div className="text-wrapper-21">34565</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-25">
                    <div className="frame-27">
                      <div className="text-wrapper-18">CA</div>
                      <div className="group">
                        <div className="text-wrapper-19">+ 5%</div>
                        <div className="text-wrapper-20">&gt;</div>
                      </div>
                    </div>
                    <div className="group-2">
                      <div className="overlap-group-2">
                        <img className="line-3" alt="Line" src="/img/line-6-2.svg" />
                        <div className="text-wrapper-22">£ 21324</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-26">
                  <div className="frame-25">
                    <div className="frame-28">
                      <div className="text-wrapper-23">Benefice</div>
                      <div className="group">
                        <div className="text-wrapper-19">+ 32%</div>
                        <div className="text-wrapper-20">&gt;</div>
                      </div>
                    </div>
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-3">
                        <img className="line-4" alt="Line" src="/img/line-6-1.svg" />
                        <div className="text-wrapper-24">At Last Month</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-25">
                    <div className="frame-27">
                      <div className="text-wrapper-18">Benefice</div>
                      <div className="group">
                        <div className="text-wrapper-19">+ 7%</div>
                        <div className="text-wrapper-20">&gt;</div>
                      </div>
                    </div>
                    <div className="group-2">
                      <div className="overlap-group-4">
                        <img className="line-5" alt="Line" src="/img/line-6.svg" />
                        <div className="text-wrapper-25">At Last Week</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="allproducts">
                <div className="titleallproducts">
                  <div className="group-3">
                    <div className="rectangle-3" />
                    <div className="rectangle-4" />
                    <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-34.svg" />
                    <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-35.svg" />
                    <div className="rectangle-7" />
                  </div>
                  <div className="text-wrapper-26">All Product</div>
                </div>
                <div className="containerallproducts">
                  <div className="group-4">
                    <img className="line-6" alt="Line" src="/img/line-7.svg" />
                    <div className="text-wrapper-27">200 £</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="group-5">
                      <img className="line-7" alt="Line" src="/img/line-8.svg" />
                      <div className="text-wrapper-27">150 £</div>
                    </div>
                    <div className="group-6">
                      <div className="rectangle-8" />
                      <div className="text-wrapper-28">RESTE PRODUCT</div>
                    </div>
                  </div>
                  <div className="overlap">
                    <div className="group-7">
                      <img className="line-8" alt="Line" src="/img/line-10.svg" />
                      <div className="text-wrapper-27">60 £</div>
                    </div>
                    <div className="group-8">
                      <div className="rectangle-9" />
                      <div className="text-wrapper-29">09 P</div>
                    </div>
                  </div>
                  <div className="overlap-2">
                    <div className="group-7">
                      <img className="line-8" alt="Line" src="/img/line-9-2.svg" />
                      <div className="text-wrapper-27">40 £</div>
                    </div>
                    <div className="group-9">
                      <div className="rectangle-10" />
                      <div className="text-wrapper-30">61 P</div>
                    </div>
                  </div>
                  <div className="overlap-3">
                    <div className="group-7">
                      <img className="line-8" alt="Line" src="/img/line-9-1.svg" />
                      <div className="text-wrapper-27">20 £</div>
                    </div>
                    <div className="group-10">
                      <div className="rectangle-11" />
                      <div className="text-wrapper-31">43 P</div>
                    </div>
                  </div>
                  <div className="overlap-4">
                    <div className="group-11">
                      <img className="line-8" alt="Line" src="/img/line-9.svg" />
                      <div className="text-wrapper-27">0 £</div>
                    </div>
                    <div className="group-12">
                      <div className="rectangle-12" />
                      <div className="text-wrapper-32">200 P</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tableproduct-2">
              <div className="frame-29">
                <div className="frame-30">
                  <div className="text-wrapper-12">History</div>
                </div>
              </div>

{ Datahistory.map((item) =>
              <div className="frame-31" key={item._id}>
                <div className="group-13">
                  <div className="ellipse-wrapper">
                    <img className="Rounded" alt="Ellipse"  src={`http://localhost:3001/images/${Dataouvrier.photo}`} />
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-5">
                      <div className="overlap-6">
                        <div className="overlap-group-6">
                          <img className="line-9" alt="Line" src="/img/line-17.svg" />
                          <div className="frame-32">
                            <div className="frame-33">
                              <p className="text-wrapper-33">{item.Date}</p>
                            </div>
                          </div>
                        </div>
                        <img className="line-10" alt="Line" src="/img/line-19.svg" />
                      </div>
                      <img className="line-11" alt="Line" src="/img/line-18.svg" />
                      <div className="frame-34">
                        <div className="frame-33">
                          <p className="text-wrapper-33">{item.Action}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="frame-35">
                {item.Nom &&

<div className="group-14">
<div className="frame-36">
  <div className="frame-37">
    <div className="text-wrapper-34">{item.Nom}</div>
  </div>
</div>
<div className="text-wrapper-35">First Name</div>
</div>
                }
                 {item.Prenom &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Prenom}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Last Name</div>
                  </div>
}
{item.Email &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Email}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Email</div>
                  </div> }
                  {item.Fonction &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Fonction}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Function</div>
                  </div> }
                  {item.Genre &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Genre}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Gender</div>
                  </div> }
                  {item.Login &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-38">{item.Login}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Login</div>
                  </div> }
                  {item.Password &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-38">{item.Password}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Password</div>
                  </div> }
                  {item.Identity &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Identity}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Identity</div>
                  </div> }
                  {item.Num_CIN_Passeport &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Num_CIN_Passeport}</div>
                      </div>
                    </div>
                    <p className="n-CIN-passeport-cart">N°&nbsp;&nbsp;CIN - Passeport - Cart Sejour</p>
                  </div>}
                  {item.DateDelivrance &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.DateDelivrance}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Date Issue</div>
                  </div>}
                  {item.Date_Naissance &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Date_Naissance}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Date Birth</div>
                  </div> }
                  {item.TypeContrat &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.TypeContrat}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-39">Contract Type</div>
                  </div>}
                  {item.DebutContrat &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.DebutContrat}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Start</div>
                  </div>}
                  {item.FinContrat &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.FinContrat}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">End</div>
                  </div>}
                  {item.Diplome &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Diplome}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Diploma</div>
                  </div>}
                  {item.Section &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Section}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Speciality</div>
                  </div>}
                  {item.YearDiplome &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.YearDiplome}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-40">Year of graduation</div>
                  </div>}
                  {item.University &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.University}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">University</div>
                  </div>}
                  {item.Adresse &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Adresse}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Address</div>
                  </div>}
                  {item.City &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.City}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">City</div>
                  </div>}
                  {item.Zipcode &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Zipcode}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Zip Code</div>
                  </div>}
                  {item.Number1 &&
                  <div className="group-16">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Number1}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-41">Phone number (1)</div>
                  </div>}
                  {item.number2 &&
                  <div className="group-16">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Number2}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-42">Phone number (2)</div>
                  </div>}
                  {item.isAdmin &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.isAdmin}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">IsAdmin</div>
                  </div> }
                  {item.Status &&
                  <div className="group-15">
                    <div className="frame-38">
                      <div className="frame-37">
                        <div className="text-wrapper-36">{item.Status}</div>
                      </div>
                    </div>
                    <div className="text-wrapper-37">Status</div>
                  </div>}
                </div>

              </div>
)}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile