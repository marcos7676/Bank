import incomeImg from "../../assets/entradas.svg"
import outcomeImg from "../../assets/saidas.svg"
import totalImg from "../../assets/total.svg"

import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){
    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })
    
    return (
        <Container>
            <div>
                <header>
                    <p>ENTRADAS</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>SAÍDAS</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>TOTAL</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}