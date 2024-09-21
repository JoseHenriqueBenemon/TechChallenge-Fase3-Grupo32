import { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [refreshUsers, setRefreshUsers] = useState(false);
  const [canViewUsers, setCanViewUsers] = useState(true);

  const refreshUsersList = () => setRefreshUsers(!refreshUsers);
  const clearUserSelection = () => setSelectedUser(null);

  const role = localStorage.getItem('role');

  useEffect(() => {
    if (role !== 'Teacher') {
      setCanViewUsers(false);
    }
  }, [role]);

  return (
    <>
      <UserForm
        selectedUser={selectedUser}
        refreshUsers={refreshUsersList}
        clearSelection={clearUserSelection}
      />
      {canViewUsers && (
        <UserList selectUser={setSelectedUser} key={refreshUsers} />
      )}
    </>
  );
};

export default UserManagement;