const socketEmit = {
  send(receiverId, data, connectedClients, io, type) {
    console.log(connectedClients);
    if (!receiverId) {
      io.emit(type, data);
    } else if (connectedClients[receiverId.toString()]) {
      connectedClients[receiverId.toString()].forEach(element => {
        io.to(element).emit(type, data);
      });
    }
  }
};

export default socketEmit;
