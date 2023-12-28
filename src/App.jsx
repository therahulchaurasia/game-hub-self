import { useState } from "react"
import Navbar from "./components/Navbar"
import "./App.css"
import SidePanel from "./components/SidePanel"
import HeroContent from "./components/HeroContent"
import { Grid, GridItem, Show } from "@chakra-ui/react"

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav nav" "hero hero"`,
          lg: `"nav nav"
          "aside hero"`,
        }}
        gap="1"
        gridTemplateColumns={"150px 1fr"}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <SidePanel />
          </GridItem>
        </Show>
        <GridItem area={"hero"} marginX={[5, 5, 5, 0]}>
          <HeroContent />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
