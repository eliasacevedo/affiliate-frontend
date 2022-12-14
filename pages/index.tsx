import type { NextPage } from 'next'
import Head from 'next/head'
import BasePage from '../components/basePage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Affiliates App</title>
        <meta name="description" content="App for managed affiliates in social security system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasePage>
        <h1> Bienvenido a la Aplicacion de afiliados </h1>
      </BasePage>
    </div>
  )
}

export default Home
