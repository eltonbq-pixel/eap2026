import { useState, useRef } from "react";
import {
  Shield, Target, BookOpen, Scale, ClipboardList, Check, X,
  ChevronRight, ChevronLeft, Volume2, VolumeX, Lock, CheckCircle2,
  AlertTriangle, Star, Zap, Brain, Eye, MessageSquare, Crosshair,
  FileText, ChevronDown, ChevronUp
} from "lucide-react";

/* ============================================================
   DADOS DE CONTEÚDO — MTP nº 3.04.01/2020-CG
   8 tópicos completos: slides + transcrição + questões
   ============================================================ */

/* helper para keywords na transcrição */
function highlight(texto, kws = []) {
  if (!kws.length) return [{ t: "n", v: texto }];
  const parts = [];
  let rem = texto;
  while (rem.length) {
    let best = null, bestIdx = Infinity;
    for (const kw of kws) {
      const idx = rem.toLowerCase().indexOf(kw.toLowerCase());
      if (idx !== -1 && idx < bestIdx) { best = kw; bestIdx = idx; }
    }
    if (!best) { parts.push({ t: "n", v: rem }); break; }
    if (bestIdx > 0) parts.push({ t: "n", v: rem.slice(0, bestIdx) });
    parts.push({ t: "kw", v: rem.slice(bestIdx, bestIdx + best.length) });
    rem = rem.slice(bestIdx + best.length);
  }
  return parts;
}

const MODULO_MTP01 = {
  id: "mtp01",
  titulo: "MTP 01",
  subtitulo: "Manual Técnico-Profissional nº 3.04.01/2020-CG",
  bloco: "doutrina",
  topicos: [

    /* ── TÓPICO 1 ─────────────────────────── */
    {
      id: "preparo-mental",
      titulo: "Preparo Mental",
      icone: "Brain",
      slides: [
        { estagio: "tema", titulo: "PREPARO MENTAL", corpo: "Fundamento psicológico que permite ao policial agir com eficiência, segurança e controle em situações de risco.", audio: "O tema de hoje é Preparo Mental. É o fundamento psicológico que permite ao policial agir com eficiência, segurança e controle mesmo diante de situações de risco extremo." },
        { estagio: "conceito", titulo: "O Que é Preparo Mental", corpo: "Processo de pré-visualizar os prováveis problemas a serem encontrados em cada tipo de intervenção e ensaiar mentalmente as possibilidades de resposta.", lista: ["Gera alterações fisiológicas e psicológicas no policial", "Coloca o militar num estado de prontidão ampliado", "Ocorre antes da intervenção — é uma preparação antecipada"], audio: "O preparo mental é o processo de pré-visualizar os problemas prováveis e ensaiar mentalmente as respostas. Essa antecipação gera alterações fisiológicas e psicológicas que colocam o policial num estado de prontidão ampliado." },
        { estagio: "finalidade", titulo: "Por Que o Preparo Mental Importa", corpo: "A falta do preparo mental durante uma intervenção prejudicará o desempenho do policial, levando a um aumento do tempo de resposta à agressão.", lista: ["Uso da força poderá ser inadequado — excessivo ou insuficiente", "Em cenário grave, o policial pode ser levado a uma resposta paralisante", "Preparo mental + treinamento = maior probabilidade de êxito"], audio: "A falta do preparo mental prejudica o desempenho, aumenta o tempo de resposta à agressão e leva a uso da força inadequado — excessivo ou insuficiente. Com preparo mental e treinamento, o policial tem muito maior probabilidade de êxito." },
        { estagio: "estrutura", titulo: "Segurança Ligada ao Preparo Mental", corpo: "A segurança do policial militar, na execução das suas tarefas, está diretamente relacionada ao seu preparo mental.", lista: ["Cada intervenção é singular — exige adaptação", "Policial versátil identifica e se adapta às peculiaridades de cada situação", "Preparo mental antecipa e reduz o elemento surpresa"], destaque: "Sem preparo mental, o policial reage. Com preparo mental, o policial age.", audio: "Segundo o manual, a segurança do policial militar está diretamente relacionada ao seu preparo mental. Cada intervenção é singular e exige adaptação. O policial preparado age; o despreparado apenas reage." },
        { estagio: "pegadinha", titulo: "Pegadinha da Banca", alerta: "A banca pode apresentar o preparo mental como algo opcional ou secundário ao preparo físico. ERRADO! O MTP 01 trata o preparo mental como FUNDAMENTO — base de toda a segurança operacional. Pode também trocar 'ensaiar mentalmente' por 'treinar fisicamente'.", audio: "Atenção: a banca pode sugerir que o preparo mental é secundário ao físico. Errado. O manual o trata como fundamento da segurança operacional. Outra pegadinha: trocar 'ensaiar mentalmente' por 'treinar fisicamente' — são coisas distintas." },
        { estagio: "fixacao", titulo: "FIXAÇÃO", corpo: "Preparo mental = processo de PRÉ-VISUALIZAR problemas e ENSAIAR MENTALMENTE respostas.", destaque: "Sua ausência aumenta o tempo de resposta e leva a uso da força inadequado.", audio: "Fixe a definição: preparo mental é pré-visualizar e ensaiar mentalmente. Sua ausência aumenta o tempo de resposta e leva a uso da força inadequado — excessivo ou insuficiente." },
      ],
      transcricao: {
        ref: "MTP nº 3.04.01/2020-CG — Seção 2",
        blocos: [
          { t: "h", v: "2 PREPARO MENTAL" },
          { t: "p", v: "É fato que cada ocorrência policial possui um conjunto de variáveis que a torna única. Cada intervenção é singular, exigindo que o policial militar seja versátil e capaz de adaptar-se às peculiaridades de cada situação do cotidiano operacional. Nesse contexto, a segurança do policial militar, na execução das suas tarefas, está diretamente relacionada ao seu preparo mental.", kw: ["preparo mental", "versátil", "singular"] },
          { t: "def", label: "Definição", v: "O preparo mental é o processo de pré-visualizar os prováveis problemas a serem encontrados em cada tipo de intervenção policial-militar e ensaiar mentalmente as possibilidades de respostas." },
          { t: "p", v: "Essa antecipação desencadeia um conjunto de alterações fisiológicas e psicológicas, colocando o policial militar num estado de prontidão que ampliará sua capacidade de resposta a cada situação.", kw: ["alterações fisiológicas e psicológicas", "estado de prontidão"] },
          { t: "p", v: "A falta do preparo mental do policial militar durante uma intervenção prejudicará o seu desempenho, levando a um aumento de seu tempo de resposta à agressão e, assim, o uso da força poderá ser inadequado (excessivo ou aquém do necessário para contê-la).", kw: ["falta do preparo mental", "tempo de resposta", "uso da força"] },
          { t: "p", v: "Com preparo mental, o policial militar antecipa-se, fazendo uma avaliação preliminar das ameaças. O preparo mental e o treinamento técnico recebido possibilitarão ao policial militar condições de realizar suas atividades com eficiência e segurança.", kw: ["antecipa-se", "avaliação preliminar", "eficiência e segurança"] },
          { t: "banca", prob: "ALTA", assunto: "Definição de Preparo Mental", resp: "Processo de PRÉ-VISUALIZAR os prováveis problemas e ENSAIAR MENTALMENTE as possibilidades de resposta. Resultado: alterações fisiológicas e psicológicas que ampliam a capacidade de resposta." },
          { t: "banca", prob: "ALTA", assunto: "Consequência da FALTA do preparo mental", resp: "Aumento do tempo de resposta à agressão + uso da força inadequado (excessivo ou insuficiente). Em cenário grave: resposta paralisante." },
          { t: "banca", prob: "MÉDIA", assunto: "Relação entre preparo mental e segurança", resp: "A segurança do policial, na execução de suas tarefas, está DIRETAMENTE relacionada ao seu preparo mental (texto literal do manual)." },
        ]
      },
      questoes: [
        { enunciado: "Segundo o MTP nº 3.04.01/2020-CG, o preparo mental do policial militar pode ser definido como:", alternativas: ["A) O fortalecimento físico e psicológico obtido por meio do treinamento em academia", "B) O processo de pré-visualizar os prováveis problemas e ensaiar mentalmente as possibilidades de resposta", "C) A capacidade inata de controlar emoções em situações de risco", "D) O conjunto de normas e procedimentos que regulam o comportamento policial"], correta: 1, explicacao: "A definição literal do manual: 'processo de pré-visualizar os prováveis problemas e ensaiar mentalmente as possibilidades de respostas'.", pegadinha: "A alternativa A confunde preparo mental com preparo físico. A banca quer que você troque 'ensaiar mentalmente' por 'treinar fisicamente'." },
        { enunciado: "A falta do preparo mental durante uma intervenção policial, de acordo com o MTP 01, acarreta:", alternativas: ["A) Apenas mudanças psicológicas sem efeito prático no desempenho", "B) Aumento do tempo de resposta e possível uso da força inadequado", "C) Maior criatividade na tomada de decisões táticas", "D) Redução do estado de prontidão para o nível laranja"], correta: 1, explicacao: "O manual é claro: falta do preparo mental → aumento do tempo de resposta à agressão → uso da força inadequado (excessivo ou insuficiente).", pegadinha: "A alternativa D usa termos corretos do manual (laranja = estado de prontidão) mas fora de contexto — a redução não é automática para 'laranja'." },
      ],
    },

    /* ── TÓPICO 2 ─────────────────────────── */
    {
      id: "estados-prontidao",
      titulo: "Estados de Prontidão",
      icone: "Eye",
      slides: [
        { estagio: "tema", titulo: "ESTADOS DE PRONTIDÃO", corpo: "Escala de alerta mental que representa o nível de atenção e preparação do policial para identificar e reagir a ameaças. São 5 estados, representados por cores.", audio: "O tema de hoje são os Estados de Prontidão. São 5 estados representados por cores, que indicam o nível de alerta mental do policial." },
        { estagio: "conceito", titulo: "A Escala de 5 Cores", corpo: "Os 5 estados do menor para o maior nível de alerta:", lista: ["⬜ BRANCO — Relaxado: sem atenção ao ambiente", "🟡 AMARELO — Atenção: alerta geral e relaxado", "🟠 LARANJA — Alerta: ameaça específica identificada", "🔴 VERMELHO — Alarme: risco real, ação necessária", "⬛ PRETO — Pânico: colapso cognitivo e motor"], audio: "São cinco estados. Branco: sem atenção. Amarelo: alerta geral. Laranja: ameaça específica. Vermelho: risco real e ação necessária. Preto: colapso cognitivo e motor." },
        { estagio: "estrutura", titulo: "Estado de Alarme — Cor Vermelha", corpo: "Neste estado de prontidão, o risco é real e uma resposta do policial militar é necessária.", lista: ["Focalizar a ameaça — atenção concentrada no problema", "Transição da intervenção verbal ao uso das demais técnicas", "Inclusive de menor potencial ofensivo ou força potencialmente letal"], audio: "No estado de alarme, cor vermelha, o risco é real e uma resposta é necessária. O policial deve focalizar a ameaça com atenção concentrada, podendo transitar da intervenção verbal ao uso de força, inclusive força potencialmente letal." },
        { estagio: "estrutura", titulo: "Estado Laranja — Pré-Alarme", corpo: "Estado de atenção específica onde o policial se prepara ativamente para uma possível ação:", lista: ["Identifica ameaça ou suspeito específico", "Verbaliza com os demais integrantes da guarnição sobre o local, possíveis ações e prováveis abrigos", "Prepara-se taticamente mas ainda não enfrenta risco real"], audio: "No estado laranja, há uma ameaça específica identificada. O policial verbaliza com a guarnição sobre o local, possíveis ações e prováveis abrigos, preparando-se taticamente sem ainda enfrentar risco real." },
        { estagio: "estrutura", titulo: "Estado Preto — Colapso", corpo: "Estado de pânico onde ocorre colapso cognitivo e motor.", lista: ["Paralisia ou ação irracional e descontrolada", "Perda da capacidade de tomar decisões táticas", "Resultado do preparo mental insuficiente diante de situação extrema"], alerta: "O estado preto é o que o preparo mental existe para EVITAR. Um policial bem preparado não deve atingir o estado preto.", audio: "O estado preto é o de pânico, com colapso cognitivo e motor. Gera paralisia ou ação irracional. O preparo mental existe exatamente para evitar que o policial chegue a esse estado." },
        { estagio: "pegadinha", titulo: "Pegadinha Clássica", alerta: "A banca frequentemente apresenta APENAS 4 estados, omitindo o PRETO. São 5 estados: Branco, Amarelo, Laranja, Vermelho e PRETO. O estado preto (pânico/colapso) é o mais cobrado e o mais esquecido.", audio: "Pegadinha clássica: a banca apresenta 4 estados e omite o preto. São 5. Branco, Amarelo, Laranja, Vermelho e Preto. O preto é o mais cobrado e o mais esquecido." },
        { estagio: "fixacao", titulo: "FIXAÇÃO", corpo: "B-A-L-V-P → 5 estados: Branco · Amarelo · Laranja · Vermelho · Preto", destaque: "Policial em serviço = Amarelo. Com ameaça específica = Laranja. Em confronto = Vermelho. Colapso = Preto.", audio: "Memorize: B-A-L-V-P. Branco, Amarelo, Laranja, Vermelho, Preto. Cinco estados. Serviço rotineiro é Amarelo. Ameaça específica é Laranja. Confronto é Vermelho. Colapso é Preto." },
      ],
      transcricao: {
        ref: "MTP nº 3.04.01/2020-CG — Seção 2.1",
        blocos: [
          { t: "h", v: "2.1 ESTADOS DE PRONTIDÃO" },
          { t: "p", v: "O policial militar deve se manter no estado de prontidão compatível com a gravidade dos riscos que identificar, podendo migrar de um estado de prontidão a outro, de acordo com a evolução da situação.", kw: ["estado de prontidão", "gravidade dos riscos", "migrar"] },
          { t: "def", label: "a) Estado de Atenção Relaxada — Cor Amarela", v: "O policial está atento ao ambiente ao seu redor, sem foco específico em uma ameaça. É o estado de referência para o serviço policial ativo — nem relaxado demais (branco), nem em alerta específico (laranja)." },
          { t: "def", label: "b) Estado de Alerta Específico — Cor Laranja", v: "O policial identifica ameaça ou suspeito específico. Verbaliza com os demais integrantes da guarnição sobre o local do chamado, possíveis ações e prováveis abrigos. Prepara-se taticamente." },
          { t: "def", label: "c) Estado de Alarme — Cor Vermelha", v: "Neste estado de prontidão, o risco é real e uma resposta do policial militar é necessária. É importante focalizar a ameaça (atenção concentrada no problema) e ter disposição para transitar da intervenção verbal ao uso das demais técnicas, inclusive de menor potencial ofensivo ou da força potencialmente letal, conforme as circunstâncias exigirem." },
          { t: "def", label: "d) Estado de Colapso — Cor Preta", v: "Estado de pânico onde ocorre colapso cognitivo e motor. Paralisia ou ação irracional e descontrolada. O preparo mental existe para evitar que o policial chegue a este estado." },
          { t: "banca", prob: "ALTA", assunto: "Quantos são os estados de prontidão?", resp: "CINCO: Branco (relaxado), Amarelo (atenção relaxada), Laranja (alerta específico), Vermelho (alarme), Preto (colapso/pânico). A banca adora apresentar apenas 4, omitindo o preto." },
          { t: "banca", prob: "ALTA", assunto: "Estado do policial em patrulha rotineira", resp: "Estado AMARELO (atenção relaxada/alerta geral). Nem branco (despreparado), nem laranja (que pressupõe ameaça específica identificada)." },
          { t: "banca", prob: "ALTA", assunto: "Definição do Estado de Alarme (vermelho)", resp: "'Neste estado, o risco é REAL e uma resposta do policial militar é NECESSÁRIA.' — Trecho literal do manual. Permite transição da intervenção verbal à força potencialmente letal." },
        ]
      },
      questoes: [
        { enunciado: "De acordo com o MTP 01, quantos são os estados de prontidão e qual deles representa o colapso cognitivo e motor do policial?", alternativas: ["A) 4 estados; o estado vermelho representa o colapso", "B) 5 estados; o estado preto representa o colapso", "C) 4 estados; o estado preto representa o colapso", "D) 5 estados; o estado vermelho representa o colapso"], correta: 1, explicacao: "São 5 estados (branco, amarelo, laranja, vermelho e preto). O PRETO representa o colapso cognitivo e motor — paralisia ou ação irracional.", pegadinha: "A banca adora colocar '4 estados' (alternativas A e C). E confunde vermelho com pânico — vermelho é alarme/confronto, preto é colapso." },
        { enunciado: "Sobre o Estado de Alarme (Cor Vermelha), assinale a afirmativa que melhor o descreve, conforme o MTP 01:", alternativas: ["A) Estado em que o policial identifica ameaça específica e verbaliza com a guarnição", "B) Estado em que o risco é real e uma resposta é necessária, admitindo uso de força potencialmente letal", "C) Estado de alerta geral sem foco em ameaça específica, adequado para patrulha rotineira", "D) Estado de pânico com colapso cognitivo e motor do policial"], correta: 1, explicacao: "Estado Vermelho (Alarme): risco REAL, resposta NECESSÁRIA, permite transição até força potencialmente letal. A alternativa A descreve o Laranja, C descreve o Amarelo e D descreve o Preto.", pegadinha: "A alternativa D (colapso/pânico) parece certa para 'alarme' — mas colapso é o PRETO. Vermelho é ação; preto é paralisia." },
      ],
    },

    /* ── TÓPICO 3 ─────────────────────────── */
    {
      id: "avaliacao-riscos",
      titulo: "Avaliação de Riscos",
      icone: "Target",
      slides: [
        { estagio: "tema", titulo: "AVALIAÇÃO DE RISCOS", corpo: "Processo sistemático de identificação e classificação dos riscos presentes em uma situação, antes e durante a intervenção policial.", audio: "O tema de hoje é Avaliação de Riscos. É o processo sistemático de identificar e classificar os riscos, antes e durante a intervenção." },
        { estagio: "conceito", titulo: "Definição de Risco", corpo: "O risco é a probabilidade de concretização de uma ameaça contra pessoa e bens.", lista: ["A AR é um processo contínuo — não apenas inicial", "O policial migra de estado de prontidão conforme evolui a situação", "A AR alimenta diretamente o DPI"], audio: "O manual define: o risco é a probabilidade de concretização de uma ameaça contra pessoa e bens. A avaliação de riscos é contínua, não apenas no momento inicial." },
        { estagio: "estrutura", titulo: "Níveis de Risco e Posições de Arma", corpo: "As posições da arma de fogo correspondem a níveis de risco específicos:", tabela: [{ item: "Localizada", valor: "Risco I ou II — percepção subjetiva de risco" }, { item: "Guarda-baixa", valor: "Risco II — risco potencial ou real (subjetivo)" }, { item: "Guarda-alta", valor: "Risco II ou III" }, { item: "Pronta resposta", valor: "Risco III — risco REAL (percepção objetiva)" }], audio: "As posições da arma acompanham o nível de risco. Localizada para riscos baixos. Pronta resposta exclusivamente para risco três, onde há risco real e objetivo." },
        { estagio: "estrutura", titulo: "Risco Real vs. Potencial", corpo: "O manual distingue dois tipos de risco:", tabela: [{ item: "Risco potencial", valor: "Análise subjetiva — percepção do policial (Risco II ou III)" }, { item: "Risco real", valor: "Percepção objetiva — ameaça concreta e iminente (Risco III)" }], destaque: "Arma em Pronta Resposta = Risco III com percepção OBJETIVA de risco real.", audio: "O manual distingue risco potencial, que é subjetivo, do risco real, que é objetivo. A posição Pronta Resposta é adotada somente com risco três e percepção objetiva do perigo." },
        { estagio: "pegadinha", titulo: "Pegadinha", alerta: "A banca pode dizer que a AR é feita apenas antes da abordagem. ERRADO! A AR é CONTÍNUA. Também pode confundir risco potencial (análise subjetiva) com risco real (percepção objetiva). E 'Pronta resposta' é exclusiva do Risco III.", audio: "Pegadinha: a banca diz que a AR é feita apenas antes. Errado — é contínua. Também confunde risco potencial com risco real. Pronta resposta é exclusiva do risco três, não do dois ou do dois-três." },
        { estagio: "fixacao", titulo: "FIXAÇÃO", corpo: "Risco = probabilidade de concretização de ameaça. AR é contínua. Pronta resposta = Risco III (risco real e objetivo).", destaque: "AR + PT = DPI — A Avaliação de Riscos é metade da equação central do MTP 01.", audio: "Fixe: risco é probabilidade de concretização de ameaça. A-R é contínua. Pronta resposta é risco três. E A-R mais Pensamento Tático igual a D-P-I." },
      ],
      transcricao: {
        ref: "MTP nº 3.04.01/2020-CG — Seção 3",
        blocos: [
          { t: "h", v: "3 AVALIAÇÃO DE RISCOS" },
          { t: "p", v: "Toda intervenção envolve algum tipo de risco potencial que deverá ser considerado pelo policial militar. O risco é a probabilidade de concretização de uma ameaça contra pessoa e bens.", kw: ["risco é a probabilidade", "concretização de uma ameaça"] },
          { t: "p", v: "Cada situação exigirá que ele se mantenha no estado de prontidão compatível com a gravidade dos riscos que identificar, podendo migrar de um estado de prontidão a outro, de acordo com a evolução da situação.", kw: ["estado de prontidão compatível", "migrar"] },
          { t: "h", v: "Posições da Arma de Fogo" },
          { t: "def", label: "ARMA LOCALIZADA", v: "Adotada quando há percepção subjetiva de risco potencial ou real — Risco Nível I ou II." },
          { t: "def", label: "ARMA EM PRONTA RESPOSTA", v: "Adotada em situações onde está ocorrendo risco real à segurança do policial militar e terceiros (percepção objetiva) — Risco Nível III." },
          { t: "banca", prob: "ALTA", assunto: "Definição literal de Risco (MTP 01)", resp: "'O risco é a probabilidade de concretização de uma ameaça contra pessoa e bens.' — Trecho exato do manual. A banca pode trocar 'probabilidade' por 'possibilidade' ou 'certeza'." },
          { t: "banca", prob: "ALTA", assunto: "Posição de arma no Risco III", resp: "PRONTA RESPOSTA — percepção OBJETIVA de risco real. A 'Guarda-alta' corresponde ao risco II/III (subjetivo). Não confundir os dois." },
          { t: "banca", prob: "MÉDIA", assunto: "A AR é pontual ou contínua?", resp: "CONTÍNUA. O policial migra de estado de prontidão conforme a situação evolui. A AR não termina no início da abordagem." },
        ]
      },
      questoes: [
        { enunciado: "Quanto à Avaliação de Riscos (AR), o MTP 01 define risco como:", alternativas: ["A) A certeza de concretização de uma ameaça à integridade física do policial", "B) A probabilidade de concretização de uma ameaça contra pessoa e bens", "C) A possibilidade de uso da força em situações de alta periculosidade", "D) O conjunto de indicadores comportamentais observados no suspeito"], correta: 1, explicacao: "Definição literal do MTP 01: 'O risco é a probabilidade de concretização de uma ameaça contra pessoa e bens.'", pegadinha: "A banca troca 'probabilidade' por 'certeza' (alternativa A). Risco é probabilidade, não certeza. Se fosse certeza, seria uma ameaça em curso." },
        { enunciado: "A posição 'Arma em Pronta Resposta', segundo o MTP 01, é adotada:", alternativas: ["A) Sempre que há percepção subjetiva de risco potencial (Risco Nível II)", "B) Em situações com risco real (percepção objetiva) à segurança do policial e terceiros — Risco Nível III", "C) Em qualquer nível de risco, a critério do policial", "D) Apenas após autorização do superior hierárquico em ocorrência de alta periculosidade"], correta: 1, explicacao: "Pronta Resposta = Risco III, com percepção OBJETIVA de risco real. A 'subjetiva' corresponde à Guarda-alta (II/III).", pegadinha: "A banca confunde 'percepção subjetiva' (II/III → guarda-alta) com 'percepção objetiva' (III → pronta resposta). Pronta Resposta exige percepção OBJETIVA." },
      ],
    },

    /* ── TÓPICO 4 ─────────────────────────── */
    {
      id: "pensamento-tatico",
      titulo: "Pensamento Tático",
      icone: "Zap",
      slides: [
        { estagio: "tema", titulo: "PENSAMENTO TÁTICO", corpo: "Recurso cognitivo que fornece elementos para analisar o teatro de operações e interferir no processo mental do agressor, subsidiando o planejamento da intervenção.", audio: "O tema de hoje é Pensamento Tático. É o recurso cognitivo que fornece elementos para analisar o teatro de operações e interferir no processo mental do agressor, subsidiando o planejamento da intervenção." },
        { estagio: "conceito", titulo: "Quando Ocorre o Pensamento Tático", corpo: "Enquanto o preparo mental ocorre ANTES da intervenção, o pensamento tático ocorre CONCOMITANTEMENTE com a avaliação de riscos.", lista: ["É um processo dinâmico — atualiza-se conforme a evolução da ocorrência", "Integra-se à Avaliação de Riscos para gerar o DPI", "Busca limitar e interferir na ação do agressor"], audio: "Atenção à distinção importante: o preparo mental ocorre antes da intervenção. O pensamento tático ocorre concomitantemente com a avaliação de riscos. É dinâmico e se atualiza com a evolução da ocorrência." },
        { estagio: "estrutura", titulo: "A Equação Central: AR + PT = DPI", corpo: "A equação literal do MTP 01:", tabela: [{ item: "AR", valor: "Avaliação de Riscos" }, { item: "PT", valor: "Pensamento Tático" }, { item: "DPI", valor: "Diagnóstico Provável da Intervenção" }], destaque: "AVALIAÇÃO DE RISCOS + PENSAMENTO TÁTICO = DIAGNÓSTICO PROVÁVEL DA INTERVENÇÃO (texto literal do manual)", audio: "A equação central do MTP 01, que aparece literalmente no manual: Avaliação de Riscos mais Pensamento Tático igual a Diagnóstico Provável da Intervenção. Essa equação cai em prova." },
        { estagio: "estrutura", titulo: "Teatro de Operações", corpo: "O pensamento tático fornece elementos para analisar e controlar as diferentes áreas do 'teatro de operações':", lista: ["Leitura do ambiente tático", "Controle dos pontos quentes e pontos de foco", "Planejamento de posicionamento e rotas", "Antecipação das reações do agressor"], audio: "O pensamento tático fornece elementos para analisar e controlar o teatro de operações: leitura do ambiente, controle de pontos quentes, planejamento de posicionamento e antecipação das reações do agressor." },
        { estagio: "pegadinha", titulo: "Pegadinha", alerta: "A banca pode inverter a equação: 'PT + DPI = AR' ou 'AR + DPI = PT'. O DPI é SEMPRE o resultado, nunca o fator. Também pode confundir quando ocorre o PT (concomitante à AR, não antes como o preparo mental).", audio: "As pegadinhas do pensamento tático: inversão da equação, onde o DPI seria um fator e não resultado. O DPI é sempre resultado. E a confusão sobre quando ocorre: concomitante à AR, não antes como o preparo mental." },
        { estagio: "fixacao", titulo: "FIXAÇÃO", corpo: "AR + PT = DPI (equação literal do manual). PT ocorre CONCOMITANTEMENTE à AR, não antes.", destaque: "O PT limita e interfere no processo mental do agressor, subsidiando o planejamento.", audio: "Fixe: A-R mais P-T igual a D-P-I. O pensamento tático ocorre concomitantemente à avaliação de riscos. Ele limita e interfere no processo mental do agressor." },
      ],
      transcricao: {
        ref: "MTP nº 3.04.01/2020-CG — Seção 4",
        blocos: [
          { t: "h", v: "4 PENSAMENTO TÁTICO" },
          { t: "p", v: "O Pensamento Tático é outro recurso importante para o diagnóstico de cada ocorrência. Ele fornece elementos para analisar e controlar as diferentes áreas do 'teatro de operações' e buscar interferir no processo mental do agressor, subsidiando o planejamento da intervenção.", kw: ["teatro de operações", "processo mental do agressor", "subsidiando o planejamento"] },
          { t: "p", v: "Enquanto o preparo mental ocorre antes da intervenção, o pensamento tático ocorre concomitantemente com a avaliação de riscos, sendo importantes componentes do diagnóstico provável da intervenção. Num processo dinâmico, atualiza-se em função da evolução da ocorrência.", kw: ["antes da intervenção", "concomitantemente", "processo dinâmico"] },
          { t: "eq", v: "AVALIAÇÃO DE RISCOS + PENSAMENTO TÁTICO = DIAGNÓSTICO PROVÁVEL DA INTERVENÇÃO" },
          { t: "p", v: "Ao aplicar esses conceitos, o policial militar terá melhores condições para avaliar cada situação e tomar as decisões mais adequadas, visando a sua segurança, a dos demais policiais militares, de terceiros e até mesmo do próprio infrator.", kw: ["melhores condições", "decisões mais adequadas"] },
          { t: "banca", prob: "ALTA", assunto: "Equação AR + PT = DPI", resp: "AVALIAÇÃO DE RISCOS + PENSAMENTO TÁTICO = DIAGNÓSTICO PROVÁVEL DA INTERVENÇÃO. Aparece literalmente no manual com essa grafia. O DPI é sempre o RESULTADO, nunca um fator." },
          { t: "banca", prob: "ALTA", assunto: "Quando ocorre o PT vs. o Preparo Mental", resp: "PREPARO MENTAL = ocorre ANTES da intervenção. PENSAMENTO TÁTICO = ocorre CONCOMITANTEMENTE à Avaliação de Riscos. Diferença temporal fundamental." },
          { t: "banca", prob: "ALTA", assunto: "O que o PT busca fazer com o agressor", resp: "Buscar interferir no PROCESSO MENTAL do agressor — limitando sua ação. Não é treinamento do policial, é interferência na decisão do adversário." },
        ]
      },
      questoes: [
        { enunciado: "Segundo o MTP 01, a equação AR + PT = DPI significa:", alternativas: ["A) Ação Rápida + Pensamento Tático = Diagnóstico Policial Integrado", "B) Avaliação de Riscos + Pensamento Tático = Diagnóstico Provável da Intervenção", "C) Avaliação de Riscos + Planejamento Tático = Diagnóstico Provável da Intervenção", "D) Ameaça Real + Pensamento Tático = Diagnóstico Provável da Intervenção"], correta: 1, explicacao: "AR = Avaliação de Riscos; PT = Pensamento Tático; DPI = Diagnóstico Provável da Intervenção. Equação literal do manual.", pegadinha: "A banca troca 'Avaliação' por 'Ação' (alt. A e D) ou 'Pensamento' por 'Planejamento' (alt. C). Cada letra conta." },
        { enunciado: "Em relação ao momento de ocorrência do Pensamento Tático (PT), o MTP 01 estabelece que:", alternativas: ["A) Ocorre antes da intervenção, assim como o preparo mental", "B) Ocorre após a intervenção, para análise crítica das ações", "C) Ocorre concomitantemente à Avaliação de Riscos, durante a intervenção", "D) Ocorre exclusivamente em situações de Risco Nível III"], correta: 2, explicacao: "O manual distingue: Preparo Mental = ANTES da intervenção. Pensamento Tático = CONCOMITANTEMENTE à Avaliação de Riscos.", pegadinha: "A alternativa A é a armadilha principal — confunde PT com preparo mental quanto ao momento. O preparo mental é pré-intervenção; o PT é durante." },
      ],
    },

    /* ── TÓPICO 5 ─────────────────────────── */
    {
      id: "intervencao-policial",
      titulo: "Intervenção Policial",
      icone: "Crosshair",
      slides: [
        { estagio: "tema", titulo: "INTERVENÇÃO POLICIAL", corpo: "Ação controlada do policial para neutralizar uma ameaça real ou potencial. Classificada em três níveis em função dos objetivos e riscos avaliados.", audio: "O tema de hoje é Intervenção Policial. É classificada em três níveis, em função dos objetivos e riscos avaliados." },
        { estagio: "conceito", titulo: "O Ciclo Mental da Agressão", corpo: "Toda agressão segue um ciclo previsível. O policial que compreende esse ciclo pode interrompê-lo antes do ataque.", lista: ["O agressor IDENTIFICA uma oportunidade ou alvo", "O agressor DECIDE agir", "O agressor AGE — executa a agressão"], destaque: "Intervir no ciclo significa agir antes que o agressor chegue à fase AGIR.", audio: "Toda agressão segue um ciclo de três fases. O agressor identifica, decide e age. Intervir no ciclo significa agir antes que o agressor chegue à fase de executar a agressão." },
        { estagio: "estrutura", titulo: "Processo Mental — Agressor: 3 Fases", corpo: "O agressor percorre apenas 3 fases antes de atacar:", lista: ["1. IDENTIFICAR — percebe a oportunidade ou o alvo", "2. DECIDIR — toma a decisão de atacar", "3. AGIR — executa a agressão"], audio: "O agressor tem três fases: identificar, decidir e agir. São apenas três fases — sem a fase de certificação que o policial tem." },
        { estagio: "estrutura", titulo: "Processo Mental — Policial: 4 Fases", corpo: "O policial tem uma fase a mais:", lista: ["1. IDENTIFICAR — percebe indícios de ameaça", "2. CERTIFICAR — confirma que a ameaça é real antes de agir", "3. DECIDIR — escolhe a resposta adequada", "4. AGIR — executa com segurança e controle"], destaque: "A fase CERTIFICAR é exclusiva do policial. Ela evita erros irreversíveis.", audio: "O policial tem quatro fases: identificar, certificar, decidir, agir. A fase certificar é exclusiva do policial — confirma que a ameaça é real antes de qualquer ação." },
        { estagio: "estrutura", titulo: "Regra de Tueller — 6,4 Metros", corpo: "A distância crítica de segurança em abordagens:", tabela: [{ item: "Distância crítica", valor: "6,4 metros (21 pés)" }, { item: "Situação", valor: "Suspeito com arma branca" }, { item: "Consequência", valor: "Ataque mais rápido que reação do policial" }], audio: "A Regra de Tueller, ou Regra dos 21 pés: a 6 vírgula 4 metros, um agressor com arma branca pode atingir o policial antes que ele consiga reagir." },
        { estagio: "pegadinha", titulo: "Pegadinha Clássica", alerta: "A banca vai afirmar que policial e agressor têm o mesmo número de fases. ERRADO! Agressor = 3 fases. Policial = 4 fases (incluindo CERTIFICAR). A fase CERTIFICAR é a mais cobrada e mais esquecida.", lista: ["Agressor: Identificar → Decidir → Agir (3)", "Policial: Identificar → Certificar → Decidir → Agir (4)"], audio: "A pegadinha principal: a banca diz que ambos têm o mesmo processo mental. Errado. Agressor tem 3 fases. Policial tem 4. A diferença é o Certificar." },
        { estagio: "fixacao", titulo: "FIXAÇÃO", corpo: "Agressor = 3 fases · Policial = 4 fases (CERTIFICAR) · Tueller = 6,4m", destaque: "CERTIFICAR é o que diferencia a ação policial da reação impulsiva.", audio: "Três números para fixar: agressor tem 3 fases, policial tem 4, a diferença é certificar. E Tueller é 6 vírgula 4 metros ou 21 pés." },
      ],
      transcricao: {
        ref: "MTP nº 3.04.01/2020-CG — Seção 5",
        blocos: [
          { t: "h", v: "5 INTERVENÇÃO POLICIAL" },
          { t: "p", v: "A Intervenção Policial-Militar aborda suas etapas e classificação em três níveis diferentes, em função dos objetivos e riscos avaliados. A Abordagem Policial, como exteriorização da intervenção, também é tratada nesta seção.", kw: ["três níveis diferentes", "objetivos e riscos avaliados"] },
          { t: "p", v: "O Pensamento Tático busca interferir no processo mental do agressor, limitando sua ação. Se uma ameaça real surge de um ponto de foco, a habilidade e o preparo mental para entender e controlar os seus pontos quentes serão os suportes para a resposta correta do policial militar.", kw: ["interferir no processo mental do agressor", "pontos quentes"] },
          { t: "h", v: "Processos Mentais na Intervenção" },
          { t: "def", label: "Processo Mental do Agressor (3 fases)", v: "IDENTIFICAR → DECIDIR → AGIR. O agressor percorre apenas três fases, sem fase de verificação ou certificação prévia da ameaça." },
          { t: "def", label: "Processo Mental do Policial (4 fases)", v: "IDENTIFICAR → CERTIFICAR → DECIDIR → AGIR. A fase CERTIFICAR é exclusiva do policial — confirma que a ameaça é real antes de qualquer ação. Evita erros irreversíveis." },
          { t: "banca", prob: "ALTA", assunto: "Número de fases: agressor vs. policial", resp: "AGRESSOR = 3 fases (Identificar, Decidir, Agir). POLICIAL = 4 fases (Identificar, CERTIFICAR, Decidir, Agir). A diferença é a fase CERTIFICAR, que só o policial possui." },
          { t: "banca", prob: "ALTA", assunto: "Regra de Tueller (Regra dos 21 Pés)", resp: "6,4 METROS = distância crítica. Dentro dessa distância, um agressor com arma branca pode atingir o policial antes que ele consiga reagir. Cuidado: a banca usa '21 metros' em vez de '21 pés'." },
          { t: "banca", prob: "ALTA", assunto: "Intervenção: classificação em quantos níveis?", resp: "TRÊS níveis, em função dos objetivos e riscos avaliados — texto literal do manual." },
        ]
      },
      questoes: [
        { enunciado: "Sobre o processo mental na intervenção policial, segundo o MTP 01, assinale a afirmativa CORRETA:", alternativas: ["A) Policial e agressor passam pelas mesmas 3 fases: Identificar, Decidir e Agir", "B) O agressor tem 4 fases, incluindo a fase de Certificar", "C) O policial tem 4 fases; a fase exclusiva em relação ao agressor é a de Certificar", "D) O policial tem 3 fases; o agressor tem 4, pois inclui a fase de Planejar"], correta: 2, explicacao: "Policial: 4 fases (Identificar, Certificar, Decidir, Agir). Agressor: 3 fases (Identificar, Decidir, Agir). CERTIFICAR é exclusiva do policial.", pegadinha: "A alternativa A é a pegadinha mais comum — 'mesmas 3 fases'. A banca quer que você esqueça o CERTIFICAR." },
        { enunciado: "A Regra de Tueller (Regra dos 21 Pés), mencionada no MTP 01, estabelece que:", alternativas: ["A) A 21 metros, um agressor com arma de fogo pode atingir o policial antes de sua reação", "B) A 6,4 metros, um agressor com arma branca pode atingir o policial antes de sua reação", "C) O policial deve manter 21 centímetros de distância durante toda abordagem", "D) Suspeitos a menos de 21 metros devem ser imobilizados imediatamente"], correta: 1, explicacao: "21 pés = 6,4 metros. Trata-se de suspeito com ARMA BRANCA (não arma de fogo). Dentro dessa distância, o ataque é mais rápido que a reação do policial.", pegadinha: "A alternativa A usa '21 metros' (troca a unidade). A banca vai escrever o número certo mas a unidade errada — ou vice-versa." },
      ],
    },

    /* ── TÓPICO 6 ─────────────────────────── */
    {
      id: "abordagem-ssrau",
      titulo: "Abordagem Policial / SSRAU",
      icone: "Shield",
      slides: [
        { estagio: "tema", titulo: "ABORDAGEM POLICIAL", corpo: "Conjunto de técnicas e procedimentos para aproximação e controle de pessoa suspeita ou perigosa, orientados pelo mnemônico SSRAU.", audio: "O tema de hoje é Abordagem Policial. É orientada pelo mnemônico S-S-R-A-U." },
        { estagio: "conceito", titulo: "SSRAU — Definição Oficial", corpo: "SSRAU é um processo mnemônico utilizado para representar as palavras:", lista: ["S — SEGURANÇA", "S — SURPRESA", "R — RAPIDEZ", "A — ação VIGOROSA", "U — UNIDADE DE COMANDO"], destaque: "Definição literal do manual: 'SSRAU é um processo mnemônico utilizado para representar as palavras Segurança, Surpresa, Rapidez, ação Vigorosa e Unidade de Comando.'", audio: "Definição literal do manual: S-S-R-A-U é um processo mnemônico para representar: Segurança, Surpresa, Rapidez, ação Vigorosa e Unidade de Comando." },
        { estagio: "estrutura", titulo: "S — Segurança e S — Surpresa", corpo: "As duas primeiras letras do SSRAU:", lista: ["SEGURANÇA: conjunto de medidas para controlar e mitigar os riscos. O policial deve identificar área de segurança e área de risco, monitorar pontos de foco e controlar pontos quentes.", "SURPRESA: medidas que dificultam a percepção do abordado em relação ao policial. Ação inesperada, surpreendendo o suspeito e reduzindo seu tempo de reação."], audio: "Segurança: medidas para controlar e mitigar riscos, identificando área de segurança e área de risco. Surpresa: ação inesperada que dificulta a percepção do suspeito e reduz seu tempo de reação." },
        { estagio: "estrutura", titulo: "R — Rapidez, A — Ação Vigorosa, U — Unidade", corpo: "As três últimas letras:", lista: ["RAPIDEZ: velocidade com que a ação policial-militar é processada — contribui para reduzir o tempo de reação do suspeito.", "AÇÃO VIGOROSA: execução decisiva e sem hesitação — o policial age com determinação.", "UNIDADE DE COMANDO: apenas um policial comanda a ação — garante coesão e evita ordens conflitantes."], audio: "Rapidez é a velocidade da ação. Ação vigorosa é a execução sem hesitação. Unidade de comando garante que apenas um policial comanda, evitando ordens conflitantes." },
        { estagio: "estrutura", titulo: "Comportamento do Abordado", corpo: "Níveis de comportamento que orientam a resposta do policial:", lista: ["1. COOPERATIVO — obedece sem resistência", "2. RESISTÊNCIA PASSIVA — não obedece, não agride", "3. RESISTÊNCIA ATIVA (não letal) — desobedece e agride", "4. RESISTÊNCIA ATIVA LETAL — ameaça real de vida"], audio: "Os quatro níveis de comportamento do abordado: cooperativo, resistência passiva, resistência ativa não letal e resistência ativa letal. O nível de força corresponde ao nível de resistência." },
        { estagio: "pegadinha", titulo: "Pegadinhas do SSRAU", alerta: "'Ação Vigorosa' vira 'Ação Contundente'. 'Unidade de Comando' vira 'Uniformidade' ou 'Autonomia'. A ordem das letras pode ser embaralhada. O segundo S é SURPRESA, não Silêncio.", audio: "As pegadinhas do S-S-R-A-U: ação vigorosa vira contundente. Unidade de comando vira uniformidade. O segundo S é surpresa, não silêncio. Memorize a sequência exata." },
        { estagio: "fixacao", titulo: "FIXAÇÃO", corpo: "SSRAU: Segurança · Surpresa · Rapidez · ação Vigorosa · Unidade de Comando", destaque: "Mnemônico oficial do MTP 01. Qualquer alteração de termo ou ordem é pegadinha.", audio: "Fixe o S-S-R-A-U: Segurança, Surpresa, Rapidez, ação Vigorosa, Unidade de Comando. Qualquer alteração de um desses termos é pegadinha de banca." },
      ],
      transcricao: {
        ref: "MTP nº 3.04.01/2020-CG — Seção 5.3",
        blocos: [
          { t: "h", v: "5.3 ABORDAGEM POLICIAL — SSRAU" },
          { t: "def", label: "Definição oficial do SSRAU (MTP 01)", v: "SSRAU é um processo mnemônico utilizado para representar as palavras Segurança, Surpresa, Rapidez, ação Vigorosa e Unidade de Comando." },
          { t: "p", v: "O policial militar deve utilizar o SSRAU, indicativo dos fundamentos da abordagem elencados abaixo, para potencializar suas ações e assegurar que o objetivo proposto seja alcançado:", kw: ["fundamentos da abordagem", "potencializar suas ações"] },
          { t: "def", label: "a) Segurança", v: "Caracteriza-se por um conjunto de medidas adotadas pelo policial militar para controlar e mitigar os riscos da intervenção policial. Antes de agir, o policial militar deverá identificar a área de segurança e a área de risco, monitorar os pontos de foco e controlar os pontos quentes." },
          { t: "def", label: "b) Surpresa", v: "Caracteriza-se por medidas que dificultam a percepção do abordado em relação ao policial militar, ou seja, é uma ação inesperada para o suspeito, surpreendendo-o e reduzindo seu tempo de reação." },
          { t: "def", label: "c) Rapidez", v: "É a velocidade com que a ação policial-militar é processada, o que contribui substancialmente para reduzir o tempo de reação do suspeito e o tempo de exposição ao risco do policial." },
          { t: "def", label: "d) Ação Vigorosa", v: "Execução decisiva e sem hesitação. O policial age com determinação para cumprir o objetivo da abordagem." },
          { t: "def", label: "e) Unidade de Comando", v: "Apenas um policial militar comanda a ação, garantindo coesão e evitando ordens conflitantes que poderiam comprometer a segurança da operação." },
          { t: "banca", prob: "ALTA", assunto: "Definição exata do SSRAU", resp: "Segurança, Surpresa, Rapidez, ação VIGOROSA (não 'contundente'), Unidade de COMANDO (não 'uniformidade'). Texto literal do manual. O segundo S é SURPRESA, não Silêncio." },
          { t: "banca", prob: "ALTA", assunto: "Definição de Segurança no SSRAU", resp: "'Conjunto de medidas para controlar e mitigar os riscos.' O policial identifica ÁREA DE SEGURANÇA e ÁREA DE RISCO, monitora PONTOS DE FOCO e controla PONTOS QUENTES." },
          { t: "banca", prob: "ALTA", assunto: "Definição de Surpresa no SSRAU", resp: "'Medidas que dificultam a percepção do abordado em relação ao policial.' Ação INESPERADA que reduz o TEMPO DE REAÇÃO do suspeito." },
        ]
      },
      questoes: [
        { enunciado: "O mnemônico SSRAU, previsto no MTP 01 como fundamentos da abordagem policial, significa corretamente:", alternativas: ["A) Segurança, Silêncio, Rapidez, Ação Contundente, Uniformidade de Comando", "B) Segurança, Surpresa, Rapidez, Ação Vigorosa, Unidade de Comando", "C) Segurança, Surpresa, Resolução, Ação Vigorosa, Unidade de Comando", "D) Segurança, Surpresa, Rapidez, Ação Vigorosa, Uniformidade"], correta: 1, explicacao: "SSRAU: Segurança, Surpresa, Rapidez, ação Vigorosa (não 'contundente'), Unidade de Comando (não 'uniformidade').", pegadinha: "Cada alternativa errada tem exatamente um erro: A (Silêncio/Contundente/Uniformidade), C (Resolução), D (Uniformidade). A banca explora o Unidade vs. Uniformidade." },
        { enunciado: "Segundo o MTP 01, o fundamento 'Surpresa' no SSRAU caracteriza-se por:", alternativas: ["A) Agir de forma intempestiva e imprevisível, surpreendendo o suspeito com força excessiva", "B) Medidas que dificultam a percepção do abordado em relação ao policial, reduzindo seu tempo de reação", "C) Uso de equipamentos especiais que impedem a identificação visual do policial", "D) Abordagem realizada exclusivamente no período noturno, aproveitando a escuridão"], correta: 1, explicacao: "Definição literal: 'medidas que dificultam a percepção do abordado em relação ao policial militar, é uma ação inesperada para o suspeito, surpreendendo-o e reduzindo seu tempo de reação.'", pegadinha: "A alternativa A confunde Surpresa com Ação Vigorosa ('intempestiva e imprevisível' + força). Surpresa é estratégia de percepção, não de força." },
      ],
    },

    /* ── TÓPICO 7 ─────────────────────────── */
    {
      id: "processo-comunicacao",
      titulo: "Processo de Comunicação",
      icone: "MessageSquare",
      slides: [
        { estagio: "tema", titulo: "PROCESSO DE COMUNICAÇÃO", corpo: "A comunicação é instrumento facilitador em qualquer intervenção, aplicável em todos os níveis de uso da força pela Polícia Militar.", audio: "O tema de hoje é Processo de Comunicação. O manual a define como instrumento facilitador em qualquer intervenção, aplicável em todos os níveis de uso da força." },
        { estagio: "conceito", titulo: "Comunicação: Verbal e Não Verbal", corpo: "O MTP 01 destaca a importância dos elementos verbais e não verbais do processo de comunicação:", lista: ["VERBAL — as palavras, o conteúdo do que se diz", "NÃO VERBAL — postura, expressão, gestos, contato visual", "Ambos são instrumentos facilitadores da intervenção policial"], audio: "O manual destaca especificamente dois elementos: verbal e não verbal. Ambos são instrumentos facilitadores em qualquer intervenção, nos todos os níveis de uso da força." },
        { estagio: "estrutura", titulo: "Comunicação por Nível de Intervenção", corpo: "O policial adapta a comunicação conforme o nível da intervenção:", lista: ["Nível I — 'quebrar o gelo': saudação verbal, contato visual direto, sorriso", "Nível II — explicação prévia do que será realizado antes de se aproximar", "Nível III — comunicação de comando direta, firme e clara"], destaque: "A comunicação verbal é o PRIMEIRO recurso em qualquer intervenção — antes do uso da força.", audio: "A comunicação se adapta ao nível da intervenção. No nível I, uma saudação verbal e contato visual. No nível II, explicação prévia antes de se aproximar. No nível III, comando direto e firme." },
        { estagio: "estrutura", titulo: "O Vínculo Verbal como Ferramenta Tática", corpo: "A comunicação cria um vínculo verbal e de confiança entre o policial e o abordado:", lista: ["Reduz a resistência passiva e ativa", "Aumenta a cooperação do abordado", "Pode evitar o escalonamento para uso de força", "É aplicável em TODOS os níveis de uso da força"], audio: "A comunicação cria um vínculo verbal e de confiança. Reduz resistência, aumenta cooperação e pode evitar o escalonamento para uso de força." },
        { estagio: "pegadinha", titulo: "Pegadinha", alerta: "A banca pode afirmar que a comunicação só é aplicável em baixos níveis de risco. ERRADO! O MTP 01 afirma que é 'aplicável em todos os níveis de uso da força'. A comunicação não cessa com o escalonamento da força.", audio: "Pegadinha: a banca diz que comunicação só se aplica em baixos riscos. O manual diz o contrário: é aplicável em TODOS os níveis de uso da força. A comunicação nunca para." },
        { estagio: "fixacao", titulo: "FIXAÇÃO", corpo: "Comunicação = instrumento facilitador em TODOS os níveis de uso da força.", destaque: "Verbal (o que se diz) + Não Verbal (o que o corpo diz) = ferramentas táticas da intervenção.", audio: "Fixe: comunicação é instrumento facilitador em todos os níveis de força. Verbal mais não verbal. E a comunicação verbal é sempre o primeiro recurso, antes de qualquer força." },
      ],
      transcricao: {
        ref: "MTP nº 3.04.01/2020-CG — Seção 6",
        blocos: [
          { t: "h", v: "6 PROCESSO DE COMUNICAÇÃO" },
          { t: "p", v: "O Processo de Comunicação destaca a importância dos elementos verbais e não verbais do processo de comunicação, como instrumento facilitador em qualquer intervenção, aplicável em todos os níveis de uso da força pela Polícia Militar.", kw: ["elementos verbais e não verbais", "instrumento facilitador", "todos os níveis de uso da força"] },
          { t: "h", v: "6.1 Comunicação na Intervenção Policial" },
          { t: "p", v: "O policial militar estabelece um vínculo verbal e de confiança com o abordado. Por exemplo, numa intervenção nível I, pode 'quebrar o gelo' com uma saudação verbal, demonstrando interesse ao também olhar diretamente nos olhos do interlocutor sorrindo.", kw: ["vínculo verbal e de confiança", "quebrar o gelo"] },
          { t: "p", v: "Numa intervenção nível II, explicando o que será realizado, antes de se aproximar. A comunicação orienta o abordado sobre o que está acontecendo, reduzindo a possibilidade de resistência.", kw: ["explicando o que será realizado", "antes de se aproximar"] },
          { t: "def", label: "Verbal", v: "Conteúdo das palavras — o que é dito durante a intervenção. É o primeiro recurso do policial em qualquer abordagem." },
          { t: "def", label: "Não Verbal", v: "Postura, expressão facial, gestos, contato visual, distância. Transmite autoridade e controle antes mesmo das palavras." },
          { t: "banca", prob: "ALTA", assunto: "Aplicabilidade da comunicação por nível de força", resp: "A comunicação é INSTRUMENTO FACILITADOR em QUALQUER intervenção, aplicável em TODOS os níveis de uso da força. Não se restringe a baixo risco." },
          { t: "banca", prob: "ALTA", assunto: "Elementos do processo de comunicação destacados no MTP 01", resp: "O MTP 01 destaca especificamente os elementos VERBAIS e NÃO VERBAIS. A banca pode querer que você liste outros elementos (emissor, receptor, ruído etc.) mas o foco do manual é verbal/não verbal." },
          { t: "banca", prob: "MÉDIA", assunto: "Comunicação no Nível I de intervenção", resp: "Saudação verbal + contato visual direto + sorriso. O objetivo é 'quebrar o gelo' e criar vínculo de confiança. Nunca iniciar com uso de força sem antes esgotar a comunicação verbal." },
        ]
      },
      questoes: [
        { enunciado: "Quanto ao Processo de Comunicação no MTP 01, assinale a afirmativa CORRETA:", alternativas: ["A) É aplicável apenas em intervenções de Nível I, onde o risco é baixo", "B) É um instrumento facilitador em qualquer intervenção, aplicável em todos os níveis de uso da força", "C) Limita-se à comunicação verbal, sendo os gestos e postura irrelevantes para a intervenção", "D) Deve ser suprimido em situações de Risco Nível III para não comprometer a rapidez da ação"], correta: 1, explicacao: "Trecho literal do manual: 'instrumento facilitador em qualquer intervenção, aplicável em todos os níveis de uso da força pela Polícia Militar.'", pegadinha: "A alternativa A é a pegadinha principal — intuitivamente parece que comunicação é só para baixo risco. O manual é explícito: TODOS os níveis." },
        { enunciado: "O MTP 01 descreve a comunicação como composta por elementos verbais e não verbais. Qual o papel do elemento NÃO VERBAL em uma abordagem?", alternativas: ["A) Transmitir apenas mensagens codificadas entre os policiais da guarnição", "B) Substituir completamente a comunicação verbal em situações de alto risco", "C) Expressar por meio de postura, expressão e gestos autoridade, controle e intenção do policial", "D) Registrar oficialmente as ocorrências por meio de sinais padronizados"], correta: 2, explicacao: "O não verbal (postura, expressão, gestos, contato visual) transmite autoridade e controle — muitas vezes antes mesmo das palavras.", pegadinha: "A alternativa A confunde comunicação não verbal pessoal com comunicação codificada entre policiais (que seria sinalização tática, não comunicação não verbal). São conceitos distintos." },
      ],
    },

    /* ── TÓPICO 8 ─────────────────────────── */
    {
      id: "uso-da-forca",
      titulo: "Uso da Força",
      icone: "Scale",
      slides: [
        { estagio: "tema", titulo: "USO DA FORÇA", corpo: "Os policiais militares devem empregar a força quando estritamente necessária e na medida exigida para o cumprimento do seu dever.", audio: "O tema de hoje é Uso da Força. O manual é claro: a força deve ser empregada quando estritamente necessária e na medida exigida para o cumprimento do dever." },
        { estagio: "conceito", titulo: "Princípios do Uso da Força", corpo: "O uso da força deve obrigatoriamente respeitar 3 princípios:", lista: ["LEGALIDADE — amparado por lei e regulamentos vigentes", "NECESSIDADE — força mínima necessária para neutralizar a resistência", "PROPORCIONALIDADE — compatível com o nível de ameaça"], destaque: "Os 3 princípios são cumulativos — ausência de qualquer um configura uso indevido.", audio: "Três princípios obrigatórios: legalidade, necessidade e proporcionalidade. São cumulativos — a ausência de qualquer um deles configura uso indevido ou excessivo." },
        { estagio: "estrutura", titulo: "Responsabilidade — TRIPLA", corpo: "A responsabilidade pelo uso da força será:", lista: ["a) DO AUTOR — individual, recai sobre quem empregou a força", "b) DOS SUPERIORES — se cientes de determinação manifestamente ilegal e não agirem", "c) DA EQUIPE — dever de reportar; o cumprimento de ordens ilegais não é justificativa"], destaque: "O cumprimento de ordens superiores NÃO justifica o uso de força manifestamente ilegal.", audio: "A responsabilidade é tripla: do autor individual, dos superiores que souberem e não agirem, e da equipe pelo dever de reportar. O cumprimento de ordens superiores não justifica uso de força manifestamente ilegal." },
        { estagio: "estrutura", titulo: "Força x Resistência", corpo: "O nível de força deve corresponder ao nível de resistência:", tabela: [{ item: "Cooperativo", valor: "Presença + comunicação verbal" }, { item: "Resistência passiva", valor: "Controle físico leve" }, { item: "Resistência ativa (não letal)", valor: "Força não letal" }, { item: "Resistência ativa letal", valor: "Força potencialmente letal" }], audio: "A correspondência entre resistência e força: cooperativo demanda apenas presença e comunicação. Resistência passiva demanda controle leve. Ativa não letal admite força não letal. Ativa letal admite força potencialmente letal." },
        { estagio: "estrutura", titulo: "Uso Excessivo da Força", corpo: "Caracteriza-se quando:", lista: ["Força usada supera o necessário para conter a resistência", "Força continua após a cessação da resistência", "Força desproporcional ao nível de ameaça"], alerta: "O uso excessivo gera responsabilidade penal, civil e administrativa — para o autor, superiores omissos e equipe silente.", audio: "Uso excessivo: quando supera o necessário, quando continua após a resistência cessar, ou quando é desproporcional à ameaça. Gera responsabilidade penal, civil e administrativa." },
        { estagio: "pegadinha", titulo: "Pegadinha — Responsabilidade Tripla", alerta: "A banca vai afirmar que só o policial que executou o uso de força responde. ERRADO! A responsabilidade é tripla: autor, superior (ciente e omisso), equipe (que não reportou). O cumprimento de ordens superiores NÃO é justificativa se a ordem for manifestamente ilegal.", audio: "A pegadinha principal: a banca diz que só quem executou responde. Errado. Responsabilidade tripla. E o cumprimento de ordens superiores não justifica uso ilegal de força." },
        { estagio: "fixacao", titulo: "FIXAÇÃO", corpo: "3 princípios: Legalidade · Necessidade · Proporcionalidade. 3 responsáveis: Autor · Superior omisso · Equipe silente.", destaque: "A força CESSA quando a resistência CESSA. Ordem ilegal NÃO justifica uso da força.", audio: "Fixe dois grupos de três: três princípios — legalidade, necessidade, proporcionalidade. Três responsáveis — autor, superior omisso, equipe silente. E a regra de ouro: força cessa quando resistência cessa." },
      ],
      transcricao: {
        ref: "MTP nº 3.04.01/2020-CG — Seção 7",
        blocos: [
          { t: "h", v: "7 USO DA FORÇA" },
          { t: "p", v: "Os policiais militares devem empregar a força quando estritamente necessária e na medida exigida para o cumprimento do seu dever.", kw: ["estritamente necessária", "medida exigida"] },
          { t: "h", v: "7.1 Responsabilidade pelo Uso da Força" },
          { t: "p", v: "A responsabilidade pelo uso da força será:", kw: ["responsabilidade"] },
          { t: "def", label: "a) Do Autor", v: "É individual e, portanto, recai sobre o policial militar que a empregou." },
          { t: "def", label: "b) Dos Superiores Hierárquicos", v: "O cumprimento de ordens superiores não será justificado quando os policiais militares tenham conhecimento de que uma determinação para usar de força ou armas de fogo foi manifestamente ilegal e que esses policiais militares tenham tido oportunidade razoável de recusar." },
          { t: "def", label: "c) Da Equipe / Guarnição", v: "Dever de reportar o uso indevido. Silenciar sobre uso excessivo de força é uma forma de conivência — e gera responsabilidade." },
          { t: "banca", prob: "ALTA", assunto: "Responsabilidade pelo uso da força — quem responde", resp: "Responsabilidade é TRIPLA: a) DO AUTOR (individual); b) DOS SUPERIORES (se cientes de ordem manifestamente ilegal); c) DA EQUIPE (pelo dever de reportar). A banca vai dizer que é 'exclusivamente do autor'." },
          { t: "banca", prob: "ALTA", assunto: "Cumprimento de ordens e uso da força", resp: "O cumprimento de ordens superiores NÃO justifica o uso de força MANIFESTAMENTE ILEGAL — quando o policial tinha conhecimento da ilegalidade e oportunidade de recusar." },
          { t: "banca", prob: "ALTA", assunto: "Definição do momento de uso da força", resp: "'Quando ESTRITAMENTE NECESSÁRIA e na MEDIDA EXIGIDA para o cumprimento do dever.' — Trecho literal do manual. A banca pode trocar 'estritamente' por 'absolutamente' ou omitir 'na medida exigida'." },
        ]
      },
      questoes: [
        { enunciado: "Segundo o MTP 01, a responsabilidade pelo uso da força pelo policial militar recai sobre:", alternativas: ["A) Exclusivamente sobre o policial que executou a ação", "B) Sobre o policial executor e, automaticamente, sobre todos os membros da guarnição", "C) Sobre o autor, sobre os superiores cientes de ordem manifestamente ilegal e sobre a equipe que não reportou", "D) Exclusivamente sobre o superior hierárquico que determinou o uso da força"], correta: 2, explicacao: "Responsabilidade tripla: a) do autor, b) dos superiores cientes de determinação manifestamente ilegal, c) da equipe pelo dever de reportar.", pegadinha: "A alternativa A é a pegadinha clássica. A B parece certa mas 'automaticamente sobre TODOS' é diferente de 'sobre quem tinha ciência e oportunidade de agir'." },
        { enunciado: "O MTP 01 estabelece que os policiais militares devem empregar a força:", alternativas: ["A) Sempre que necessário, independentemente do nível de resistência do abordado", "B) Quando estritamente necessária e na medida exigida para o cumprimento do dever", "C) Apenas em ocorrências de Risco Nível III com prévia autorização do superior", "D) Como primeiro recurso em situações de risco potencial, visando à prevenção"], correta: 1, explicacao: "Trecho literal do manual: 'quando estritamente necessária e na medida exigida para o cumprimento do seu dever.'", pegadinha: "A alternativa C adiciona 'prévia autorização do superior' — condição que NÃO existe no manual. A D inverte a lógica: força é ÚLTIMO recurso, não o primeiro." },
      ],
    },

  ],
};

/* ============================================================
   UTILITÁRIOS
   ============================================================ */

const ESTAGIO_CONFIG = {
  tema:         { cor: "#C7A14A", label: "TEMA" },
  conceito:     { cor: "#7A8B5E", label: "CONCEITO" },
  finalidade:   { cor: "#6B8CAE", label: "FINALIDADE" },
  estrutura:    { cor: "#6B8CAE", label: "ESTRUTURA" },
  pegadinha:    { cor: "#9C3D3D", label: "⚠ PEGADINHA" },
  "palavra-chave": { cor: "#C7A14A", label: "PALAVRA-CHAVE" },
  fixacao:      { cor: "#7A8B5E", label: "FIXAÇÃO" },
};

const ICONE_MAP = { Brain, Eye, Target, Zap, Crosshair, Shield, MessageSquare, Scale };

const lerProgresso = () => {
  try { return JSON.parse(localStorage.getItem("eap_prog") || "{}"); } catch { return {}; }
};
const salvarProgresso = (p) => {
  try { localStorage.setItem("eap_prog", JSON.stringify(p)); } catch {}
};

/* ============================================================
   COMPONENTE: TEXTO COM KEYWORDS DESTACADAS
   ============================================================ */
function TextoDestacado({ texto, kws = [] }) {
  const parts = highlight(texto, kws);
  return (
    <span>
      {parts.map((p, i) =>
        p.t === "kw"
          ? <mark key={i} style={{ background: "#C7A14A22", color: "#C7A14A", borderRadius: 3, padding: "0 3px", fontWeight: 600 }}>{p.v}</mark>
          : <span key={i}>{p.v}</span>
      )}
    </span>
  );
}

/* ============================================================
   COMPONENTE PRINCIPAL
   ============================================================ */
export default function TrilhaApp() {
  const topicos = MODULO_MTP01.topicos;

  const [tela, setTela] = useState("trilha");
  const [topicoIdx, setTopicoIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [questaoIdx, setQuestaoIdx] = useState(0);
  const [resposta, setResposta] = useState(null);
  const [progresso, setProgresso] = useState(lerProgresso);
  const [falando, setFalando] = useState(false);
  const [bancasAbertas, setBancasAbertas] = useState({});
  const utterRef = useRef(null);

  const topico = topicos[topicoIdx];
  const slide = topico?.slides[slideIdx];
  const questao = topico?.questoes[questaoIdx];
  const totalSlides = topico?.slides.length || 0;
  const totalQuestoes = topico?.questoes.length || 0;
  const topicoConcluido = (idx) => !!progresso[topicos[idx]?.id];

  const salvar = (p) => { setProgresso(p); salvarProgresso(p); };

  const falar = (texto) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    if (falando) { setFalando(false); return; }
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = "pt-BR"; u.rate = 0.95;
    u.onend = () => setFalando(false);
    utterRef.current = u;
    window.speechSynthesis.speak(u);
    setFalando(true);
  };
  const pararFala = () => { window.speechSynthesis?.cancel(); setFalando(false); };

  const irParaTrilha = () => { pararFala(); setTela("trilha"); };
  const iniciarTopico = (idx) => {
    if (idx > 0 && !topicoConcluido(idx - 1)) return;
    pararFala(); setBancasAbertas({});
    setTopicoIdx(idx); setSlideIdx(0); setTela("slide");
  };
  const proximoSlide = () => {
    pararFala();
    if (slideIdx < totalSlides - 1) setSlideIdx(slideIdx + 1);
    else { setBancasAbertas({}); setTela("transcricao"); }
  };
  const slideAnterior = () => { if (slideIdx > 0) { pararFala(); setSlideIdx(slideIdx - 1); } };
  const irParaQuestoes = () => { setQuestaoIdx(0); setResposta(null); setTela("questao"); };
  const voltar = () => setTela("slide");
  const responder = (idx) => setResposta(idx);
  const proximaQuestao = () => {
    if (questaoIdx < totalQuestoes - 1) { setQuestaoIdx(questaoIdx + 1); setResposta(null); }
    else { salvar({ ...progresso, [topico.id]: true }); setTela("concluido"); }
  };
  const toggleBanca = (key) => setBancasAbertas(prev => ({ ...prev, [key]: !prev[key] }));

  /* ── TELA: TRILHA ────────────────────────────────────────── */
  if (tela === "trilha") return (
    <div style={s.fundo}>
      <div style={s.device}>
        <div style={s.header}>
          <span style={s.label}>🟢 DOUTRINA OPERACIONAL</span>
          <span style={s.headerTitulo}>{MODULO_MTP01.titulo}</span>
          <span style={{ ...s.label, fontSize: 9, color: "#7d7a6c" }}>{MODULO_MTP01.subtitulo}</span>
        </div>
        <div style={s.scrollArea}>
          {topicos.map((t, idx) => {
            const Ic = ICONE_MAP[t.icone] || BookOpen;
            const ok = topicoConcluido(idx);
            const block = idx > 0 && !topicoConcluido(idx - 1);
            return (
              <div key={t.id} onClick={() => iniciarTopico(idx)}
                style={{ ...s.card, opacity: block ? 0.45 : 1, cursor: block ? "not-allowed" : "pointer" }}>
                <div style={{ ...s.cardIcon, background: ok ? "#7A8B5E22" : block ? "#ffffff08" : "#C7A14A22" }}>
                  {block ? <Lock size={18} color="#7d7a6c" /> : ok ? <CheckCircle2 size={18} color="#7A8B5E" /> : <Ic size={18} color="#C7A14A" />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ ...s.cardTitulo, color: ok ? "#7A8B5E" : block ? "#7d7a6c" : "#E8E4D8" }}>{t.titulo}</div>
                  <div style={s.cardMeta}>{t.slides.length} slides · transcrição · {t.questoes.length} questões</div>
                </div>
                {!block && <ChevronRight size={16} color="#7d7a6c" />}
              </div>
            );
          })}
        </div>
        <div style={s.footer}>
          <span style={s.label}>{Object.keys(progresso).length}/{topicos.length} tópicos concluídos</span>
        </div>
      </div>
    </div>
  );

  /* ── TELA: SLIDE ─────────────────────────────────────────── */
  if (tela === "slide") {
    const cfg = ESTAGIO_CONFIG[slide.estagio] || ESTAGIO_CONFIG.estrutura;
    return (
      <div style={s.fundo}>
        <div style={s.device}>
          <div style={{ ...s.header, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={irParaTrilha} style={s.btnVoltar}>← Trilha</button>
            <span style={{ ...s.label, color: "#9a9684" }}>{topico.titulo}</span>
            <span style={{ ...s.label, color: "#7d7a6c" }}>{slideIdx + 1}/{totalSlides}</span>
          </div>
          <div style={{ display: "flex", gap: 3, padding: "0 16px 12px" }}>
            {topico.slides.map((_, i) => (
              <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= slideIdx ? cfg.cor : "#3a3f2e" }} />
            ))}
          </div>
          <div style={{ ...s.slideCard, borderColor: cfg.cor + "44" }}>
            <div style={{ ...s.estagioTag, background: cfg.cor + "22", color: cfg.cor }}>{cfg.label}</div>
            <div style={s.slideTitulo}>{slide.titulo}</div>
            {slide.corpo && <p style={s.slideCorpo}>{slide.corpo}</p>}
            {slide.lista && (
              <ul style={s.lista}>{slide.lista.map((item, i) => (
                <li key={i} style={s.listaItem}><span style={{ color: cfg.cor, marginRight: 8 }}>›</span>{item}</li>
              ))}</ul>
            )}
            {slide.tabela && (
              <div style={s.tabela}>{slide.tabela.map((row, i) => (
                <div key={i} style={{ ...s.tabelaRow, background: i % 2 === 0 ? "#ffffff08" : "transparent" }}>
                  <span style={{ ...s.tabelaItem, color: cfg.cor }}>{row.item}</span>
                  <span style={s.tabelaValor}>{row.valor}</span>
                </div>
              ))}</div>
            )}
            {slide.destaque && <div style={{ ...s.destaque, borderColor: cfg.cor, background: cfg.cor + "11" }}>{slide.destaque}</div>}
            {slide.alerta && (
              <div style={s.alerta}>
                <AlertTriangle size={14} color="#9C3D3D" style={{ marginRight: 6, flexShrink: 0 }} />
                <span>{slide.alerta}</span>
              </div>
            )}
          </div>
          <div style={s.navBar}>
            <button onClick={slideAnterior} style={{ ...s.btnNav, opacity: slideIdx === 0 ? 0.3 : 1 }} disabled={slideIdx === 0}>
              <ChevronLeft size={18} /> Anterior
            </button>
            <button onClick={() => falar(slide.audio || slide.corpo || "")} style={s.btnAudio}>
              {falando ? <VolumeX size={16} color="#C7A14A" /> : <Volume2 size={16} color="#C7A14A" />}
            </button>
            <button onClick={proximoSlide} style={s.btnNavPrimary}>
              {slideIdx < totalSlides - 1 ? <><span>Próximo</span><ChevronRight size={18} /></> : <><FileText size={15} /><span>Ver Manual</span></>}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── TELA: TRANSCRIÇÃO ───────────────────────────────────── */
  if (tela === "transcricao") {
    const tr = topico.transcricao;
    return (
      <div style={s.fundo}>
        <div style={s.device}>
          <div style={{ ...s.header, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={voltar} style={s.btnVoltar}>← Slides</button>
            <span style={{ ...s.label, color: "#6B8CAE" }}>📄 TRANSCRIÇÃO</span>
            <span style={{ ...s.label, color: "#7d7a6c", fontSize: 8 }}>{tr.ref}</span>
          </div>
          <div style={{ ...s.scrollArea, gap: 0 }}>
            <div style={{ padding: "4px 4px 16px" }}>
              {tr.blocos.map((bloco, i) => {
                if (bloco.t === "h") return (
                  <div key={i} style={{ fontFamily: "'Oswald', sans-serif", fontSize: 15, fontWeight: 600, color: "#C7A14A", letterSpacing: 0.5, marginTop: 16, marginBottom: 8, paddingLeft: 4 }}>
                    {bloco.v}
                  </div>
                );
                if (bloco.t === "p") return (
                  <p key={i} style={{ fontSize: 13, color: "#c4c0b2", lineHeight: 1.7, marginBottom: 10, paddingLeft: 4 }}>
                    <TextoDestacado texto={bloco.v} kws={bloco.kw} />
                  </p>
                );
                if (bloco.t === "def") return (
                  <div key={i} style={{ background: "#21261b", border: "1px solid #3a3f2e", borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#6B8CAE", fontWeight: 600, marginBottom: 4 }}>{bloco.label}</div>
                    <div style={{ fontSize: 12, color: "#c4c0b2", lineHeight: 1.6 }}>{bloco.v}</div>
                  </div>
                );
                if (bloco.t === "eq") return (
                  <div key={i} style={{ background: "#C7A14A11", border: "1px solid #C7A14A44", borderRadius: 8, padding: "12px 14px", marginBottom: 10, textAlign: "center" }}>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, color: "#C7A14A", letterSpacing: 1, fontWeight: 600 }}>{bloco.v}</div>
                  </div>
                );
                if (bloco.t === "banca") {
                  const key = `b${i}`;
                  const aberta = !!bancasAbertas[key];
                  const cor = bloco.prob === "ALTA" ? "#9C3D3D" : "#C7A14A";
                  return (
                    <div key={i} style={{ marginBottom: 8 }}>
                      <button onClick={() => toggleBanca(key)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", background: cor + "18", border: `1px solid ${cor}55`, borderRadius: aberta ? "8px 8px 0 0" : 8, cursor: "pointer" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <Star size={12} color={cor} fill={cor} />
                          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: cor, fontWeight: 600 }}>⚡ {bloco.prob} chance em prova</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ fontSize: 11, color: "#c4c0b2" }}>{bloco.assunto}</span>
                          {aberta ? <ChevronUp size={14} color={cor} /> : <ChevronDown size={14} color={cor} />}
                        </div>
                      </button>
                      {aberta && (
                        <div style={{ padding: "10px 12px", background: cor + "0e", border: `1px solid ${cor}33`, borderTop: "none", borderRadius: "0 0 8px 8px" }}>
                          <div style={{ fontSize: 12, color: "#E8E4D8", lineHeight: 1.6 }}>{bloco.resp}</div>
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div style={s.navBar}>
            <button onClick={voltar} style={s.btnNav}><ChevronLeft size={18} /> Slides</button>
            <button onClick={irParaQuestoes} style={{ ...s.btnNavPrimary, marginLeft: "auto" }}>
              <span>Questões</span><ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── TELA: QUESTÃO ───────────────────────────────────────── */
  if (tela === "questao") return (
    <div style={s.fundo}>
      <div style={s.device}>
        <div style={{ ...s.header, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => setTela("transcricao")} style={s.btnVoltar}>← Manual</button>
          <span style={s.label}>Questão {questaoIdx + 1} de {totalQuestoes}</span>
        </div>
        <div style={s.scrollArea}>
          <div style={{ padding: "0 4px 8px" }}>
            <div style={{ ...s.estagioTag, background: "#6B8CAE22", color: "#6B8CAE", marginBottom: 12 }}>QUESTÃO DE FIXAÇÃO</div>
            <p style={{ fontSize: 13, color: "#c4c0b2", lineHeight: 1.65, marginBottom: 16 }}>{questao.enunciado}</p>
            {questao.alternativas.map((alt, i) => (
              <button key={i} onClick={() => !resposta && responder(i)}
                style={{ ...s.altBtn, background: resposta !== null ? i === questao.correta ? "#7A8B5E22" : i === resposta && resposta !== questao.correta ? "#9C3D3D22" : "#ffffff05" : "#ffffff08", borderColor: resposta !== null ? i === questao.correta ? "#7A8B5E" : i === resposta && resposta !== questao.correta ? "#9C3D3D" : "#3a3f2e" : "#3a3f2e", cursor: resposta !== null ? "default" : "pointer" }}>
                {resposta !== null && i === questao.correta && <Check size={14} color="#7A8B5E" style={{ marginRight: 6, flexShrink: 0 }} />}
                {resposta !== null && i === resposta && resposta !== questao.correta && <X size={14} color="#9C3D3D" style={{ marginRight: 6, flexShrink: 0 }} />}
                <span style={{ color: "#c4c0b2", fontSize: 12, textAlign: "left" }}>{alt}</span>
              </button>
            ))}
            {resposta !== null && (
              <div style={{ marginTop: 12 }}>
                <div style={{ ...s.destaque, borderColor: "#7A8B5E", background: "#7A8B5E11", marginBottom: 8 }}>
                  <strong style={{ color: "#7A8B5E" }}>✓ </strong>{questao.explicacao}
                </div>
                <div style={s.alerta}>
                  <AlertTriangle size={12} color="#9C3D3D" style={{ marginRight: 6, flexShrink: 0 }} />
                  <span><strong style={{ color: "#9C3D3D" }}>Pegadinha: </strong>{questao.pegadinha}</span>
                </div>
                <button onClick={proximaQuestao} style={{ ...s.btnNavPrimary, width: "100%", justifyContent: "center", marginTop: 12 }}>
                  {questaoIdx < totalQuestoes - 1 ? "Próxima questão →" : "Concluir tópico ✓"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  /* ── TELA: CONCLUÍDO ─────────────────────────────────────── */
  if (tela === "concluido") {
    const n = Object.keys(progresso).length;
    const pct = Math.round((n / topicos.length) * 100);
    return (
      <div style={s.fundo}>
        <div style={s.device}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, padding: 24, gap: 16 }}>
            <div style={{ fontSize: 48 }}>🎖</div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, color: "#C7A14A", textAlign: "center" }}>TÓPICO CONCLUÍDO</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 14, color: "#7A8B5E", textAlign: "center" }}>{topico.titulo}</div>
            <div style={{ ...s.destaque, borderColor: "#C7A14A", background: "#C7A14A11", textAlign: "center" }}>
              Progresso: <strong style={{ color: "#C7A14A" }}>{n}/{topicos.length} tópicos ({pct}%)</strong>
            </div>
            <button onClick={irParaTrilha} style={{ ...s.btnNavPrimary, width: "100%", justifyContent: "center" }}>Voltar à Trilha</button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

/* ============================================================
   ESTILOS
   ============================================================ */
const s = {
  fundo: { minHeight: "100vh", background: "#111410", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif", padding: 16 },
  device: { width: 390, minHeight: 760, background: "#1a1d16", borderRadius: 32, border: "1px solid #3a3f2e", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" },
  header: { display: "flex", flexDirection: "column", gap: 4, padding: "20px 16px 12px", borderBottom: "1px solid #2a2f21", background: "#21261b" },
  headerTitulo: { fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 600, color: "#C7A14A", letterSpacing: 1 },
  label: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#9a9684", letterSpacing: 0.5 },
  scrollArea: { flex: 1, overflowY: "auto", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 8 },
  card: { display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "#21261b", border: "1px solid #2a2f21", borderRadius: 10 },
  cardIcon: { width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  cardTitulo: { fontSize: 13, fontWeight: 500, marginBottom: 2 },
  cardMeta: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#7d7a6c" },
  footer: { padding: "12px 16px", borderTop: "1px solid #2a2f21", background: "#21261b", display: "flex", justifyContent: "center" },
  btnVoltar: { background: "transparent", border: "none", color: "#9a9684", fontSize: 12, cursor: "pointer", padding: "4px 0", fontFamily: "'IBM Plex Mono', monospace" },
  slideCard: { margin: "0 16px", padding: 16, background: "#21261b", border: "1px solid", borderRadius: 12, flex: 1, display: "flex", flexDirection: "column", gap: 12, overflowY: "auto" },
  estagioTag: { display: "inline-block", padding: "3px 10px", borderRadius: 20, fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500, letterSpacing: 1, alignSelf: "flex-start" },
  slideTitulo: { fontFamily: "'Oswald', sans-serif", fontSize: 20, fontWeight: 600, color: "#F2EFE6", lineHeight: 1.2 },
  slideCorpo: { fontSize: 13, color: "#c4c0b2", lineHeight: 1.6, margin: 0 },
  lista: { margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 },
  listaItem: { fontSize: 12, color: "#c4c0b2", lineHeight: 1.5, display: "flex", alignItems: "flex-start" },
  tabela: { borderRadius: 8, overflow: "hidden", border: "1px solid #3a3f2e" },
  tabelaRow: { display: "flex", padding: "8px 10px", gap: 8 },
  tabelaItem: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 500, minWidth: 100, flexShrink: 0 },
  tabelaValor: { fontSize: 12, color: "#c4c0b2", lineHeight: 1.4 },
  destaque: { padding: "10px 12px", borderLeft: "3px solid", borderRadius: "0 6px 6px 0", fontSize: 12, color: "#c4c0b2", lineHeight: 1.5 },
  alerta: { display: "flex", alignItems: "flex-start", padding: "10px 12px", background: "#9C3D3D11", border: "1px solid #9C3D3D44", borderRadius: 8, fontSize: 12, color: "#c4c0b2", lineHeight: 1.5 },
  navBar: { display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", borderTop: "1px solid #2a2f21", background: "#21261b" },
  btnNav: { display: "flex", alignItems: "center", gap: 4, padding: "8px 12px", background: "#2a2f21", border: "1px solid #3a3f2e", borderRadius: 8, color: "#9a9684", fontSize: 12, cursor: "pointer" },
  btnNavPrimary: { display: "flex", alignItems: "center", gap: 4, padding: "8px 14px", background: "#C7A14A22", border: "1px solid #C7A14A66", borderRadius: 8, color: "#C7A14A", fontSize: 12, cursor: "pointer" },
  btnAudio: { display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, background: "#C7A14A11", border: "1px solid #C7A14A33", borderRadius: "50%", cursor: "pointer" },
  altBtn: { width: "100%", display: "flex", alignItems: "center", padding: "10px 12px", border: "1px solid", borderRadius: 8, marginBottom: 6, background: "transparent", cursor: "pointer" },
};
