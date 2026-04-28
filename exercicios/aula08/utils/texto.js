// ========================================
// Aula 08 — Default Export
// ========================================
// Implemente a função e exporte com "export default".
export default function formatarNome(nome) {
  const name = nome.toLowerCase();
  return name.charAt(0).toUpperCase() + name.slice(1);
}
