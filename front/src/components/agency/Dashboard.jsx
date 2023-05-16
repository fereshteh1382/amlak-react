const AgencyDashboard = () =>{
    return(
        <section className="user-account-content">
            <header><h1> داشبورد </h1></header>
            <div className="inner">
                <div className="account-information">
                    <h3> اطلاعات کاربری </h3>
                    <ul>
                        <li><i className="zmdi zmdi-account"></i> نام و نام خانوادگی : adasjd </li>
                        <li> <i className="zmdi zmdi-assignment-account"></i> نام کاربری : younes.gh </li>
                        <li> <i className="zmdi zmdi-email"></i> ایمیل :  </li>
                        <li> <i className="zmdi zmdi-calendar-check"></i> تاریخ عضویت : 01/01/1395 </li>
                        <li> <i className="zmdi zmdi-smartphone-android"></i> شماره تماس : 0912000000 </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AgencyDashboard;