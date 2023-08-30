import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Supplier.css";
import Side from '../../components/Side';
import Header from "../../components/Header";
import LoadPage from "../../components/Loading/LoadPage";
import axios from "../../api/axios";
import Pagination from "@mui/material/Pagination";


const Supplier = () => {
  const user = "1122";
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
      const { data } = await axios.delete(`/FOURNISSEUR/DELETE/${BLOCK}`);
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
      axios.get(`/FOURNISSEUR/GET_ALL/${user}`).then((result) => {
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

  const PerPage = DATA.slice(startIndex, endIndex);

  const handleChangePage = (event, page) => {
    setCurrent(page);
  };
  return (
    <div className="supplie">
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
                      <div className="text-wrapper-7">Supplier</div>
                    </div>
                  </div>
                  <div className="frame-3">
                    <div className="frame-4">
                      <div className="frame-5">
                      <Link to="/addsupplier" className="link">
                        <div className="frame-6">
                          <div className="frame-7">
                            <div className="text-wrapper-8">Add New Supplier</div>
                          </div>
                        </div>
                        </Link>
                        <div className="frame-6">
                          <div className="frame-8">
                            <div className="text-wrapper-9">+</div>
                          </div>
                        </div>
                      </div>
                      <p className="p">Showing 1 to 10 of  {DATA.length} entries</p>
                      <div className="frame-9">
                        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-airpod.svg" onClick={Flex}/>
                        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-grid2.svg" onClick={Grid}/>
                        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-bagcross.svg" />
                        <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-printer.svg" />
                        <div className="frame-10">
                          <div className="frame-11">
                            <div className="text-wrapper-10">
                            <input type="text" className="Inputchamp" placeholder="Search ..."
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
            <div className={flex ? "frame-12" : "frame-12Hidden"}>
            {load && <LoadPage></LoadPage>}
              <div className="tableheader">
                <div className="text-wrapper-11">LOGO</div>
                <div className="text-wrapper-12">NAME</div>
                <div className="overlap-group">
                  <div className="text-wrapper-13">CONTACT</div>
                  <div className="text-wrapper-14">MF</div>
                </div>
                <div className="text-wrapper-15">STATUS</div>
                <div className="text-wrapper-16">ACTIONS</div>
              </div>
              <div className="bodytable">
              {PerPage.filter((elem) =>
                elem.label.includes(search) ||
                elem.Email.includes(search) ||
                elem.MF.includes(search)
              ).map((item) =>
                <div className="group"  key={item._id}>
                                          <Link
                            to="/profilesupplier"
                            className="lienvide"
                            state={{ id: item._id }}
                          ></Link>
                  <div className="overlap-group-2">
                    <div className="frame-13">
                      <div className="ellipse-wrapper">
                        <img className="ellipse" alt="Ellipse" 
                    src={`http://localhost:3001/images/${item.photo}`}
 />
                      </div>
                    </div>
                    <div className="overlap-group-3">
                      <div className="text-wrapper-17">{item.label}</div>
                      <div className="text-wrapper-18">{item.MF}</div>
                    </div>
                    <div className="text-wrapper-19">{item.City}</div>
                    <div className="text-wrapper-20">{item.Number1}</div>
                    <img className="line" alt="Line" src="/img/line-3-4.svg" />
                    <input
                              onClick={handleChange}
                              hidden
                              id={item._id}
                              name={item._id}
                              value={item._id}
                              readOnly
                            />
                       
                       <label htmlFor={item._id}>     
                    <div className="frame-14">
                      <img className="img-2" alt="Iconsax linear bag" src="/img/iconsax-linear-bag-4.svg" />
                      <div className="text-wrapper-21">Delete</div>
                    </div>
                    </label>

            
                    {item.Status === "Active" && (
                         <div className="frame-15">
                         <div className="frame-16">
                           <img
                             className="iconsax-linear-3"
                             alt="Iconsax linear"
                             src="/img/iconsax-linear-copysuccess-6.svg"
                           />
                           <div className="text-wrapper-22">{item.Status}</div>
                         </div>
                       </div>
                          )}
                          {item.Status === "Inactive" && (
                                  <div className="frame-15">
                                  <div className="frame-16">
                                    <img
                                      className="iconsax-linear-3"
                                      alt="Iconsax linear"
                                      src="/img/iconsax-linear-copysuccess-4.svg"
                                    />
                                    <div className="text-wrapper-24">{item.Status}</div>
                                  </div>
                                </div>
                          )}
                            <Link
                              to="/editsupplier"
                              className="link"
                              state={{ id: item._id }}
                            >
                    <div className="frame-17">
                      <img className="img-2" alt="Iconsax linear edit" src="/img/iconsax-linear-edit.svg" />
                      <div className="text-wrapper-23">Edit</div>
                    </div>
                    </Link>
                  </div>
                </div>
              )}
              </div>
            </div>




            <div className={grid ? "frame-18" : "frame-18Hidden"}>
            {PerPage.filter((elem) =>
                elem.label.includes(search) ||
                elem.Email.includes(search) ||
                elem.MF.includes(search)
              ).map((item) =>
              <div className="group-2"  key={item._id}>
                     <Link
                    to="/profilesupplier"
                    className="linkFlex"
                    state={{ id: item._id }}
                  ></Link>
                <div className="frame-19">
                <Link
                      to="/editsupplier"
                      className="link"
                      state={{ id: item._id }}
                    >
                  <div className="frame-20">
                    <img className="img-2" alt="Iconsax linear edit" src="/img/iconsax-linear-edit-5.svg" />
                    <div className="text-wrapper-23">Edit</div>
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
                  <div className="frame-21">
                    <img className="img-2" alt="Iconsax linear bag" src="/img/iconsax-linear-bag.svg" />
                    <div className="text-wrapper-21">Delete</div>
                  </div>
                  </label>
                </div>
                <img
                      className="overlap-group-4"
                      title="Last Photo"
                      alt="Ellipse"
                      src={`http://localhost:3001/images/${item.photo}`}
                    />
                  <div className="frame-22">
                    <div className="text-wrapper-25">{item.label}</div>
                  </div>
                  <div className="frame-23">
                    <div className="text-wrapper-26">{item.Number1}</div>
                  </div>
                
                <div className="frame-24">
                  <div className="frame-25">
                    <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-archivebook.svg" />
                    <div className="text-wrapper-27">Number Product : 911</div>
                  </div>
                  <div className="frame-25">
                    <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-cardtick1.svg" />
                    <div className="text-wrapper-27">MF : {item.MF}</div>
                  </div>
                  <div className="frame-25">
                    <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-copysuccess.svg" />
                    <div className="text-wrapper-27">Status: {item.Status}</div>
                  </div>
                </div>
              </div>
              )}
            </div>
            <div className="pagination">

<Pagination
count={NbPage}
page={current}
onChange={handleChangePage}
color="primary"
/>
</div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Supplier