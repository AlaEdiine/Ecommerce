import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Side from "../../components/Side";
import LoadPage from "../../components/Loading/LoadPage";
import axios from "../../api/axios";
import "./User.css";

const User = () => {
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
      const { data } = await axios.delete(`/OUVRIER/DELETE/${BLOCK}`);
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
      axios.get(`/OUVRIER/GET_ALL/${user}`).then((result) => {
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
    <div className="user">
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
                      <div className="text-wrapper-7">User list</div>
                    </div>
                  </div>
                  <div className="frame-3">
                    <div className="frame-4">
                      <div className="frame-5">
                        <Link to="/adduser" className="link">
                          <div className="frame-6">
                            <div className="frame-7">
                              <div className="text-wrapper-8">Add New User</div>
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
                          alt="Iconsax outline"
                          src="/img/iconsax-outline-userremove.svg"
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
              <div className={flex ? "tableproduct-2" : "tableproduct-2Hidden"}>
                <div className="tableproduct-2">
                  <div className="frame-12">
                    <div className="frame-13">
                      <div className="IMAGES">&nbsp;&nbsp; IMAGES</div>
                      <div className="USER-NAME">&nbsp;&nbsp;USER NAME</div>
                      <div className="text-wrapper-11">LOGIN</div>
                      <div className="text-wrapper-11">PASSWORD</div>
                      <div className="text-wrapper-11">STATUS</div>
                      <div className="text-wrapper-12">ACTIONS</div>
                    </div>
                    {load && <LoadPage></LoadPage>}
                    <div className="bodytable">
                    {DataPerPage.filter(
                (user) =>
                  user.Nom.includes(search) ||
                  user.Prenom.includes(search) ||
                  user.Login.includes(search)
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
                                title="Last Photo"
                                alt="Ellipse"
                                src={`http://localhost:3001/images/${item.photo}`}
                              />
                            </div>
                            <div className="ellipse-wrapper">
                              <img
                                className="ellipse"
                                alt="Ellipse"
                                src="/img/ellipse-4-1.png"
                              />
                            </div>
                            <div className="ellipse-wrapper">
                              <img
                                className="ellipse"
                                alt="Ellipse"
                                src="/img/ellipse-4.png"
                              />
                            </div>
                          </div>

                          <div className="frame-16">
                            <div className="text-wrapper-13">
                              {item.Nom} {item.Prenom}
                            </div>
                            <div className="text-wrapper-14">{item.City}</div>
                          </div>
                          <div className="text-wrapper-15">{item.Login}</div>
                          <div className="text-wrapper-16">{item.Password}</div>

                          {item.Status === "Active" && (
                            <div className="frame-17">
                              <img
                                className="iconsax-linear-3"
                                alt="Iconsax linear"
                                src="/img/iconsax-linear-copysuccess-6.svg"
                              />
                              <div className="text-wrapper-17">
                                {item.Status}
                              </div>
                            </div>
                          )}
                          {item.Status === "Inactive" && (
                            <div className="frame-17">
                              <img
                                className="iconsax-linear-3"
                                alt="Iconsax linear"
                                src="/img/iconsax-linear-copysuccess-4.svg"
                              />
                              <div className="text-wrapper-19">
                                {item.Status}
                              </div>
                            </div>
                          )}
                          <div className="frame-18">
                            <img
                              className="line"
                              alt="Line"
                              src="/img/line-3.svg"
                            />
                            <Link
                              to="/edituser"
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
              </div>
            </div>
            <div className={grid ? "frame-21" : "frame-21Hidden"}>
            {DataPerPage.filter(
                (user) =>
                  user.Nom.includes(search) ||
                  user.Prenom.includes(search) ||
                  user.Login.includes(search)
              ).map((item) => (
                <div className="group" key={item._id}>
                  <Link
                    to="/profileuser"
                    className="linkFlex"
                    state={{ id: item._id }}
                  ></Link>
                  <div className="frame-22">
                    <Link
                      to="/edituser"
                      className="link"
                      state={{ id: item._id }}
                    >
                      <div className="frame-23">
                        <img
                          className="img-2"
                          alt="Iconsax linear edit"
                          src="/img/iconsax-linear-edit-3.svg"
                        />
                        <div className="text-wrapper-20">Edit</div>
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
                      <div className="frame-24">
                        <img
                         className="img-2"
                          alt="Iconsax linear bag"
                          src="/img/iconsax-linear-bag-1.svg"
                        /> 
                        <div className="text-wrapper-21">Delete</div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <img
                      className="overlap-group"
                      title="Last Photo"
                      alt="Ellipse"
                      src={`http://localhost:3001/images/${item.photo}`}
                    />
                    <div className="frame-25">
                      <div className="text-wrapper-22">
                        {item.Nom} {item.Prenom}
                      </div>
                    </div>
                    <div className="smartphone-tablet-wrapper">
                      <div className="smartphone-tablet">{item.City}</div>
                    </div>
                  </div>
                  <div className="frame-26">
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-keysquare-1.svg"
                      />
                      <div className="text-wrapper-23">
                        Login : {item.Login}
                      </div>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear eye"
                        src="/img/iconsax-linear-eye-1.svg"
                      />
                      <div className="text-wrapper-23">
                        Password : {item.Password}
                      </div>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-copysuccess-1.svg"
                      />
                      <div className="text-wrapper-23">
                        Status: {item.Status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
  );
};

export default User;
