module.controller('myController', function($scope, $interval, $http) {
    $scope.time = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.time = new Date().toLocaleTimeString();
    }, 1000);

    $scope.email = "example@example.com";
    
    $scope.inputColor = "lightgreen";
    
    $scope.foods = ["Potatoes", "Rice", "Sweet Potatoes", "Bread", "Beans"];

    $scope.pokemon = [{type:'fire', name:'Charmander'},
                      {type:'fire', name:'Ninetales'},
                      {type:'fire', name:'Magmar'},
                      {type: 'water', name:'Squirtle'},
                      {type: 'water', name:'Gyarados'},
                      {type: 'water', name:'Dewgong'},
                      {type: 'grass', name:'Bulbasaur'},
                      {type: 'grass', name:'Victreebel'},
                      {type: 'grass', name:'Exeggutor' }];

    $scope.fireSwitch = true;
    $scope.waterSwitch = true;
    $scope.grassSwitch = true;

    $scope.orderByField = function (field) {
        $scope.orderField = field;
    }

    $http.get("http://www.w3schools.com/angular/customers.php")
        .then(function (response) {
            $scope.customerData = response.data.records;
        }), function (response) {
        $scope.customerData = "Error with customer data!";
    };

    $scope.selectedPokemon = $scope.pokemon[0];

    $scope.exercises = ["Deadlifts", "Squats", "Pullups"];
    $scope.selectedExercise = $scope.exercises[0];
    
});