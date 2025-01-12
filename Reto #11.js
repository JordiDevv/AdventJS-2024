//In this case we only have to decode a name, with a very simple conditions. -> 5/5 stars

function decodeFilename(filename)
{
  let begin = filename.indexOf('_') + 1;
  let end = filename.lastIndexOf('.');

  return filename.substring(begin, end);
}