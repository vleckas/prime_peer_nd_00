var http = require('http');
var accountBalance = require('./accountBalance');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write("Account Balance: \n" + accountBalance.accountBalance());
    res.end();
}).listen( 3000);
