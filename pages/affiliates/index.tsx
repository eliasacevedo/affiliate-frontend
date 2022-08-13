import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import BasePage from '../../components/basePage'
import CrudBase, { CrudBaseProps } from '../../components/crudBase/crudBase'
import AffiliateForm from '../../components/form/affiliate/AffiliateForm'
import ConsumedAmountForm from '../../components/form/affiliate/ConsumedAmountForm'
import AffiliateSearchForm from '../../components/form/affiliate/AffiliateSearchForm'
import { ModalContext } from '../../contexts/modalContext'
import { Affiliate, getDefaultValue } from '../../core/affiliate'
import { AFFILIATE_ADD_PATH, AFFILIATE_GET_PATH, AFFILIATE_UPDATE_PATH } from '../../services/api/paths'
import { affiliateToAffiliateForm } from '../../components/form/affiliate/useAffiliateForm'

const AffiliatePage: NextPage = () => {  
  const [_, setModalInfo] = useContext(ModalContext)
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
        create: AFFILIATE_ADD_PATH,
        delete: "",
        get: AFFILIATE_GET_PATH,
        update: AFFILIATE_UPDATE_PATH
      },
      initialState: [],
      initialSync: false,
    }, 
    tableProps: {
      elements: [],
      options: [
        {
          id: "addAmount",
          children: <button className="btn mr-1">+</button>,
          onClick: (affiliate, context) => {
            setModalInfo(() => { return {
              children: <ConsumedAmountForm initValue={affiliate} context={context}/>,
              visible: true
            }})
          }
        },
        {
          id: "edit",
          children: <button className="btn mr-1">E</button>,
          onClick: (e, crud) => {
            setModalInfo(() => { return {
              children: <AffiliateForm context={crud} initValue={affiliateToAffiliateForm(e)} />,
              visible: true
            }})
          }
        },
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
        socialSecurity: "Seguridad social",
        planId: "Plan",
        statusId: "Estado"
      }
    },
    searchProps: {
      children: <AffiliateSearchForm />
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
