import React from "react";
//import Collapse from "@mui/material/Collapse";
//import IconButton from "@mui/material/IconButton";
import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow ,
} from "@mui/material";
import { v4 as uuid } from "uuid";
//import KeyboardAr  DownIcon from "@mui/icons-material/KeyboardAr  Down";
//import KeyboardAr  UpIcon from "@mui/icons-material/KeyboardAr  Up";

const TableGalery = () => {
  const cells = [
    { title: "Pedido", id: uuid() }, 
    { title: "Nombres", id: uuid() },
    { title: "Celular", id: uuid() }, 
    { title: "Última cuota", id: uuid() },
    { title: "Próxima cuota", id: uuid() }, 
    { title: "# cuotas", id: uuid() },
    { title: "Artículo", id: uuid() },
    { title: "Imágen", id: uuid() }, 
    { title: "Precio", id: uuid() }, 
    { title: "Mensajes complementarios", id: uuid() },
    { title: "Calificación", id: uuid() },
  ];

  function createData(
    receipt: string,
    id: string,
    names: string,
    phone: number,
    last_payment: string,
    previous_payment: string,
    payments: string,
    category: string,
    image: string,
    price: number,
    //complementary_messages: object[],
  ) {
    return { 
      receipt,
      id, 
      names, 
      phone, 
      last_payment,
      previous_payment,
      payments,
      category,
      image,
      price,
      //complementary_messages  
    };
  }

  const rows = [
    createData("0215", uuid(), "Christian Chavez", 3106909066, '12/8', '12/7', '2/8', "cuadro", "sagrado corazón", 110000 ),
    createData("0215", uuid(), "Christian Chavez", 3106909066, '12/8', '12/7', '2/8', "cuadro", "sagrado corazón", 110000 ),
    createData("0215", uuid(), "Christian Chavez", 3106909066, '12/8', '12/7', '2/8', "cuadro", "sagrado corazón", 110000 ),
    createData("0215", uuid(), "Christian Chavez", 3106909066, '12/8', '12/7', '2/8', "cuadro", "sagrado corazón", 110000 ),
    createData("0215", uuid(), "Christian Chavez", 3106909066, '12/8', '12/7', '2/8', "cuadro", "sagrado corazón", 110000 ),
  ];
  // const users = [
  //   {
  //     receipt: "0215", 
  //     id: uuid(), 
  //     names: "Christian Chávez", 
  //     phone: "3106909066", 
  //     last_payment: "12/8", 
  //     previous_payment: "12/8", 
  //     payments: "2/8",
  //     category: "cuadro",
  //     image: "sagrado corazón",
  //     price: 110.000,
  //     complementary_messages:[
  //       {
  //         autor: "Stella", 
  //         messsage: 
  //           "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Junio-1-21",
  //       },
  //       {
  //         autor: "Rogelio", 
  //         messsage: 
  //           "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Enero-19-22",
  //       },
  //       {
  //         autor: "Enrique", 
  //         messsage:
  //           "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Abril-30-22",
  //       },
  //       {
  //         autor: "Stella", 
  //         messsage: 
  //           "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Mayo-2-22",
  //       }
  //     ],
  //     calification: "",
  //   },
  //   {
  //     receipt: "8754", 
  //     id: uuid(), 
  //     names: "Camilo Herrera", 
  //     phone: "3106954786", 
  //     last_payment: "2/7", 
  //     previous_payment: "12/8", 
  //     payments: "4/10",
  //     category: "marmolina",
  //     image: "cena color",
  //     price: 400.000,
  //     complementary_messages:[
  //       {
  //         autor: "Stella", 
  //         messsage: 
  //           "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Junio-1-21",
  //       },
  //       {
  //         autor: "Rogelio", 
  //         messsage: 
  //           "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Enero-19-22",
  //       },
  //       {
  //         autor: "Enrique", 
  //         messsage: 
  //           "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Abril-30-22",
  //       },
  //       {
  //         autor: "Stella", 
  //         messsage: 
  //           "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Mayo-2-22",
  //       }
  //     ],
  //     calification: "",
  //   },
  //   {
  //     receipt: "7820", 
  //     id: uuid(), 
  //     names: "Rodrgio Perez", 
  //     phone: "3116529087", 
  //     last_payment: "30/3", 
  //     previous_payment: "1/2", 
  //     payments: "5/10",
  //     category: "marmolina",
  //     image: "sagrada familia",
  //     price: 240.000,
  //     complementary_messages:[
  //       {
  //         autor: "Stella", 
  //         messsage: 
  //           "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Junio-1-21",
  //       },
  //       {
  //         autor: "Rogelio", 
  //         messsage: 
  //           "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Enero-19-22",
  //       },
  //       {
  //         autor: "Enrique", 
  //         messsage: 
  //         "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Abril-30-22",
  //       },
  //       {
  //         autor: "Stella", 
  //         messsage: 
  //         "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  //         date: "Mayo-2-22",
  //       }
  //     ],
  //     calification: "",
  //   }
  // ]

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {cells.map(cell => <TableCell align="center" key={cell.id} id={cell.id}>{cell.title}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
            {rows.map( row  => { 
              const {receipt, id, names, phone, last_payment, previous_payment, payments, category, image, price} =  row;
              return (
                <TableRow key={id} >
                  <TableCell component="th" scope="row">
                    {receipt}
                  </TableCell>
                  <TableCell align="center">{names}</TableCell>
                  <TableCell align="center">{phone}</TableCell>
                  <TableCell align="center">{last_payment}</TableCell>
                  <TableCell align="center">{previous_payment}</TableCell>
                  <TableCell align="center">{payments}</TableCell>
                  <TableCell align="center">{category}</TableCell>
                  <TableCell align="center">{image}</TableCell>
                  <TableCell align="center">{price}</TableCell>
                </TableRow>
                // <TableRow>
                //   <TableCell component="th" scope="  " key={id}>{receipt}</TableCell>
                //   <TableCell align="center" key={`${id}-${names}`}>{names}</TableCell>
                //   <TableCell align="center" key={`${id}-${phone}`}>{phone}</TableCell>
                //   <TableCell align="center" key={`${id}-${last_payment}`}>{last_payment}</TableCell>
                //   <TableCell align="center" key={`${id}-${previous_payment}`}>{previous_payment}</TableCell>
                //   <TableCell align="center" key={`${id}-${payments}`}>{payments}</TableCell>
                //   <TableCell align="center" key={`${id}-${category}`}>{category}</TableCell>
                //   <TableCell align="center" key={`${id}-${image}`}>{image}</TableCell>
                //   <TableCell align="center" key={`${id}-${price}`}>{price}</TableCell>
                //   <TableCell align="center" key={`${id}-${complementary_messages}`}>{complementary_messages}</TableCell>
                //   <TableCell align="center" key={`${id}-${calification}`}>{calification}</TableCell>
                // </TableRow>
              )
              }
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableGalery;
