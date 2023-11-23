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
                            if (product._id === null) return null
                            return (
                                <tr key={product._id} >
                                    <td>{product.id}</td>
                                    <td>{product.codigo}</td>
                                    <td>{product.title}</td>
                                    <td>{product.valor_mayorista}</td>
                                    <td>{product.pvp}</td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </Table>
    )
}

export default GridComponent;