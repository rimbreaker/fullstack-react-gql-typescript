import { withUrqlClient } from "next-urql"
import { Navbar } from "../components/Navbar"
import { createUrqlClient } from "../utils/createUrqlClient"


const Index = () => {
  return (
    <><Navbar /><div>Hello world</div></>
  )
}

export default withUrqlClient(createUrqlClient)(Index)
