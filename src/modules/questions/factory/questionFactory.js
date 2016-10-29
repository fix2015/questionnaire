/**
 * Created by semianchuk on 29.10.16.
 */
angular.module('questions')
    .factory('questionsFactory', [ function () {

        var res = [];

        function getResult() {
            return res;
        }

        function postResult(data) {
            res = res.concat(angular.copy(data));
            return res;
        }

        return {
            getResult: getResult,
            postResult: postResult
        };
    }]);