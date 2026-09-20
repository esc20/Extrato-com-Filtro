# EXTRATO COM FILTRO
## Histórico Financeiro Dinâmico

Aplicação web para visualização e filtragem de histórico financeiro, desenvolvida com Angular 18+.

---

### DEMONSTRAÇÃO VISUAL

![Interface do Extrato com Filtro](extrato-com-filtro/assets/extrato-com-filtro.gif)

---

### DESEMPENHO REAL
#### Indicadores de Auditoria Google Lighthouse

O projeto passou pela avaliação do Google Lighthouse, apresentando os seguintes resultados oficiais:

* **Performance (92/100)**: Carregamento rápido e resposta ágil às interações do usuário.
* **Acessibilidade (91/100)**: Zona de excelência. Boa calibração de contraste e etiquetas acessíveis para leitura confortável.
* **Melhores Práticas (100/100)**: Pontuação máxima. Código em conformidade com as diretrizes modernas de segurança e uso de pacotes estáveis.
* **SEO (91/100)**: Estrutura otimizada com indexação correta de tags para motores de busca.

---

### ENGENHARIA DE SOFTWARE
#### Diferenciais Técnicos e Arquitetura

> O desenvolvimento do extrato focou em manter o fluxo de dados previsível, com o mínimo de estado espalhado entre componentes e componentes de apresentação totalmente desacoplados da lógica de negócio.

- **Filtragem Derivada por Computed Signals** O componente principal guarda os dados brutos e os critérios de busca em Signals independentes (`transacoesOriginal`, `termoBusca`, `tipoFiltro`). A lista final exibida na tela é resultado de um `computed()` que recalcula automaticamente sempre que qualquer um desses sinais muda — sem sincronização manual ou lógica duplicada.

- **Comunicação por Eventos Tipados** O componente de filtros não conhece a lista de transações nem mantém estado próprio: ele apenas emite os valores digitados/selecionados através da API moderna `output()` do Angular. Isso mantém a UI de filtro totalmente desacoplada da lógica de filtragem em si.

- **Otimização de Renderização com OnPush** Todos os componentes de apresentação (Filtros, Lista de Transações, Resumo de Saldo) usam `ChangeDetectionStrategy.OnPush`, reduzindo ciclos desnecessários de verificação do Angular.

- **Tratamento Defensivo na Origem dos Dados** O carregamento das transações passa por um `subscribe` com tratamento de erro explícito: se a requisição falhar, o Signal é redefinido para uma lista vazia, evitando que a tela quebre ou fique presa num estado inconsistente.

- **Renderização de Ícones via SVG Inline** Os ícones de cada categoria (PIX, Cartão, Boleto, Transferência) são SVGs inline mapeados por tipo e injetados via `DomSanitizer`, evitando requisições extras de imagem para cada ícone.

---

### ESTRUTURA FUNCIONAL
#### Componentização e Responsabilidades

- **Extrato Component (Página Mãe)**: Centraliza o estado da aplicação em Signals, dispara a busca inicial de dados e deriva a lista filtrada através de um `computed()`.
- **Filtros Component**: Captura o texto digitado e o tipo de transação selecionado, emitindo os valores via eventos tipados, sem manter estado próprio.
- **Lista Transações Component**: Recebe a lista já filtrada via `input()` e renderiza cada transação, incluindo o ícone correspondente à categoria.
- **Resumo Saldo Component**: Exibe saldo total, entradas e saídas recebidos via `input()`, formatados com `CurrencyPipe`.
- **Extrato Service**: Camada de acesso a dados isolada, responsável por buscar as transações e devolvê-las como `Observable`.

---

### TECNOLOGIAS E RECURSOS UTILIZADOS

* **Angular 18+**: [Standalone Components / Signals / formulários reativos — confirmar o que realmente é usado neste projeto.]
* **TypeScript**: [Modelagem de dados usada.]
* **SCSS**: [Abordagem de estilização usada.]

---

## Site EXTRATO-COM-FILTRO

[Clique aqui para acessar o projeto online](https://extrato-com-filtro-5gnm.vercel.app/)