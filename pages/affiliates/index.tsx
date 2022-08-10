import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import BasePage from '../../components/basePage'
import CrudBase, { CrudBaseProps } from '../../components/crudBase/crudBase'
import { ModalContext } from '../../contexts/modalContext'



const AffiliatePage: NextPage = () => {  
  const [modalInfo, setModalInfo] = useContext(ModalContext)
  const crudProps: CrudBaseProps = {
    headerProps: {
      name: "Afiliados",
      onCreate: () => {
        setModalInfo({
          children: <>Testing</>,
          visible: true
        })
      }
    },
    hookProps: {
      paths: {
        create: "",
        delete: "",
        get: "",
        update: ""
      },
      initialState: [
        {
          id: "1",
          firstname: "test",
          lastname: "ing",
        }
      ],
      initialSync: false
      
    }, 
    tableProps: {
      elements: [],
      options: [
        {
          id: "edit",
          children: <button className="btn mr-1">E</button>,
          onClick: (e) => {
            console.log(e)
          }
        },
        {
          id: "delete",
          children: <button className="btn bg-red-700 hover:bg-red-800">B</button>,
          onClick: (e) => {
            console.log(e)
          }
        }
      ],
      schema: {
        id: "Identificador",
        firstname: "Nombre",
        lastname: "Apellido",
      }
    }
  } 

  return (
    <div>
      <Head>
        <title>Afiliados | Afiliados APP</title>
        <meta name="description" content="App for managed affiliates in social security system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasePage>
        <CrudBase {...crudProps} />
      </BasePage>
    </div>
  )
}

export default AffiliatePage
