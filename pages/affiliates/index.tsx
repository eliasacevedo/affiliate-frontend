import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import BasePage from '../../components/basePage'
import CrudBase, { CrudBaseProps } from '../../components/crudBase/crudBase'
import AffiliateForm from '../../components/form/affiliate/AffiliateForm'
import { ModalContext } from '../../contexts/modalContext'
import { Affiliate, getDefaultValue } from '../../core/affiliate'

const AffiliatePage: NextPage = () => {  
  const [modalInfo, setModalInfo] = useContext(ModalContext)
  const crudProps: CrudBaseProps<Affiliate> = {
    headerProps: {
      name: "Afiliados",
      onCreate: (context) => {
        setModalInfo(() => {return {
          children: <AffiliateForm context={context}  />,
          visible: true
        }})
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
        getDefaultValue()
      ],
      initialSync: false,
      
    }, 
    tableProps: {
      elements: [],
      options: [
        {
          id: "edit",
          children: <button className="btn mr-1">E</button>,
          onClick: (e, crud) => {
            setModalInfo(() => { return {
              children: <AffiliateForm context={crud} initValue={e} />,
              visible: true
            }})
          }
        },
        {
          id: "delete",
          children: <button className="btn bg-red-700 hover:bg-red-800">B</button>,
          onClick: (e, crud) => {
            console.log(e, crud)
          }
        }
      ],
      schema: {
        id: "ID",
        firstname: "Nombre",
        lastname: "Apellido",
        birthDate: "Fecha nacimiento",
        consumedAmount: "Monto consumido",
        identificationId: "Cedula",
        phoneNumber: "Telefono",
        registryDate: "Fecha registro",
        sex: "Sexo",
        socialSecurity: "Seguridad social"
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
        <CrudBase {...crudProps}/>
      </BasePage>
    </div>
  )
}

export default AffiliatePage
