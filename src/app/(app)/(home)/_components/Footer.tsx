import React from "react";

const Footer = () => {
  return (
    <footer className=" py-4 mt-auto">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Funroad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
