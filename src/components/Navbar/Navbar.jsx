import { NavLink } from "react-router-dom";
import cn from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={cn.nav}>
      <div className={cn.item}>
        <NavLink to="/profile" className = { navData => navData.isActive ? cn.active : cn.item }>Profile</NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to="/dialogues" className = { navData => navData.isActive ? cn.active : cn.item }>Messages</NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to="/news" className = { navData => navData.isActive ? cn.active : cn.item }>News</NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to="/music" className = { navData => navData.isActive ? cn.active : cn.item }>Music</NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to="/settings" className = { navData => navData.isActive ? cn.active : cn.item }>Settings</NavLink >
      </div>
    </nav>
  );
};

export default Navbar;
