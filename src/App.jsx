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



const App = () => {
  return (
<BrowserRouter>
<Routes>
        <Route  path='/login' element={<Login/> }></Route>

        <Route path='/' element={<Home />}></Route>
        {/* category */}
        <Route path='/category' element={<Category />}></Route>
        <Route path='/addcategory' element={<AddCategory />}></Route>
        <Route path='/editcategory/:id' element={<EditCategory />}></Route>

        {/* product */}
        <Route path='/product' element={<Product />}></Route>
        <Route path='/addproduct' element={<AddProduct />}></Route>
        <Route path='/editproduct/:id' element={<EditProduct/>}></Route>

        {/* productGallary */}
        <Route path='/ProductGallary' element={<ProductGallary />}></Route>
        <Route path='/EditProductGallary/:id' element={<EditProductGallary/>}></Route>
        <Route path='/AddProductGallary' element={<AddProductGallary />}></Route>

        {/* step to prepare food */}
        
        <Route path='/step' element={<Step />}></Route>
        <Route path='/editproduct' element={<EditStep />}></Route>







        
        


      </Routes>
</BrowserRouter>
  );
}

export default App;
