"use client";
import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import { LOGO_URL } from "@/utils/constants";
import {useRouter} from "next/navigation";

const AppBarComponent = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box flexGrow={1}>
              <img width={170} src={LOGO_URL} />
            </Box>
            <Box>
              {session?.user?.id && (
                <Button
                  onClick={() => {
                    signOut().then((response)=>{
                      router.push('/');
                    });
                  }}
                  color="inherit"
                  variant="contained"
                  size="small"
                >
                  LogOut
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default AppBarComponent;
