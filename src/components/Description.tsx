import { Flex, Text } from "@chakra-ui/react"

type DescriptionProps = {
  title: string,
  description: string,
}
export const Description = ({title , description} :DescriptionProps) => {

  return (
    <Flex p={5} direction='column'>
      <Text fontSize='30' fontWeight='450'> {title} </Text>
      <Text paddingTop={5}> {description} </Text>
    </Flex>
  )
}