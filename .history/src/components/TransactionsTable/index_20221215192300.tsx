import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        api.get("transactions")
        .then(response => setTransactions(response.data))
    }, []);
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>TÍTULO</th>
                        <th>VALOR</th>
                        <th>CATEGORIA</th>
                        <th>DATA</th>
                    </tr>
                </thead>

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

