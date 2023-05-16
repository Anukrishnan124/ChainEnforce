import { Stack, Typography } from "@mui/material"

const style = {
  backgroundColor: "white",
  width: "80%",
  mx: "auto",
  borderRadius: "20px",
  mt: 3,
  height: "200px"
}

const Home = () => {
  return (
    <>
    <Stack sx={style}>
        <Typography>Home</Typography>
    </Stack>
    </>
  )
}
export default Home;