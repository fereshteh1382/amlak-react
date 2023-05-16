import { NavLink } from "react-router-dom";
import { getUserInfoByToken } from "../../utils/TokenManagement";

const AgencySidebar = () =>{
    const user = getUserInfoByToken();
    return(
        <aside>
            <div className="avatar-layer">
                <div className="img-layer">
                    {/* <a href="" className="change-image"><i className="zmdi zmdi-edit"></i></a> */}
                    <img src="/images/pic/avatar.jpg" />
                </div>
                <div className="detail">
                    <span>{user.Name}</span>
                    <span>{user.mobile}</span>
                    <span> تاریخ عضویت :   </span>
                </div>
            </div>
            <section>
                <header>
                    <h3> میز کار </h3>
                </header>
                <div className="inner">
                    <ul>
                        <li><NavLink to="/agency/customers" className={({ isActive }) => isActive ? "active" : ""}> مشتریان </NavLink></li>
                    </ul>
                </div>
                <div className="inner">
                    <ul>
                        <li><NavLink to="/agency/estate"  className={({ isActive }) => isActive ? "active" : ""}>  ملک ها   </NavLink></li>
                    </ul>
                </div>
                <div className="inner">
                    <ul>
                        <li><NavLink to="/agency/contract"  className={({ isActive }) => isActive ? "active" : ""}> قراردادها  </NavLink></li>
                    </ul>
                </div>
                <div className="inner">
                    <ul><li><NavLink to="/agency/logout"> خروج از حساب کاربری </NavLink></li></ul>
                </div>
            </section>
        </aside>
    )
}

export default AgencySidebar;