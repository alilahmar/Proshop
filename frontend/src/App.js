import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ProductScreen from "./Screens/ProductScreen/ProductScreen";
import CartScreen from "./Screens/CartScreen/CartScreen";
import LoginScreen from "./Screens/loginScreen/LoginScreen";
import RegisterScreen from "./Screens/registerScreen/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen/ShippingScreen";
import PaymentScreen from "./Screens/paymentScreen/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen/OrderScreen";
import UserListScreen from "./Screens/UserListScreen/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen/UserEditScreen";
import ProductListScreen from "./Screens/ProductListscreen/ProductListScreen";
import ProductEditScreen from "./Screens/ProductEditScreen/ProductEditScreen";
import OrderListScreen from "./Screens/OrderListScreen/OrderListScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeOrder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />

          <Route path="/product/:id" component={ProductScreen} />
          {/* :id? that means optional */}
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
