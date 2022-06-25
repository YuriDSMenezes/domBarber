export const AddHours = (date: Date, hours: number) => {
  date.setHours(hours);
  return date;
};
