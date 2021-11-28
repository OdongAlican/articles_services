import React from 'react';
import { NavLink } from 'react-router-dom';
import CompanyLogo from '../images/companylogo.png';
import { pageRoutes } from '../constants';

const Sidebar = function () {
  return (
    <div>
      <div className="d-flex align-item-center justify-content-center" style={{ height: '80px', background: '#010131' }}>
        <img src={CompanyLogo} className="w-50 h-100 py-2" alt="logo" />
      </div>
      <div className="d-flex flex-column p-2">
        {pageRoutes.map(route => (
          <NavLink exact activeClassName="active-nav" className="p-2 mb-2" style={{ background: '#F7F7F9', textDecoration: 'none', color: '#010131' }} key={route.name} to={route.route}>
            <i className={`${route.iconClass} mr-1`} />
            <span style={{ padding: '10px' }}>{route.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
