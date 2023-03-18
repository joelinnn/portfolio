import { Header, Description } from '@/components'
import { Container } from '@chakra-ui/react'

const HomeDescription =  `I'm a software engineer that enjoys creating innovative solutions to real world problems and is passionate about building software that improves the lives of people around the world.`

export default function Home() {
  return (
    <Container fontFamily='sans-serif' maxW='850px' paddingTop='3em'>
      <Header />
      <Description title={`Hi, I'm Joe`} description={HomeDescription}/>
    </Container >
  )
}
