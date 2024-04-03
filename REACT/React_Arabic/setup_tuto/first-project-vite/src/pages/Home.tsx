import { FC } from "react";

type HomeProps = {
  name : string,
}

const Home: FC<HomeProps> = (props) =>  {
  return(
    <>
    <h3>Home</h3>
    <h2>Home</h2>
    <h1>Name {props.name} </h1> {props.name}
    </>
  )
}

export default Home;