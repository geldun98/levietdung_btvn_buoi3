import React from 'react';

const ItemUser = ({ name, status }) => {
  let addClass = 'online';
  let classStatus = 'ItemUser-Status';
  if (status !== addClass) {
    addClass = 'offline';
  }
  classStatus = `${classStatus} ${addClass}`;
  return (
    <div className="ItemUser">
      <div className="ItemUser-Name">{name}</div>
      <div className={classStatus}>{status}</div>
    </div>
  );
};

export default ItemUser;
