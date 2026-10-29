# Landing page Fil&Soc — projeto separado

Esta página foi criada a partir da referência visual em vídeo. É uma landing page estática independente, com HTML, CSS e JavaScript. Não substitua o repositório do catálogo CineFil-Soc com estes arquivos.

## Publicar

1. Crie um novo repositório no GitHub, por exemplo `filsoc-landing`.
2. Envie o conteúdo desta pasta para a raiz do novo repositório: `index.html`, `styles.css`, `app.js`, `config.js`, `icon.svg`, `vercel.json`, `capas/`, `fonts/` e `imagens/`.
3. Na Vercel, crie outro projeto e importe esse novo repositório.
4. Selecione o preset **Other**. Deixe o comando de build sem preenchimento. A saída é a raiz do projeto, não `public` ou `dist`.
5. Deixe **Root Directory vazio, sem espaços**, se os arquivos estiverem na raiz do repositório.
6. Publique. Esta página não precisa de Node.js, instalação de pacotes, variáveis de ambiente ou banco de dados.

## Colocar os links de compra

Abra `config.js` e preencha:

```js
window.FILSOC_CONFIG = {
  compraBasico: "https://SEU-LINK-DO-PLANO-BASICO",
  compraCompleto: "https://SEU-LINK-DO-PLANO-COMPLETO",
  bonus: { slides: "", mapasMentais: "", atividades: "", planoAnual: "", aulaEmergencia: "", dinamicasDebates: "", provasSimulados: "" }
};
```

Os exemplos acima são campos para editar; não são links de compra reais. Use endereços completos HTTPS. Enquanto os campos estiverem vazios, o site informa que os links ainda estão sendo configurados e não inicia nenhum pagamento.

O botão Básico abre primeiro a apresentação dos sete bônus do Completo. O visitante pode escolher o upgrade ou continuar no Básico. Os botões seguem para os respectivos links quando configurados.

Os campos de bônus são uma reserva de configuração. Eles NÃO liberam nem entregam os materiais ao comprador nesta landing page. A entrega e o controle de acesso devem ser realizados pelo seu checkout, área de membros ou outro sistema que você configurar. Não coloque links de materiais privados em `config.js`: esse arquivo é público.

## Conteúdo comercial

- Básico: R$ 10,00; acervo de filmes e documentários, sem os sete bônus.
- Completo: R$ 19,90; acervo e os sete bônus informados pelo responsável pelo produto.
- Bônus: slides de aula, mapas mentais, mais de mil atividades, plano de aula anual, aula de emergência, dinâmicas e debates, provas e simulados.
- Não foram acrescentados depoimentos, prazo promocional, contagem regressiva, garantia, recorrência ou promessa de acesso vitalício.
- Os planos não removem anúncios nem restrições do player do YouTube.
- As imagens dos bônus são mockups ilustrativos. Os materiais pedagógicos em si não estão neste ZIP; seus links serão fornecidos posteriormente.

Os links “Ver o catálogo” e as capas levam a `https://filsoc.vercel.app/`. Para mudar esse endereço, edite `index.html`.

## Personalização

Textos e preços: `index.html`. Cores, espaçamento, responsividade e movimento: `styles.css`. Janela de bônus, animações e carrosséis: `app.js`. Links de checkout: `config.js`.

As imagens próprias estão em `imagens/` e `capas/`. Os prompts das novas ilustrações estão em `PROMPTS-IMAGENS.json`. As fontes são locais em `fonts/`.

Não é necessário usar ou enviar o vídeo de referência para publicar a página.
