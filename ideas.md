# Ideias de Design — Kit's Place Redesign

## Contexto
O site original é uma página pessoal dos anos 90/2000, com fundo preto, texto colorido e links simples.
O objetivo é preservar todo o conteúdo e espírito pessoal/excêntrico, mas com visual contemporâneo e polido.

---

<response>
<probability>0.07</probability>
<idea>

**Design Movement:** Neo-Brutalism com toques de Zine Digital

**Core Principles:**
- Contraste agressivo entre tipografia bold e espaços abertos
- Texturas de papel/grão sobrepostas a fundos sólidos
- Assimetria intencional que reflete a personalidade "não-normal" da Kit
- Hierarquia visual através de tamanho e peso tipográfico, não cor

**Color Philosophy:**
- Fundo: creme envelhecido (#F5F0E8) com leve textura de grão
- Primário: preto grafite profundo (#1A1A1A)
- Acento: laranja queimado (#C4501A) — referência ao eclipse solar da imagem principal
- Secundário: verde musgo (#4A5E3A) — referência ao patch militar VCM
- Intenção emocional: quente, pessoal, autêntico, levemente caótico

**Layout Paradigm:**
- Coluna única larga com margens generosas assimétricas
- Seções separadas por linhas grossas horizontais estilo editorial
- Títulos de seção em tipografia display enorme, quase saindo da tela
- Cards de conteúdo com bordas sólidas 2px, sem border-radius

**Signature Elements:**
- Marcadores de seção com números romanos grandes e semi-transparentes
- Sublinhados decorativos em laranja queimado nos links
- Citações e destaques em blocos com fundo laranja e texto branco

**Interaction Philosophy:**
- Hover nos links: sublinhado se expande da esquerda para direita
- Cards: leve deslocamento (translate) ao hover, sem sombra excessiva
- Scroll suave com âncoras nas seções

**Animation:**
- Entrada das seções: fade-in + slide-up de 20px, 300ms ease-out
- Links: transição de cor 150ms
- Imagens: scale de 1.0 para 1.02 no hover, 200ms

**Typography System:**
- Display: "Playfair Display" — serif elegante para títulos
- Body: "Source Serif 4" — leitura confortável, caráter editorial
- Mono: "JetBrains Mono" — para detalhes técnicos e datas

</idea>
</response>

<response>
<probability>0.06</probability>
<idea>

**Design Movement:** Modernismo Escandinavo + Personal Web Revival

**Core Principles:**
- Minimalismo funcional com calor humano
- Grid de 12 colunas com uso deliberado de espaço negativo
- Tipografia como elemento visual principal
- Fotografia tratada com filtro sépia suave para coesão

**Color Philosophy:**
- Fundo: branco puro com seções alternando para cinza muito claro (#F8F8F6)
- Primário: azul petróleo escuro (#1B3A4B)
- Acento: âmbar dourado (#D4A017) — evoca o brilho do eclipse
- Neutro: cinza quente (#6B6560)
- Intenção: serena, organizada, mas com personalidade

**Layout Paradigm:**
- Layout de revista com grid assimétrico de 2 colunas na seção principal
- Hero com imagem do eclipse em largura total, texto sobreposto
- Seções em cards flutuantes com sombras suaves
- Navegação lateral fixa no desktop

**Signature Elements:**
- Linha decorativa fina em âmbar separando seções
- Ícones minimalistas de linha para cada categoria de link
- Pull quotes em tipografia grande e itálica

**Interaction Philosophy:**
- Navegação com indicador de posição ativo
- Links com underline animado em âmbar
- Imagens com overlay suave no hover

**Animation:**
- Hero: parallax sutil no scroll
- Cards: entrada escalonada com stagger de 50ms
- Transições de página: fade 200ms

**Typography System:**
- Display: "Cormorant Garamond" — elegância clássica
- Body: "Lato" — limpeza e legibilidade
- Accent: "Cormorant Garamond Italic" — para citações

</idea>
</response>

<response>
<probability>0.05</probability>
<idea>

**Design Movement:** Dark Editorial — Revista de Arte Contemporânea

**Core Principles:**
- Fundo escuro profundo que honra a estética original do site
- Tipografia branca de alto contraste com acentos em cor quente
- Imagens tratadas com alto contraste para dramaticidade
- Layout de coluna única com ritmo vertical forte

**Color Philosophy:**
- Fundo: preto profundo com leve tom azulado (#0D0F14)
- Texto: branco puro (#FAFAFA) e cinza claro (#B8BCC8)
- Acento quente: laranja/âmbar (#E8820C) — do eclipse
- Acento frio: verde-azulado (#2DD4BF) — para links e destaques
- Intenção: misteriosa, artística, pessoal — como o site original mas refinado

**Layout Paradigm:**
- Hero full-width com a imagem do eclipse em destaque máximo
- Seções em blocos verticais com padding generoso
- Linha do tempo horizontal para as revisões do site
- Sidebar de navegação retrátil no desktop

**Signature Elements:**
- Bordas em gradiente de cor nos cards de destaque
- Números de seção em tipografia gigante e semi-transparente (opacity 0.08)
- Separadores de seção com linha fina em laranja

**Interaction Philosophy:**
- Cursor personalizado (ponto pequeno que segue o mouse)
- Links com glow suave em laranja no hover
- Scroll com indicador de progresso no topo

**Animation:**
- Hero: texto aparece com efeito de digitação
- Seções: reveal ao entrar no viewport (IntersectionObserver)
- Cards: borda iluminada no hover com transição 200ms

**Typography System:**
- Display: "Space Grotesk" — moderno, técnico, com personalidade
- Body: "DM Sans" — limpo e legível no escuro
- Mono: "Fira Code" — para datas e detalhes

</idea>
</response>

---

## Decisão Final

**Escolhido: Opção 3 — Dark Editorial**

Justificativa: O site original tem fundo preto e personalidade forte. Manter o tema escuro honra a identidade original da Kit, mas com tipografia moderna, espaçamento generoso e hierarquia visual clara. A paleta laranja/âmbar conecta diretamente com a imagem do eclipse solar que é o elemento visual central do site.
