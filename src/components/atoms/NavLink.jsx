import { NavLink } from "react-router-dom";


export default function Link ({item, children}){
    return (
        <NavLink
        key={item.name}
        to={item.href}
        className="font-semibold leading-6 "
      >
        {children}
      </NavLink>
    )
}