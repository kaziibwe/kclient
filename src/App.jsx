import Layout from "./Components/Layout/Layout"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./Auth/Login"
import Home from "./Manage/Home/Home"
import Category from "./Manage/Category/Category"
import AddCategory from "./Manage/Category/AddCategory"
import EditCategory from "./Manage/Category/EditCategory"



const App = () => {
  return (
<BrowserRouter>
<Routes>
        <Route  path='/login' element={<Login/> }></Route>

        <Route path='/' element={<Home />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/addcategory' element={<AddCategory />}></Route>
        <Route path='/editcategory/:id' element={<EditCategory />}></Route>

        


      </Routes>
</BrowserRouter>
  );
}

export default App;
