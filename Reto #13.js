/* We must check if, after a series of given moves, the robot comes back to the original
 * coordenates [0,0]. To get things a little more complicated, we've got some modifiers: "*",
 * duplicates the next movement; "!", reverses it; "?", anulates it if has been done before
 * (if a movements has been reversed the reversed one it's counted) -> 3/5 stars
 */

function isRobotBack(moves)
{
  let movesDone = new Set();
  let coor = { x : 0, y : 0 };

  for (let i = 0; i < moves.length; i++)
  {
    let modifier = 1;
    if (moves[i - 1] == "*")
      modifier = 2;
    if (moves[i - 1] == "!")
      modifier = -1;
    if (moves[i - 1] == "?")
      if (movesDone.has(moves[i])) modifier = 0;

    if (moves[i] == "U")
    {
      coor.y += 1 * modifier;
      modifier === -1 ? movesDone.add("D") : movesDone.add("U");
    }
    if (moves[i] == "R")
    {
      coor.x += 1 * modifier;
      modifier === -1 ? movesDone.add("L") : movesDone.add("R");
    }
    if (moves[i] == "D")
    {
      coor.y -= 1 * modifier;
      modifier === -1 ? movesDone.add("U") : movesDone.add("D");
    }
    if (moves[i] == "L")
    {
      coor.x -= 1 * modifier;
      modifier === -1 ? movesDone.add("R") : movesDone.add("L");
    }
  }

  return coor.x === 0 && coor.y === 0 ? true : Object.values(coor);
}