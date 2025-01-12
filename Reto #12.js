/* We must determine the total price of a tree, based in its ornaments, with a little
 * particularity: if an ornament is cheaper than the next one of the list, this rests its
 * value, instead of adding it.
 * We establish a map, as the catalog, with all the prices, and we traverse the list. If at
 * any point an element not cataloged is found, it returns "undefined".
 * It extracts the value from the catalog, compares it to the next element (if there's any),
 * and recalculates the total price. -> 4/5 stars
 */

function calculatePrice(ornaments)
{
  let priceCatalog = new Map();
  let totalPrice = 0;

  priceCatalog.set("*", 1);
  priceCatalog.set("o", 5);
  priceCatalog.set("^", 10);
  priceCatalog.set("#", 50);
  priceCatalog.set("@", 100);

  for (let i = 0; i < ornaments.length; i++)
  {
    if (!priceCatalog.has(ornaments[i])) return undefined;

    let ornamentPrice = priceCatalog.get(ornaments[i]);
    let nextOrnamentPrice = 0;
    if (i < ornaments.length - 1)
      nextOrnamentPrice = priceCatalog.get(ornaments[i + 1]);
    if (ornamentPrice < nextOrnamentPrice)
      ornamentPrice *= -1;

    totalPrice += ornamentPrice;
  }

  return totalPrice;      
}