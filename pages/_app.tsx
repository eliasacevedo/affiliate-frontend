import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import {ModalContext, ModalContextInterface, defaultValue} from '../contexts/modalContext'
import ModalBase from '../components/modal/modalBase'

function MyApp({ Component, pageProps }: AppProps) {
  const modalContextState = useState<ModalContextInterface>(defaultValue)

  return (
    <ModalContext.Provider value={modalContextState}>
      <Component {...pageProps} />
      <ModalBase  />
    </ModalContext.Provider>
  )
}

export default MyApp
