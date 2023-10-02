import Link from "next/link";
import React from "react";

const Header = () => {
  const navigation = [
    {
      id: 1,
      title: "Phone",
      href: "/",
    },
    {
      id: 2,
      title: "Phone Cases",
      href: "/phonecases",
    },
    {
      id: 3,
      title: "Watches",
      href: "/watches",
    },
    {
      id: 4,
      title: "Accessories",
      href: "/accessories",
    },
  ];
  return (
    <header className="bg-zinc-950 w-full p-3  sticky top-0 m-0 my-auto">
      <div className=" flex items-center justify-around  w-[35rem] mx-auto my-0">
        {navigation.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="uppercase text-sm font-semibold text-lg text-black bg-green-100 py-2 px-4 rounded-2xl hover:text-pink-500 duration-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
