export const generateVoucherNumber = () => {
  const prefix = "VCH";
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  return `${prefix}${random}`;
};
