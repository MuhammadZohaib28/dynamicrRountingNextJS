const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");

  if (!res.ok) {
    throw new Error("Something is fishyy");
  }

  return res.json();
};

export const getSingleProduct = async (id: number) => {
  const item = await getData();
  const singleItem = await item.find((product: any) => product._id === id);
  return singleItem;
};

const getPhoneCaseData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase");

  if (!res.ok) {
    throw new Error("Something is fishyy");
  }

  return res.json();
};

export const getSingleProductPhoneCase = async (id: number) => {
  const item = await getPhoneCaseData();
  const singleItemPhoneCase = await item.find((product: any) => product._id === id);
  return singleItemPhoneCase;
};
