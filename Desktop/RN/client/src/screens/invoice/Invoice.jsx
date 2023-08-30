import { Link } from "react-router-dom";
import "./Invoice.css";
import Side from "../../components/Side";
import Header from "../../components/Header";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "../../api/axios";


const Invoice = () => {
  const user = "1122"
  const [listFournisseur, setlistFournisseur] = useState([]);
  const [items, setitems] = useState([]);
  const [list, setList] = useState([]);

  const [label, setlabel] = useState();
  const [adress, setadress] = useState();
  const [MF, setMF] = useState();
  const [email, setemail] = useState();
  const [taxe, settaxe] = useState(0);
  const [discount, setdiscount] = useState(0);
  
// add product
const addItem = (e) =>{
  setitems([...items , {nameProduct : e.label , category : e.Category , price : e.SellingPrice , quantity: "" , total : "" }]) 
}


  useEffect(() => {
    const getSupplier = () =>{
       axios.get(`/FOURNISSEUR/GET_ALL/${user}`).then((result) => {
        console.log(result.data);
        setlistFournisseur(result.data);
      });
    }
    getSupplier()
   
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Pagination

  
  useEffect(() => {
    axios.get(`/PRODUIT/GET_ALL/${user}`).then((result) => {
      console.log(result.data);
      setList(result.data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Pagination

  const handlerChange = (event,i) => {
    const { name , value } = event.target;
    const listInvoice = [... items]
    listInvoice[i][name] = value
    listInvoice[i]['total'] = listInvoice[i]['price'] * listInvoice[i]['quantity']
    setitems(listInvoice)
    // e.target.value = ""
  };

  const deleteItem = (i) =>{
    const inputData = [...items]
    inputData.splice(i,1)
    setitems(inputData)
  }

  const totalamount = items.reduce((acc,curr) => acc+ curr.total,0)
  console.log(totalamount);

  const handleChangeSupplier = (e) => {
    setadress(e.Adress +" "+e.City+" "+ e.Zipcode);
    setemail(e.Email);    
    setMF(e.MF);
    setlabel(e.label);
    e.value = ""
  };

  return (
    <div className="newinvoice">
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
              <div className="text-wrapper-7">New Invoice</div>
            </div>
            <div className="frame-2">
              <div className="frame-3">
                <div className="frame-wrapper">

                      <Select
            className="Select"
            isSearchable
            value={listFournisseur._id}
               onChange={handleChangeSupplier}
            options={listFournisseur}
            placeholder="Choise Supplier ..."
            autoFocus
          />{" "}
           
                </div>
              </div>
              <p className="p">
              <Select
            className="Select"
            isSearchable
            value={list._id}
               onChange={addItem}
            options={list}
            placeholder="Choise Product ..."
            autoFocus
          />{" "}
              </p>
              <div className="frame-6">
                <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-airpod.svg" />
                <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-grid2.svg" />
                <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-bagcross.svg" />
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
              <div className="frame-10">
                <div className="frame-11">
                  <div className="text-wrapper-11">INVOICE</div>
                  <div className="receipt-jan">
                    Receipt #1923195
                    <br />
                    Jan 02, 2021
                  </div>
                </div>
                <div className="frame-12">
                  <p className="div-2">
                    <span className="text-wrapper-12">
                      Client Details
                      <br />
                    </span>
                    <span className="text-wrapper-13">
                      {label}
                      <br />
                    </span>
                    <span className="text-wrapper-12">
                      {email}
                      <br />
                      {MF}
                      <br />
                      {adress}
                    </span>
                  </p>
                  <p className="div-3">
                    <span className="text-wrapper-12">
                      Payment to
                      <br />
                    </span>
                    <span className="text-wrapper-14">
                      Transfer bank
                      <br />
                    </span>
                    <span className="text-wrapper-12">virement / versement Espece / Chéque certifié</span>
                  </p>
                </div>
              </div>
              <div className="frame-13">
                <div className="tableproduct-2">
                  <div className="frame-14">
                    <div className="frame-15">
                      <div className="frame-16">
                        <div className="text-wrapper-15">DESCRIPTION</div>
                      </div>
                      <div className="frame-17">
                        <div className="text-wrapper-15">PRICE</div>
                        <div className="text-wrapper-15">QTY</div>
                        <div className="text-wrapper-16">SUBTOTAL</div>
                      </div>
                    </div>
                    {items?.map((item,i)=>
<div className="bodytable" key={i}>
<div className="frame-18">
  <div className="text-wrapper-17">{item.nameProduct}</div>
  <div className="text-wrapper-18">{item.category}</div>
</div>
<div className="frame-17">
  <div className="text-wrapper-19"> $ {item.price}</div>
  <div className="text-wrapper-20">
    <input type="number" className="Inputinvoice" placeholder="0" autoFocus name="quantity" 
    onChange={ e=>handlerChange(e,i)} /></div>
  <div className="text-wrapper-19">{item.total} 
  <img
                         className="images-2"
                         onClick={deleteItem}
                          alt="Iconsax linear bag"
                          src="/img/iconsax-linear-bag-1.svg"
                        /> </div>
</div>
</div>
                    )}

                  </div>
                </div>
                <div className="frame-19">
                  <div className="taxes">Taxes</div>
                  <div className="frame-20">
                    <div className="frame-21">
                      <div className="text-wrapper-21">         
                      <input type="text" className="INPUTTAXE" placeholder="0" autoFocus name="quantity" /> %</div>
                    </div>
                  </div>
                  <div className="frame-22">
                    <div className="frame-23">
                      <div className="text-wrapper-22">$600.00</div>
                    </div>
                  </div>
                </div>
                <div className="frame-19">
                  <div className="taxes">Discount</div>
                  <div className="frame-20">
                    <div className="frame-21">
                      <div className="text-wrapper-23">
                      <input type="text" className="INPUTTAXE" placeholder="0" autoFocus name="quantity" /> %</div>
                    </div>
                  </div>
                  <div className="frame-22">
                    <div className="frame-23">
                      <div className="text-wrapper-22">$115.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-12">
                <p className="div-2">
                  <span className="text-wrapper-12">
                    Bank Transfer
                    <br />
                  </span>
                  <span className="text-wrapper-24">
                    Alloui Ala Eddine
                    <br />
                  </span>
                  <span className="text-wrapper-12">
                    Bank Account : 098347234832
                    <br />
                    Code : LFT133243
                  </span>
                </p>
                <p className="div-3">
                  <span className="text-wrapper-12">
                    Total Amount
                    <br />
                  </span>
                  <span className="text-wrapper-25">
                    $ {totalamount}
                    <br />
                  </span>
                  <span className="text-wrapper-12">Taxes included</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 )
}

export default Invoice