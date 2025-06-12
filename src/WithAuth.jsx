import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      // If the user is not authenticated, redirect them to the login page
      if (!user) {
        navigate("/auth/login");
      }
    }, [user]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
