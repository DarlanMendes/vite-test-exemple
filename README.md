## Vite Test Exemple
Este repositório foi desenvolvido para exemplificar o ajuste das configurações de teste React utilizando o framework Vite.
### 1 - Passo
O primeiro passo para ajsutar os testes no projeto é instalar as bibliotecas Jest juntamente com a Testing Library (Jest-DOM, React, User-Event) todos com a flag -D, pois utilizaremos apenas no ambiente de desenvolvimento.

```javascript
npm install jest - D  //biblioteca jest
```
```javascript
npm install @testing-library/jest-dom 
@testing-library/react
@testing-library/user-event- D  // biblioteca testing-library
```
instalar também bibliotecas do Babel que permitirão  rodar o Jest com Node.js versão mais antiga.

```javascript
npm install @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom -D
```
### 2 - Passo
Agora ajustamos o package json adicionando o script de teste 
```JSON
"scripts":{
    "test":"jest",
    ...
}
```

E o tipo  de módulo para Common js
```javascript 
{
"type" : "commonjs"
}
```
### 3 -  Passo
Criaremos um arquivo chamado `jest.config.js`  na raiz do projeto e nele iremos configurar as opções para o Jest funcionar corretamente.
A configuração do arquivo deve seguir o padrão:
```javascript 
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
}
```
### 4 - Passo
Criar um diretório `.jest` e dentro dele criar o `setup-tests.js`. Neste arquivo vai ser feito as configurações globais.
```javascript 
import '@testing-library/jest-dom'
```


Depois um dentro de `.jest` criar uma pasta `mocks` e dentro dela um arquivo `fileMock.js` com  o conteúdo abaixo:
```javascript 
module.exports = 'test-file-stub'
```
Obs.: A função acima é responsável por simular as respostas dos imports de arquivos, como se eles fossem arquivos reais.
O `test-file-stub` é um mock para os arquivos que não estão sendo usados em nossos testes, como por exemplo imagens ou fontes.

### 5 - Passo
Criar um diretório chamado `babel.config.json` na raiz do projeto e nele iremos colocar  as configurações para o Babel rodar.
Configuração:
```JSON {
  {"presets": [
    ["@babel/preset-env", { "targets": { "esmodules": true } }],
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```
### 6 - Passo
Agora você já pode criar um arquivo `App.test.jsx` e aplicar os testes. Outra opção é criar testes por componente,sempre lembrando de utilizar o padrão `nome-componente.test.jsx` ou `nome-componente.spec.jsx`


#### Neste repositório  você encontrará os exemplos de como criar um teste em App.test.jsx