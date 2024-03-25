import React from 'react'
import Swal from 'sweetalert2'
import { Row, } from '../shared/SharedStyles'
import { MoreInfo, TextCampaing, ClientCard } from './CampaingStyles'
import { clientsMock } from '../../mocks/ClientsMock'

const ClientList = () => {

    const showClientData = (
        name, 
        lastname,
        dniNumber,
        bantotalAccount,
        dateOfBirth,
        maritalStatus,
        gender,
        postalCode,
        address,
        nationality,
        province,
        city,
        vatCategory,
        occupation,
        administrator,
        bankCode,
        bantotalApplicationNumber,
        adintarProductID,
        cardName,
        branch,
        purchaseLimit,
        financingLimit,
        paymentMethod,
        paymentCurrency,
        checkingAccountBranch,
        debitCheckingAccount,
        checkingAccountSubaccount,
        operationType
        )=>{
        Swal.fire({
            html: `
            <b>Nombre y apellido del titular</b> <p>${name} ${lastname}</p> <br>
            <b>Número de DNI</b> <p>${dniNumber}</p> <br>
            <b>Cuenta Bantotal</b> <p>${bantotalAccount}</p> <br>
            <b>Fecha de nacimiento</b> <p>${dateOfBirth}</p> <br>
            <b>Estado civil</b> <p>${maritalStatus}</p> <br>
            <b>Sexo</b> <p>${gender}</p> <br>
            <b>Código postal</b> <p>${postalCode}</p> <br>
            <b>Domicilio</b> <p>${address}</p> <br>
            <b>Nacionalidad</b> <p>${nationality}</p> <br>
            <b>Provincia</b> <p>${province}</p> <br>
            <b>Localidad</b> <p>${city}</p> <br> 
            <b>Categoría IVA Contribuyente</b> <p>${vatCategory}</p> <br>
            <b>Ocupación</b> <p>${occupation}</p> <br>
            <b>Administradora</b> <p>${administrator}</p> <br>
            <b>Código de banco</b> <p>${bankCode}</p> <br>
            <b>Número de solicitud Bantotal</b> <p>${bantotalApplicationNumber}</p> <br>
            <b>ID producto Adintar</b> <p>${adintarProductID}</p> <br>
            <b>Denominación de la tarjeta</b> <p>${cardName}</p> <br>
            <b>Sucursal</b> <p>${branch}</p> <br>
            <b>Límite de compra</b> <p>${purchaseLimit}</p> <br>
            <b>Límite de financiación</b> <p>${financingLimit}</p> <br>
            <b>Forma de pago</b> <p>${paymentMethod}</p> <br>
            <b>Moneda de pago</b> <p>${ paymentCurrency}</p> <br>
            <b>Sucursal (de la cuenta a la vista)</b> <p>${checkingAccountBranch}</p> <br>
            <b>Cuenta vista a debitar</b> <p>${debitCheckingAccount}</p> <br>
            <b>Subcuenta (de la cuenta vista)</b> <p>${checkingAccountSubaccount}</p> <br>
            <b>Tipo de operación</b> <p>${operationType}</p> <br>
            `,
            confirmButtonText: 'Aceptar'
          })
    }

  return (
    <>
        {
            clientsMock.map((item, index)=>
            <ClientCard key={index}>
                <TextCampaing bold={true}>{item.name} {item.lastname}</TextCampaing>
                <Row>
                    <MoreInfo onClick={()=>showClientData(
                        item.name,
                        item.lastname,
                        item.dniNumber,
                        item.bantotalAccount,
                        item.dateOfBirth,
                        item.maritalStatus,
                        item.gender,
                        item.postalCode,
                        item.address,
                        item.nationality,
                        item.province,
                        item.city,
                        item.vatCategory,
                        item.occupation,
                        item.administrator,
                        item.bankCode,
                        item.bantotalApplicationNumber,
                        item.adintarProductID,
                        item.cardName,
                        item.branch,
                        item.purchaseLimit,
                        item.financingLimit,
                        item.paymentMethod,
                        item.paymentCurrency,
                        item.checkingAccountBranch,
                        item.debitCheckingAccount,
                        item.checkingAccountSubaccount,
                        item.operationType
                        )}>
                            Ver detalle
                    </MoreInfo>
                </Row>
            </ClientCard>
        )}
    </>

  )
}

export default ClientList