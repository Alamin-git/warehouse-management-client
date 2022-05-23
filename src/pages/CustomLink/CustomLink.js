import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
   let resolved = useResolvedPath(to);
   let match = useMatch({ path: resolved.pathname, end: true });

   return (
      <div style={{ display: "inline" }}>
         <Link
            style={{
               color: match ? "#7d529da7" : "",
               borderBottom: match ? "2px solid #7d529deb" : "",
               paddingBottom: match ? "5px" : "",
               transition: match ? " 0.3s" : "",
            }}
            to={to}
            {...props}
         >
            {children}
         </Link>
      </div>
   );
}

export default CustomLink;
