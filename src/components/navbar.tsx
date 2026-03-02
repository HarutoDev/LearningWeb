import "./css/navbar.css";
const Navbar = () => {
    return (
        <header className="navbar">
            <h1 className="logo">My Website</h1>
            <ul className="nav-links">
                <li className="nav-item">
                    <a href="#"> Trang chủ</a>
                </li>
                <li className="nav-item">
                    <a href="#">Sản phẩm</a>
                </li>
                <li className="nav-item">
                    <a href="#">Nhân viên</a>
                </li>
                <li className="nav-item">
                    <a href="#">Khách hàng</a>
                </li>
                <li className="nav-item">
                    <a href="#">Hỗ trợ</a>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;