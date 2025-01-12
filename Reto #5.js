/* First of all, we declare an aray, where we will save the available pairs os shoes, and one
 * set that we will use for memoization, saving the indexes corresponding to shoes that we
 * have already awarded to a couple. In the loop, we iterate, getting the index and the
 * object, for each shoe. First, we check if the shoe is already paired, and, if not, we
 * iterate in another loop, beggining with that index. If it has a couple, we push the size
 * property (as the refference), and both indexes to the set. -> 3/5 stars
 */

function organizeShoes(shoes) 
{
  const availablePairs = [];
  const usedPairs = new Set;

  for (const [index, shoe] of shoes.entries())
  {
    if (!usedPairs.has(index))
    {
      for (let i = index + 1; i < shoes.length; i++)
      {
        if (shoe.size == shoes[i].size && shoe.type != shoes[i].type && !usedPairs.has(i))
        {
          availablePairs.push(shoe.size);
          usedPairs.add(i);
          usedPairs.add(index);
          break ;
        }
      }
    }
  }

  return availablePairs;
}