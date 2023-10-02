import React from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <p className="text-center py-5 font-semibold text-xl">{title}</p>;
};

export default Title;
