export type IntlDateProps = {
	month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined
	day?: "numeric" | "2-digit" |  undefined
	hour?: "numeric" | "2-digit" | undefined
	minute?: "numeric" | "2-digit" | undefined
	weekday?: "long" | "short" | "narrow" | undefined
}

const formatDate = (date: Date, option: IntlDateProps) => {
  return new Intl.DateTimeFormat('en', option).format(date);
}

export default formatDate;
