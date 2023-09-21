const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const room = 'single';
let allUsers = [];
let ranksCounter = 0;

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  // Write our socket event listeners in here...

  // join room
  socket.on('join_room', (data) => {
    const { username, selectedChar, role } = data;
    socket.join(room);
    if(role === 'player'){

    // set position
    let lockPosition = null;
    for(let x=72; x<=77; x++){
      for(let y=72; y<=77; y++){
        if(lockPosition == null){
          const locate = allUsers.find(u => u.position.x == x && u.position.y == y);
          if(!locate){
            lockPosition = { x, y }
          }
        }
      }
    }

    // listener all users
    allUsers.push(
      { 
        id: socket.id,
        username,
        selectedChar,
        role,
        status: 'waiting',
        position: {
          x: lockPosition.x,
          y: lockPosition.y
          // x: 5,
          // y: 4
        },
        rank: 0
      }
    );

    }

    socket.to(room).emit('room_users', allUsers);
    socket.emit('room_users', allUsers);
  });

  // game start
  socket.on('game_start', (data) => {
    ranksCounter = 0;
    allUsers = allUsers.map(user => {
      user.status = 'playing';
      return user;
    });
    socket.emit('user_start', allUsers); // emit to all including admin
    socket.to(room).emit('user_start', allUsers);
    socket.emit('room_users', allUsers);
    socket.to(room).emit('room_users', allUsers);
  });

  // set player position
  socket.on('set_player_position', (data) => {
    const { id, position } = data;
    const { x, y } = position;
    const datas = [...allUsers];
    const item = datas.find(data => data.id == socket.id);
    const index = datas.indexOf(item);
    datas[index].position = { x, y };
    
    // finished checker
    if(datas[index].status =='playing'){
      if(x <= 6 && y <= 6){
        datas[index].status = 'finished';
        ranksCounter = ranksCounter + 1;
        datas[index].rank = ranksCounter;
        socket.emit('you_finished', datas[index]);
      }
      allUsers = datas;
      socket.emit('room_users', allUsers);
      socket.to(room).emit('room_users', allUsers);
    } else {
      allUsers = datas;
    }

    socket.emit('position_update', { id, position});
    socket.to(room).emit('position_update', { id, position});
  });

  // leave room
  socket.on('leave_room', (data) => {
    socket.leave(room);
    allUsers = allUsers.filter((user) => user.id != socket.id);
    socket.emit('room_users', allUsers);
    socket.to(room).emit('room_users', allUsers);
  });

  // disconnected
  socket.on('disconnect', () => {
    const user = allUsers.find((user) => user.id == socket.id);
    if (user?.username) {
      allUsers = allUsers.filter((user) => user.id != socket.id);
      socket.to(user.room).emit('room_users', allUsers);
    }
  });
});

server.listen(4000, () => 'Server is running on port 3000');