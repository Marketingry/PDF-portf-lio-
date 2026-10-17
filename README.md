# Portfólio — template estilo "desktop retrô"

Template de portfólio para Creative Strategist / Editor de Vídeo, no mesmo padrão
visual da referência: capa escura com número gigante, slides de case com
**BRIEFING.dox** + **criativo 9:16** + janela de métricas estilo Windows 98,
"Sobre mim" em janela de `cmd.exe` e "Processo → Resultados" com o Creative Flywheel.

O PDF gerado fica em [`portfolio.pdf`](portfolio.pdf) (7 páginas, 16:9).

## Estrutura dos slides

| # | Slide | O que editar |
|---|-------|--------------|
| 1 | Capa | Nome, número grande (`1,6M`), valores do gerenciador, depoimento |
| 2–5 | Cases | Texto do briefing, criativo, métricas (slides 2 e 4) |
| 6 | Sobre mim | Bio, e-mail, foto, logos de clientes |
| 7 | Processo / Resultados | Etapas do flywheel, valores investidos, ROAS |

## Como personalizar

1. **Textos**: edite direto o `portfolio.html` (cada slide é um `<section class="slide">`, comentado).
2. **Imagens**: coloque os arquivos em `assets/img/` com estes nomes — aparecem automaticamente
   no lugar do placeholder listrado:
   - `criativo-1.jpg` … `criativo-4.jpg` — frames/thumbs dos criativos (vertical 9:16)
   - `ref-1.jpg` — miniatura de referência no briefing do slide 2
   - `foto.jpg` — sua foto (slide 6)
   - `logos/logo-01.png` … `logos/logo-32.png` — logos das marcas (PNG com fundo transparente)
3. **Gerar o PDF**:
   ```bash
   npm install
   npm run build
   ```
   Para só visualizar, abra `portfolio.html` no navegador.

## Para adicionar mais cases

Copie um bloco `<section class="slide">` de case (slides 2–5), cole logo abaixo e troque o
texto e o nome da imagem (`criativo-5.jpg`, etc.).

## Fontes

Incluídas em `assets/fonts/` (Google Fonts, licença OFL): Montserrat, VT323, Courier Prime, Arimo.
