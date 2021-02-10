import { Link } from "@chakra-ui/react"
import { withUrqlClient } from "next-urql"
import React from "react"
import { Layout } from "../components/Layout"
import { usePostsQuery } from "../generated/graphql"
import { createUrqlClient } from "../utils/createUrqlClient"
import NextLink from 'next/link'

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <Layout>


      <NextLink href='/create-post'><Link>
        create post</Link></NextLink>

      <div>Hello world</div>
      <br />
      {!data ? <div>Loading...</div> : data.posts.map(p => <div key={p.id}>{p.title}</div>)}
    </Layout>
  )
}

export default withUrqlClient(createUrqlClient, { ssr: true })(Index)
