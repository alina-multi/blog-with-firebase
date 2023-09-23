
import { NavLink, useLocation } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { navigation } from "../../utils/navigation";


function NavigationList ({close}) {

    const location = useLocation();

    const { pathname } = location;
    const path = pathname.split("/")[1];

   return (<>

    {navigation.map((item) => (
      <NavLink
      onClick={close}
        key={item.name}
        to={item.href}
        className={classNames(
          `/${path}` === item.href ? "text-sky-300 " : " text-zinc-100",
          "font-semibold leading-6  text-lg "
        )}
      >
        <span className="flex gap-3">
          <item.icon
            className={classNames(
              `/${path}` === item.href
                ? "text-sky-300 "
                : " text-zinc-100",
              "h-6 w-6 "
            )}
          />
          {item.name}
        </span>
      </NavLink>
    ))}

</>
   ) 
}

export default NavigationList;