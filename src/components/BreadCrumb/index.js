import React from "react";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Breadcrumb = (props) => {
  const { filters } = useContext(AppContext);

  const paths = filters[0]?.values[0]?.path_from_root;

  return (
    <div>
      <nav className="breadcrumb__container">
        <ul className="breadcrumbs">
          {paths?.map((el, index) => {
            return (
              <li key={index} className="breadcrumbs__item">
                <a href="" className="breadcrumbs__link">
                  {el.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;