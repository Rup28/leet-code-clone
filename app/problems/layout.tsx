"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Topbar from "@/components/Topbar/Topbar";
export default function ({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
        <ToastContainer/>
        <Topbar problemPage/>
        <div>{children}</div>
    </RecoilRoot>
  );
}
