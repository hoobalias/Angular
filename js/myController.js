module.controller('myController', function($scope) {
    $scope.email = "example@example.com";
    
    $scope.inputColor = "lightgreen";
    
    $scope.foods = ["Potatoes", "Rice", "Sweet Potatoes", "Bread", "Beans"];

    $scope.pokemon = [{type:'fire', name:'Charmander'},
                      {type:'fire', name:'Ninetails'},
                      {type:'fire', name:'Magmar'},
                      {type: 'water', name:'Squirtle'},
                      {type: 'water', name:'Gyarados'},
                      {type: 'water', name:'Dewgong'},
                      {type: 'grass', name:'Bulbasaur'},
                      {type: 'grass', name:'Victreebell'},
                      {type: 'grass', name:'Exeggutor' }];
    
    $scope.orderByField = function (field) {
        $scope.orderField = field;
    }
});