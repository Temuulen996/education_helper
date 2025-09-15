import moment from "moment";

export const formatDate = (date: Date) => {
  return moment(date).format("YYYY/MM/DD");
};
export const formatNumber = (digit: number) => {
  return new Intl.NumberFormat("en-Us").format(digit);
};
export const formatPrice = (amount: number, region: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: region === "mn" ? "MNT" : "USD",
  }).format(region === "mn" ? amount : amount / 3450);
};
