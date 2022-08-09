import type { NextPage } from 'next'
import Head from 'next/head'
import BasePage from '../../components/basePage'

const StatusPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Estados | Afiliados APP</title>
        <meta name="description" content="App for managed affiliates in social security system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasePage>
        <h1> Mantenimiento para los estados </h1>
      </BasePage>
    </div>
  )
}

export default StatusPage
