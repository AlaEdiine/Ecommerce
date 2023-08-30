import React, { } from 'react';
import { BrowserRouter , Route, Routes  } from 'react-router-dom';
import Dash from './screens/dash/Dash';
import User from './screens/user/User';
import "./App.css";
import Adduser from './screens/user/Adduser';
import Product from './screens/product/Product';
import AddSupplier from './screens/supplier/AddSupplier';
import Supplier from './screens/supplier/Supplier';
import Promos from './screens/promos/Promos';
import Seller from './screens/seller/Seller';
import Invoice from './screens/invoice/Invoice';
import AddInvoice from './screens/invoice/AddInvoice';
import Purchase from './screens/purchase/Purchase';
import Species from './screens/speciesSeller/Species';
import Edituser from './screens/user/Edituser';
import Profile from './screens/user/Profile';
import EditSupplier from './screens/supplier/EditSupplier';
import ProfileSupplier from './screens/supplier/ProfileSupplier';
import Inbox from './screens/inbox/Inbox';
import AddProduct from './screens/product/AddProduct';
import EditProduct from './screens/product/EditProduct';
import Transaction from './screens/invoice/Transaction';

function App() {


  return (
      <BrowserRouter>
          <Routes>
            <Route  path="/dash" element={<Dash/>} /> 
            <Route  path="/user" element={<User/>} />
            <Route  path="/adduser" element={<Adduser/>} />
            <Route  path="/edituser" element={<Edituser/>} />
            <Route  path="/profileuser" element={<Profile/>} />
            <Route  path="/product" element={<Product/>} /> 
            <Route  path="/addproduct" element={<AddProduct/>} /> 
            <Route  path="/editproduct" element={<EditProduct/>} /> 
            <Route  path="/addsupplier" element={<AddSupplier/>} /> 
            <Route  path="/editsupplier" element={<EditSupplier/>} /> 
            <Route  path="/profilesupplier" element={<ProfileSupplier/>} /> 
            <Route  path="/supplier" element={<Supplier/>} /> 
            <Route  path="/promo" element={<Promos/>} /> 
            <Route  path="/seller" element={<Seller/>} /> 
            <Route  path="/invoice" element={<Invoice/>} /> 
            <Route  path="/transaction" element={<Transaction/>} /> 
            <Route  path="/addinvoice" element={<AddInvoice/>} /> 
            <Route  path="/addpurchase" element={<Purchase/>} /> 
            <Route  path="/species" element={<Species/>} /> 
            <Route  path="/inbox" element={<Inbox/>} /> 
          </Routes>
    </BrowserRouter>


  )
}


export default App;
