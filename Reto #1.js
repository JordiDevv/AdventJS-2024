//Deletes all repeat numbers and shorts the list. -> 3/5

function prepareGifts(gifts) 
{
  let sort_list = [];

  for (let i = 0; i < gifts.length; i++)
    if (!sort_list.includes(gifts[i])) sort_list.push(gifts[i]);

  return sort_list.sort((a, b) => a - b);
}