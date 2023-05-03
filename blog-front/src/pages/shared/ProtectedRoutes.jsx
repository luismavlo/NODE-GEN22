import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyPostsThunk } from "../../store/slices/myPosts.slice";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyPostsThunk());
  }, []);

  if (localStorage.getItem("token")) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
