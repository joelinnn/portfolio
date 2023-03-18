import { Flex, Heading, Link, Text, Stack, Avatar } from '@chakra-ui/react'

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

      <Stack direction="row" align='center' fontWeight='bold'>
        <Link href='/' > Home </Link>
        <Link href='/about'> About </Link>
        <Link href='/projects'> Projects </Link>
        <Link href='/contact'> Contact </Link>
      </Stack>
    </Flex >
  )
}
