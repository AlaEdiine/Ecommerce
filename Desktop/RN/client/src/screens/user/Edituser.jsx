import React, { useEffect, useState } from "react";
import "./Adduser.css";
import Side from "../../components/Side";
import Header from "../../components/Header";
import axios from "../../api/axios";
import { SnackbarProvider } from "notistack";
import Succes from "../../components/Snackbar/Succes"
import Error from "../../components/Snackbar/Error"
import { useLocation } from "react-router";
const Edituser = (props) => {
  // Récupére Id Product to page -- ListProduct.jsx
  const location = useLocation();
  const OuvrierUpdateById = location.state.id;
  const [load, setLoad] = useState(false);
  const [DATA, setDATA] = useState([]);
  const [forminput, setForminput] = useState({ PrimaryKey: "1122"});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setForminput({ ...forminput, [e.target.name]: e.target.value });
  };
    // HandleChange des Images
    const handleFileInputChange = (e) => {
      setFile(e.target.files[0]);
    };
    useEffect(() => {
        setLoad(true);
        const getFournisseur = async () => {
          try {
            const res = await axios.get(
              `/OUVRIER/GET/${OuvrierUpdateById}`
            );
            console.log(res.data.result);
            setLoad(false);
            setDATA(res.data.result);
          } catch (err) {
            console.log(err);
          } finally {
            setLoad(false);
          }
        };
        getFournisseur();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    // update infos fournisseur
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", file);
       
        try {
          const { data } = await axios.put(
            `/OUVRIER/UPDATE/${OuvrierUpdateById}`,
            forminput
          );
          if (file !== null){
            await axios.post(`/UPLOAD-IMAGE/UPLOAD/${OuvrierUpdateById}`, formData)
          }
          console.log(data);
          Succes("Product Updated with Success !","success");
        } catch (error) {
          console.error(error);
          return Error("This Email is Exist", "error");
        }
      };

  return (

    <form className="add-newusers" onSubmit={handleSubmit}>
                  <SnackbarProvider autoHideDuration={2500} />
      <input
        type="file"
        name="photo"
        id="file"
        onChange={handleFileInputChange}
        className="Inputchamp"
        hidden
      ></input>
      <Side></Side>
      <div className="container">
        <div className="sub-design">
          <div className="rectangle" />
        </div>
        <div className="main">
          <Header></Header>
          <div className="tableproduct">
            <div className="frame">
              <div className="frame-wrapper">
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <div className="frame-2">
                      <div className="text-wrapper-7">Edit User</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-3">
              <div className="frame-4">
                <div className="frame-5">
                  <div className="frame-6">
                    <img
                      className="iconsax-linear-2"
                      alt="Iconsax linear"
                      src="/img/iconsax-linear-arrowdown2.svg"
                    />
                    <div className="text-wrapper-8">User Upload</div>
                  </div>
                  <div className="frame-7">
                    <img className="line" alt="Line" src="/img/line-5.svg" />
                    <div className="frame-8">
                      <div className="frame-9">
                        <div className="frame-10">
                          <div className="text-wrapper-9">User Photos</div>
                          <div className="frame-11">
                            <div className="text-wrapper-10">Required</div>
                          </div>
                        </div>
                        <p className="p">
                          The image format is .jpg .jpeg .png and a minimum size
                          of 300 x 300 pixels (For optimal images use a minimum
                          size of 700 x 700 pixels).
                          <br />
                          Select product photos or drag and drop up to 5 photos
                          at once here. Include min. 3 attractive photos to make
                          the product more attractive to buyers.
                        </p>
                      </div>
                      <label className="frame-12">
                        <div className="frame-13">
                        <img className="imgframe" title="Last Photo" alt="Ellipse" src={`http://localhost:3001/images/${DATA.photo}`} />

                        </div>
                      </label>

                      <label htmlFor="file" className="frame-12">
                        <div className="frame-13">
                          <div className="text-wrapper-11">Choose a file</div>
                        </div>
                        <div className="frame-14">
                          <div className="text-wrapper-12">Upload a file</div>
                          <img
                            className="iconsax-linear-3"
                            alt="Iconsax linear"
                            src="/img/iconsax-linear-arrowsquaredown.svg"
                          />
                        </div>
                      </label>
                    </div>
                    <div className="frame-8">
                      <div className="frame-9">
                        <div className="frame-10">
                          <div className="text-wrapper-9">User Function</div>
                          <div className="frame-11">
                            <div className="text-wrapper-10">Required</div>
                          </div>
                        </div>
                        <p className="p">
                          Selected a function for role to user in a societe
                        </p>
                      </div>
                      <div className="frame-15">
                        <div className="frame-16">
                          <div className="text-wrapper-13">
                            <select
                              // defaultValue="vide"
                              name="Fonction"
                              onChange={handleChange}
                              required
                            >
                              <option hidden value={DATA.Fonction}>
                              {DATA.Fonction}
                              </option>
                              <option
                                name="directeur"
                                value="directeur"
                                required
                              >
                                Directeur
                              </option>
                              <option name="Seller" value="Seller" required>
                                Seller
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="frame-17">
                  <div className="frame-18">
                    <img
                      className="iconsax-linear-2"
                      alt="Iconsax linear"
                      src="/img/iconsax-linear-arrowdown2-1.svg"
                    />
                    <div className="text-wrapper-8">User Information</div>
                  </div>
                  <div className="frame-19">
                    <div className="frame-7">
                      <img className="line" alt="Line" src="/img/line-5.svg" />
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">User Full Name</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">
                            Include min. 40 characters to make it more
                            attractive and easy for buyers to find, consisting
                            of product type, brand, and information such as
                            color, material, or type.
                          </p>
                        </div>
                        <div className="frame-20">
                          <div className="frame-21">
                            <div className="frame-16">
                              <div className="text-wrapper-13">
                                <input
                                  type="text"
                                  name="Nom"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.Nom}
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className="frame-21">
                            <div className="frame-16">
                              <div className="text-wrapper-13">
                                <input
                                  type="text"
                                  name="Prenom"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.Prenom}
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">Email</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">
                            Include @ characters to make it more attractive and
                            easy
                          </p>
                        </div>
                        <div className="frame-22">
                          <div className="frame-23">
                            <div className="frame-16">
                              <div className="text-wrapper-13">
                                <input
                                  type="text"
                                  name="Email"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.Email}
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="frame-24">
                  <div className="frame-18">
                    <img
                      className="iconsax-linear-2"
                      alt="Iconsax linear"
                      src="/img/iconsax-linear-arrowdown2-1.svg"
                    />
                    <div className="text-wrapper-8">User Detail</div>
                  </div>
                  <div className="frame-19">
                    <div className="frame-7">
                      <img className="line" alt="Line" src="/img/line-5.svg" />
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">Gender</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">Choisir le type de sexe de user</p>
                        </div>
                        <div className="frame-25">
                          <input
                            type="radio"
                            name="Genre"
                            value="MAN"
                            onChange={handleChange}
                            className="Inputchamp"
                          ></input>
                          MAN
                          <input
                            type="radio"
                            name="Genre"
                            value="FEMALE"
                            onChange={handleChange}
                            className="Inputchamp"
                          ></input>
                          FEMALE
                        </div>
                      </div>
                    </div>
                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">Identity</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">
                            Choise identity type CIN (carte identité nationale)
                            or Passeport or Carte Séjour and include characters
                            to make it more attractive and easy
                          </p>
                        </div>
                        <div className="frame-22">
                          <div className="frame-23">
                            <div className="frame-16">
                              <div className="text-wrapper-13">
                                <select
                                  // defaultValue="vide"
                                  name="Identity"
                                  onChange={handleChange}
                                  required                 
                                >
                                  <option hidden value={DATA.Identity}>
                                  {DATA.Identity}
                                  </option>
                                  <option
                                    name="Passeport"
                                    value="Passeport"
                                    required
                                  >
                                    Passeport
                                  </option>
                                  <option name="CIN" value="CIN" required>
                                    CIN
                                  </option>
                                  <option
                                    name="Carte Sejour"
                                    value="Carte Sejour"
                                    required
                                  >
                                    Carte Sejour
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">Identity Info</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">
                            Include characters to make it more attractive and
                            easy
                          </p>
                        </div>
                        <div className="frame-27">
                          <div className="frame-28">
                            <div className="frame-22">
                              <div className="frame-23">
                                <div className="frame-16">
                                  <p className="text-wrapper-13">
                                    <input
                                      type="text"
                                      name="Num_CIN_Passeport"
                                      onChange={handleChange}
                                      className="Inputchamp"
                                      placeholder={DATA.Num_CIN_Passeport}
                                    ></input>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="frame-22">
                              <div className="frame-23">
                                <div className="frame-16">
                                  <div className="text-wrapper-13">
                                    <input
                                      type="date"
                                      name="DateDelivrance"
                                      onChange={handleChange}
                                      className="Inputchamp"
                                      defaultValue={DATA.DateDelivrance}
                                    ></input>
                                  </div>
                                </div>
                                <div className="info">Date delivrance</div>
                              </div>
                            </div>
                          </div>
                          <div className="frame-29">
                            <div className="frame-23">
                              <div className="frame-16">
                                <div className="text-wrapper-13">
                                  <input
                                    type="date"
                                    name="Date_Naissance"
                                    onChange={handleChange}
                                    className="Inputchamp"
                                    defaultValue={DATA.Date_Naissance}

                                  ></input>
                                </div>
                              </div>
                              <div className="info">Day of birth</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="frame-30">
                  <div className="frame-18">
                    <img
                      className="iconsax-linear-2"
                      alt="Iconsax linear"
                      src="/img/iconsax-linear-arrowdown2-1.svg"
                    />
                    <div className="text-wrapper-8">User Contract</div>
                  </div>
                  <div className="frame-31">
                    <div className="frame-7">
                      <img className="line" alt="Line" src="/img/line-5.svg" />
                    </div>
                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">Contract Type</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">
                            Choise identity type CIN (carte identité nationale)
                            or Passeport or Carte Séjour and include characters
                            to make it more attractive and easy
                          </p>
                        </div>
                        <div className="frame-22">
                          <div className="frame-23">
                            <div className="frame-16">
                              <div className="text-wrapper-13">
                                <select
                                  // defaultValue="vide"
                                  name="TypeContrat"
                                  onChange={handleChange}
                                  required                                  
                                >
                                  <option hidden value={DATA.TypeContrat}>
                                  {DATA.TypeContrat}
                                  </option>
                                  <option name="CDD" value="CDD" required>
                                    CDD
                                  </option>
                                  <option name="CDI" value="CDI" required>
                                    CDI
                                  </option>
                                  <option
                                    name="Alternance"
                                    value="Alternance"
                                    required
                                  >
                                    Alternance
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">Contract Info</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">
                            Include characters to make it more attractive and
                            easy
                          </p>
                        </div>
                        <div className="frame-27">
                          <div className="frame-8">
                            <div className="frame-22">
                              <div className="frame-23">
                                <div className="frame-16">
                                  <div className="text-wrapper-13">
                                    <input
                                      type="date"
                                      name="DebutContrat"
                                      onChange={handleChange}
                                      className="Inputchamp"
                                      defaultValue={DATA.DebutContrat}

                                    ></input>
                                  </div>
                                </div>
                                <div className="info">Day of start</div>
                              </div>
                            </div>
                            <div className="frame-22">
                              <div className="frame-23">
                                <div className="frame-16">
                                  <div className="text-wrapper-13">
                                    <input
                                      type="date"
                                      name="FinContrat"
                                      onChange={handleChange}
                                      className="Inputchamp"
                                      defaultValue={DATA.FinContrat}

                                    ></input>
                                  </div>
                                </div>
                                <div className="info">Day of end</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="frame-30">
                  <div className="frame-18">
                    <img
                      className="iconsax-linear-2"
                      alt="Iconsax linear"
                      src="/img/iconsax-linear-arrowdown2.svg"
                    />
                    <div className="text-wrapper-8">User Etudes</div>
                  </div>
                  <div className="frame-31">
                    <div className="frame-7">
                      <img className="line" alt="Line" src="/img/line-5.svg" />
                    </div>
                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">Diplome</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">ex: Master - License ...</p>
                        </div>
                        <div className="frame-22">
                          <div className="frame-23">
                            <div className="frame-16">
                              <div className="text-wrapper-13">
                                <input
                                  type="text"
                                  name="Diplome"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.Diplome}
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">Section</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">
                            Include section of diplome and year
                          </p>
                        </div>
                        <div className="frame-27">
                          <div className="frame-8">
                            <div className="frame-22">
                              <div className="frame-23">
                                <div className="frame-16">
                                  <div className="text-wrapper-13">
                                    <input
                                      type="text"
                                      name="Section"
                                      onChange={handleChange}
                                      className="Inputchamp"
                                      placeholder={DATA.Section}
                                    ></input>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="frame-22">
                              <div className="frame-23">
                                <div className="frame-16">
                                  <div className="text-wrapper-13">
                                    <input
                                      type="date"
                                      name="YearDiplome"
                                      onChange={handleChange}
                                      className="Inputchamp"
                                      defaultValue={DATA.YearDiplome}

                                    ></input>
                                  </div>
                                </div>
                                <div className="info">Year Diplome</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">University</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">ex: Master - License ...</p>
                        </div>
                        <div className="frame-22">
                          <div className="frame-23">
                            <div className="frame-16">
                              <div className="text-wrapper-13">
                                <input
                                  type="text"
                                  name="University"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.University}
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-4">
                <div className="frame-30">
                  <div className="frame-18">
                    <img
                      className="iconsax-linear-2"
                      alt="Iconsax linear"
                      src="/img/iconsax-linear-arrowdown2.svg"
                    />
                    <div className="text-wrapper-8">User Adresse</div>
                  </div>
                  <div className="frame-31">
                    <div className="frame-7">
                      <img className="line" alt="Line" src="/img/line-5.svg" />
                    </div>
                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">Adresse</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">ex: Master - License ...</p>
                        </div>
                        <div className="frame-22">
                          <div className="frame-23">
                            <div className="frame-16">
                              <div className="text-wrapper-13">
                                <input
                                  type="text"
                                  name="Adresse"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.Adresse}
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">City</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">
                            Include section of diplome and year
                          </p>
                        </div>
                        <div className="frame-27">
                          <div className="frame-8">
                            <div className="frame-22">
                              <div className="frame-23">
                                <div className="frame-16">
                                  <div className="text-wrapper-13">
                                    <input
                                      type="text"
                                      name="City"
                                      onChange={handleChange}
                                      className="Inputchamp"
                                      placeholder={DATA.City}
                                    ></input>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="frame-22">
                              <div className="frame-23">
                                <div className="frame-16">
                                  <div className="text-wrapper-13">
                                    <input
                                      type="text"
                                      name="Zipcode"
                                      onChange={handleChange}
                                      className="Inputchamp"
                                      placeholder={DATA.Zipcode}
                                    ></input>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="frame-10">
                            <div className="text-wrapper-9">Contact</div>
                            <div className="frame-11">
                              <div className="text-wrapper-10">Required</div>
                            </div>
                          </div>
                          <p className="p">
                            Include section of diplome and year
                          </p>
                        </div>
                        <div className="frame-27">
                          <div className="frame-8">
                            <div className="frame-22">
                              <div className="frame-23">
                                <div className="frame-16">
                                  <div className="text-wrapper-13">
                                    <input
                                      type="text"
                                      name="Number1"
                                      onChange={handleChange}
                                      className="Inputchamp"
                                      placeholder={DATA.Number1}
                                    ></input>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="frame-22">
                              <div className="frame-23">
                                <div className="frame-16">
                                  <div className="text-wrapper-13">
                                    <input
                                      type="text"
                                      name="Number2"
                                      onChange={handleChange}
                                      className="Inputchamp"
                                      placeholder={DATA.Number2}
                                    ></input>
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

              <div className="frame-32">
                <div className="frame-33">
                  <div className="text-wrapper-15">Cancel</div>
                </div>
                <div className="frame-34">
                  <button type="submit" className="text-wrapper-16">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>  )
}

export default Edituser