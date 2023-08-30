import React, { useEffect, useState } from "react";
import Side from "../../components/Side";
import Header from "../../components/Header";
import axios from "../../api/axios";
import { SnackbarProvider } from "notistack";
import Succes from "../../components/Snackbar/Succes"
import Error from "../../components/Snackbar/Error"
import { useLocation } from "react-router";
import "./AddSupplier.css";

const EditSupplier = (props) => {
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
              `/FOURNISSEUR/GET/${OuvrierUpdateById}`
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
            `/FOURNISSEUR/UPDATE/${OuvrierUpdateById}`,
            forminput
          );
          if (file !== null){
            await axios.post(`/UPLOAD-IMAGE/UPLOADIMGSUPPLIER/${OuvrierUpdateById}`, formData)
          }
          console.log(data);
          Succes("Supplier Updated with Success !","success");
        } catch (error) {
          console.error(error);
          return Error("This Email Supplier is Exist", "error");
        }
      };

  return (

    <form className="add-newsupplier" onSubmit={handleSubmit}>
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
                      <div className="text-wrapper-7">New Supplier</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-3">
              <div className="frame-4">
                <div className="frame">
                  <div className="frame-wrapper">
                    <div className="frame-5">
                      <div className="frame-6">
                        <div className="frame-7">
                          <div className="frame-8">
                            <img
                              className="iconsax-linear-2"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-arrowdown2-3.svg"
                            />
                            <div className="text-wrapper-8">Fournisseur Upload</div>
                          </div>
                          <div className="frame-9">
                            <img className="line" alt="Line" src="/img/line-5.svg" />
                            <div className="frame-10">
                              <div className="frame-11">
                                <div className="frame-12">
                                  <div className="text-wrapper-9">Fournisseur Logo</div>
                                  <div className="frame-13">
                                    <div className="text-wrapper-10">Not Required</div>
                                  </div>
                                </div>
                                <p className="text-wrapper-11">
                                  The image format is .jpg .jpeg .png and a minimum size of 300 x 300 pixels (For
                                  optimal images use a minimum size of 700 x 700 pixels).
                                  <br />
                                  Select product photos or drag and drop up to 5 photos at once here. Include min. 3
                                  attractive photos to make the product more attractive to buyers.
                                </p>
                              </div>
                              <div  className="frame-14">
                                <div className="frame-15">
                                <img className="imgframe" title="Last Photo" alt="Ellipse" 
                                                    src={`http://localhost:3001/images/${DATA.photo}`}
                                                    />
                                </div>
                              </div>
                              <label htmlFor="file" className="frame-14">
                                <div className="frame-15">
                                  <div className="text-wrapper-12">Choose a file</div>
                                </div>
                                <div className="frame-16">
                                  <div className="text-wrapper-13">Upload a file</div>
                                  <img
                                    className="iconsax-linear-3"
                                    alt="Iconsax linear"
                                    src="/img/iconsax-linear-arrowsquaredown.svg"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-6">
                        <div className="frame-17">
                          <div className="frame-18">
                            <img
                              className="iconsax-linear-2"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-arrowdown2-1.svg"
                            />
                            <div className="text-wrapper-8">Fournisseur Information</div>
                          </div>
                          <div className="frame-19">
                            <div className="frame-9">
                              <img className="line" alt="Line" src="/img/line-5.svg" />
                              <div className="frame-10">
                                <div className="frame-11">
                                  <div className="frame-12">
                                    <div className="text-wrapper-9">Fournisseur Full Name</div>
                                    <div className="frame-20">
                                      <div className="text-wrapper-10">Required</div>
                                    </div>
                                  </div>
                                  <p className="text-wrapper-11">
                                    Include min. 40 characters to make it more attractive and easy for buyers to find,
                                    consisting of product type, brand, and information such as color, material, or type.
                                  </p>
                                </div>
                                <div className="frame-21">
                                  <div className="frame-22">
                                    <div className="frame-23">
                                      <div className="text-wrapper-14">
                                      <input
                                  type="text"
                                  name="label"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.label}
                                ></input>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="frame-22">
                                    <div className="frame-23">
                                      <div className="text-wrapper-14">
                                      <input
                                  type="text"
                                  name="Category"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.Category}
                                ></input>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="frame-9">
                              <div className="frame-10">
                                <div className="frame-11">
                                  <div className="frame-12">
                                    <div className="text-wrapper-9">Email</div>
                                    <div className="frame-20">
                                      <div className="text-wrapper-10">Required</div>
                                    </div>
                                  </div>
                                  <p className="text-wrapper-11">
                                    Include @ characters to make it more attractive and easy
                                  </p>
                                </div>
                                <div className="frame-24">
                                  <div className="frame-25">
                                    <div className="frame-23">
                                      <div className="text-wrapper-14">
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
                      <div className="frame-6">
                        <div className="frame-7">
                          <div className="frame-18">
                            <img
                              className="iconsax-linear-2"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-arrowdown2-1.svg"
                            />
                            <div className="text-wrapper-8">Fournisseur Detail</div>
                          </div>
                          <div className="frame-19">
                            <div className="frame-9">
                              <img className="line" alt="Line" src="/img/line-5.svg" />
                            </div>
                            <div className="frame-9">
                              <div className="frame-10">
                                <div className="frame-11">
                                  <div className="frame-12">
                                    <div className="text-wrapper-9">MF
                                    </div>
                                    <div className="frame-20">
                                      <div className="text-wrapper-10">Required</div>
                                    </div>
                                  </div>
                                  <div className="text-wrapper-11">Choise Matricule fiscale</div>
                                </div>
                                <div className="frame-24">
                                  <div className="frame-25">
                                    <div className="frame-23">
                                      <div className="text-wrapper-14">
                                      <input
                                  type="text"
                                  name="MF"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.MF}
                                ></input>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="frame-9">
                              <div className="frame-10">
                                <div className="frame-11">
                                  <div className="frame-12">
                                    <div className="text-wrapper-9">Adresse</div>
                                    <div className="frame-20">
                                      <div className="text-wrapper-10">Required</div>
                                    </div>
                                  </div>
                                  <p className="text-wrapper-11">
                                    Include characters to make it more attractive and easy
                                  </p>
                                </div>
                                <div className="frame-26">
                                  <div className="frame-27">
                                    <div className="frame-24">
                                      <div className="frame-25">
                                        <div className="frame-23">
                                          <div className="text-wrapper-14">
                                          <input
                                  type="text"
                                  name="Adress"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.Adress}
                                ></input>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-24">
                                      <div className="frame-25">
                                        <div className="frame-23">
                                          <div className="text-wrapper-14">
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
                                  </div>
                                  <div className="frame-28">
                                    <div className="frame-25">
                                      <div className="frame-23">
                                        <div className="text-wrapper-14">
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
                        </div>
                      </div>
                      <div className="frame-6">
                        <div className="frame-29">
                          <div className="frame-18">
                            <img
                              className="iconsax-linear-2"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-arrowdown2.svg"
                            />
                            <div className="text-wrapper-8">Fournisseur Contact</div>
                          </div>
                          <div className="frame-30">
                            <div className="frame-9">
                              <img className="line" alt="Line" src="/img/line-5.svg" />
                            </div>
                            <div className="frame-9">
                              <div className="frame-10">
                                <div className="frame-11">
                                  <div className="frame-12">
                                    <div className="text-wrapper-8">Mobile</div>
                                    <div className="frame-20">
                                      <div className="text-wrapper-10">Required</div>
                                    </div>
                                  </div>
                                  <p className="text-wrapper-11">
                                    Choise identity type CIN (carte identité nationale) or Passeport or Carte Séjour and
                                    include characters to make it more attractive and easy
                                  </p>
                                </div>
                                <div className="frame-31">
                                  <div className="frame-32">
                                    <div className="frame-23">
                                      <div className="text-wrapper-14">
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
                                  <div className="frame-33">
                                    <div className="frame-34">
                                      <div className="text-wrapper-14">
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
                            <div className="frame-9">
                              <div className="frame-10">
                                <div className="frame-11">
                                  <div className="frame-12">
                                    <div className="text-wrapper-9">Fixe</div>
                                    <div className="frame-20">
                                      <div className="text-wrapper-10">Required</div>
                                    </div>
                                  </div>
                                  <p className="text-wrapper-11">
                                    Include characters to make it more attractive and easy
                                  </p>
                                </div>
                                <div className="frame-26">
                                  <div className="frame-10">
                                    <div className="frame-24">
                                      <div className="frame-25">
                                        <div className="frame-23">
                                          <div className="text-wrapper-14">
                                          <input
                                  type="text"
                                  name="Fixe"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.Fixe}
                                ></input>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-26">
                                  <div className="frame-10">
                                    <div className="frame-24">
                                      <div className="frame-25">
                                        <div className="frame-23">
                                          <div className="text-wrapper-14">
                                          <input
                                  type="text"
                                  name="Fax"
                                  onChange={handleChange}
                                  className="Inputchamp"
                                  placeholder={DATA.Fax}
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
                      <div className="frame-35">
                        <div className="frame-36">
                          <div className="text-wrapper-15">Cancel</div>
                        </div>
                        <div className="frame-37">
                          <button type="submit" className="text-wrapper-16">Save</button>
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
    </form>  )
}

export default EditSupplier