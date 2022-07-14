
export default function ListContent({isClick}) {
    return (

        <ul className={`options ${isClick ? " active" : ""}`}>
                <li className="option">
                    <i className=" bx bxl-deezer"></i>
                    <span className="option-text">Cá nhân</span>
                </li>
                <li className="option">
                    <i className="bx bx-log-out"></i>
                    <span className="option-text">Đăng xuất</span>
                </li>
            </ul>
    );
}
