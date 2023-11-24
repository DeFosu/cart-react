
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
        currency: "USD",
        style: "currency",
})

export default function formatCurrentcy(number: number) {
  return CURRENCY_FORMATTER.format(number)
}
