import Title from "@/components/Title";
import Products from "../components/Products";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");

  if (!res.ok) {
    throw new Error("Something is fishyy");
  }

  return res.json();
};

const Home = async () => {
  const products = await getData();
  return (
    <main className="bg-stone-200">
      <Title title="Get Your Favorite Phone" />
      <Products products={products} />
    </main>
  );
};

export default Home;
