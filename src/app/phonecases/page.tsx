import Products from "@/components/Products";
import Title from "@/components/Title";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase");

  if (!res.ok) {
    throw new Error("Something is fishyy");
  }

  return res.json();
};

const PhoneCaseProduct = async () => {
  const products = await getData();
  return (
    <main className="bg-stone-200">
      <Title title="Get Your Phone Case" />
      <Products products={products} />
    </main>
  );
};

export default PhoneCaseProduct;
