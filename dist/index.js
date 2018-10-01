'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sayHelloToUser = function sayHelloToUser() {
    console.log("Welcome to the Brain Games!");
    var userName = _readlineSync2.default.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
};
exports.default = sayHelloToUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzYXlIZWxsb1RvVXNlciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyTmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCQyxZQUFRQyxHQUFSLENBQVksNkJBQVo7QUFDQSxRQUFJQyxXQUFXQyx1QkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBZjtBQUNBSixZQUFRQyxHQUFSLENBQVksWUFBWUMsUUFBWixHQUF1QixHQUFuQztBQUNILENBSkQ7a0JBS2VILGMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5jb25zdCBzYXlIZWxsb1RvVXNlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIldlbGNvbWUgdG8gdGhlIEJyYWluIEdhbWVzIVwiKVxuICAgIHZhciB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbywgJyArIHVzZXJOYW1lICsgJyEnKTtcbn07XG5leHBvcnQgZGVmYXVsdCBzYXlIZWxsb1RvVXNlcjsiXX0=