/* Here we receive a "board", as a array of strings, and the direction, a string "mov". The
 * purpose is to analize the result of the next locomotive "@" move, based in the given
 * conditions. For that, we localizate it in the array and analize the next cell element,
 * according to the given direction. -> 1/5 stars
 */

function moveTrain(board, mov)
{
  let y = 0, x = -1;
  let result = "none";

  while (y < board.length && x === -1)
  {
    x = board[y].indexOf('@');
    if (x === -1)
      y++;
  }

  if (mov === "U")
  {
    if (y === 0 || board[y - 1][x] === 'o')
      result = "crash";
    else if (board[y - 1][x] === '*')
      result = "eat";
  }
  if (mov === "R")
  {
    if (x === board[y].length - 1 || board[y][x + 1] === 'o')
      result = "crash";
    else if (board[y][x + 1] === '*')
      result = "eat";
  }
  if (mov === "D")
  {
    if (y === board.length - 1 || board[y + 1][x] === 'o')
      result = "crash";
    else if (board[y + 1][x] === '*')
      result = "eat";
  }
  if (mov === "L")
  {
    if (x === 0 || board[y][x - 1] === 'o')
      result = "crash";
    else if (board[y][x - 1] === '*')
      result = "eat";
  }

  return result;
}