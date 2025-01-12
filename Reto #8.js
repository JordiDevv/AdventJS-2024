/* We must simulate an "isometric view" of a race as a string. For that, we declare an array,
 * wich will be our racetrack, and several blocks, wich will be filled based in the exercise
 * criteria: A margin, to simulate the view; snow "~", along the track; "r", where the 
 * reindeer is; and a lane indicator. Then, we just push all the blocks concatenated to the 
 * array, and, at the end, we return the array joined by line breaks as a string. -> 4/5 stars
 */

function drawRace(indices, length)
{
  const racetrack = [];

  for (let i = 0; i < indices.length; i++)
  {
    let lane = ` /${i + 1}`;
    let margin = " ".repeat(indices.length - i - 1);
    let beforeReindeer = "";
    let afterReindeer = "";

    switch(true)
    {
      case indices[i] > 0:
        beforeReindeer = "~".repeat(indices[i]);
        afterReindeer = "r" + "~".repeat(length - indices[i] - 1);
        break ;
      case indices[i] < 0:
        beforeReindeer = "~".repeat(length + indices[i]);
        afterReindeer = "r" + "~".repeat(indices[i] * - 1 - 1);
        break ;
      default:
        beforeReindeer = "~".repeat(length);
    }
    racetrack.push(margin + beforeReindeer + afterReindeer + lane);
  }

  return racetrack.join('\n');
}