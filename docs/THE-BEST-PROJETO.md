# THE BEST — PLATAFORMA DIGITAL
## Documento Mestre do Projeto

> **Versão:** 4.0 — Pós-Sessão 13 (Migração React concluída · Construtor Emocional v2.0 homologado)
> **Data:** Junho 2026
> **Responsável:** Matheus — Fundador / The Best
> **Status geral:** Fase 1B em andamento — Sessões 8–11 concluídas · Sessões 12–16 pendentes

---

## 1. CONTEXTO DA EMPRESA

**Empresa:** The Best Móveis Planejados
**Segmento:** Marcenaria de alto padrão — móveis planejados premium
**Localização:** Campinas, SP
**Tempo de mercado:** 11 anos
**Clientes atendidos:** 200+
**Ticket médio atual:** R$8.000 por projeto
**Ticket alvo:** R$200.000+ (markup de 5x)
**Margem atual:** ~30% (R$2.400 de lucro por projeto)
**Volume atual:** 0–5 clientes/mês (oscila — às vezes zero)
**Modelo:** Verticalizado — briefing → projeto → corte e usinagem das placas → montagem → instalação e finalização

**Projeto paralelo em formação:** Consultoria white-label para marcenarias — vender a estrutura digital completa para outras marcenarias como produto SaaS/consultoria. (Fora do escopo do MVP — decisão registrada.)

---

## 2. POSICIONAMENTO DA MARCA

### Conceito central
A The Best não vende móveis. Constrói cenários para a vida acontecer.

Cada cozinha é onde a família se reúne. Cada closet é onde o dia começa com confiança. Cada home theater é onde memórias são feitas.

### Tom de voz
**Evitar:** "Realizamos seus sonhos", "Qualidade e excelência", "Atendimento personalizado", "Tradição há X anos", "Móveis dos seus sonhos", "Soluções em ambientes"

**Adotar:** "Onde sua melhor versão acontece", "O cenário das suas próximas memórias", "Móveis que conhecem você", "Cada milímetro pensado para o seu jeito de viver", "A previsibilidade que você merece", "60 dias entre o sonho e a chave na porta"

### Cliente-alvo
Empresários, executivos C-level, médicos, arquitetos e profissionais liberais de alto poder aquisitivo com sensibilidade para design. Pesquisa no iPhone em momentos de lazer — o quiz precisa funcionar perfeitamente em mobile.

---

## 3. DESIGN SYSTEM

### 3.1 Paleta de Cores

| Nome | Hex | Uso |
|------|-----|-----|
| Noir | `#0E0F11` | Fundo principal (65% do site) |
| Antracite | `#1A1C1F` | Cards e seções alternativas |
| Marfim | `#F2EDE4` | Texto e respiros (25%) |
| Champagne | `#BFA67A` | Acentos premium — usar com parcimônia (3%) |
| Pewter | `#6E7178` | Texto secundário, captions (7%) |
| Bronze | `#8C7045` | Hover do Champagne |
| Linen | `#E8DFD0` | Seções alternativas claras |
| Carvão | `#2A2A2A` | Bordas e divisores |

**Distribuição:** 65% Noir/Antracite · 25% Marfim · 7% Pewter · 3% Champagne

### 3.2 Tipografia

**Famílias:**
- **Display (títulos):** Cormorant Garamond — peso 300 (light), italic disponível para palavras emocionais
- **Sans (corpo + UI):** Inter — peso 400 e 500

**Escala:**
| Nome | Tamanho | Peso | Letter-spacing | Line-height | Uso |
|------|---------|------|----------------|-------------|-----|
| Display XXXL | 160px | 300 | -4px | 0.9 | Hero principal — 1x por página |
| Display XL | 88px | 300 | -2px | 1.0 | Headlines de seções |
| Display L | 64px | 300 | -1.5px | 1.05 | Subsections |
| Display M | 48px | 400 | -0.5px | 1.15 | Citações e destaques |
| Heading 1 | 32px | 500 | 0 | 1.3 | Inter |
| Heading 2 | 24px | 500 | 0 | 1.4 | Inter |
| Body L | 19px | 400 | 0 | 1.7 | Textos importantes |
| Body M | 16px | 400 | 0 | 1.7 | Corpo padrão |
| Body S | 14px | 400 | 0 | 1.6 | Secundário |
| Eyebrow | 11px | 600 | 4px | — | Uppercase — marcadores numerados |
| Caption | 12px | 400 | 0.5px | 1.4 | Labels e tags |

**Regra emocional:** Palavras-chave emocionais (imagine, sinta, viva, sonhe, descubra) sempre em Cormorant Garamond italic, ligeiramente maiores que o texto ao redor.

**Logo THE BEST:** Sempre uppercase, kerning extra amplo (8–12px), peso light. Nunca como escrita normal.

> ⚠️ **CAVEAT:** Nenhum logotipo oficial em arquivo foi fornecido até o momento. O Designer gerou uma reconstrução tipográfica como placeholder. **Providenciar SVG/PNG do logo real para substituir.**

### 3.3 Espaçamento

| Token | Valor |
|-------|-------|
| space-1 | 8px |
| space-2 | 16px |
| space-3 | 24px |
| space-4 | 40px |
| space-5 | 64px |
| space-6 | 96px |
| space-7 | 128px |
| space-8 | 200px (entre seções) |
| space-9 | 280px (respiros editoriais) |

**Regras:** Padding vertical entre seções principais: mínimo 200px · Margens laterais em desktop: 120–160px · Container max-width: 1600px

### 3.4 Componentes

**Botão Primary:**
- Fundo: Champagne (#BFA67A)
- Texto: Inter 13px weight 500 uppercase letter-spacing 3px, cor Noir
- Padding: 24px 64px
- Cantos: 0px (totalmente reto)
- Hover: Bronze, transição 500ms

**Botão Secondary:**
- Fundo: transparente
- Borda: 1px solid Champagne
- Hover: borda Linen, texto Linen

**Inputs de formulário:**
- Estilo "underline" — sem caixa, apenas borda inferior 1px
- Focus: borda inferior muda para Champagne

**Cards de ambiente:**
- Imagem ocupando 100% do card
- Hover: imagem zoom 3%, overlay com frase emocional

**Cards de portfólio:**
- Aspect ratio 1:1 (quadrado uniforme) — todos os cards no mesmo tamanho
- Overlay com nome do projeto e categoria no hover

### 3.5 Animações

- **Easing padrão:** `cubic-bezier(0.16, 1, 0.3, 1)`
- **Hover:** 400–600ms
- **Reveals de scroll:** 1000–1400ms
- **Cursor customizado:** ponto Champagne 4px + círculo Marfim 32px outline com lag 0.15s
- **Cortinas de luz:** linhas verticais Champagne 1px, 5% opacidade, animando lentamente em fundos escuros

### 3.6 Arquivos do Design System (gerados pelo Claude Designer)

| Arquivo | Descrição |
|---------|-----------|
| `README.md` | Contexto, voz, foundations, iconografia |
| `colors_and_type.css` | Tokens de cor, tipo, espaço + classes .ds-* |
| `SKILL.md` | Invólucro Agent Skill para uso no Claude Code |
| `preview/` | 15 cards do Design System (Type, Colors, Spacing, Components, Brand) |
| `ui_kits/site/` | UI kit navegável (Home → Portfólio → Construtor Emocional) |

---

## 4. ESTRUTURA DO SITE (7 telas)

> Stack atual: React SPA — telas roteadas via estado em `App.tsx`, não por arquivos HTML separados.

| Tela | Componente | Descrição | Status |
|------|-----------|-----------|--------|
| Home | `HomeScreen` | Site editorial — 5 de 9 seções implementadas | ⚠️ parcial |
| Quiz | `QuizScreen` | O Construtor Emocional™ — 12 telas | ✅ |
| Portfólio | `PortfolioScreen` | Galeria com filtros por ambiente e lightbox | ✅ |
| O Método | — | Educação aprofundada do processo | Fase 2 |
| A Casa | — | Sobre nós em formato narrativo | Fase 2 |
| Conversar | — | Contato direto | Fase 2 |
| Conta The Best | — | Área logada do cliente | Fase 2 |

---

## 5. HOME — HOMESCREEN (9 seções)

> **Implementado:** S01 Hero · S02 Manifesto · S07 PortfolioTeaser · S08 CTAStrip · S09 Footer
> **Pendente (DT05):** S03 Ambientes · S04 O Método · S05 Números com Alma · S06 Depoimentos

### Seção 01 — HERO IMERSIVO
- Foto real do projeto The Best + animação CSS generativa (cortinas de luz Champagne)
- Headline Display XXXL: *"Onde sua melhor versão acontece."*
- Subheadline Body L Pewter: "Móveis planejados que dão forma ao seu jeito de viver."
- CTA primário: "Começar a imaginar" → leva ao quiz
- Indicador de scroll na base (linha vertical Champagne crescendo em loop)

### Seção 02 — MANIFESTO EMOCIONAL
- Texto poético centralizado, coluna estreita (600px max)
- Sem imagens. Apenas tipografia respirando.
- Copy (em Cormorant, mix regular/italic):
  > "Você não está procurando móveis."
  > "Está procurando o lugar onde *sua filha* vai aprender a cozinhar."
  > "O canto onde *você* vai ler nos domingos de chuva."
  > "A mesa onde *seus amigos* vão lembrar do melhor jantar do ano."
  > "A The Best desenha móveis. Mas constrói cenários para as melhores versões da sua história."

### Seção 03 — AMBIENTES PARA SUA VIDA
Grid assimétrico com os 9 ambientes com nomes emocionais. Click em cada card leva ao quiz com aquele ambiente pré-selecionado.

Hover: imagem zoom + overlay com frase emocional:
- Cozinha: "Imagine os jantares de domingo aqui."
- Closet: "Imagine começar o dia neste silêncio."
- Sala: "Imagine seus amigos celebrando aqui."
- Quarto: "Imagine acordar assim todos os dias."
- Banheiro: "Imagine este silêncio às 6h da manhã."
- Escritório: "Imagine criar aqui, sem interrupções."
- Área Gourmet: "Imagine o cheiro do churrasco no domingo."
- Lavanderia: "Imagine uma rotina mais leve aqui."
- Outro: "Imagine o espaço que ainda está na sua cabeça."

### Seção 04 — O MÉTODO THE BEST (Timeline Interativa)
6 etapas com prazos claros. Fundo Antracite.

| # | Nome | Prazo | Sensação |
|---|------|-------|---------|
| 01 | Imersão | 3 dias úteis | "Aqui você ainda sonha em voz alta." |
| 02 | Projeto | 15 dias úteis | "Cada milímetro pensado para o seu jeito de viver." |
| 03 | Aprovação | 5 dias úteis | "Você vê antes de existir. E aprova com confiança." |
| 04 | Produção | 25 dias úteis | "Tecnologia europeia. Precisão milimétrica." |
| 05 | Montagem | 5–10 dias úteis | "Nossa equipe. Na sua casa. Do início ao fim." |
| 06 | Entrega | 1 dia | "As chaves do novo ambiente. E 5 anos de garantia." |

**Total destacado:** *"Seu projeto pronto em 60 dias úteis."*

### Seção 05 — NÚMEROS COM ALMA
- **200+** Famílias que confiaram suas histórias à The Best
- **11** Anos refinando o que importa: você
- **60 dias** Do briefing ao "uau" final
- **5 anos** De garantia. Mas a relação dura para sempre.

### Seção 06 — DEPOIMENTOS
Foco: transformação de vida, não qualidade do móvel.
- Tom correto: "Minha cozinha virou o lugar favorito da família. Meu marido — que nunca cozinhou — agora insiste em fazer o jantar."
- Tom incorreto: "O processo demorou mas valeu a pena."

### Seção 07 — PORTFÓLIO (3 projetos destaque)

### Seção 08 — CTA FINAL
> "Vamos construir o cenário da sua próxima década."

### Seção 09 — FOOTER
Logo THE BEST · Campinas, SP · WhatsApp · Instagram · Email

---

## 6. O CONSTRUTOR EMOCIONAL™ — QUIZSCREEN

> ✅ **Implementado em React** — Construtor Emocional™ v2.0 concluído em 10/jun/2026. Todas as 12 telas estão funcionais. Retrato emocional gerado por mock determinístico (`quiz-retrato.ts`). Integração com Claude API prevista na Sessão 13.

### Fluxo completo do quiz (versão implementada — 10/jun/2026)

```
TELA 1 — Provocação / Abertura
"Vamos imaginar juntos?"
Chamada emocional para o orçamento. Botão "COMEÇAR".

TELA 2 — Seleção de ambientes
"Quais ambientes você sonha em transformar?"
Múltipla seleção, incluindo opção "Todos".
Grid com imagem + nome emocional por ambiente.
Footer: contador de selecionados + botão "CONTINUAR".

↓ Para cada ambiente selecionado (na ordem em que foi clicado):

  TELA 3 — Transição 1
  "Sua [ambiente]."
  "Vamos imaginá-la juntos."
  Fullscreen com imagem do ambiente. Auto-advance ou botão "COMEÇAR A SONHAR →"

  TELA 4 — Identidade
  "Qual destes universos te toca mais?"
  4 estilos com imagens representativas. Seleção de até 2.
  (Contemporâneo Sereno · Industrial Sofisticado · Clássico Reinterpretado · Orgânico Quente)

  TELA 5 — Cenas / Atmosfera
  "Qual cena você mais quer viver aqui?"
  Imagens sugestivas de momentos no ambiente. Múltipla seleção.

  TELA 6 — Inegociável
  "O que é inegociável para você neste [ambiente]?"
  Lista de elementos que o cliente faz questão de ter. Seleção de até 3.

  TELA 7 — Som / Memória sensorial
  "Qual som você quer ouvir neste [ambiente]?"
  Opções emocionais de memória sensorial. Múltipla seleção.

  TELA 8 — Investimento
  "Quanto você imagina investir em sua [ambiente]?"
  8 faixas com rótulos aspiracionais.

  TELA 9 — Transição 2
  "Sua [ambiente] está tomando forma."
  Se houver próximo ambiente: botão "PRÓXIMO AMBIENTE →" + "← REVISAR"
  Se for o último ambiente: segue para Contato.

↓ Após todos os ambientes:

TELA 10 — Contato
"Quase lá. Seus dados."
Nome · WhatsApp · E-mail (opcional) · Cidade
Botão "VER MEU RETRATO EMOCIONAL"

TELA 11 — Loader cinematográfico
"Estamos desenhando o seu perfil..."
Animação de espera enquanto as 3 APIs são chamadas em paralelo.

TELA 12 — Retrato emocional (devolução por IA)
Mensagem personalizada gerada pela Claude API.
Baseada nos ambientes, cenas, sons e estilo escolhidos.
```

**Tempo estimado:** 8 minutos (média). Varia: 3 min (1 ambiente) a 15 min (todos os ambientes).

**Lógica de ordem dos ambientes:** segue a ordem em que o cliente clicou na tela de seleção — implementada via `ambientesOrdenados: string[]` no `QuizData`.

### Os 9 Ambientes com nomes emocionais

| Ambiente | Nome emocional no quiz |
|----------|----------------------|
| Cozinha | Cozinha para receber |
| Closet | Closet para começar o dia |
| Sala | Sala para celebrar |
| Quarto | Quarto para descansar |
| Banheiro | Banheiro para se cuidar |
| Escritório | Escritório para criar |
| Área Gourmet | Área Gourmet para reunir |
| Lavanderia | Lavanderia para uma rotina leve |
| Outro | Outro ambiente |

### Os 4 Estilos (Tela 4 — idênticos para todos os ambientes)

| # | Nome | Descrição |
|---|------|-----------|
| 1 | Contemporâneo Sereno | Linhas limpas, mármore claro, madeira nobre |
| 2 | Industrial Sofisticado | Concreto pigmentado, aço escovado, presença marcante |
| 3 | Clássico Reinterpretado | Boiseries modernas, dourado fosco, elegância eterna |
| 4 | Orgânico Quente | Madeiras vivas, curvas suaves, acolhimento natural |

### Cenas por ambiente (Tela 5)

**Cozinha:** Domingos cozinhando para a família · Jantares com amigos próximos · Café da manhã em silêncio · Cozinhar como hobby criativo · Receber para celebrações grandes

**Closet:** Começar o dia com ritual e calma · Escolher a roupa certa para cada momento · Organização que elimina a ansiedade · Um espaço só seu, de respiro · Guardar memórias e peças especiais

**Sala:** Receber amigos e família em estilo · Noites de cinema em casa · Conversas que se estendem pela madrugada · Um espaço que impressiona ao entrar · Celebrações e eventos especiais

**Quarto:** Acordar com luz e leveza · Dormir com conforto absoluto · Um refúgio após dias intensos · Momentos a dois, com privacidade · Espaço para leitura e silêncio

**Banheiro:** Ritual matinal em paz · Banho como momento de descompressão · Cuidar-se com calma e privacidade · Um spa em casa · Começar e terminar o dia com intenção

**Escritório:** Trabalhar com foco e inspiração · Reuniões com clientes em casa · Criar sem interrupções · Um espaço que reflete quem você é profissionalmente · Separar o trabalho do resto da vida

**Área Gourmet:** Churrascos de domingo em família · Confraternizações com amigos · Receber ao ar livre com estilo · Criar momentos memoráveis fora de casa · Estender o convívio para além da sala

**Lavanderia:** Uma rotina de cuidados sem estresse · Organização que facilita o dia a dia · Espaço funcional e bonito ao mesmo tempo · Eficiência nos cuidados da casa · Guardar tudo com ordem e facilidade

**Outro:** Liberdade total para criar · Um espaço único, que não se encaixa em nada · Transformar um ambiente esquecido · Algo que ainda não existe em lugar nenhum · O projeto que está na sua cabeça há anos

### Inegociáveis por ambiente (Tela 6 — máx 3 seleções)

**Cozinha:** Ilha generosa para conviver · Coifa protagonista · Adega climatizada integrada · Forno e cooktop de embutir premium · Iluminação cênica · Despensa oculta · Bancada técnica de preparo · Espaço bistrô

**Closet:** Iluminação cênica interna · Gavetas e nichos sob medida · Espelho de corpo inteiro embutido · Sapateira organizada e visível · Espaço para bolsas em destaque · Área de passar/vaporizador · Penteadeira integrada · Cabideiro giratório ou deslizante

**Sala:** Painel de TV com nicho integrado · Rack suspenso · Estante embutida para livros ou coleções · Iluminação indireta · Home theater com acústica · Adega ou bar integrado · Sofá sob medida · Mesa de centro com armazenamento

**Quarto:** Cabeceira estofada integrada à parede · Criados-mudos suspensos · Guarda-roupa com espelho embutido · Iluminação cênica de cabeceira · Baú ao pé da cama · TV embutida ou painel · Área de leitura com luminária · Blackout integrado

**Banheiro:** Bancada e cuba sob medida · Nicho embutido no box · Espelho com iluminação LED · Cuba de embutir ou semi-encaixe · Aquecimento no piso · Banheira de imersão · Toalheiro aquecido · Armário suspenso com divisórias

**Escritório:** Mesa de trabalho ampla e ergonômica · Parede de prateleiras do chão ao teto · Iluminação de trabalho sem reflexo · Cabeamento oculto e organizado · Armário para arquivo e documentos · Segundo monitor ou tela embutida · Bancada de apoio lateral · Isolamento acústico integrado

**Área Gourmet:** Churrasqueira embutida de alta potência · Pia e bancada de preparo externas · Adega ou frigobar embutido · Coifa ou exaustor de alta potência · Iluminação cênica à prova d'água · Armário externo para louças e utensílios · Bancada de servir integrada · TV externa resistente à umidade

**Lavanderia:** Tanque esculpido embutido · Máquina de lavar embutida · Secadora integrada · Armário de produtos oculto · Tábua de passar retrátil · Iluminação funcional de trabalho · Bancada de dobrar roupas · Passa-roupas suspenso

**Outro:** Uso exclusivo · Versatilidade total · Iluminação especial · Privacidade · Integração com área externa · Acesso independente · Tecnologia integrada · Personalização livre

### Memória sensorial por ambiente (Tela 7)

**Cozinha:** O barulho da chaleira no domingo · Risadas da família reunida · Música ambiente e taças tilintando · O silêncio absoluto da manhã · A voz de quem eu amo cozinhando comigo

**Closet:** O silêncio de um espaço só seu · O cheiro de roupa fresca organizada · A sensação de encontrar tudo onde deve estar · Luz suave que revela cada detalhe · A calma antes de sair de casa

**Sala:** O som da risada de quem eu amo · Música boa enchendo o espaço · O silêncio confortável de uma noite em casa · O tilintar de taças em uma celebração · A cena de um filme que prende a atenção

**Quarto:** O silêncio absoluto das 22h · A luz suave do amanhecer entrando · O peso do cobertor nos dias frios · A voz baixa de uma conversa íntima · O som do nada, só paz

**Banheiro:** A água quente descendo nas costas após um dia longo · O silêncio de estar sozinho por alguns minutos · O cheiro de um produto favorito abrindo o dia · A temperatura certa, sem pensar nisso · A sensação de estar em um spa

**Escritório:** O silêncio de foco profundo · O som do teclado em ritmo de concentração · A luz certa que não cansa os olhos · A sensação de estar no controle · O clique de fechar o computador quando o trabalho foi bem feito

**Área Gourmet:** O cheiro de churrasco no ar · O barulho de conversa e risada ao fundo · O calor do fogo e do entardecer · O som das bebidas geladas sendo abertas · A sensação de receber como você sempre quis

**Lavanderia:** O cheiro de roupa limpa saindo da secadora · O silêncio organizado de tudo no lugar · A leveza de uma tarefa que fluiu bem · O som suave da máquina de fundo · A satisfação de ver ordem onde havia caos

**Outro:** A sensação de entrar num espaço que é só seu · O silêncio de um lugar que ainda não existe · A liberdade de criar sem referência · A emoção de imaginar algo do zero · A vontade de já estar vivendo este espaço

### Faixas de investimento (Tela 8 — idênticas para todos os ambientes)

| Faixa | Rótulo aspiracional |
|-------|-------------------|
| Até R$ 5.000 | SOLUÇÕES PONTUAIS |
| R$ 5.000 — R$ 15.000 | MÓVEIS ESPECÍFICOS |
| R$ 15.000 — R$ 40.000 | AMBIENTE MÉDIO PORTE |
| R$ 40.000 — R$ 80.000 | AMBIENTE COMPLETO PADRÃO |
| R$ 80.000 — R$ 150.000 | AMBIENTE ASSINADO PREMIUM |
| R$ 150.000 — R$ 300.000 | PROJETO EXCLUSIVO DE AUTOR |
| Acima de R$ 300.000 | PROJETO SEM LIMITES |
| Prefiro conversar | VALORES PERSONALIZADOS |

### Categorização automática de leads

| Categoria | Total estimado |
|-----------|---------------|
| Essencial | < R$ 15.000 |
| Padrão | R$ 15.000 – R$ 80.000 |
| Premium | R$ 80.000 – R$ 200.000 |
| Exclusivo | > R$ 200.000 |

### Prompt para Claude API (Tela 12 — Retrato emocional)

```
Você é um especialista em comunicação emocional para a marca The Best Móveis Planejados, uma marcenaria premium de Campinas, SP.

Com base nas respostas do quiz abaixo, escreva uma mensagem personalizada de 3–4 parágrafos para o cliente. A mensagem deve:
- Começar com o nome do cliente
- Usar palavras que reflitam os ambientes escolhidos e as cenas que quer viver
- Ser emocionalmente envolvente, sem ser piegas
- Não mencionar preços, prazos ou processo — apenas emoção e antecipação
- Terminar com uma frase que cria expectativa para o contato

Respostas do quiz:
- Nome: {nome}
- Ambientes selecionados: {ambientes}
- Cenas desejadas (por ambiente): {cenas}
- Memória sensorial (por ambiente): {sensorial}
- Prazo desejado: {prazo}

Tom: íntimo, sofisticado, personalizado. Não mencionar "The Best" repetidamente — uma vez no início basta.
Idioma: Português brasileiro.
Extensão: 3–4 parágrafos, sem títulos.
```

### Formatação do briefing no WhatsApp

```
━━━━━━━━━━━━━━━━━━━━━━━━
🏆 NOVO LEAD — [CATEGORIA]
━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nome: {nome}
📱 WhatsApp: {whatsapp}
📧 Email: {email}

🏠 Ambientes: {lista de ambientes}
🎨 Estilo dominante: {estilo mais selecionado}

💰 Investimento estimado: R${min}k – R${max}k
⭐ Categoria: {ESSENCIAL/PADRÃO/PREMIUM/EXCLUSIVO}
⏱ Prazo desejado: {prazo}

📋 Destaques do briefing:
{por ambiente: ambiente + inegociáveis selecionados}

🔗 Briefing completo: [link Supabase]
━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 7. ARQUITETURA TÉCNICA

> ⚠️ **DECISÃO D20 (09/jun/2026):** Stack migrado de HTML+CSS+JS vanilla para **React + Vite + TypeScript**. A estrutura de arquivos e a stack abaixo refletem o estado atual real do projeto.

### Stack

| Camada | Tecnologia | Status |
|--------|-----------|--------|
| Frontend | React 19 + TypeScript + Vite — SPA (3 telas: Home, Portfólio, Quiz) | ✅ Ativo |
| Hosting + deploy | Vercel (Hobby plan) — build: `vite-app/dist/` | ✅ Ativo |
| Banco de dados | Supabase (free tier) | ⬜ A criar |
| Geração de mensagem | Claude API (claude-haiku) — Vercel Function | ⬜ A criar |
| Notificação WhatsApp | Z-API — Vercel Function | ⬜ A criar |
| Tipografia | Google Fonts (Cormorant Garamond + Inter) | ✅ Ativo |

**Custo operacional estimado (quando ativo):** R$117–137/mês (dentro do teto de R$500)

### Vercel Functions (a criar — Sessões 12–14)

**`/api/salvar-lead.js`**
- Entrada: quizData completo (JSON)
- Ação: INSERT na tabela `leads` do Supabase
- Saída: `{ success: true, lead_id: uuid }`

**`/api/gerar-mensagem.js`**
- Entrada: nome, ambientes, cenas, sensorial, prazo
- Ação: POST para Claude API com prompt dinâmico
- Saída: `{ mensagem: "..." }`
- Nota: mock determinístico já implementado em `quiz-retrato.ts`

**`/api/notificar-whatsapp.js`**
- Entrada: lead completo formatado
- Ação: POST para Z-API
- Saída: `{ sent: true }`

### Schema do Supabase

```sql
CREATE TABLE leads (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at      TIMESTAMP DEFAULT now(),
  nome            TEXT NOT NULL,
  whatsapp        TEXT NOT NULL,
  email           TEXT,
  prazo           TEXT,
  ambientes       TEXT[],
  respostas       JSONB,
  total_min       INTEGER,
  total_max       INTEGER,
  categoria       TEXT,  -- Essencial/Padrão/Premium/Exclusivo
  status          TEXT DEFAULT 'novo',
  -- novo / em_contato / proposta / fechado / perdido
  observacoes     TEXT
);
```

### Estrutura de arquivos (estado atual)

```
the-best-plataforma/
├── docs/                        ← documentação do projeto
│   ├── THE-BEST-PROJETO.md
│   ├── THE-BEST-STATUS.md
│   └── Claude.md
├── vite-app/
│   ├── public/
│   │   └── assets/images/       ← fotos dos ambientes (webp/jpg)
│   └── src/
│       ├── components/
│       │   ├── layout/          ← Nav, Footer
│       │   ├── primitives/      ← Display, Button, Eyebrow, Rule
│       │   └── shared/          ← Reveal, ProjectCard
│       ├── data/
│       │   ├── quizData.ts      ← interfaces + 9 ambientes + factory
│       │   ├── quiz-calc.ts     ← score + categoria + totalMin/Max
│       │   ├── quiz-retrato.ts  ← retrato emocional (mock determinístico)
│       │   └── projects.ts      ← dados do portfólio
│       ├── hooks/               ← useIsMobile
│       └── screens/
│           ├── home/            ← HomeScreen + 5 seções (S03–S06 pendentes)
│           ├── portfolio/       ← PortfolioScreen + Chip + Lightbox
│           └── quiz/            ← QuizScreen + 12 sub-telas + LoopScreen
├── api/                         ← Vercel Functions (a criar — Sessões 12–14)
│   ├── salvar-lead.js
│   ├── gerar-mensagem.js
│   └── notificar-whatsapp.js
└── .env                         ← variáveis de ambiente (não commitar)
```

### Variáveis de ambiente (Vercel)

```
SUPABASE_URL=
SUPABASE_SERVICE_KEY=
ANTHROPIC_API_KEY=
ZAPI_INSTANCE_ID=
ZAPI_TOKEN=
ZAPI_PHONE_NUMBER=         ← número dedicado The Best
```

---

## 8. ROADMAP

### FASE 1A — Design visual (Claude Designer) — ENCERRADA

| Sessão | Tarefa | Entregável | Status |
|--------|--------|-----------|--------|
| 1 | Design System completo + Home + Quiz + Portfólio | index.html standalone (10.1MB) | ✅ 03/jun |
| 1B | Cards portfólio quadrados (dívida) | index.html atualizado | ✅ 09/jun |
| 1C | Quiz — Telas 1 a 8 visuais (Abertura → Investimento) | Quiz - Construtor Emocional.html | ✅ 09/jun |

**Fase 1A encerrada por decisão D18.** O Designer gerou os assets de referência visual. O Code constrói toda a estrutura funcional a partir deles.

### FASE 1B — Lógica, estrutura e backend (Claude Code)

| Sessão | Tarefa | Status |
|--------|--------|--------|
| 8 | QuizScreen — 12 telas completas com loop por ambiente | ✅ concluído 10/jun |
| 9 | HomeScreen — 5 de 9 seções implementadas (S03–S06 pendentes) | ⚠️ parcial |
| 10 | PortfolioScreen — galeria + filtros + lightbox | ✅ concluído |
| 11 | quizData.ts + quiz-calc.ts + quiz-retrato.ts | ✅ concluído |
| 12 | /api/salvar-lead.js + Supabase configurado | ⬜ |
| 13 | /api/gerar-mensagem.js (Claude API) | ⬜ mock pronto |
| 14 | /api/notificar-whatsapp.js (Z-API) | ⬜ |
| 15 | Integração completa + testes ponta a ponta | ⬜ |
| 16 | Domínio + HTTPS + testes mobile | ⬜ |

**Seções da Home pendentes (implementar antes da sessão 15):**

| Seção | Descrição | Status |
|-------|-----------|--------|
| S03 | Grid 9 ambientes + hover emocional + click-to-quiz | ⬜ |
| S04 | O Método — timeline 6 etapas com prazos | ⬜ |
| S05 | Números com alma (200+, 11 anos, 60 dias, 5 anos) | ⬜ |
| S06 | Depoimentos | ⬜ |

### FASE 1C — Refinamento visual (Claude Designer)

*Inicia após Fase 1B completa e testada.*

| Sessão | Tarefa | Status |
|--------|--------|--------|
| R1 | Hero da Home — animações + tipografia | ⬜ |
| R2 | Manifesto + Ambientes + Método (Home) | ⬜ |
| R3 | Depoimentos + Portfólio + CTA + Footer (Home) | ⬜ |
| R4 | Quiz telas 1, 2, 3 | ⬜ |
| R5 | Quiz telas 4, 5, 6 | ⬜ |
| R6 | Quiz telas 7, 8, 9 | ⬜ |
| R7 | Quiz telas 10, 11, 12 | ⬜ |
| R8 | Portfolio — refinamento visual completo | ⬜ |

**Regra do refinamento:** 1 sessão por bloco. HTML mais recente sempre anexado. Nunca mais de 3 seções por prompt.

### FASE 2 — Produto completo (após 90 dias de tráfego pago)

- Mood Board Vivo pós-quiz
- Área Logada do Cliente (Conta The Best)
- Painel Administrativo
- Portfólio expandido (10+ projetos)
- Páginas "O Método" e "A Casa"

---

## 9. DÍVIDAS TÉCNICAS

| # | Dívida | Onde resolver | Prioridade | Status |
|---|--------|--------------|-----------|--------|
| DT01 | Cards do portfólio — padronizar para quadrado (aspect ratio 1:1) | Claude Designer | Alta | ✅ Resolvido |
| DT02 | Fluxo completo do quiz (12 telas) substituindo o fluxo simplificado atual | Claude Code | Alta | ✅ Resolvido |
| DT03 | Logo real em SVG/PNG — substituir wordmark tipográfico gerado pelo Designer | Matheus enviar arquivo | Alta | ⬜ Pendente |
| DT04 | Fotos reais The Best no hero e seções da Home (atualmente placeholders) | Claude Designer + GitHub | Média | ⬜ Pendente |
| DT05 | 4 seções ausentes da Home (S03 Ambientes · S04 Método · S05 Números · S06 Depoimentos) | Claude Code | Alta | ⬜ Pendente |
| DT06 | Arquivos órfãos: quizSteps.ts · ContactStep.tsx · ResultStep.tsx | Claude Code | Baixa | ⬜ Pendente |
| DT07 | Conteúdo placeholder: e-mail, telefone, nomes de projetos no portfólio | Matheus fornecer dados reais | Média | ⬜ Pendente |

---

## 10. FORA DO ESCOPO (DECISÃO OFICIAL)

| Item | Decisão |
|------|---------|
| Mood Board Vivo | Fase 2 |
| Área Logada | Fase 2 |
| Painel Admin completo | Fase 2 |
| Portfólio > 5 projetos | Fase 2 |
| Páginas "O Método" e "A Casa" | Fase 2 |
| Blog editorial | Rejeitado permanentemente |
| Trilha sonora ambiente | Rejeitado permanentemente |
| Realidade Aumentada | Arquivada — reavaliação em 12–18 meses |
| White-label para outras marcenarias | Negócio separado — futuro |

---

## 11. CRITÉRIOS DE SUCESSO DA FASE 1

**Obrigatórios:**
- [x] Quiz percorrível ponta a ponta com 3+ ambientes em desktop
- [x] Total de investimento calculado corretamente
- [x] Categoria do lead correta (Essencial/Padrão/Premium/Exclusivo)
- [x] Devolução emocional com referências às respostas (mock determinístico — sem IA)
- [ ] Devolução emocional com nome real + 2+ referências via Claude API (pendente sessão 13)
- [ ] Briefing chegando no WhatsApp em < 2 minutos após o quiz (pendente sessão 14)
- [ ] Lead salvo no Supabase com todos os campos (pendente sessão 12)
- [ ] Site no ar com domínio próprio e HTTPS (pendente sessão 16)
- [ ] Quiz funcional em iPhone Safari sem quebra de layout (a testar)
- [ ] Home carregando em < 3s em 4G (a medir)
- [ ] 3 projetos reais publicados no portfólio com CTA funcionando (conteúdo placeholder)

**Desejáveis:**
- [x] Todos os 9 ambientes com telas completas no quiz
- [ ] Cursor customizado em desktop
- [ ] Parallax do hero sem jank no Chrome e Safari
- [ ] Portfólio com 5 projetos reais

---

## 12. ALERTAS CRÍTICOS

1. **Commit por bloco:** Sempre commitar ao final de cada bloco de implementação. Nunca acumular mais de uma sessão no mesmo commit. Gerar relatório antes do commit.

2. **Trabalhar em etapas pequenas:** Não iniciar próxima sessão sem aprovação explícita da anterior. Nenhuma sessão inicia automaticamente.

3. **Testar mobile antes de avançar:** O cliente-alvo pesquisa no iPhone. Testar em Safari iOS antes de marcar qualquer sessão como concluída.

4. **Nunca lançar tráfego pago** antes das 3 APIs estarem funcionando (`/api/salvar-lead` + `/api/gerar-mensagem` + `/api/notificar-whatsapp`).

5. **Número dedicado:** Usar número WhatsApp exclusivo para The Best — nunca o número pessoal de Matheus.

> *Alertas 1 e 2 da versão anterior (export do Designer, ajustes por prompt) eram específicos ao workflow Claude Designer e foram substituídos pelos alertas acima, válidos para o workflow Claude Code + React.*

---

## 13. DECISÕES REGISTRADAS

| # | Decisão | Data |
|---|---------|------|
| D01 | Design System: paleta arquitetural, tipografia Cormorant Garamond + Inter | 25/mai |
| D02 | Hero: foto real The Best + animação CSS generativa (sem vídeo no MVP) | 25/mai |
| D03 | Quiz: fluxo de 12 telas com loop por ambiente, lógica condicional | 25/mai → revisado 03/jun |
| D04 | Faixas de investimento: 8 faixas de R$5k a "Projeto sem limites", com rótulos aspiracionais | 25/mai |
| D05 | Devolução emocional: gerada por Claude API com prompt dinâmico | 25/mai |
| D06 | Notificação: Z-API com número dedicado The Best | 25/mai |
| D07 | ~~Stack: HTML + CSS + JS vanilla + Vercel + Supabase (sem frameworks)~~ — supersedido por D20 | 27/mai |
| D08 | Workflow: Designer (visual) + Code (lógica) em sessões separadas | 27/mai |
| D09 | Trilha sonora: rejeitada definitivamente | 25/mai |
| D10 | AR: arquivada para reavaliação em 12–18 meses | 25/mai |
| D11 | Ambientes: 9 definitivos — Cozinha, Closet, Sala, Quarto, Banheiro, Escritório, Área Gourmet, Lavanderia, Outro | 02/jun |
| D12 | "Suíte" → "Quarto" (mais abrangente); "Adega" e "Espaço para sua história" removidos; Lavanderia e Área Gourmet adicionados | 02/jun |
| D13 | GitHub criado com estrutura de pastas + fotos organizadas por ambiente | 02/jun |
| D14 | Design System v1 gerado pelo Claude Designer — index.html standalone commitado (10.1MB) | 03/jun |
| D15 | Fluxo do quiz corrigido para 12 telas com loop por ambiente (ver seção 6) | 03/jun |
| D16 | Cards do portfólio: padronizar para quadrado (aspect ratio 1:1) — dívida técnica DT01 | 03/jun |
| D17 | Logo: providenciar SVG/PNG real para substituir wordmark tipográfico do Designer | 03/jun |
| D18 | Nova arquitetura: Designer gera referência visual → Code constrói estrutura completa → Designer refina. Fase 1A encerrada após 1C Bloco 1. Sessões 2–7 originais canceladas. | 09/jun |
| D19 | Textos e copies: refinamento somente após estrutura funcional completa — não antes. | 09/jun |
| D20 | Stack migrado de HTML+CSS+JS vanilla para React+Vite+TypeScript. Toda a lógica em vite-app/. Deploy via vite-app/dist/. | 09/jun |
