import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return <Outlet />;

};

export default PrivateRoute;
