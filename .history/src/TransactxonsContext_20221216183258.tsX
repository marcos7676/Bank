import { createContext, useEffect, useState } from 'react'

export const TransactionsContext = createContext([]);

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsProvider(){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("transactions")
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TrabsactionContext.Provider value={transactions}>

        </TrabsactionContext.Provider>
    )
}