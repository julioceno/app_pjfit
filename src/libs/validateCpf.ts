
export function isCpf(cpf: string):boolean {
  cpf = cpf.replace(/\.|-/g,"");

  let sum = 0;
  for (let i = 0; i < cpf.length-2; i++) sum += Number(cpf[i])  * ((cpf.length-1)-i);

  sum = (sum * 10) % 11;
  if (sum == 10 || sum == 11) sum = 0;
  
  if (sum != Number(cpf[9])) return false;

  sum = 0
  for (let i = 0; i < cpf.length-1; i++) sum += Number(cpf[i]) * (cpf.length-i);

  sum = (sum * 10) % 11;
  if (sum == 10 || sum == 11) sum = 0;

  if (sum != Number(cpf[10])) return false;

  return true;
};


