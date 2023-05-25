import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { routes } from "../routes";

const Home: NextPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    push({ pathname: routes.login });
  }, [push]);
  return <></>;
};

export default Home;
