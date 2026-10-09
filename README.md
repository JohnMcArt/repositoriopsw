# PSW — Projetos da turma

Portal estático para reunir links de projetos desenvolvidos nas aulas de Programação de Sistemas Web.

## O que inclui

- Página inicial responsiva, com layout pensado para desktop e celular.
- Nove links para os sites de projetos da turma.
- Busca por nome/descrição e filtros por categoria.
- Abertura dos projetos em nova aba.
- HTML, CSS e JavaScript sem frameworks ou bibliotecas externas.
- Estrutura limpa para publicação no GitHub Pages.

## Estrutura

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── turma-desenvolvimento.jpg
```

As antigas pastas de atividades, rascunhos de aula e arquivos sem uso na página principal foram removidos desta versão. A imagem original de grande tamanho também foi excluída; o portal utiliza uma fotografia menor para carregar mais rápido.

## Rodar localmente

Abra `index.html` no navegador. Como o site é estático, não precisa de PHP, banco de dados, Node.js ou instalação de dependências.

## Publicar no GitHub Pages

1. Envie os arquivos e a pasta `assets/` para a raiz da branch principal do repositório.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch principal (por exemplo, `main`) e a pasta **`/(root)`**.
5. Salve e aguarde a publicação.

> Se o repositório já estiver configurado para publicar a partir de `/docs`, altere a pasta de publicação para `/(root)` para esta estrutura, ou copie o site para `docs/` mantendo os caminhos relativos.

## Observação sobre os links

Os projetos listados estão hospedados em endereços externos independentes. Este portal reúne os atalhos, mas não controla a disponibilidade nem o funcionamento interno desses sites.
