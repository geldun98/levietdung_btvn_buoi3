import React, { createContext } from 'react';

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const data = [
    { id: 1, name: 'Lê Việt Dũng', status: 'online' },
    { id: 2, name: 'Lê Văn Minh', status: 'offline' },
    { id: 3, name: 'Nguyễn Anh Tài', status: 'online' },
    { id: 4, name: 'Mã Anh Cao', status: 'online' },
    { id: 5, name: 'Phan Mạnh Quỳnh', status: 'offline' },
    { id: 6, name: 'Ngô Bảo Châu', status: 'offline' },
    { id: 7, name: 'Nguyễn Phúc', status: 'online' },
    { id: 8, name: 'Cao Cầu', status: 'online' },
    { id: 9, name: 'Lương Sơn Bá', status: 'online' },
    { id: 10, name: 'Châu Bá Thông', status: 'offline' },
  ];
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
