import { Container } from "@chakra-ui/react"
import { Header, Description } from "@/components"

export default function Contact () {
  return (
    <Container maxW='850px' paddingTop='3em'>
      <Header />
      <Description title='Get in touch' description='Contact me'/>
    </Container>
  )
}