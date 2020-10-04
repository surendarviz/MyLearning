"use strict";
var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function CalculcateLateFee(daysLate) {
            return daysLate * .25;
        }
        Fees.CalculcateLateFee = CalculcateLateFee;
        function MaxsBooksAllowed(age) {
            if (age < 12) {
                return 3;
            }
            else {
                return 10;
            }
        }
        Fees.MaxsBooksAllowed = MaxsBooksAllowed;
        function privateFunc() {
            console.log('This is private...');
        }
    })(Fees = Utility.Fees || (Utility.Fees = {}));
})(Utility || (Utility = {}));
///<reference path="utilityFunctions.ts"/>
var fee = Utility.Fees.CalculcateLateFee(10);
