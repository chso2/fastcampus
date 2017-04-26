/**
 * Created by chso2 on 2017. 4. 22..
 */
// module.exports = function(io) {
//     io.on('connection', function(socket){
//         socket.on('chat message', function(data){
//             io.emit('chat message', data.message);
//         });
//     });
// };

module.exports = function(io) {
    io.on('connection', function(socket){

        var session = socket.request.session.passport;
        var user = (typeof session !== 'undefined') ? ( session.user ) : "";

        socket.on('chat message', function(data){
            io.emit('toClient', { message : data.message , displayname : user.displayname } );
        });
    });
};