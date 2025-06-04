import React from "react";
import Swal from "sweetalert2";
import { clientsMock } from "../../mocks/ClientsMock";
import MaterialTable from "@material-table/core";

const ClientList = () => {
  const tableData = clientsMock.map((item) => ({
    name: item.name,
    lastname: item.lastname,
    dni: item.dniNumber,
  }));

  const showClient = (dni) => {
    const client = clientsMock.find((user) => user.dniNumber === dni);
    if (client) {
      Swal.fire({
        title: "Detalles del cliente",
        html: `
                <b>Nombre y apellido del titular</b> <p>${client.name} ${client.lastname}</p> 
                <b>Número de DNI</b> <p>${client.dniNumber}</p> 
                <b>Cuenta Bantotal</b> <p>${client.bantotalAccount}</p> 
                <b>Fecha de nacimiento</b> <p>${client.dateOfBirth}</p> 
                <b>Estado civil</b> <p>${client.maritalStatus}</p> 
                <b>Sexo</b> <p>${client.gender}</p> 
                <b>Código postal</b> <p>${client.postalCode}</p> 
                <b>Domicilio</b> <p>${client.address}</p> 
                <b>Nacionalidad</b> <p>${client.nationality}</p> 
                <b>Provincia</b> <p>${client.province}</p> 
                <b>Localidad</b> <p>${client.city}</p>  
                <b>Categoría IVA Contribuyente</b> <p>${client.vatCategory}</p> 
                <b>Ocupación</b> <p>${client.occupation}</p> 
                <b>Administradora</b> <p>${client.administrator}</p> 
                <b>Código de banco</b> <p>${client.bankCode}</p> 
                <b>Número de solicitud Bantotal</b> <p>${client.bantotalApplicationNumber}</p> 
                <b>ID producto Adintar</b> <p>${client.adintarProductID}</p> 
                <b>Denominación de la tarjeta</b> <p>${client.cardName}</p> 
                <b>Sucursal</b> <p>${client.branch}</p> 
                <b>Límite de compra</b> <p>${client.purchaseLimit}</p> 
                <b>Límite de financiación</b> <p>${client.financingLimit}</p> 
                <b>Forma de pago</b> <p>${client.paymentMethod}</p> 
                <b>Moneda de pago</b> <p>${client.paymentCurrency}</p> 
                <b>Sucursal (de la cuenta a la vista)</b> <p>${client.checkingAccountBranch}</p> 
                <b>Cuenta vista a debitar</b> <p>${client.debitCheckingAccount}</p> 
                <b>Subcuenta (de la cuenta vista)</b> <p>${client.checkingAccountSubaccount}</p> 
                <b>Tipo de operación</b> <p>${client.operationType}</p> 
                `,
        confirmButtonText: "Aceptar",
      });
    } else {
      console.log("Cliente no encontrado");
    }
  };

  return (
    <>
      <MaterialTable
        title="Clientes listados"
        columns={[
          { title: "Nombre", field: "name" },
          { title: "Apellido", field: "lastname" },
          { title: "DNI", field: "dni", type: "numeric" },
          {
            title: "Detalle",
            render: (rowData) => (
              <button
                className="btn-table"
                onClick={() => showClient(rowData.dni)}
              >
                Ver más{" "}
              </button>
            ),
          },
        ]}
        data={tableData}
        options={{
          rowStyle: {
            backgroundColor: "#EEE",
          },
        }}
      />
    </>
  );
};

export default ClientList;
