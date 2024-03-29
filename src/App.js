import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import GreetClass from './Components/GreetClass';
// import Counter from './Components/Counter';
import User from './Components/useStateObject';
import ConditionalRendering from './Components/ConditionalRendering';
import BookList from './Components/BookList';
import CounterClass from './Components/CounterClass';
import LifeCycle from './Components/ClassLifeCycle';
import PostList from './Components/PostList';
import RegistrationForm from './Components/RegistrationForm';
import ChildComponent from './Components/PropertyDrilling/ChildComponent';
import ThemeContext from './Components/ThemeContext/ThemeContext';

import DashBoardComponent from './Components/ThemeContext/DashBoardComponent';
import UserContext from './Components/ThemeContext/UserContext';
import DashBoard1 from './Components/ChildToParentComponent/DashBoard1';
import { ThemeProvider } from './Components/ChildToParentComponent/RefactoredWithuseContext/ThemeContext';
import DashBoard2 from './Components/ChildToParentComponent/RefactoredWithuseContext/DashBoard2';
// import browserrouter and route from the react-router-dom

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Components/Routing/Home';

import About from './Components/Routing/About';
import Products from './Components/Routing/Products';
import Navigation from './Components/Routing/Navigation';
import Orders from './Components/Routing/Orders';
import ProductDetails from './Components/Routing/ProductDetails';
import NewCars from './Components/Routing/NewCars';
import OldCars from './Components/Routing/OldCars';
// import Cart from './Components/Routing/Cart';
import ProtectedComponentWrapper from './Components/Routing/ProtectedRoute';
import Counter from './Components/useReducer/Counter';
import AppProvider from './Components/useReducer/AppContext';
import ProductList from './Components/useReducer/ProductList';
import Cart from './Components/useReducer/Cart';
import Order from './Components/HOC/Order';
import ParentComponent from './Components/useCallBackMemo/ParentComponent';




function App() {
  // define theme for the application
  let theme = "dark";
  let name = "Chandan";	

  let isUserAuthenticated = false;// hard coding the authentication

  // you may check for the token in the local storage and validity of the token


  return (
    <div className="App">
      <ParentComponent />
      {/* <Order message="this is new Order"/> */}

      {/* <AppProvider >
        <ProductList/>
        <Cart/>
      </AppProvider> */}

      {/* <Router>
        <Navigation />
        <Routes>

         <Route path="/Counter" element={<Counter/>} /> 
          
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        
        <Route path="/carts" element={
            <ProtectedComponentWrapper>
                <Cart />
            </ProtectedComponentWrapper>
        } />

      
        
          <Route path="/products" element={<Products/>} >
          <Route path="newcars" element={<NewCars/>} />
          <Route path="oldcars" element={<OldCars/>} />
          </Route>
          <Route path="/products/:name/:model" element={<ProductDetails/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </Router> */}

        {/* <Route path="/carts" element={isAuthenticated ? <Cart/> : <Navigate to="/login" />} /> */}
          {/* <Route path="orders" element={isAuthenticated ? <Orders/> : <Navigate to="/login" />} /> */}
                  {/* i want to protect the cart component */}
          {/* use the protected route for the cart component */}
          {/* <ProtectedRoute path="/carts" element={<Cart/>} isAuthenticated={isUserAuthenticated} /> */}
          {/* <Route path="/carts" element={<Cart/>} /> */}

      {/* <ThemeProvider>
        <DashBoard2/>
      </ThemeProvider> */}

      {/* <DashBoard1 /> */}

      {/* <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={name}>
        <DashBoardComponent />
        </UserContext.Provider>
      </ThemeContext.Provider> */}
      {/* <ChildComponent theme={theme}/> */}
      {/* <PostList /> */}
      {/* <RegistrationForm /> */}
      {/* <LifeCycle/> */}
      {/* <CounterClass /> */}
      

      {/* <BookList /> */}
      {/* <ConditionalRendering /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <Greet  firstName="Mahesh" lastName="Kumar" data = {employee}/>
      <Greet  firstName="Senthil" lastName="Kumar"  data = {employee}/>
      <Greet  firstName="Pramod" lastName="Kumar"  data = {employee}/>
      <Greet  firstName="Sushma" lastName="Kumari"  data = {employee}/>
      <Greet  firstName="Collins" lastName="Kumar"  data = {employee}/>

      <GreetClass  firstName="MaheshClass" lastName="KumarClas" data = {employee}/> */}
    </div>
  );
}

export default App;
