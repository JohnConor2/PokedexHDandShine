var Pokemon = angular.module("Pokemon",[])
Pokemon.controller("PokemonList",function($scope, $rootScope, $http){
  
  $scope.Pokedex=[];
  var important="01000100 01100101 01110010 01101001 01100011 01101011 00100000 01000001 01101100 01100101 01101010 01100001 01101110 01100100 01110010 01101111 00100000 01001100 01101111 01110010 01100101 01101110 01111010 01101111 00100000 01000011 11000011 10111010";
  
  for(let x = 1; x < 800; x++){
    $http({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/" + x
    }).then(function Datos(P){

      if (x >= 1 && x < 9) {
      P.data.sprites.front_default = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00" + x + ".png";
      $scope.Pokedex.push(P);
      }else if (x >= 10 && x < 100) {
        P.data.sprites.front_default = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0"+ x + ".png";
        $scope.Pokedex.push(P);
      }else if (x >= 100) {
        P.data.sprites.front_default = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+x+".png";
        $scope.Pokedex.push(P);
      }

    })
  }

})
//bloquear clic derecho en la pagina
document.oncontextmenu = function(){return false;}