/* We create an array for being able to manipulate the data, then declare the tree's width.
 * For each height's line, we build the corresponding branches, based in the requested
 * conditions, and we push tnem into the array. By last, we build the trunk, wich is always
 * the same, and we return the array as a string, separated by line breaks. -> 5/5 stars
 */

function createXmasTree(height, ornament) 
{
  const xmasTree = [];
  const width = height * 2 - 1;

  for (let i = 0; i < height; i++)
  {
    const spaces = "_".repeat((width - 1 - (i * 2)) / 2);
    const ornaments = ornament.repeat(1 + i * 2);

    xmasTree.push(spaces + ornaments + spaces);
  }

  const trunkSpaces = "_".repeat((width - 1) / 2);
  const trunk = trunkSpaces + "#" + trunkSpaces;

  xmasTree.push(trunk, trunk);

  return xmasTree.join("\n");
}