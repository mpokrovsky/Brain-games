#!/usr/bin/env node
'use strict';

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sayHelloToUser = function sayHelloToUser() {
    console.log("Welcome to the Brain Games!");
    var userName = _readlineSync2.default.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
};

//import sayHelloToUser from '..';

sayHelloToUser();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vYnJhaW4tZ2FtZXMuanMiXSwibmFtZXMiOlsic2F5SGVsbG9Ub1VzZXIiLCJjb25zb2xlIiwibG9nIiwidXNlck5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFJQTs7Ozs7O0FBQ0EsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCQyxZQUFRQyxHQUFSLENBQVksNkJBQVo7QUFDQSxRQUFJQyxXQUFXQyx1QkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBZjtBQUNBSixZQUFRQyxHQUFSLENBQVksWUFBWUMsUUFBWixHQUF1QixHQUFuQztBQUNILENBSkQ7O0FBSEE7O0FBUUFIIiwiZmlsZSI6ImJyYWluLWdhbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vaW1wb3J0IHNheUhlbGxvVG9Vc2VyIGZyb20gJy4uJztcblxuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmNvbnN0IHNheUhlbGxvVG9Vc2VyID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiV2VsY29tZSB0byB0aGUgQnJhaW4gR2FtZXMhXCIpXG4gICAgdmFyIHVzZXJOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvLCAnICsgdXNlck5hbWUgKyAnIScpO1xufTtcbnNheUhlbGxvVG9Vc2VyKCk7XG4iXX0=