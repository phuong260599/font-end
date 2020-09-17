import * as React from 'react';
import {Link } from 'react-router-dom'
class Menu extends React.Component {
    render() {
        return (
            <div className="container-fluid pb-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">MY HOME</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/create">CREATE</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            
            </div>
          </nav>
            </div>
        )
    }
}
export default (Menu);
