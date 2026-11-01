# RotaPro Fácil 1.0 — protótipo independente

Base copiada do ZIP rotapro2-main enviado pelo usuário. Não altera o repositório original.

## Novidades
- Tela inicial com 3 ações: Iniciar entregas, Aprender e Ajuda.
- Assistente de voz usando síntese do navegador, sujeito a suporte e permissões do aparelho.
- Tutorial estático demonstrativo de cinco passos, ainda sem capturas reais.
- Modo avançado preserva as funções da base original.
- Chaves de armazenamento do motor prefixadas `rotapro_facil_`; cache e identificador PWA exclusivos.

## Atenção
- Não foi realizada validação de campo Android/GPS, importação real nem correção de sequência.
- A lógica de roteirização é herdada; NÃO afirmar que faltantes são automaticamente corrigidos em todos os cenários sem testar.
- O modo Iniciar abre o seletor de arquivos; depois da importação, o motor da base assume o fluxo.
- Publicar em repositório separado, preferencialmente `rotapro-facil`, sem sobrescrever rotapro2.
- Testar em servidor HTTPS (GitHub Pages), não diretamente em file://.
