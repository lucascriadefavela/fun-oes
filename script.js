const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a superpopulação pode impactar a incidência de crimes como o estupro?",
        alternativas: [
            {
                texto: "Aumento da tensão social",
                afirmacao: "Em áreas superpovoadas, a competição por recursos pode aumentar a tensão entre as pessoas, potencialmente levando a um aumento na criminalidade, incluindo estupros."
            },
            {
                texto: "Falta de recursos e apoio",
                afirmacao: " A superpopulação pode resultar em serviços públicos insuficientes, como segurança e apoio às vítimas, o que pode dificultar a denúncia e o combate ao estupro."
            }, 
            {
                texto: "Desigualdade social",
                afirmacao: "Regiões superpopuladas frequentemente enfrentam desigualdades sociais, que podem contribuir para a desvalorização da vida humana e, consequentemente, para a violência sexual."
            }, 
            {
                texto: "Normalização da violência",
                afirmacao: "Em ambientes onde a violência é comum, a cultura pode se tornar mais permissiva em relação a atos como o estupro, levando a um aumento na sua incidência."
            },
             {
                texto: "Dificuldades na educação",
                afirmacao: "Em sociedades superpopuladas, a educação sobre consentimento e direitos humanos pode ser negligenciada, resultando em uma maior vulnerabilidade a abusos.."
            }
            
        ]
    },
    {
        enunciado: "De que maneira as doutrinas religiosas influenciam a percepção e o tratamento do estupro nas sociedades?",
        alternativas: [
            {
                texto: "Estigmatização das vítimas",
                afirmacao: "afirmação"
            },
            {
                texto: "Escrevafire o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Algumas doutrinas religiosas podem perpetuar a ideia de que as vítimas têm responsabilidade sobre o ato, levando a um estigma que dificulta a denúncia e o apoio."
            },
             {
                texto: "Valores de perdão e reconciliação",
                afirmacao: "2. Muitas religiões enfatizam o perdão, o que pode levar as vítimas a se sentirem pressionadas a perdoar o agressor, em vez de buscar justiça."
            },
             {
                texto: "Educação moral",
                afirmacao: "Algumas religiões promovem a educação moral que pode ajudar a prevenir a violência sexual, enfatizando o respeito e o consentimento.A forma como as instituições religiosas tratam casos de estupro pode variar, com algumas adotando uma abordagem mais protetora das vítimas e outras priorizando a proteção da imagem da instituição."
            },
             {
                texto: "Influência nas leis",
                afirmacao: "5. Em algumas sociedades, as doutrinas religiosas influenciam a legislação, o que pode afetar a forma como os casos de estupro são tratados legalmente."
            }
        ]
    },
    {
        enunciado: "Qual o papel das religiões na discussão sobre controle populacional em contextos de superpopulação?",
        alternativas: [
            {
                texto: "Resistência a métodos contraceptivos",
                afirmacao: " Algumas religiões se opõem ao uso de contraceptivos, o que pode dificultar a implementação de políticas de controle populacional em comunidades superpovoadas."
            },
            {
                texto: "Promoção da família",
                afirmacao: "Muitas tradições religiosas valorizam a família grande, o que pode contribuir para a superpopulação e a resistência a iniciativas de planejamento familiar."
            },
              {
                texto: "Educação e conscientização",
                afirmacao: "Algumas religiões têm se engajado em diálogos sobre a importância do planejamento familiar e do controle populacional como parte de uma abordagem ética."
            }, 
    {
                texto: "Interpretação de textos sagrados",
                afirmacao: " A forma como textos sagrados são interpretados pode influenciar a aceitação ou rejeição de políticas de controle populacional nas comunidades religiosas."
            },
  {
                texto: "Apoio a políticas sociais",
                afirmacao: "5. Algumas organizações religiosas têm apoiado iniciativas que promovem a saúde reprodutiva e o empoderamento das mulheres, contribuindo para um controle populacional mais eficaz. "
            }
        ]
    },
   
{       enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            },
        ],
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
