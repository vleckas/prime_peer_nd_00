var randomNum = require('./randomNum');
var formatDollar = require('./formatDollar');

var accountBalance = {

    accountBalance: function (){
        return formatDollar.formatDollar(randomNum.randomNum());
    }
};

module.exports = accountBalance;