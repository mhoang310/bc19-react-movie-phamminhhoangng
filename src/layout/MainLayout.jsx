import React from "react";
import { Outlet, useNavigate } from "react-router-dom";


const MainLayout = () => {
  const navigate = useNavigate();

  const onDelete = () => {
    localStorage.removeItem("user");
    navigate(`/`);
  };

  // const onDelete = () => {
  //   const value = inpsearch.current.value; // input value
  //   // Lưu trữ value tren url bằng search params: ?
  //   setSearchParams({ search: value });
  //   // Call API lay danh sach phim theo gia tri search
  //   fetchMovies();
  // };

  return (
    <div style={{ minHeight: "100vh" }}>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">          
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABNVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////7QibkNivkNCn/+/v9q577Si/+8/L/7uz62tj8jHvvh4D8g3HqX1bMzc37SC3Rvrv+9/bwkozsbVn/8/HMzc7kOS7mOyW/LSP+8O/5y8joUkj8QibvgXr8/f35+frQ0ND5SS/iNSrYMyj9ppnQMSb39vbg39/W1tbfNCnHLyT//fz9+fjv7+/8qZzwPSbz8/Pr6+vn5+fj4+Pb29v6xsLyopr5opTnnJHhlIj7Ryz+6ef9rqP0qaH5UzrlOjD7RSnqOyW6KyL/4t3kz8zgzcrQtrP9tar9sqfte3TCd3L6emftbVrsbFnpUj3mQjgGeX2GAAAAF3RSTlMA+9EF9vDruKakj2lPSS8sGQ3i4b69OIta07gAAAM+SURBVGje1drpUhNBFIbhnuwrYe9JIIoLERQJqAkkJmELsqNsIu77/V+CJrH8JsxUf52R6SrfG3iqq7t/nSOchXPpZChmyX/KioWS6VxYeDeSSYwSQBsaTWRGPIhwNh6RN1gknnWdZjgVlTdcNDXcbwyNywAaH3IakyEZSKFJGEPM8K/8PcvwhAysiT/3Ek7JAEv13lg2KgMsmu3+wbgMtHjnV2YiMtAiGSHCCRlwibDIjcmAG8uJtCUDzkqLpAy8pAjJwAuJmAy8mLBk4FlCGuh/QZrtilTEkJnzOW7srK20qqfTt30iM/cfz1OluTY7u/D+q31PoQiVUShQpXrw23jw3bZVilAZ+TxTqq2O8dC2lYpQGkyp7MNQKEJlUGVvBYZCEQqDKrswlIpQGExpw1ArghpQ3I8XBhSOwKBK9QAGUYTKgJI/cj9eGEwRKgPIk2XX44VBFaFtzG05jb0FGFQRusbSs+694PHCoIrQNpy334ZBFSDccL6xnTUYXAHCDShNGHqK0DWgVA9w51wBwg0olRYMTUVoGlBaKzA0FaE0fh72DFRrfPnwTcuAAuSo4HWQ056BGlflH09tVycXl7ar4uF15NbdvFt5PX/4Oe+sflVetD2M7XevVl3G9BQQLwVMoc8olxdxDnTxtrIPBQaQPkXZOoz+Lo+nKntQYAAhCowNGNcqPZ+Suy+hwACipdRgeCttKDCA6Ci1RtdQKTtdBQYQXaVnqJXm0SoMF0KVWp0YHWVLVs+LMFwIU+obHYMox1ty81OxBAMIUWDQTjrKxzMYQBQKHi/+ObuXzU3JESgwGjCIMi2RA+FKDQZFzrQQKHhY3MAf9EaoUn/j1wDClHX/BhCi1F74N4AQxafBESh+DY5A8W1wBMod7f8BQxNBj6BQgyH8LNxgCFe4QRGucIMjXOEGR+jt87fLEa5wgyNc4QZHuMINjnCFGxzhCjc4whVucIQr3OAIV7jBEa5wgyNcgaEfRhuDKKWBDAtDmgGU0jYMjWIYN+kqMHQLYXCmrRRh6JUcfAS4tDygYaWNDDONjGVNDJiNjMpNDP2NrC+YWMQwsVJiYjnGxJqPiYUlE6tXRpfIjKzD/QKIj6Xp8VGBdwAAAABJRU5ErkJggg==" alt="Logo" className="jss5" />

          <button className="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="myMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a onClick={() => navigate(`/`)} className="nav-link jss9">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link jss9">Cinemas</a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link jss9" data-toggle="dropdown">News</a>
                {/* <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">New film</a>
                  <a href="#" className="dropdown-item">Idol</a>
                </div> */}
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link jss9">Aplication</a>
              </li>
            </ul>
            <button className="btn btn-outline ml-5" onClick={() => navigate(`/login`)}>
              Login
            </button>
            <button className="btn btn-outline ml-2" onClick={() => navigate(`/register`)}>
              Register
            </button>
            <button className="btn btn-danger ml-2" onClick={onDelete}>X</button>
          </div>

        </div>
      </nav>

      {/* Phần body của layout là nơi các routes được render ra */}
      <Outlet />

      <footer id="footer">
        <div className="footer grid">
          <div className="footer__content">
            <ul className="footer__item">
              <h3>Contact</h3>
              <li className="footer__item--contact">
                <i className="fa fa-map-marker-alt" />
                <span>Estate Business, #32841 block, #22DRS Real estate building, UK.</span>
              </li>
              <li className="footer__item--contact">
                <i className="fa fa-phone" />
                <span>+(21)-255-999-8888</span>
              </li>
              <li className="footer__item--contact">
                <i className="far fa-envelope-open" />
                <span>corporate-mail@support.com</span>
              </li>
            </ul>
            <ul className="footer__item">
              <h3>Featured Links</h3>
              <li>
                <a target="_blank" href="https://www.cgv.vn/" rel="noreferrer">
                  <img src="../../img/cgv.png" alt="" className="jss145" />
                </a>                
              </li>
              <li>
                <a target="_blank" href="https://www.bhdstar.vn/" rel="noreferrer">
                  <img src="../../img/BHD.png" alt="" className="jss145" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.galaxycine.vn/" rel="noreferrer">
                  <img src="../../img/galaxy.png" alt="" className="jss145" />
                </a>
              </li>
              <li>
                <a target="_blank" href="http://cinestar.com.vn/" rel="noreferrer">
                  <img src="../../img/cine.png" alt="" className="jss145" />
                </a>
              </li>              
            </ul>
            <ul className="footer__item">
              <h3>Quick Links</h3>
              <li><a onClick={() => navigate(`/`)} href="#home">Home</a></li>
              <li><a href="#welcome">About</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>
          </div>
          <div className="footer__copyright">
            <i className="far fa-copyright" />
            <span>2020 Mastery. All rights reserved by W3layouts</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default MainLayout;
