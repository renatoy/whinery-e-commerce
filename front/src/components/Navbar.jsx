import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default ({ onSearch, vinos, clearInput, onChange }) => {
    const ref = useRef(null)
    return (

        <div>
            <nav className=" navegador navbar  navbar-expand-lg navbar-light  ">
                <Link to="/" className="navbar-brand" ><button className="btn btn-dark my-2 my-sm-2">WINERY</button></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item botones">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item botones">
                            <Link className="nav-link" to="/register">Registrarse </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login"><button type="button" className="btn btn-secondary">Log In </button></Link>
                        </li>
                        <li className="nav-item botones">
                            <Link className="nav-link" to="/register">Log Out </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart"><button type="button" className="btn btn-secondary">Cart </button></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={onSearch}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={ref} value={clearInput} onChange={onChange}></input>
                       <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
};
