# RotaPro Fácil V1.2

- Quatro ações: Ver no mapa, Corrigir Sequence, Adicionar Entrega, Limpar Rota.
- Limpar Rota exige confirmação e apaga somente os dados locais do RotaPro Fácil.
- Após importar Excel, cria ordem de rota automaticamente por Sequence numérica crescente.
- Pacotes sem Sequence e com coordenadas são inseridos por proximidade quando há desvio pequeno; demais ficam no fim para conferência.
- A Sequence original não é substituída; o planejamento usa routeOrder.
- Correções manuais de Sequence recalculam a ordem.
- Mantém seleção manual do entregador.
- Código independente: não modifica rotapro2.

**Atenção:** CSV ainda não está implementado nesta base; prefira Excel XLSX. O encaixe geográfico depende das coordenadas disponíveis. Validar no celular antes de usar em produção.
