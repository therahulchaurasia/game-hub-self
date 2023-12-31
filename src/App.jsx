import { useCallback, useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import "./App.css"
import SidePanel from "./components/SidePanel"
import HeroContent from "./components/HeroContent"
import { Grid, GridItem, Show } from "@chakra-ui/react"
import apiClient from "./services/api-client"

function App() {
  const empty_params = {
    genres: null,
    platforms: null,
    ordering: null,
    search: null,
  }
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(false)
  const [params, setParams] = useState(empty_params)
  const [error, setError] = useState(null)
  const getGames = useCallback(async () => {
    try {
      setLoading(true)
      const res = await apiClient.get("/games", {
        params: {
          genres: params.genres,
          search: params.search,
          platforms: params.platforms,
          ordering: params.ordering,
        },
      })
      if (res) {
        setLoading(false)
        if (res.status === 200) {
          setRecords(res.data.results)
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }, [params.genres, params.search, params.platforms, params.ordering])
  useEffect(() => {
    getGames()
  }, [getGames])
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
          <Navbar params={params} setParams={setParams} />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={6}>
            <SidePanel params={params} setParams={setParams} />
          </GridItem>
        </Show>
        <GridItem area={"hero"} marginX={[5, 5, 5, 0]} marginBottom={5}>
          <HeroContent
            records={records}
            loading={loading}
            params={params}
            setParams={setParams}
            error={error}
          />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
