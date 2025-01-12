/* We look for the '*' instance inside the matrix, saving its coordenates in variables [y,x];
 * in case we reach the end of the matrix, returns "false". We declare an array of
 * pseudo-coordenadas, wich we will use to iterate in every direction in the same loop. That
 * loop creates an array with the direction for each element of the pseudo-coordenates's
 * array, and, in each iteration, iterates in its direction with another loop, searching '#',
 * to know if it's completely enclosed: If the matrix's limit is reached, returns "false"; in
 * case it gets til the script's ending, returns "true". -> 1/5 stars
*/

function inBox(box) 
{
  let y = 0, x = 0;

  for (y = 0; y < box.length; y++)
  {
    x = box[y].indexOf('*');
    if (x !== -1) break;
  }
  if (y == box.length) return false ;

  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  for (const [dy, dx] of directions)
  {
    let ny = y + dy;
    let nx = x + dx;

    while (ny >= 0 && ny < box.length && nx >= 0 && nx < box[ny].length)
    {
      if (box[ny][nx] === '#') break;
      ny += dy;
      nx += dx;
    }

    if (ny < 0 || ny >= box.length || nx < 0 || nx >= box[0].length)
      return false;
  }

  return true;
}