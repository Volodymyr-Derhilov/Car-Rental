import { Suspense } from "react";
import css from "./Layout.module.css";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main>{children}</main>
      </Suspense>
    </>
  );
}
