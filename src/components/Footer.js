import React from "react";

export default function footer() {
  return (
    <footer className="w-100 bg-dark text-center text-light py-3 fixed-bottom">
      &copy; {new Date().getFullYear()} N-10. All Rights Reserved | Terms and Conditions
    </footer>
  );
}
