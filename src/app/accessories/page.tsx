import Products from "@/components/Products";
import Title from "@/components/Title";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/accessories");

  if (!res.ok) {
    throw new Error("Something is fishyy");
  }

  return res.json();
};

const Accessories = async () => {
  const products = await getData();
  return (
    <main className="bg-stone-200">
      <Title title="Get Your Watch" />
      <Products products={products} />
    </main>
  );
};

export default Accessories;
