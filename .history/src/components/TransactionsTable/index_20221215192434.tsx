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
                    {transactions.map(transaction => ()
                        return(
                            <tr>
                                <td></td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </Container>
    );
}

