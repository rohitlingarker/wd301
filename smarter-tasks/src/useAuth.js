import React, { useState ,useEffect} from 'react';


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const signin = () => setIsAuthenticated(true);
    const signout = () => setIsAuthenticated(false);
    const authContextValue = {
      isAuthenticated,
      signin,
      signout,
    };
    
    useEffect(() => {
      const isAuth = !!localStorage.getItem('authToken');
      setIsAuthenticated(isAuth)
    }, [])
    
    return (
      <AuthContext.Provider value={authContextValue}>
        {children}
      </AuthContext.Provider>
    );
  }