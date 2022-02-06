import React, { useState } from "react";

import TransactionTypeButton from "../../components/TransactionTypeButton";
import CategorySelect from "../../components/Form/CategorySelect";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";

import * as S from "./styles";

const Register = () => {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />

          <Input placeholder="Preço" />

          <S.TransactionsTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransactionsTypeSelect("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </S.TransactionsTypes>

          <CategorySelect title="Categoria" />
        </S.Fields>

        <Button title="Enviar" />
      </S.Form>
    </S.Container>
  );
};

export default Register;
