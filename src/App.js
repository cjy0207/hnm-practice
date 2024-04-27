import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";


// 1. 전체 상품 페이지, 로그인, 상세 상품 페이지
// 1-1. navigation 바 만들기
// 2. 잔체 상품 페이지는 전체 상품을 보여줌
// 3. 로그인 버튼을 누르면 로그인 페이지로 넘어감, 상품 디테일을 눌렀으나 로그임 상태가 아니면 로그인 페이지로 넘어감
// 4. 로그인이 되어 있으면 상품 디테일 페이지를 볼 수 있음
// 5.로그아웃 버튼을 누르면 로그아웃
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없음, 다시 로그인 페이지가 보인다.
// 7. 로그아웃 로그인 상태를 나타내는 디테일
// 8. 상품 검색 기능


function App() {

  const [authenticate, setAuthenticate] = useState(false)
  useEffect(()=>{
    console.log("aaa",authenticate);
  },[authenticate])
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/products/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
