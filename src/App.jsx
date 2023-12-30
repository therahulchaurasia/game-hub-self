import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import "./App.css"
import SidePanel from "./components/SidePanel"
import HeroContent from "./components/HeroContent"
import { Grid, GridItem, Show } from "@chakra-ui/react"
import apiClient from "./services/api-client"

function App() {
  const [records, setRecords] = useState([])
  const getGames = async () => {
    const res = await apiClient.get("/games")
    if (res) {
      if (res.status === 200) {
        setRecords(res.data.results)
      }
    }
  }
  useEffect(() => {
    getGames()
  }, [])
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav nav" "hero hero"`,
          lg: `"nav nav"
          "aside hero"`,
        }}
        gap="1"
        gridTemplateColumns={"auto 1fr"}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={6}>
            <SidePanel />
          </GridItem>
        </Show>
        <GridItem area={"hero"} marginX={[5, 5, 5, 0]} marginBottom={5}>
          <HeroContent records={records} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
