import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [refreshUsers, setRefreshUsers] = useState(false);

  const refreshUsersList = () => setRefreshUsers(!refreshUsers);
  const clearUserSelection = () => setSelectedUser(null);

  return (
    <>
      <UserForm
        selectedUser={selectedUser}
        refreshUsers={refreshUsersList}
        clearSelection={clearUserSelection}
      />
      <UserList selectUser={setSelectedUser} key={refreshUsers} />
    </>
  );
};

export default UserManagement;