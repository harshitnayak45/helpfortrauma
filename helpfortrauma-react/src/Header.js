import React, { Component } from 'react';



class Header extends Component {
  render() {
    return (
      <div>
      <header className="App-header">
         
      <div className="navbar">

  <div className="container">

    <div className="navbar-header">

      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <i className="fa fa-cogs"></i>
      </button>

      <a className="navbar-brand navbar-brand-image" href="./index.html">
     
      </a>

    </div> 

    <div className="navbar-collapse collapse">

      

      <ul className="nav navbar-nav noticebar navbar-left">

        <li className="dropdown">
          <a href="./page-notifications.html" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-bell"></i>
            <span className="navbar-visible-collapsed">&nbsp;Notifications&nbsp;</span>
            <span className="badge">3</span>
          </a>

          <ul className="dropdown-menu noticebar-menu" role="menu">
            <li className="nav-header">
              <div className="pull-left">
                Notifications
              </div>

              <div className="pull-right">
                <a href="href-no-hash">Mark as Read</a>
              </div>
            </li>

            <li>
              <a href="./page-notifications.html" className="noticebar-item">
                <span className="noticebar-item-image">
                  <i className="fa fa-cloud-upload text-success"></i>
                </span>
                <span className="noticebar-item-body">
                  <strong className="noticebar-item-title">Templates Synced</strong>
                  <span className="noticebar-item-text">20 Templates have been synced to the Mashon Demo instance.</span>
                  <span className="noticebar-item-time"><i className="fa fa-clock-o"></i> 12 minutes ago</span>
                </span>
              </a>
            </li>

            <li>
              <a href="./page-notifications.html" className="noticebar-item">
                <span className="noticebar-item-image">
                  <i className="fa fa-ban text-danger"></i>
                </span>
                <span className="noticebar-item-body">
                  <strong className="noticebar-item-title">Sync Error</strong>
                  <span className="noticebar-item-text">5 Designs have been failed to be synced to the Mashon Demo instance.</span>
                  <span className="noticebar-item-time"><i className="fa fa-clock-o"></i> 20 minutes ago</span>
                </span>
              </a>
            </li>

            <li className="noticebar-menu-view-all">
              <a href="./page-notifications.html">View All Notifications</a>
            </li>
          </ul>
        </li>


        <li className="dropdown">
          <a href="./page-notifications.html" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-envelope"></i>
            <span className="navbar-visible-collapsed">&nbsp;Messages&nbsp;</span>
          </a>

          <ul className="dropdown-menu noticebar-menu" role="menu">                
            <li className="nav-header">
              <div className="pull-left">
                Messages
              </div>

              <div className="pull-right">
                <a href="href-no-hash">New Message</a>
              </div>
            </li>

            <li>
              <a href="./page-notifications.html" className="noticebar-item">
                <span className="noticebar-item-image">
                
                </span>

                <span className="noticebar-item-body">
                  <strong className="noticebar-item-title">New Message</strong>
                  <span className="noticebar-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</span>
                  <span className="noticebar-item-time"><i className="fa fa-clock-o"></i> 20 minutes ago</span>
                </span>
              </a>
            </li>

            <li>
              <a href="./page-notifications.html" className="noticebar-item">
                <span className="noticebar-item-image">
                 
                </span>

                <span className="noticebar-item-body">
                  <strong className="noticebar-item-title">New Message</strong>
                  <span className="noticebar-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</span>
                  <span className="noticebar-item-time"><i className="fa fa-clock-o"></i> 5 hours ago</span>
                </span>
              </a>
            </li>

            <li className="noticebar-menu-view-all">
              <a href="./page-notifications.html">View All Messages</a>
            </li>
          </ul>
        </li>


        <li className="dropdown">
          <a href="href-no-hash" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-exclamation-triangle"></i>
            <span className="navbar-visible-collapsed">&nbsp;Alerts&nbsp;</span>
          </a>

          <ul className="dropdown-menu noticebar-menu noticebar-hoverable" role="menu">                
            <li className="nav-header">
              <div className="pull-left">
                Alerts
              </div>
            </li>

            <li className="noticebar-empty">                  
              <h4 className="noticebar-empty-title">No alerts here.</h4>
              <p className="noticebar-empty-text">Check out what other makers are doing on Explore!</p>                
            </li>
          </ul>
        </li>

      </ul>

      <ul className="nav navbar-nav navbar-right">   

        <li>
          <a href="href-no-hash">About</a>
        </li>    
          
        <li>
          <a href="href-no-hash">Resources</a>
        </li>    

        <li className="dropdown navbar-profile">
          <a className="dropdown-toggle" data-toggle="dropdown" href="href-no-hash">
            <img src="./img/avatars/avatar-1-xs.jpg" className="navbar-profile-avatar" alt="" />
            <span className="navbar-profile-label">rod@rod.me &nbsp;</span>
            <i className="fa fa-caret-down"></i>
          </a>

          <ul className="dropdown-menu" role="menu">

            <li>
              <a href="./page-profile.html">
                <i className="fa fa-user"></i> 
                &nbsp;&nbsp;My Profile
              </a>
            </li>

            <li>
              <a href="./page-pricing.html">
                <i className="fa fa-dollar"></i> 
                &nbsp;&nbsp;Plans &amp; Billing
              </a>
            </li>

            <li>
              <a href="./page-settings.html">
                <i className="fa fa-cogs"></i> 
                &nbsp;&nbsp;Settings
              </a>
            </li>

            <li className="divider"></li>

            <li>
              <a href="./account-login.html">
                <i className="fa fa-sign-out"></i> 
                &nbsp;&nbsp;Logout
              </a>
            </li>

          </ul>

        </li>

      </ul>

       



       

    </div> 

  </div> 

</div> 
        </header>
       
      </div>
    );
  }
}

export default Header;