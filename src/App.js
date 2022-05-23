import "bootstrap/dist/css/bootstrap.min.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import auth from "./firebase.init";
import AddItems from "./pages/AddItems/AddItems";
import Main from "./pages/Home/Main/Main";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import ManageProducts from "./pages/ManageProducts/ManageProducts";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import HeaderMenu from "./pages/Shared/HeaderMenu/HeaderMenu";
import SignUp from "./pages/SignUp/SignUp";
import UserItems from "./pages/UserItems/UserItems";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/manageProduct"
          element={
            <RequireAuth>
              <ManageProducts />
            </RequireAuth>
          }
        />
        <Route
          path="/addItems"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        />
        <Route
          path="/myItems/:id"
          element={
            <RequireAuth>
              <UserItems />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
