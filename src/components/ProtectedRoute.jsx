// In your App.js or separate routes file

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    
    if (loading) {
        return <Preloader />;
    }
    
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    
    if (loading) {
        return <Preloader />;
    }
    
    // Check the role from the nested user object
    return user?.user?.role === 'ADMIN' ? children : <Navigate to="/dashboard" />;
};