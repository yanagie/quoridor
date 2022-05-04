import type { NextPage } from 'next'
import Head from 'next/head'
import Unity, { UnityContext } from 'react-unity-webgl'

const unityContext = new UnityContext({
  loaderUrl: '/build/Quoridor_web.loader.js',
  dataUrl: '/build/Quoridor_web.data',
  frameworkUrl: '/build/Quoridor_web.framework.js',
  codeUrl: '/build/Quoridor_web.wasm',
})

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Unity
          unityContext={unityContext}
          style={{ width: '1080px', height: '960px' }}
        />
      </main>
    </div>
  )
}

export default Home
