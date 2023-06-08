import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { UsersLayout } from "../layout/UsersLayout";
import { MealLayout } from "../layout/MealLayout";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersLayout />}>
        <Route index element={<MealLayout/>}/>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};
