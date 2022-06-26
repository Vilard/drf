import React from "react";

const UserItem = ({user}) => {
    return (
        <tr>
            <td>{user.email}</td>
            <td>{user.user_name}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table>
            <th>Email</th>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            {users.map((user) => <UserItem user={user}/>)}
        </table>
    )
}

export default UserList