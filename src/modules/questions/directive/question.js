/**
 * Created by semianchuk on 29.10.16.
 */
angular.module('questions')
    .directive('question', [ function() {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'src/modules/questions/template/question.html',
            controller: function ($scope) {
                $scope.splitQuestion = $scope.data.text.split('__');
            }
        }
    }])