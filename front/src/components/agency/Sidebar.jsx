const AgencySidebar = () => {
    return (
        <aside>
            <div className="avatar-layer">
                <div className="img-layer">
                    <a href="" className="change-image"><i className="zmdi zmdi-edit"></i></a>
                    <img src="images/pic/avatar.jpg" />
                </div>
                <div className="detail">
                    <span>adasjd</span>
                    <span>09153016225</span>
                    <span> تاریخ عضویت :   </span>
                </div>
            </div>
            <section>
                <header>
                    <h3> میز کار </h3>
                </header>
                <div className="inner">
                    <ul>
                        <li><a href="/customers"> باشگاه مشتریان </a></li>
                    </ul>
                </div>
                <div className="inner">
                    <ul>
                        <li><a href="/logout"> ملک ها   </a></li>
                    </ul>
                </div>
                <div className="inner">
                    <ul>
                        <li><a href="/logout"> قراردادها  </a></li>
                    </ul>
                </div>
                <div className="inner">
                    <ul><li><a href="/logout"> خروج از حساب کاربری </a></li></ul>
                </div>
            </section>
        </aside>
    )
}

export default AgencySidebar;