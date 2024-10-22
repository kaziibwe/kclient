import Layout from "./Components/Layout/Layout"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./Auth/Login"
import Home from "./Manage/Home/Home"
import Category from "./Manage/Category/Category"
import AddCategory from "./Manage/Category/AddCategory"
import EditCategory from "./Manage/Category/EditCategory"
import Product from "./Manage/Product/Product"
import AddProduct from "./Manage/Product/AddProduct"
import EditProduct from "./Manage/Product/EditProduct"
import ProductGallary from "./Manage/ProductGallary/ProductGallary"
import EditProductGallary from "./Manage/ProductGallary/EditProductGallary"
import Step from "./Manage/Step/Step"
import AddProductGallary from "./Manage/ProductGallary/AddProductGallary"
import EditStep from "./Manage/Step/EditStep"
import AddStep from "./Manage/Step/AddStep"
import Ingredient from "./Manage/Ingredient/Ingredient"
import EditIngredient from "./Manage/Ingredient/EditIngredient"
import AddIngredient from "./Manage/Ingredient/AddIngredient"
import { AppContext } from "./Contex/AppContext"
import { useContext } from "react";

import Admin from "./Manage/Account/Admin/Admin"
import AddAdmin from "./Manage/Account/Admin/AddAdmin"
import Vendor from "./Manage/Account/Vendor/Vendor"
import AddVendor from "./Manage/Account/Vendor/AddVendor"
import User from "./Manage/Account/User/User"
import Derivaryman from "./Manage/Account/Derivaryman/Derivaryman"
import AddDerivaryman from "./Manage/Account/Derivaryman/AddDerivaryman"


const App = () => {
  const { user, loading } = useContext(AppContext);

  // Show spinner while loading
  // if (loading) {
  //   return (
  //     <div style={{
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       height: '100vh'  // Full screen height
  //     }}>
  //     <div className="spinner-border" role="status">
  //       <span className="visually-hidden">Loading...</span>
  //     </div>
  //     </div>

  //   );
  // }

  return (
<BrowserRouter>
<Routes>


        <Route path='/' element={user ?<Home />:<Login/>}></Route>
        {/* category */}
        <Route path='/category' element={user ?<Category />:<Login/>}></Route>
        <Route path='/addcategory' element={user ?<AddCategory />:<Login/>}></Route>
        <Route path='/editcategory/:id' element={user ?<EditCategory />:<Login/>}></Route>

        {/* product */}
        <Route path='/product' element={user ?<Product />:<Login/>}></Route>
        <Route path='/addproduct' element={user ?<AddProduct />:<Login/>}></Route>
        <Route path='/editproduct/:id' element={user ?<EditProduct/>:<Login/>}></Route>

        {/* productGallary */}
        <Route path='/ProductGallary' element={user ?<ProductGallary />:<Login/>}></Route>
        <Route path='/EditProductGallary/:id' element={user ?<EditProductGallary/>:<Login/>}></Route>
        <Route path='/AddProductGallary' element={user ?<AddProductGallary />:<Login/>}></Route>

        {/* step to prepare food */}
        
        <Route path='/step' element={user ?<Step />:<Login/>}></Route>
        <Route path='/editstep/:id' element={user ?<EditStep />:<Login/>}></Route>
        <Route path='/addstep' element={user ?<AddStep />:<Login/>}></Route>

        {/* ingredient for food */}
        <Route path='/ingredient' element={user ?<Ingredient />:<Login/>}></Route>
        <Route path='/editingredient/:id' element={user ?<EditIngredient />:<Login/>}></Route>
        <Route path='/addingredient' element={user ?<AddIngredient/>:<Login/>}></Route>

        {/* admin */}
        <Route path='/admin' element={user ?<Admin />:<Login/>}></Route>
        <Route path='/addadmin' element={user ?<AddAdmin />:<Login/>}></Route>

        {/* vendor */}
        <Route path='/vendor' element={user ?<Vendor />:<Login/>}></Route>
        <Route path='/addvendor' element={user ?<AddVendor />:<Login/>}></Route>

        {/* user */}
        <Route path='/user' element={user ?<User />:<Login/>}></Route>

        {/* delivarymen */}

        <Route path='/derivaryman' element={user ?<Derivaryman />:<Login/>}></Route>
        <Route path='/addderivaryman' element={user ?<AddDerivaryman />:<Login/>}></Route>



        
        <Route  path='/login' element={<Login/> }></Route>

        

        


      </Routes>
</BrowserRouter>
  );
}

export default App;
