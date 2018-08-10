import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Register from './Register';
import Login from './Login';

class Intro extends Component {
  render() {
  
    return (
      <div>
        <Router>
            <div>
                <div className="mainbar">

  <div className="container">

    <button type="button" className="btn mainbar-toggle" data-toggle="collapse" data-target=".mainbar-collapse">
      <i className="fa fa-bars"></i>
    </button>

    <div className="mainbar-collapse collapse">

      <ul className="nav navbar-nav mainbar-nav">

        <li className="active">
          <a href="./index.html">
            <i className="fa fa-dashboard"></i>
            Dashboard
          </a>
        </li>

        <li className="dropdown ">
          <a href="#about" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
            <i className="fa fa-desktop"></i>
            UI Features
            <span className="caret"></span>
          </a>

          <ul className="dropdown-menu">   
            <li><a href="./ui-buttons.html"><i className="fa fa-user nav-icon"></i> Buttons</a></li>
            <li><a href="./ui-tabs.html"><i className="fa fa-bars nav-icon"></i> Tabs & Accordions</a></li>
            <li><a href="./ui-notifications.html"><i className="fa fa-asterisk nav-icon"></i> Popups / Notifications</a></li>
            <li><a href="./ui-sliders.html"><i className="fa fa-tasks nav-icon"></i> Sliders</a></li>
            <li><a href="./ui-typography.html"><i className="fa fa-font nav-icon"></i> Typography</a></li>
            <li><a href="./ui-portlets.html"><i className="fa fa-list-alt nav-icon"></i> Portlets</a></li>
            

            <li className="dropdown-submenu">
              <a tabIndex="-1" href="href-no-hash">
              <i className="fa fa-bar-chart-o"></i> 
              &nbsp;&nbsp;Charts & Graphs
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a href="./ui-chart-flot.html">
                  <i className="fa fa-bar-chart-o"></i> 
                  &nbsp;&nbsp;jQuery Flot
                  </a>
                </li>

                <li>
                  <a href="./ui-chart-morris.html">
                  <i className="fa fa-bar-chart-o"></i> 
                  &nbsp;&nbsp;Morris.js
                  </a>
                </li> 
              </ul>
            </li>
            
          </ul>
        </li>

        <li className="dropdown ">
          <a href="href-no-hash" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
          <i className="fa fa-align-left"></i> 
          Data Elements
            <span className="caret"></span>
          </a>

          <ul className="dropdown-menu">
            <li className="dropdown-header">Form Elements</li>

            <li>
              <a href="./ui-form-regular.html">
              <i className="fa fa-location-arrow nav-icon"></i> 
              Regular Elements
              </a>
            </li>

            <li>
              <a href="./ui-form-extended.html">
              <i className="fa fa-bolt nav-icon"></i> 
              Extended Plugins
              </a>
            </li>

            <li>
              <a href="./ui-form-validation.html">
              <i className="fa fa-check nav-icon"></i> 
              Form Validation
              </a>
            </li>

            <li className="divider"></li>

            <li className="dropdown-header">Data Tables</li>

            <li>
              <a href="./ui-table-basic.html">
              <i className="fa fa-table"></i> 
              &nbsp;&nbsp;Basic Tables
              </a>
            </li>

            <li>
              <a href="./ui-table-advanced.html">
              <i className="fa fa-table"></i> 
              &nbsp;&nbsp;Advanced Tables
              </a>
            </li>

            <li>
              <a href="./ui-table-responsive.html">
              <i className="fa fa-table"></i> 
              &nbsp;&nbsp;Responsive Tables
              </a>
            </li>
          </ul>
        </li>

        <li className="dropdown ">
          <a href="href-no-hash" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
            <i className="fa fa-files-o"></i>
            Sample Pages
            <span className="caret"></span>
          </a>

          <ul className="dropdown-menu">
            <li><a href="./page-profile.html"><i className="fa fa-user nav-icon"></i> Profile</a></li>
            <li><a href="./page-invoice.html"><i className="fa fa-money nav-icon"></i> Invoice</a></li>
            <li><a href="./page-pricing.html"><i className="fa fa-dollar nav-icon"></i> Pricing Plans</a></li>
            <li><a href="./page-support.html"><i className="fa fa-question nav-icon"></i> Support Page</a></li>
            <li><a href="./page-gallery.html"><i className="fa fa-picture-o nav-icon"></i> Gallery</a></li>
            <li><a href="./page-settings.html"><i className="fa fa-cogs nav-icon"></i> Settings</a></li>
            <li><a href="./page-calendar.html"><i className="fa fa-calendar nav-icon"></i> Calendar</a></li>
          </ul>
        </li>  

        <li className="dropdown ">
          <a href="#contact" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
            <i className="fa fa-external-link"></i>
            Extra Pages
            <span className="caret"></span>
          </a>

          <ul className="dropdown-menu" role="menu">
            <li>
              <a href="./page-notifications.html">
              <i className="fa fa-bell"></i> 
              &nbsp;&nbsp;Notifications
              </a>
            </li>     

            <li>
              <a href="./ui-icons.html">
              <i className="fa fa-smile-o"></i> 
              &nbsp;&nbsp;Font Icons
              </a>
            </li> 

            <li className="dropdown-submenu">
              <a tabIndex="-1" href="href-no-hash">
              <i className="fa fa-ban"></i> 
              &nbsp;&nbsp;Error Pages
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a href="./page-404.html">
                  <i className="fa fa-ban"></i> 
                  &nbsp;&nbsp;404 Error
                  </a>
                </li>

                <li>
                  <a href="./page-500.html">
                  <i className="fa fa-ban"></i> 
                  &nbsp;&nbsp;500 Error
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">

              <a tabIndex="-1" href="href-no-hash">
              <i className="fa fa-lock"></i> 
              &nbsp;&nbsp;Login Pages
              </a>

              <ul className="dropdown-menu">
                <li>
                <Link to={'/login'}> <i className="fa fa-unlock"></i> Login</Link>
                 
                </li>

                <li>
                  <a href="./account-login-social.html">
                  <i className="fa fa-unlock"></i> 
                  &nbsp;&nbsp;Login Social
                  </a>
                </li>

                <li>
                <Link to={'/'}>  <i className="fa fa-star"></i>Sing Up</Link>
                  </li>

                <li>
                  <a href="./account-forgot.html">
                  <i className="fa fa-envelope"></i> 
                  &nbsp;&nbsp;Forgot Password
                  </a>
                </li>
              </ul>
            </li> 

            <li className="divider"></li>

            <li>
              <a href="./page-blank.html">
              <i className="fa fa-square-o"></i> 
              &nbsp;&nbsp;Blank Page
              </a>
            </li> 

          </ul>
        </li>

      </ul>

    </div>

  </div> 

</div> 
              
               
  <div className="container">

  <div className="content">

    <div className="content-container">

   
               <Switch>
                  <Route exact path='/' component={Register} />
                  <Route exact path='/login' component={Login} />
               </Switch>
             

    </div> 
      
  </div> 

</div> 


               
            </div>
         </Router>
      </div>
    );
  }
}

export default Intro;