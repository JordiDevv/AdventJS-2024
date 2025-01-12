/* Calculates the frame's width, based in the longest name, and concatenates strings 
 * depending of the format expected, calculating the margin dinamically with the difference
 * between the width, the name's length, and the borders. -> 5/5 stars
 */

function createFrame(names) 
{
  const width = names.reduce((max, name) => Math.max(max, name.length), 0) + 4;

  let frame = "";
  frame += '*'.repeat(width) + '\n';

  names.forEach((name) =>
  {
    const margin = ' '.repeat(width - name.length -  3);
    frame += `* ${name}${margin}*\n`;
  });

  frame += '*'.repeat(width);

  return frame;
}