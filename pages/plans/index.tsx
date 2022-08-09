import type { NextPage } from 'next'
import Head from 'next/head'
import BasePage from '../../components/basePage'

const PlansPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Planes | Afiliados APP</title>
        <meta name="description" content="App for managed affiliates in social security system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasePage>
        <h1> Mantenimiento para los planes </h1>
      </BasePage>
    </div>
  )
}

export default PlansPage
