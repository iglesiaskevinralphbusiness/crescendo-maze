import { useState, useEffect } from 'react';
import { positionNaming } from '../helpers/constants';

const Users = ({ socket }) => {
  const [users, setUsers] = useState([]);
  const [showPosition, setShowPosition] = useState(false);

  useEffect(() => {
    socket.on('room_users', (data) => {
      const sortedData = data.sort((a, b) => parseFloat(b.rank) - parseFloat(a.rank));
      setUsers(sortedData);
    });

    return () => socket.off('room_users');
  }, [socket]);

  

  const isInside = (x, y, z1, z2, z3, z4) => {
    const x1 = Math.min(z1, z3);
    const x2 = Math.max(z1, z3);
    const y1 = Math.min(z2, z4);
    const y2 = Math.max(z2, z4);
    if ((x1 <= x ) && ( x <= x2) && (y1 <= y) && (y <= y2)) {
        return true;
    } else {
        return false;
    }
  }

  const getLocation = (x, y) => {
    const positionName = positionNaming.find(posN => {
      const { from, to } = posN.blocks;
      if(isInside(x, y, from[0], from[1], to[0], to[1])){
        return posN;
      }
    })
    return positionName ? positionName.name : 'Somewhere In The Maze';
  }

  return (
    <div className="users">
      <table border="0">
        <thead>
          <tr>
            <td className="users-no">RANK</td>
            <td className="users-username">NAME</td>
            <td className="users-status">STATUS</td>
            <td className="users-location">LOCATION</td>
          </tr>
        </thead>
        <tbody>
          { users.map((user, index) => {
            
            return <tr key={user.id}>
              <td className="users-no">{user.status == 'finished' ? user.rank : '-'}</td>
              <td className="users-username">{user.username}</td>
              <td className={user.status}>{user.status}</td>
              <td className="users-location">
                { showPosition ? `${user.position.x} : ${user.position.y}` : getLocation(user.position.x, user.position.y)}
              </td>
            </tr>}
          ) }
        </tbody>
      </table>
    </div>
  );
};

export default Users;