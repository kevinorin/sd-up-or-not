import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="max-w-4xl my-7 mx-auto">
      <Head>
        <title>Up or Not by Super Distros</title>
      </Head>

      {/* PostBox */}
      <PostBox/>

      {/* Feed */}
      <div>

      </div>
    </div>
  )
}

export default Home
