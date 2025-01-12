/* Iterates over an inventory, creating a temporaly object for each of its elements. At the
 * same time extracts the category of that object, and, if it doesn't exist in the organized
 * inventory, creates it. Then compares if the name already exists inside that category, and,
 * if so, adds the quantity, if not, assigns its value. -> 4/5 stars
 */

function organizeInventory(inventory)
{
  const organizedInventory = {};

  for (const item of inventory) 
  {
    const { category, name, quantity } = item;

    if (!organizedInventory[category]) organizedInventory[category] = {};

    if (organizedInventory[category][name]) 
      organizedInventory[category][name] += quantity;
    else
      organizedInventory[category][name] = quantity;
  }

  return organizedInventory;
}