import { useContext } from "react";
import incomeImg from "../../assets/entradas.svg"
import outcomeImg from "../../assets/saidas.svg"
import totalImg from "../../assets/total.svg"
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

export function Summary(){
    const data = useContext(TransactionsContext)
    console.log(data);
    return (
        <Container>
            <div>
                <header>
                    <p>ENTRADAS</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>SAÍDAS</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>TOTAL</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}