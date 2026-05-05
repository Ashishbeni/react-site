import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "./ProductsImages/Logo.png";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();

    const value = search.trim().toLowerCase();

    if (!value) {
      alert("Please enter something to search");
      return;
    }

    // 📌 HOME
    if (value.includes("home")) {
      navigate("/");
      setSearch("");
      return;
    }

    // 📌 ABOUT
    if (value.includes("about")) {
      navigate("/about");
      setSearch("");
      return;
    }

    // 📌 PRODUCTS
    if (value.includes("product") || value.includes("milk") || value.includes("ghee")) {
      navigate("/products?search=" + value);
      setSearch("");
      return;
    }

    // ❌ INVALID
    alert("❌ No result found");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div className="container">

          {/* Logo */}
          <Link to="/">
          <a className="navbar-brand d-flex align-items-center" href="#" >
            <img style={{width:"50px", height:"60px"}}
              src={Logo}
              alt="Buffalo Logo"
              width="40"
              className="me-2"
            />
            <strong className="text-primary"></strong>
          </a>
          </Link>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive("/") ? activeStyle : normalStyle}
                  to="/"
                >
                  <i class="fa-solid fa-house"></i>
                
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive("/about") ? activeStyle : normalStyle}
                  to="/about"
                >
                  <i class="fa-solid fa-circle-info"></i>

                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive("/products") ? activeStyle : normalStyle}
                  to="/products"
                >
                  <i class="fa-solid fa-bag-shopping"></i>
                
                </Link>
              </li>

             <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive("/contact") ? activeStyle : normalStyle}
                  to="/contact"
                >
                  <i class="fa-solid fa-address-book"></i>
                  
                </Link>
              </li> 

             <li className="nav-item" >
                <Link
                  className="nav-link"
                  style={isActive("/Cart") ? activeStyle : normalStyle}
                  to="/Cart"
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                  
                </Link>
              </li>                 

              <li className="nav-item">
                <button
                  className="btn btn-success ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#supportModal"
                >
                  Support
                </button>
              </li>

            </ul>

            {/* Search */}
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search milk products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

          </div>
        </div>
      </nav>

      {/* Support Modal */}
      <div className="modal fade" id="supportModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Support Form</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

/* Styles */
const activeStyle = {
  color: "#54a45b",
  fontWeight: "bold",
  borderBottom: "2px solid #54a45b"
};

const normalStyle = {
  color: "#000"
};

export default Header;