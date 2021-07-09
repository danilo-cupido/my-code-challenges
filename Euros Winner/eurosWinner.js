// You have an array of two objects containing two teams participating at EURO2020 and their record of achievements.

// You need to calculate the chances each team stands to win if the face in they final, according to their record of achievements.

// World cup (wc) = 3 pt;
// Euro cup (ec) = 2 pt;
// Confederation cup = 1pt;

// You need to return an object containing the name of the two teams as keys and the chance of winning as values.

// The chance needs to be rounded to the closest integer

// A team has a minum of 10% and a maximum of 90% chances of winning the competition!

function eurosWinner(arr) {}

console.log(
  eurosWinner([
    { Italy: { wc: 4, ec: 1, cc: 0 } },
    { Germany: { wc: 4, ec: 3, cc: 1 } },
  ])
); // {Italy: 42%, Germany: 58%}

console.log(
  eurosWinner([
    { England: { wc: 1, ec: 0, cc: 0 } },
    { Slovakia: { wc: 0, ec: 0, cc: 0 } },
  ])
); // {England: 90%, Slovakia: 10%}

console.log(
  eurosWinner([
    { Portugal: { wc: 0, ec: 1, cc: 0 } },
    { Germany: { wc: 4, ec: 3, cc: 1 } },
  ])
); // {Portugal: 10%, Germany: 90%}

console.log(
  eurosWinner([
    { Hungary: { wc: 0, ec: 0, cc: 0 } },
    { Poland: { wc: 0, ec: 0, cc: 0 } },
  ])
); // {Hungary: 50%, Poland: 50%}

console.log(
  eurosWinner([
    { Italy: { wc: 4, ec: 1, cc: 0 } },
    { England: { wc: 1, ec: 0, cc: 0 } },
  ])
); // {Italy: 82%, England: 18%}

console.log(
  eurosWinner([
    { France: { wc: 2, ec: 2, cc: 2 } },
    { Spain: { wc: 1, ec: 3, cc: 0 } },
  ])
); // {France: 57%, Spain: 43%}

console.log(
  eurosWinner([
    { Germany: { wc: 4, ec: 3, cc: 1 } },
    { France: { wc: 2, ec: 2, cc: 2 } },
  ])
); // {Germany: 61%, France: 39%}

console.log(
  eurosWinner([
    { England: { wc: 1, ec: 0, cc: 0 } },
    { Czechia: { wc: 0, ec: 1, cc: 0 } },
  ])
); // {England: 60%, Czechia: 40%}
