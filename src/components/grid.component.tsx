import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { defaultValueDataServer } from "../config/valoresPorDefecto";


function GridComponent() {

    const [dataTable, setDataTable] = useState(defaultValueDataServer);


    const getProductsData = async (url: string) => {
        const response = await fetch(url);
        const resJson = await response.json();
        setDataTable(resJson);
    }

    useEffect(() => {
        getProductsData('http://localhost:3000/all-products');
    }, []);



    return (
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Valor neto</th>
                    <th>Valor venta</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataTable === null ?
                        null :
                        dataTable.map((product) => {
                            if (product.producto_producto === 0) return null
                            return (
                                <tr key={product.producto_producto} >
                                    <td>{product.producto_producto}</td>
                                    <td>{product.producto_codigo}</td>
                                    <td>{product.producto_nombre}</td>
                                    <td>{product.producto_valor}</td>
                                    <td>{product.prodcuto_pvp}</td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </Table>
    )
}

export default GridComponent;