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

function longPlaneteerCalls(words)
{
  for(var i = 0; i < words.length; i++)
  {
    if(words[i].length > 4)
    {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods)
{
  //cheddar, gouda, and camembert
  var cheeseArray = ['cheddar', `gouda`, `camembert`];
  for(var i = 0; i < foods.length; i++)
  {
    for(var o = 0; o < cheeseArray.length; o++)
    {
        if(food[i] === cheeseArray[i])
        {
            return food[i];
        }
    }
  }
  return "no cheese!";
}
