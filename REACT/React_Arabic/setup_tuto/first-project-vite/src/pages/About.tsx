import { FC } from "react";

type AboutProps = {
  value: number;
};

const About: FC<AboutProps> = (props) => {
  return (
    <>
      <h1>about about {props.value}</h1>
      <h2>about about </h2>
      <h3>about about </h3>
    </>
  );
};

export default About;
