import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionTable() {
    useEffect(() => {
        api.get("transactions")
        .then(response => console.log(response.data))
    }, []);
    
    return(
        <Container>
            <table>
                <th>
                    <tr>
                        <th>TÍTULO</th>
                        <th>VALOR</th>
                        <th>CATEGORIA</th>
                        <th>DATA</th>
                    </tr>
                </th>

                <tbody>
                    <tr>
                        <td>DBS</td>
                        <td className="withdraw">$12.000</td>
                        <td>DESENVOLVIMENTO</td>
                        <td>20/10/2000</td>
                    </tr>
                    <tr>
                        <td>DBS</td>
                        <td className="deposit">$12.000</td>
                        <td>DESENVOLVIMENTO</td>
                        <td>20/10/2000</td>
                    </tr>
                    <tr>
                        <td>DBS</td>
                        <td className="withdraw">$12.000</td>
                        <td>DESENVOLVIMENTO</td>
                        <td>20/10/2000</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}

