import { Flex } from "@chakra-ui/react"
import Navbar from "./navbar"
import Footer from "./footer"

export default function LandingLayout(props) {
  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        {...props}
      >
        {props.children}
      </Flex>
      <Footer />
    </>
  )
}