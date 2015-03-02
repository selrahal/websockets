angular.module('webSockets').controller('HomeController', ['$log', '$scope', function ($log, $scope){
	
	$scope.message = "";
	$scope.responses = [];
	
	
	var ws = new WebSocket("ws://localhost:8080/websockets/echo");
    
    ws.onopen = function(){  
        $log.info("Socket has been opened!");  
    };
    
    $scope.sendMessage = function() {
    	$log.info("Sending message:");
    	$log.info($scope.message);
    	ws.send($scope.message);
    }
    
    ws.onmessage = function(message) {
    	$log.info("Received message:");
    	$log.info(message);
    	$scope.$apply(function () {
    		$scope.responses.push(message.data);
    	});
        
    };
	
}]);