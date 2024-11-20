import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="container flex justify-between items-center py-4 mx-auto">
      <div>Logo</div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
      </div>
      <div>Menu</div>
    </div>
  );
};
