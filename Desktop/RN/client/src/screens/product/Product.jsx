import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Side from "../../components/Side";
import LoadPage from "../../components/Loading/LoadPage";
import axios from "../../api/axios";
import "./Product.css";

const Product = () => {
  const elem = "1122";
  const [search, setSearch] = useState("");
  const [Confirmation, setConfirmation] = useState(false);
  const [BLOCK, setBLOCK] = useState();
  const [load, setLoad] = useState(false);
  const [DATA, setDATA] = useState([]);
  const [flex, setflex] = useState(true);
  const [grid, setgrid] = useState(false);

  const Flex = () => {
    setflex(true);
    setgrid(false);
  };

  const Grid = () => {
    setflex(false);
    setgrid(true);
  };

  const handleChange = (e) => {
    setBLOCK(e.target.value);
    setConfirmation(true);
  };
  const Close = () => {
    setConfirmation(false);
  };

  const handleSubmit = async (e) => {
    try {
      const { data } = await axios.delete(`/PRODUIT/DELETE/${BLOCK}`);
      console.log(data);
      setConfirmation(false);
      setRender(!render);
      Succes("success");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      setLoad(true);
      axios.get(`/PRODUIT/GET_ALL/${elem}`).then((result) => {
        setLoad(false);
        console.log(result.data);
        setDATA(result.data);
      });
    } catch {
      setLoad(false);
    } finally {
      setLoad(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Pagination
  const items = 10;
  const [current, setCurrent] = useState(1);
  const NbPage = Math.ceil(DATA.length / items);

  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;

  const DataPerPage = DATA.slice(startIndex, endIndex);

  const handleChangePage = (event, page) => {
    setCurrent(page);
  };
  return (
    <div className="prod">
          {Confirmation && (
        <div className="popupmsg">
          <div className="dialogue">
            <div className="msge">
              <div className="texttitle">Delete user</div>
              <p className="textp">Are you sure to delete this user !!</p>
            </div>
            <div className="confirm">
              <button className="btnconfirm" onClick={handleSubmit}>
                <div className="titleconfirm">Confirmer</div>
              </button>
              <button onClick={Close} className="close">
                <div className="textclose">Annuller</div>
              </button>
            </div>
            <div className="iconeclose" onClick={Close}>
              x
            </div>
          </div>
        </div>
      )}
      <Side></Side>
      <div className="container">
        <div className="sub-design">
          <div className="rectangle" />
        </div>
        <div className="main">
          <Header></Header>
          <div className="tableproduct">
            <div className="frame">
              <div className="frame-2">
                <div className="frame-2">
                  <div className="frame-wrapper">
                    <div className="div-wrapper">
                      <div className="text-wrapper-7">Product</div>
                    </div>
                  </div>
                  <div className="frame-3">
                    <div className="frame-4">
                      <div className="frame-5">
                        <Link to="/addproduct" className="link">
                          <div className="frame-6">
                            <div className="frame-7">
                              <div className="text-wrapper-8">
                                Add New Product
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="frame-6">
                          <div className="frame-8">
                            <div className="text-wrapper-9">+</div>
                          </div>
                        </div>
                      </div>
                      <p className="p">
                        Showing 1 to 10 of {DATA.length} entries
                      </p>
                      <div className="frame-9">
                        <img
                          className="img"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-airpod.svg"
                          onClick={Flex}
                        />
                        <img
                          className="img"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-grid2.svg"
                          onClick={Grid}
                        />
                        <img
                          className="img"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-bagcross.svg"
                        />
                        <img
                          className="img"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-printer.svg"
                        />
                        <div className="frame-10">
                          <div className="frame-11">
                            <div className="text-wrapper-10">
                              <input
                                type="text"
                                className="Inputchamp"
                                placeholder="Search ..."
                                onChange={(e) => setSearch(e.target.value)}
                              ></input>
                            </div>
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
            </div>
            <div className="frame-12">
              <div className={flex ? "tableproduct-2" : "tableproduct-2Hidden"}>
                <div className="frame-12">
                  <div className="frame-13">
                    <div className="IMAGES">&nbsp;&nbsp; IMAGES</div>
                    <div className="PRODUCT-NAME">&nbsp;&nbsp;PRODUCT NAME</div>
                    <div className="text-wrapper-11">STOCK</div>
                    <div className="text-wrapper-11">SELLING PRICE</div>
                    <div className="text-wrapper-11">STATUS</div>
                    <div className="text-wrapper-12">ACTIONS</div>
                  </div>
                  {load && <LoadPage></LoadPage>}
                  <div className="bodytable">
                  {DataPerPage.filter(
                (elem) =>
                  elem.label.includes(search) ||
                  elem.QrCode.includes(search) ||
                  elem.Lot.includes(search)
                                  ).map((item) =>
                  
                    <div className="frame-14" key={item._id}>
                       <Link
                            to="/profileuser"
                            className="lienvide"
                            state={{ id: item._id }}
                          ></Link>
                      <div className="frame-15">
                        <div className="ellipse-wrapper">
                          <img
                            className="ellipse"
                            alt="Ellipse"
                            src={`http://localhost:3001/images/${item.photo1}`}
                          />
                        </div>
                        <div className="ellipse-wrapper">
                          <img
                            className="ellipse"
                            alt="Ellipse"
                            src={`http://localhost:3001/images/${item.photo2}`}
                          />
                        </div>
                        <div className="ellipse-wrapper">
                          <img
                            className="ellipse"
                            alt="Ellipse"
                            src={`http://localhost:3001/images/${item.photo3}`}
                          />
                        </div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-13">{item.label}</div>
                        <div className="text-wrapper-14">{item.Category}</div>
                      </div>
                      <div className="text-wrapper-15">{item.Stock}</div>
                      <div className="text-wrapper-16">{item.SellingPrice}</div>
                      {item.Status === "In Stock" && (
                      <div className="frame-17">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-copysuccess-6.svg"
                        />
                        <div className="text-wrapper-17">{item.Status}</div>
                      </div>
                      )}
                        {item.Status === "Of Stock" && (
                      <div className="frame-17">
                        <img
                          className="iconsax-linear-3"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-copysuccess-4.svg"
                        />
                        <div className="text-wrapper-19">{item.Status}</div>
                      </div>
                      )}
                      <div className="frame-18">
                        <img
                          className="line"
                          alt="Line"
                          src="/img/line-3.svg"
                        />
                          <Link
                              to="/editproduct"
                              className="link"
                              state={{ id: item._id }}
                            >
                        <div className="frame-19">
                          <img
                            className="img-2"
                            alt="Iconsax linear edit"
                            src="/img/iconsax-linear-edit-8.svg"
                          />
                          <div className="text-wrapper-18">Edit</div>
                        </div>
                        </Link>
                        <input
                              onClick={handleChange}
                              hidden
                              id={item._id}
                              name={item._id}
                              value={item._id}
                              readOnly
                            />
                            <label htmlFor={item._id}>
                        <div className="frame-20">
                          <img
                            className="img-2"
                            alt="Iconsax linear bag"
                            src="/img/iconsax-linear-bag-4.svg"
                          />
                          <div className="text-wrapper-18">Delete</div>
                        </div>
                        </label>
                      </div>
                    </div>
                                  )}
                  </div>
                </div>
              </div>
              <div className={grid ? "frame-21" : "frame-21Hidden"}>
                <div className="group">
                  <div className="frame-22">
                    <div className="frame-23">
                      <img
                        className="img-2"
                        alt="Iconsax linear edit"
                        src="/img/iconsax-linear-edit-3.svg"
                      />
                      <div className="text-wrapper-20">Edit</div>
                    </div>
                    <div className="frame-24">
                      <img
                        className="img-2"
                        alt="Iconsax linear bag"
                        src="/img/iconsax-linear-bag-1.svg"
                      />
                      <div className="text-wrapper-21">Delete</div>
                    </div>
                  </div>
                  <div className="overlap-group">
                    <div className="frame-25">
                      <div className="text-wrapper-22">IPHONE 11 PRO MAX</div>
                    </div>
                    <div className="smartphone-tablet-wrapper">
                      <div className="smartphone-tablet">
                        Smartphone &amp; tablet
                      </div>
                    </div>
                  </div>
                  <div className="frame-26">
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-bitcoinrefresh-3.svg"
                      />
                      <div className="text-wrapper-23">Price : $91</div>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-i3square-1.svg"
                      />
                      <div className="text-wrapper-23">Remaining Stock: 50</div>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-copysuccess-1.svg"
                      />
                      <div className="text-wrapper-23">Status: Inactive</div>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="frame-22">
                    <div className="frame-23">
                      <img
                        className="img-2"
                        alt="Iconsax linear edit"
                        src="/img/iconsax-linear-edit.svg"
                      />
                      <div className="text-wrapper-20">Edit</div>
                    </div>
                    <div className="frame-24">
                      <img
                        className="img-2"
                        alt="Iconsax linear bag"
                        src="/img/iconsax-linear-bag-2.svg"
                      />
                      <div className="text-wrapper-21">Delete</div>
                    </div>
                  </div>
                  <div className="overlap">
                    <div className="frame-25">
                      <div className="text-wrapper-22">IPHONE 11 PRO MAX</div>
                    </div>
                    <div className="smartphone-tablet-wrapper">
                      <div className="smartphone-tablet">
                        Smartphone &amp; tablet
                      </div>
                    </div>
                  </div>
                  <div className="frame-26">
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-bitcoinrefresh-2.svg"
                      />
                      <div className="text-wrapper-23">Price : $91</div>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-i3square.svg"
                      />
                      <div className="text-wrapper-23">Remaining Stock: 50</div>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-copysuccess.svg"
                      />
                      <div className="text-wrapper-23">Status: Inactive</div>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="frame-22">
                    <div className="frame-23">
                      <img
                        className="img-2"
                        alt="Iconsax linear edit"
                        src="/img/iconsax-linear-edit-1.svg"
                      />
                      <div className="text-wrapper-20">Edit</div>
                    </div>
                    <div className="frame-24">
                      <img
                        className="img-2"
                        alt="Iconsax linear bag"
                        src="/img/iconsax-linear-bag-1.svg"
                      />
                      <div className="text-wrapper-21">Delete</div>
                    </div>
                  </div>
                  <div className="overlap-group">
                    <div className="frame-25">
                      <div className="text-wrapper-22">IPHONE 11 PRO MAX</div>
                    </div>
                    <div className="smartphone-tablet-wrapper">
                      <div className="smartphone-tablet">
                        Smartphone &amp; tablet
                      </div>
                    </div>
                  </div>
                  <div className="frame-26">
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-bitcoinrefresh-1.svg"
                      />
                      <div className="text-wrapper-23">Price : $91</div>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-i3square-1.svg"
                      />
                      <div className="text-wrapper-23">Remaining Stock: 50</div>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-copysuccess-1.svg"
                      />
                      <div className="text-wrapper-23">Status: Inactive</div>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="frame-22">
                    <div className="frame-23">
                      <img
                        className="img-2"
                        alt="Iconsax linear edit"
                        src="/img/iconsax-linear-edit.svg"
                      />
                      <div className="text-wrapper-20">Edit</div>
                    </div>
                    <div className="frame-24">
                      <img
                        className="img-2"
                        alt="Iconsax linear bag"
                        src="/img/iconsax-linear-bag.svg"
                      />
                      <div className="text-wrapper-21">Delete</div>
                    </div>
                  </div>
                  <div className="overlap">
                    <div className="frame-25">
                      <div className="text-wrapper-22">IPHONE 11 PRO MAX</div>
                    </div>
                    <div className="smartphone-tablet-wrapper">
                      <div className="smartphone-tablet">
                        Smartphone &amp; tablet
                      </div>
                    </div>
                  </div>
                  <div className="frame-26">
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-bitcoinrefresh.svg"
                      />
                      <div className="text-wrapper-23">Price : $91</div>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-i3square.svg"
                      />
                      <div className="text-wrapper-23">Remaining Stock: 50</div>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-copysuccess.svg"
                      />
                      <div className="text-wrapper-23">Status: Inactive</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          </div> 
        </div>
      </div>
  );
};

export default Product;
