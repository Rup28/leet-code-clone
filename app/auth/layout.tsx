"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function ({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
        <ToastContainer/>
        <div>{children}</div>
    </RecoilRoot>
  );
}
