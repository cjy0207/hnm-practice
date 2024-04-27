import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("./login")
  }

  const search=(event)=>{
    if(event.key === "Enter"){
      //압력한 값을 읽어와서 url을 바꿈
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  }


  return (
    <div>
      <div>
        <div className="login-button" onClick={gotoLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>

      <div className="nav-section">
        <img
          width={90}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdodW8JgMsJXGpwo4oYCwWyHUcT_7WN688r_4G7fUpJQ&s"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

          <div className="search-list">
            <div>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" onKeyPress={(event)=>search(event)}/>
            </div>
          </div> 
      </div>
    </div>
  );
};

export default Navbar;
