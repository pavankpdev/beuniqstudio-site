import {Button, Flex, Heading, Text} from "@chakra-ui/react";

const PrivateLesson = () => {
    return <>
    <Flex gridGap={".3rem"} bg={"brandPrimary.400"} color={"white"} h={"100%"} padding={"2rem 0"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"space-evenly"}>
        <Heading>
            Private Lessons
        </Heading>
        <Text textAlign={"center"}>
            We offer music education for individuals of just about every age and skill level.
        </Text>
        <Button colorScheme={"white"} variant={"outline"}>
            Learn More
        </Button>
    </Flex>
    </>
}
export default PrivateLesson