import { Flex, Heading, Link, Text, Stack, Avatar, Container } from '@chakra-ui/react'
import { DarkMode } from '@/components'

export const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
    >
      <Flex align='center'>
        <Avatar src='pfp.png' size='xl'/>
        <Stack direction='column'>
            <Heading fontSize='22'>
            Joe Lin
            </Heading>
          <Text fontSize='18'>Fullstack Software Engineer</Text>
        </Stack>
      </Flex>

      <Stack direction="row" align='center' fontWeight=''>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Projects</Link>
        <Link href='/contact'>Contact</Link>
      </Stack>
    </Flex >
  )
}
