import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { Link, useLocation } from 'react-router-dom';
import ItemUser from './ItemUser';

const Home = () => {
  const data = useContext(UserContext);
  const location = useLocation();

  return (
    <div className="Home">
      <nav>
        <ul className="Navbar-Home">
          <li>
            <Link to="/Home/?All">Show List All</Link>
          </li>
          <li>
            <Link to="/Home/?Online">Show List Online</Link>
          </li>
          <li>
            <Link to="/Home/?Offline">Show List Offline</Link>
          </li>
        </ul>
      </nav>
      {location.search === '?All' &&
        data.map((item) => <ItemUser key={item.id} name={item.name} status={item.status}></ItemUser>)}
      {location.search === '?Offline' &&
        data
          .filter((item) => item.status === 'offline')
          .map((item) => <ItemUser key={item.id} name={item.name} status={item.status}></ItemUser>)}
      {location.search === '?Online' &&
        data
          .filter((item) => item.status === 'online')
          .map((item) => <ItemUser key={item.id} name={item.name} status={item.status}></ItemUser>)}
    </div>
  );
};

export default Home;
