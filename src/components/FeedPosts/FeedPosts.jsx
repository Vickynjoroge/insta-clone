import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useEffect, useState } from "react"

const FeedPosts = () => {
    const[isLoading, setIsLoding] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoding(false);
        },2000);
    },[]);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        {isLoading && [0,1,2,3].map((_,idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap='2'>
                    <SkeletonCircle size='10' />
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height='10px' w={"200px"} />
                        <Skeleton height='10px' w={"100px"} />
                    </VStack>
                </Flex>
                <Skeleton w={'full'} >
                    <Box h={"500px"}>Contents wrapped</Box>
                </Skeleton>
            </VStack>
        ))}
        
        {!isLoading && (
            <>
                <FeedPost img='/img2.jpeg' username='Victor' avatar='/img2.png' />
                <FeedPost img='/img1.png' username='Yvonne' avatar='/img1.png' />
                <FeedPost img='/img3.png' username='Owen' avatar='/img3.png' />
                <FeedPost img='/img4.png' username='Faith' avatar='/img4.png' />
            </>
        )}
        
    </Container>
  )
}

export default FeedPosts

// 1:40:00