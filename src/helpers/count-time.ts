const refineDay = (n: number) => {
  const days = n * 24;
  const tomorrow = new Date(Date.now() + (3600 * 1000 * 24)).toISOString().split('T')[0];
  const nextDays = new Date(Date.now() + (3600 * 1000 * days)).toISOString().split('T')[0];

  return { tomorrow, nextDays };
};

const epochTimeToDate = (n: number) => {
  const date = new Date(n * 1000);
  return date;
}

export {
  refineDay,
  epochTimeToDate,
}
