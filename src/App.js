import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import Auth from "./auth/auth";
// import {AuthProvider} from

function App() {
  return (
    <>

        {/*<AuthProvider>*/}
            <Auth/>
            <Home/>
        {/*</AuthProvider>*/}
    </>
  );
}

export default App;
