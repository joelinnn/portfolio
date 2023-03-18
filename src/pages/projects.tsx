import { Container } from "@chakra-ui/react"
import { Header, Description } from "@/components"

export default function Projects() {
  return (
    <Container maxW='850px' paddingTop='3em'>
      <Header />
      <Description title="Projects" description="Here are some of my projects" />
    </Container>
  )
}