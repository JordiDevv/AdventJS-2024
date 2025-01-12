/* We extract un array from packages, to manipulate it, and we declare another one, wich will
 * be used as a store for all the '(' in the array, so we use it as a reference to iterate
 * between blocks enclosed by parenthesis, saving them, and poping as we find ')' (that way,
 * we can iterate from the innermost to the outermost). At the same time, we extract the
 * content of that block, and we reverse it. Finally, we replace the original content, with
 * the new block. Finishing all the iteration, we filter the parenthesis from the array, and
 * return it joined as a string. -> 2/5 stars
 */

function fixPackages(packages)
{
  let arrayPackages = Array.from(packages);
  let stack = [];

  for (let i = 0; i < arrayPackages.length; i++)
  {
    if (arrayPackages[i] === '(')
      stack.push(i);
    else if (arrayPackages[i] === ')') 
    {
      let start = stack.pop();
      let blockToSort = arrayPackages.slice(start + 1, i);
      
      let reversedBlock = blockToSort.reverse();

      arrayPackages.splice(start + 1, blockToSort.length, ...reversedBlock);
    }
  }

  arrayPackages = arrayPackages.filter(element => element !== '(' && element !== ')');
  return arrayPackages.join("");
}