import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

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
                    {transactions.map(transaction => (
                        <tr>
                            <td>{transaction.title}</td>
                            <td className="deposit">{transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}

