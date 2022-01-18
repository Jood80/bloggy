import { Suspense } from "react"
import { Flex } from "@chakra-ui/react"
import Navbar from "../navbar"
import Footer from "../footer/footer"
import { Loader } from "../loader"

export default function LandingLayout(props) {
  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        pt={20}
        {...props}
      >
        <Suspense fallback={<Loader />} >
          {props.children}
        </Suspense>
      </Flex>
      <Footer />
    </>
  )
}