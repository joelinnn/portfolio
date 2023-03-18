import { Container } from "@chakra-ui/react"
import { Header, Description } from "@/components"

const AboutDescription = 'About me Page'

export default function About () {
  return (
    <Container maxW='850px' paddingTop='3em'>
      <Header />
      <Description title='About Me' description={AboutDescription}/>
    </Container>
  )
}