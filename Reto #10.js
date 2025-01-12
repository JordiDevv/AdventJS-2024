/* We receive one matrix with a sequence of instructions: the objective is to interpretate
 * them. The concept is similar to an inventory: We've got an unkwon set of registers, and
 * we must follow the instructions to finally return the value of the "A" register. For that,
 * we establish a map, initializate the register in our map if it's not, based in the factors
 * order for each kind of instruction, then we manipulate the correspoding value, according
 * to the instruction. An example of a matrix is attached for clarity. -> 5/5 stars
 */

const instructions = 
[
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si el valor del registro 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'A',
  'DEC A' // decrementa el valor del registro 'A'
]

function compile(instructions)
{
  const registers = new Map();

  for (let i = 0; i < instructions.length; i++)
  {
    let splitInstruction = instructions[i].split(" ");

    let currentRegister = splitInstruction[splitInstruction.length - 1];
    if (splitInstruction[0] === "JMP")
      currentRegister = splitInstruction[splitInstruction.length - 2]
    if (!registers.has(currentRegister))
      registers.set(currentRegister, 0);

    if (splitInstruction[0] === "MOV")
    {
      let x = 0;
      if (registers.has(splitInstruction[1]))
        x = registers.get(splitInstruction[1])
      else if ((splitInstruction[1]))
        x = parseInt(splitInstruction[1]);
      registers.set(currentRegister, x);
    }

    if (splitInstruction[0] === "INC")
      registers.set(currentRegister, registers.get(currentRegister) + 1);
    if (splitInstruction[0] === "DEC")
      registers.set(currentRegister, registers.get(currentRegister) - 1);
      
    if (splitInstruction[0] === "JMP")
    {
      if (registers.get(currentRegister) === 0)
        i = parseInt(splitInstruction[2]) - 1;
    }
  }

  return registers.get("A");
}