import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import MainLayout from "./Component/MainLayout"
import InMittel from "./Component/InMittel"
import Selected from "./Component/Selected"
import Product from "./Component/Product"
import Aboutus from "./Component/Aboutus"
import Register from "./Component/Register"
import Login from "./Component/Login"
import Cart from "./Component/Cart"

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <InMittel /> },
      { path: "/product", element: <Product /> },
      { path: "selected", element: <Selected /> },
      { path: "aboutus", element: <Aboutus /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "cart", element: <Cart /> },
    ],
  },
])

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={routers} />
      </CartProvider>
    </AuthProvider>
  )
}

export default App
