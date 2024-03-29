import { Navigate } from 'react-router-dom';

function ProtectedComponentWrapper({ children }) {
    const isAuthenticated = false; // replace with your authentication logic

    console.log(children);
    // what is children here?

    return isAuthenticated 
        ? children
        : <Navigate to="/about" />;
}

export default ProtectedComponentWrapper;