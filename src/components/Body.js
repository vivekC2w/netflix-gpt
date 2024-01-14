import React from "react";
import Login from "../pages/Login";
import Browse from "../pages/Browse";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import VideoPlayback from "../pages/VideoPlayback";

const Body = () => {
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PrivateRoute/>}>
        <Route index path="" element={<Browse />}/>
        <Route path="login" element={<Login/>}/>
        <Route path="play/:movieId" element={<VideoPlayback/>}/>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
