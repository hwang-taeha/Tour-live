export function numberFormat(inputNumber: number) {
  return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
