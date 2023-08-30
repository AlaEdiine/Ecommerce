import Header from "../../components/Header";
import Side from "../../components/Side";
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { SnackbarProvider } from "notistack";
import Succes from "../../components/Snackbar/Succes";
import Error from "../../components/Snackbar/Error";
import "./AddProduct.css";

const AddProduct = () => {
  const user = "1122";
  const [load, setLoad] = useState(false);
  const [DATA, setDATA] = useState([]);
  const [forminput, setForminput] = useState({ PrimaryKey: "1122" });
  
  // State Upload Images
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const handleChange = (e) => {
    setForminput({ ...forminput, [e.target.name]: e.target.value });
  };

  // HandleChange des Images
  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleFileInputChange2 = (e) => {
    setFile2(e.target.files[0]);
  };
  const handleFileInputChange3 = (e) => {
    setFile3(e.target.files[0]);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("image", file2);
    formData.append("image", file3);

    try {
      await axios
        .post(`/PRODUIT/AJOUTER`, {
          forminput,
        })
        .then(async (response) => {
          const identifiant = response.data;
          await axios.post(`/UPLOAD-IMAGE/UPLOADIMGPRODUCT/${identifiant}`, formData);
          Succes("Product add with Success !", "success");
        });
    } catch (error) {
      console.log(error);
      return Error("This Product is Exist", "error");
    }
  };

  // -----------------------------------------------------------------------List Supplier
  useEffect(() => {
    try {
      setLoad(true);
      axios.get(`/FOURNISSEUR/GET_ALL/${user}`).then((result) => {
        setLoad(false);
       setDATA(result.data);
      });
    } catch {
      setLoad(false);
    } finally {
      setLoad(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Pagination
  // --------------------------------------------------------------------------End
 return (
    <form className="add-newsprod" onSubmit={handleSubmit}>
      <SnackbarProvider autoHideDuration={2500} />
      <input
        type="file"
        name="photo"
        id="file"
        onChange={handleFileInputChange}
        className="Inputchamp"
        hidden
      ></input>
            <input
        type="file"
        name="photo"
        id="file2"
        onChange={handleFileInputChange2}
        className="Inputchamp"
        hidden
      ></input>
            <input
        type="file"
        name="photo"
        id="file3"
        onChange={handleFileInputChange3}
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
                      <div className="text-wrapper-7">New Product</div>
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
                            <div className="text-wrapper-8">Product Upload</div>
                          </div>
                          <div className="frame-9">
                            <img
                              className="line"
                              alt="Line"
                              src="/img/line-5-3.svg"
                            />
                            <div className="frame-10">
                              <div className="frame-11">
                                <div className="frame-12">
                                  <div className="text-wrapper-9">
                                    Product Images
                                  </div>
                                  <div className="frame-13">
                                    <div className="text-wrapper-10">
                                      Not Required
                                    </div>
                                  </div>
                                </div>
                                <p className="p">
                                  The image format is .jpg .jpeg .png and a
                                  minimum size of 300 x 300 pixels (For optimal
                                  images use a minimum size of 700 x 700
                                  pixels).
                                  <br />
                                  Select product photos or drag and drop up to 5
                                  photos at once here. Include min. 3 attractive
                                  photos to make the product more attractive to
                                  buyers.
                                </p>
                              </div>
                              <label htmlFor="file" className="frame-14">
                                <div className="frame-15">
                                  <div className="text-wrapper-11">
                                    Choose a file
                                  </div>
                                </div>
                                <div className="frame-16">
                                  <div className="text-wrapper-12">
                                    Upload a file
                                  </div>
                                  <img
                                    className="iconsax-linear-3"
                                    alt="Iconsax linear"
                                    src="/img/iconsax-linear-arrowsquaredown.svg"
                                  />
                                </div>
                              </label>

                              <label htmlFor="file2" className="frame-14">
                                <div className="frame-15">
                                  <div className="text-wrapper-11">
                                    Choose a file
                                  </div>
                                </div>
                                <div className="frame-16">
                                  <div className="text-wrapper-12">
                                    Upload a file
                                  </div>
                                  <img
                                    className="iconsax-linear-3"
                                    alt="Iconsax linear"
                                    src="/img/iconsax-linear-arrowsquaredown.svg"
                                  />
                                </div>
                              </label>


                              <label htmlFor="file3" className="frame-14">
                                <div className="frame-15">
                                  <div className="text-wrapper-11">
                                    Choose a file
                                  </div>
                                </div>
                                <div className="frame-16">
                                  <div className="text-wrapper-12">
                                    Upload a file
                                  </div>
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
                            <div className="text-wrapper-8">
                              Product Information
                            </div>
                          </div>
                          <div className="frame-19">
                            <div className="frame-9">
                              <img
                                className="line"
                                alt="Line"
                                src="/img/line-5.svg"
                              />
                              <div className="frame-10">
                                <div className="frame-11">
                                  <div className="frame-12">
                                    <div className="text-wrapper-9">
                                      Product Full Name
                                    </div>
                                    <div className="frame-20">
                                      <div className="text-wrapper-10">
                                        Required
                                      </div>
                                    </div>
                                  </div>
                                  <p className="p">
                                    Include min. 40 characters to make it more
                                    attractive and easy for buyers to find,
                                    consisting of product type, brand, and
                                    information such as color, material, or
                                    type.
                                  </p>
                                </div>
                                <div className="frame-21">
                                  <div className="frame-22">
                                    <div className="frame-23">
                                      <div className="text-wrapper-13">
                                        <input
                                          type="text"
                                          name="label"
                                          onChange={handleChange}
                                          className="Inputchamp"
                                          placeholder="Product Name"
                                        ></input>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="frame-24">
                                    <div className="frame-25">
                                      <div className="frame-23">
                                        <div className="text-wrapper-13">
                                          <input
                                            type="text"
                                            name="Category"
                                            onChange={handleChange}
                                            className="Inputchamp"
                                            placeholder="Category       ex: carbonated"
                                          ></input>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-25">
                                      {load && <LoadPage></LoadPage>}
                                      <div className="frame-23">
                                        <div className="text-wrapper-13">
                                          <select
                                            // defaultValue="vide"
                                            name="Supplier"
                                            onChange={handleChange}
                                            required
                                          >
                                            <option hidden value="">
                                              Supplier
                                            </option>
                                            {DATA.map((item) => (
                                              <option key={item._id}
                                                name={item.label}
                                                value={item.label}
                                                required
                                              >
                                                {item.label}
                                              </option>
                                            ))}
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-wrapper-14">
                                    Maximum character 0/70
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="frame-9">
                              <div className="frame-10">
                                <div className="frame-11">
                                  <div className="frame-12">
                                    <div className="text-wrapper-9">QrCode</div>
                                    <div className="frame-20">
                                      <div className="text-wrapper-10">
                                        Required
                                      </div>
                                    </div>
                                  </div>
                                  <p className="p">
                                    Include @ characters to make it more
                                    attractive and easy
                                  </p>
                                </div>
                                <div className="frame-26">
                                  <div className="frame-27">
                                    <div className="frame-23">
                                      <div className="text-wrapper-13">
                                        <input
                                          type="text"
                                          name="QrCode"
                                          onChange={handleChange}
                                          className="Inputchamp"
                                          placeholder="Scanner QrCode"
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
                                    <div className="text-wrapper-9">
                                      Plus detail
                                    </div>
                                    <div className="frame-13">
                                      <div className="text-wrapper-10">
                                        Not Required
                                      </div>
                                    </div>
                                  </div>
                                  <p className="p">
                                    Include @ characters to make it more
                                    attractive and easy
                                  </p>
                                </div>
                                <div className="frame-26">
                                  <div className="frame-27">
                                    <div className="frame-23">
                                      <div className="text-wrapper-13">
                                        <input
                                          type="text"
                                          name="Lot"
                                          onChange={handleChange}
                                          className="Inputchamp"
                                          placeholder="Lot"
                                        ></input>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-26">
                                  <div className="frame-27">
                                    <div className="frame-23">
                                      <div className="text-wrapper-13">
                                        <input
                                          type="Date"
                                          name="ExpirationDate"
                                          onChange={handleChange}
                                          className="Inputchamp"
                                          placeholder="Scanner QrCode"
                                        ></input>
                                      </div>
                                    </div>
                                    <div className="information">
                                      Expiration Date
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
                            <div className="text-wrapper-8">
                              Product Variant (Details)
                            </div>
                          </div>
                          <div className="frame-19">
                            <div className="frame-9">
                              <img
                                className="line"
                                alt="Line"
                                src="/img/line-5.svg"
                              />
                            </div>
                            <div className="frame-9">
                              <div className="frame-10">
                                <div className="frame-11">
                                  <div className="frame-12">
                                    <div className="text-wrapper-9">
                                      Variant Information
                                    </div>
                                    <div className="frame-20">
                                      <div className="text-wrapper-10">
                                        Required
                                      </div>
                                    </div>
                                  </div>
                                  <p className="p">
                                    Apply price and stock on all variants or
                                    based on certain variant codes.
                                  </p>
                                </div>
                                <div className="frame-26">
                                  <div className="frame-27">
                                    <div className="frame-23">
                                      <div className="text-wrapper-13">
                                        <input
                                          type="number"
                                          name="PurchasePrice"
                                          onChange={handleChange}
                                          className="Inputchamp"
                                          placeholder="Purchase Price"
                                        ></input>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group">
                                    <div className="overlap-group">
                                      <div className="text-wrapper-15">$</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-26">
                                  <div className="frame-27">
                                    <div className="frame-23">
                                      <div className="text-wrapper-13">
                                        <input
                                          type="number"
                                          name="ProfitMargin"
                                          onChange={handleChange}
                                          className="Inputchamp"
                                          placeholder="Profit Margin"
                                        ></input>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group">
                                    <div className="overlap-group">
                                      <div className="text-wrapper-16">%</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-26">
                                  <div className="frame-27">
                                    <div className="frame-23">
                                      <div className="text-wrapper-13">
                                        <input
                                          type="number"
                                          name="SellingPrice"
                                          onChange={handleChange}
                                          className="Inputchamp"
                                          placeholder="Selling Price"
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
                                    <div className="text-wrapper-9">
                                      Wholesale
                                    </div>
                                    <div className="frame-13">
                                      <div className="text-wrapper-10">
                                        Not Required
                                      </div>
                                    </div>
                                  </div>
                                  <p className="p">
                                    Add wholesale price for certain quantity
                                    purchases.
                                  </p>
                                </div>
                                <div className="frame-28">
                                  <div className="overlap-group-wrapper">
                                    <div className="overlap-group-2">
                                      <div className="text-wrapper-17">
                                        Min.
                                      </div>
                                      <div className="text-wrapper-18">
                                        Max.
                                      </div>
                                      <div className="text-wrapper-19">
                                        Unit Price
                                      </div>
                                    </div>
                                  </div>
                                  <div className="frame-29">
                                    <div className="element-wholesale-price">
                                      1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      Wholesale Price 1
                                    </div>
                                    <div className="frame-28">
                                      <div className="frame-30">
                                        <div className="frame-26">
                                          <div className="frame-27">
                                            <div className="frame-23">
                                              <div className="text-wrapper-13">
                                                <input
                                                  type="number"
                                                  name="MinQTY1"
                                                  onChange={handleChange}
                                                  className="Inputchamp"
                                                  placeholder="Min . QTY"
                                                ></input>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-28">
                                      <div className="frame-30">
                                        <div className="frame-26">
                                          <div className="frame-27">
                                            <div className="frame-23">
                                              <div className="text-wrapper-13">
                                                <input
                                                  type="number"
                                                  name="MaxQTY1"
                                                  onChange={handleChange}
                                                  className="Inputchamp"
                                                  placeholder="Max . QTY"
                                                ></input>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-28">
                                      <div className="frame-30">
                                        <div className="frame-26">
                                          <div className="frame-27">
                                            <div className="frame-31">
                                              <div className="text-wrapper-13">
                                                <input
                                                  type="number"
                                                  name="Price1"
                                                  onChange={handleChange}
                                                  className="Inputchamp"
                                                  placeholder="Price"
                                                ></input>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="group-2">
                                        <div className="overlap-group-3">
                                          <div className="text-wrapper-15">
                                            $
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="frame-29">
                                    <div className="element-wholesale-price-2">
                                      2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      Wholesale Price 2
                                    </div>
                                    <div className="frame-28">
                                      <div className="frame-30">
                                        <div className="frame-26">
                                          <div className="frame-27">
                                            <div className="frame-23">
                                              <div className="text-wrapper-13">
                                                <input
                                                  type="number"
                                                  name="MinQTY2"
                                                  onChange={handleChange}
                                                  className="Inputchamp"
                                                  placeholder="Min . QTY"
                                                ></input>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-28">
                                      <div className="frame-30">
                                        <div className="frame-26">
                                          <div className="frame-27">
                                            <div className="frame-23">
                                              <div className="text-wrapper-13">
                                                <input
                                                  type="number"
                                                  name="MaxQTY2"
                                                  onChange={handleChange}
                                                  className="Inputchamp"
                                                  placeholder="Max . QTY"
                                                ></input>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-28">
                                      <div className="frame-30">
                                        <div className="frame-26">
                                          <div className="frame-27">
                                            <div className="frame-31">
                                              <div className="text-wrapper-13">
                                                <input
                                                  type="number"
                                                  name="Price2"
                                                  onChange={handleChange}
                                                  className="Inputchamp"
                                                  placeholder="Price"
                                                ></input>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="group-2">
                                        <div className="overlap-group-3">
                                          <div className="text-wrapper-15">
                                            $
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="frame-29">
                                    <div className="element-wholesale-price-2">
                                      3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      Wholesale Price 3
                                    </div>
                                    <div className="frame-28">
                                      <div className="frame-30">
                                        <div className="frame-26">
                                          <div className="frame-27">
                                            <div className="frame-23">
                                              <div className="text-wrapper-13">
                                                <input
                                                  type="number"
                                                  name="MinQTY3"
                                                  onChange={handleChange}
                                                  className="Inputchamp"
                                                  placeholder="Min . QTY"
                                                ></input>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-28">
                                      <div className="frame-30">
                                        <div className="frame-26">
                                          <div className="frame-27">
                                            <div className="frame-23">
                                              <div className="text-wrapper-13">
                                                <input
                                                  type="number"
                                                  name="MaxQTY3"
                                                  onChange={handleChange}
                                                  className="Inputchamp"
                                                  placeholder="Max . QTY"
                                                ></input>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-28">
                                      <div className="frame-30">
                                        <div className="frame-26">
                                          <div className="frame-27">
                                            <div className="frame-31">
                                              <div className="text-wrapper-13">
                                                <input
                                                  type="number"
                                                  name="Price3"
                                                  onChange={handleChange}
                                                  className="Inputchamp"
                                                  placeholder="Price"
                                                ></input>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="group-2">
                                        <div className="overlap-group-3">
                                          <div className="text-wrapper-15">
                                            $
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
                      <div className="frame-6">
                        <div className="frame-32">
                          <div className="frame-18">
                            <img
                              className="iconsax-linear-2"
                              alt="Iconsax linear"
                              src="/img/iconsax-linear-arrowdown2.svg"
                            />
                            <div className="text-wrapper-8">
                              Weight / Size&nbsp;&nbsp;/ Color
                            </div>
                          </div>
                          <div className="frame-33">
                            <div className="frame-9">
                              <img
                                className="line"
                                alt="Line"
                                src="/img/line-5.svg"
                              />
                            </div>
                            <div className="frame-9">
                              <div className="frame-10">
                                <div className="frame-11">
                                  <div className="frame-12">
                                    <div className="text-wrapper-8">
                                      Product Weight
                                    </div>
                                    <div className="frame-13">
                                      <div className="text-wrapper-10">
                                        Not Required
                                      </div>
                                    </div>
                                  </div>
                                  <p className="p">
                                    Enter the weight by weighing the product
                                    after it ispackaged.
                                  </p>
                                </div>
                                <div className="frame-34">
                                  <div className="frame-35">
                                    <div className="frame-23">
                                      <div className="text-wrapper-13">
                                        <select
                                          // defaultValue="vide"
                                          name="WeightType"
                                          onChange={handleChange}
                                          required
                                        >
                                          <option hidden value="">
                                            Weight ??
                                          </option>
                                          <option
                                            name="Gram"
                                            value="Gram"
                                            required
                                          >
                                            Gram (G)
                                          </option>
                                          <option
                                            name="Kilogram"
                                            value="Kilogram"
                                            required
                                          >
                                            Kilogram (KG)
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="frame-25">
                                    <div className="frame-23">
                                      <div className="text-wrapper-13">
                                        <input
                                          type="number"
                                          name="Weight"
                                          onChange={handleChange}
                                          className="Inputchamp"
                                          placeholder="Weight"
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
                                    <div className="text-wrapper-9">
                                      Product Size
                                    </div>
                                    <div className="frame-13">
                                      <div className="text-wrapper-10">
                                        Not Required
                                      </div>
                                    </div>
                                  </div>
                                  <p className="p">
                                    Enter the product size after packing to
                                    calculate the volume weight
                                  </p>
                                </div>
                                <div className="frame-28">
                                  <div className="frame-10">
                                    <div className="frame-26">
                                      <div className="frame-27">
                                        <div className="frame-23">
                                          <div className="text-wrapper-13">
                                            <input
                                              type="number"
                                              name="Width"
                                              onChange={handleChange}
                                              className="Inputchamp"
                                              placeholder="Width"
                                            ></input>
                                          </div>
                                        </div>
                                        <div className="group">
                                          <div className="overlap-group">
                                            <div className="text-wrapper-20">
                                              cm
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-28">
                                  <div className="frame-10">
                                    <div className="frame-26">
                                      <div className="frame-27">
                                        <div className="frame-23">
                                          <div className="text-wrapper-13">
                                            <input
                                              type="number"
                                              name="Height"
                                              onChange={handleChange}
                                              className="Inputchamp"
                                              placeholder="Height"
                                            ></input>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group">
                                    <div className="overlap-group">
                                      <div className="text-wrapper-20">cm</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-28">
                                  <div className="frame-10">
                                    <div className="frame-26">
                                      <div className="frame-27">
                                        <div className="frame-23">
                                          <div className="text-wrapper-13">
                                            <input
                                              type="number"
                                              name="Length"
                                              onChange={handleChange}
                                              className="Inputchamp"
                                              placeholder="Length"
                                            ></input>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group">
                                    <div className="overlap-group">
                                      <div className="text-wrapper-20">cm</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="frame-9">
                              <div className="frame-10">
                                <div className="frame-11">
                                  <div className="frame-12">
                                    <div className="text-wrapper-9">Color</div>
                                    <div className="frame-13">
                                      <div className="text-wrapper-10">
                                        Not Required
                                      </div>
                                    </div>
                                  </div>
                                  <p className="p">
                                    Include characters to make it more
                                    attractive and easy
                                  </p>
                                </div>
                                <div className="frame-28">
                                  <div className="frame-30">
                                    <div className="frame-26">
                                      <div className="frame-27">
                                        <div className="frame-23">
                                          <div className="text-wrapper-13">
                                            <input
                                              type="text"
                                              name="Color"
                                              onChange={handleChange}
                                              className="Inputchamp"
                                              placeholder="Color"
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
                      <div className="frame-38">
                        <button className="frame-39">
                          <div className="text-wrapper-21">Cancel</div>
                        </button>
                        <button  type="submit" className="frame-40">
                          <div className="text-wrapper-22">Save</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
