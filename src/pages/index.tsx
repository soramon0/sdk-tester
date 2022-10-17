import type { NextPage } from "next";

import { Container, Typography } from "@mui/material";

import WalletTabs from "../components/WalletTabs";

const Home: NextPage = () => {
  return null;

  return (
    <Container maxWidth="xl">
      <Typography py={4} variant="h4" component="h1">
        XLD Wallet Connector SDK (Software Developed by Karim)
      </Typography>
      <WalletTabs />
    </Container>
  );
};

export default Home;
