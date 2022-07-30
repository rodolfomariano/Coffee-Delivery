export function formatCEP(cep: string) {
  cep = cep.replace(/\D/g, '')
  cep = cep.replace(/(\d{5})(\d{1,2})/, '$1-$2')
  return cep
}
