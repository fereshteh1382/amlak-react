import { useSelector } from "react-redux";

const AgencyDashboard = () =>{
    const agencyUser = useSelector(state => state.agencyUser);

    return(
        <section className="agency-body-content">
            <header><h1> داشبورد </h1></header>
            <div className="inner">
                <div className="account-information">
                    <h3> اطلاعات کاربری </h3>
                    <ul>
                        <li><i className="zmdi zmdi-account"></i> نام و نام خانوادگی : {agencyUser.Name} </li>
                        {/* <li> <i className="zmdi zmdi-assignment-account"></i> نام کاربری : younes.gh </li> */}
                        {/* <li> <i className="zmdi zmdi-email"></i> ایمیل :  </li> */}
                        {/* <li> <i className="zmdi zmdi-calendar-check"></i> تاریخ عضویت : 01/01/1395 </li> */}
                        <li> <i className="zmdi zmdi-smartphone-android"></i> شماره تماس : {agencyUser.mobile} </li>
                        <li> <i className="zmdi zmdi-smartphone-android"></i> تعداد پیام کوتاه باقیمانده : {agencyUser.remainingSms} </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AgencyDashboard;