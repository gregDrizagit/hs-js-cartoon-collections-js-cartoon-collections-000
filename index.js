function dwarfRollCall(dwarves)
{
  var dwarfString = '';
  for(var i = 1; i <= dwarves.length; i++)
  {
    dwarfString += `${i}. ${dwarves[i - 1]} `;
  }

  return dwarfString;
}

function summonCaptainPlanet(planeteerCalls)
{
  var capitalArray = [];
  for(var i = 0; i < planeteerCalls.length; i++)
  {
    capitalArray[i] = `${planeteerCalls[i].toUpperCase()}!`;

  }

  return capitalArray;
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
