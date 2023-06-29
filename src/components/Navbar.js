import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  //some of css variables
  let bor={ borderRadius:"20px"};
  let red={backgroundColor:"#ff00007d"};
  // custom themes functions
  const theme1= ()=>{//function 1
    props.apptheme("light");
    props.alertFun('light mode enabled');
  }
  const theme2= ()=>{//function 2
    props.apptheme("dark");
    props.alertFun('dark mode enabled');
  }
  const theme3= ()=>{//function 2
    props.apptheme("reddish");
    props.alertFun('reddish theme enabled');
  }
  const theme4= ()=>{//function 2
    props.apptheme("hacker");
    props.alertFun('hacker theme enabled');
  }
  
  //set the theme of the nav bar
  let navth;
  let navtxt;
  if(props.theme==='light'){
    navth='light';
  }else if(props.theme==='dark'){
    navth='dark';
  }else if(props.theme==='reddish'){
    navth='dark';
    navtxt='danger';
  }else{
    navth='dark';
    navtxt='success';
  }
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${navth} bg-${navth}`} style={red}>
      <a className={`navbar-brand text-${navtxt}`} href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className={`nav-link text-${navtxt}`} href="/">{props.f1} <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className={`nav-link text-${navtxt}`} href="/">{props.f2}</a>
          </li>
          {/* here f1,f2,f3 are field names */}
          <li className="nav-item">
            <a className={`nav-link text-${navtxt}`} href="/">{props.f3}</a>
          </li>
        </ul>


        {/* theme dropdown */}
        <div className="dropdown mx-3" id='theme'>
          <button className="btn dropdown-toggle" style={bor} type="button"data-bs-toggle="dropdown">
            {props.theme} Theme
          </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <div className="dropdown-item">
                  <div className="form-check my-2 px-2 mx-3">
                    <input className="form-check-input" type="radio" name="themes" id="theme1" onClick={theme1} defaultChecked/>
                    <label className="form-check-label" htmlFor="theme1" >
                      light Theme
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item">
                  <div className="form-check my-2 px-2 mx-3">
                    <input className="form-check-input" type="radio" name="themes" id="theme2" onClick={theme2}/>
                    <label className="form-check-label" htmlFor="theme2" >
                      dark Theme
                    </label>
                  </div>
                </div>
              </li>

              <li>
                <div className="dropdown-item">
                  <div className="form-check my-2 px-2 mx-3">
                    <input className="form-check-input" type="radio" name="themes" id="theme3" onClick={theme3}/>
                    <label className="form-check-label" htmlFor="theme3" >
                      3rd Theme
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-item">
                  <div className="form-check my-2 px-2 mx-3">
                    <input className="form-check-input" type="radio" name="themes" id="theme4" onClick={theme4}/>
                    <label className="form-check-label" htmlFor="theme4" >
                      4th Theme
                    </label>
                  </div>
                </div>
              </li>

            </ul>
        </div>

        {/* search box form */}
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" id='search' type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

Navbar.propTypes= {
    title: PropTypes.string.isRequired,
    f1: PropTypes.string,
    f2: PropTypes.string,
    f3: PropTypes.string,
    theme: PropTypes.string,
    apptheme:PropTypes.func
};

Navbar.defaultProps= {
    title: "provide title",
    f1: "here i can have upto 3 fields"
}