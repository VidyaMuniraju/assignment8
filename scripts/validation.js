(function(window) {
    'use strict';
    var App = window.App || {};
    //var $ = window.jQuery;
    var validMailid = App.validMailid;
    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);

        },

        isDecaf: function(coffee, value) {
            if (coffee == 'decaf' && value > 20) {
                return false;
            } else {
                return true;
            }

        },

        isValidMailid: function(email, remoteDs) {
            App.validMailid = true;
            return remoteDs.get(email, function(serverResponse) {

                if (serverResponse === null) {
                  //  alert(serverResponse.emailAddress);
                    App.validMailid = true;
                } else {
                    if (serverResponse.emailAddress === email) {

                        App.validMailid = false;

                    }
                }

            });
        }

    };
    App.Validation = Validation;
    App.validMailid = validMailid;
    window.App = App;
})(window);
