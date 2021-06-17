import React from "react";
import { SafeEnvironmentcontainer } from "./SafeEnviroment.style";
import { Container } from "@material-ui/core";

const SafeEnviroment = () => {
  return (
    <SafeEnvironmentcontainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentcontainer>
  );
};

export default SafeEnviroment;
