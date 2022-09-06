import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="my-4 mx-auto max-w-4xl">
      <Head>
        <title>Threaddit by Super Distros</title>
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
