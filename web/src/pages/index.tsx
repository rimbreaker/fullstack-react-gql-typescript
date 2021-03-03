import { Box, Button, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react"
import { withUrqlClient } from "next-urql"
import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { usePostsQuery } from "../generated/graphql"
import { createUrqlClient } from "../utils/createUrqlClient"
import NextLink from 'next/link'

const Index = () => {
  const [variables, setVariables] = useState({ limit: 33, cursor: null as null | string })
  const [{ data, fetching }] = usePostsQuery({
    variables
  });

  if (!fetching && !data) {
    return <div>you got query failed for some reason</div>
  }
  return (
    <Layout>
      <Flex align="center">
        <Heading>LiReddit
        </Heading>
        <NextLink href='/create-post'>
          <Link ml="auto">create post</Link>
        </NextLink>
      </Flex>
      <br />
      {  !data && fetching ? <div>Loading...</div> : <Stack spacing={8}>
        {data!.posts.posts.map(p =>
          <Box key={p.id} p={5} shadow="md" borderWidt="1px">
            <Heading fontSize="xl">{p.title}</Heading>
            <Text mt={4}>{p.textSnippet}...</Text>
          </Box>)}
      </Stack>}
      {data && data.posts.hasMore ?
        <Flex>
          <Button isLoading={fetching} onClick={() => {
            setVariables({
              limit: variables.limit,
              cursor: data.posts.posts[data.posts.posts.length - 1].createdAt
            })
          }} m="auto" my={8}>load more</Button>
        </Flex> : null}
    </Layout>
  )
}

export default withUrqlClient(createUrqlClient, { ssr: true })(Index)
