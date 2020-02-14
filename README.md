

## Instalando as dependências

    npm install

## Criando arquivo de configuração

Em **./src/main**, crie o arquivo `config.js` seguindo o modelo:

```json
{
  "apiPort": "",

  "development": {
    "db": {
      "name": "",
      "url": "",
      "user": "",
      "password": ""
    }
  }
}
```

- **`"apiPort"`** : informe a porta em que a API irá rodar
- **`"name"`** : informe o nome do banco
- **`"url"`** : informe a url de conexão do banco
- **`"user"`** : informe o usuário do banco
- **`"password"`** : informe a senha do usuário do banco

## Para rodar a API

    npm run dev

## Rota principal

Faça um **GET** para a rota principal (raíz), exemplo: caso esteja rodando no _localhost_ na porta _8080_, faça:

    GET para http://localhost:8080/

> _Esse **GET** pode ser feito no Postman, ou via browser direto, apenas informando o endereço (url)_

Isso retornará um `json` no seguinte formato:

```json
{
  "System": "Lembretes",
  "Version": "1.0.0",
  "Message": "teste"
}
```
