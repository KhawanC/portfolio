import MoonlightLogo from '../../assets/moonlight-bot/logo_moonlight.gif';
import Screenshot1 from '../../assets/moonlight-bot/Captura de tela 2025-11-07 061620.png';
import Screenshot2 from '../../assets/moonlight-bot/Captura de tela 2025-11-07 061659.png';
import Screenshot3 from '../../assets/moonlight-bot/Captura de tela 2025-11-07 061723.png';
import Screenshot4 from '../../assets/moonlight-bot/Captura de tela 2025-11-07 061748.png';
import Screenshot5 from '../../assets/moonlight-bot/Captura de tela 2025-11-07 061840.png';
import IntegracoesLogo from '../../assets/integrações/logo.png';
import MiddlemanLogo from '../../assets/mmbot/logo-mm.jpg';
import MMImage1 from '../../assets/mmbot/image_1.png';
import MMImage2 from '../../assets/mmbot/image_2.png';
import MMImage3 from '../../assets/mmbot/image_3.png';
import MMImage4 from '../../assets/mmbot/image_4.png';
import MMImage5 from '../../assets/mmbot/image_5.png';
import MMImage6 from '../../assets/mmbot/image_6.png';
import MMImage7 from '../../assets/mmbot/image_7.png';
import MMImage8 from '../../assets/mmbot/image_8.png';
import MMImage9 from '../../assets/mmbot/image_9.png';
import MMImage10 from '../../assets/mmbot/image_10.png';
import MMImage11 from '../../assets/mmbot/image_11.png';

export const moonlightProject = {
  id: 'moonlight',
  title: 'Moonlight - Discord',
  shortDescription: 'BOT de interações e moderação para um servidor do Discord',
  logo: MoonlightLogo,
  technologies: ['Java', 'Spring Boot', 'JDA (lib)'],
  description: `Bot multi-funções utilizado como sistema principal do servidor, suas principais funcionalidades são:

• Sistema de pontos com lojinha para conseguir benefícios no servidor
• Sistema de pontos contém monitoramento em chats de texto e voz
• Relatórios diários com quantidade em horas gasta pelos membros em call
• Verificações de spam em chats de texto
• Monitoramento de pessoas AFK em calls
• Sistema de tickets robusto com relatórios e delegação de membros
• Integração com bot de inhouse do League of Legends para expandir sistema de pontos
• E muito mais!`,
  images: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5],
  link: 'https://discord.gg/moonlightsrv'
};

export const middlemanProject = {
  id: 'middleman',
  title: 'Middleman - Discord',
  shortDescription: 'BOT para vendas / compras utilizando intermediários em um servidor do discord',
  logo: MiddlemanLogo,
  technologies: ['Java', 'Spring Boot', 'JDA (lib)'],
  description: `BOT feito com o intuito de auxiliar e facilitar vendas em um servidor, onde membros podem trocar seus itens utilizando um intermediador durante o processo, facilitando assim a coleta de informações durante o processo do ticket de compra. Suas principais funcionalidades são:

• Criação de tickets e fluxo de atendimento intuitivo e automatizado
• Integração com sistemas de pagamento (Mercado Pago e InfinitePay) com confirmação de pagamento automático
• Registros com ranking entre membros e staffs
• Perfil personalizado detalhado com transações e estatísticas
• Sistema de logs robusto com relatórios semanais e mensais
• Sistemas de metas de gastos para recompensar membros e atendentes da staff
• Envio público dos comprovantes das trocas para gerar credibilidade ao servidor
• Painel de configurações simplificado orientando como configurar o BOT`,
  images: [MMImage1, MMImage2, MMImage3, MMImage4, MMImage5, MMImage6, MMImage7, MMImage8, MMImage9, MMImage10, MMImage11]
};

export const integracoesProject = {
  id: 'integracoes',
  title: 'Integrações entre sistemas',
  shortDescription: 'Desenvolvimento de integrações robustas entre diferentes sistemas e APIs',
  logo: IntegracoesLogo,
  technologies: ['Java', 'Python', 'Node'],
  integrations: [
    {
      category: 'E-commerce e Pagamentos',
      items: ['Mercado Livre', 'Mercado Pago', 'Splits de pagamento (Stripe, Mercado Pago, Asaas)']
    },
    {
      category: 'Comunicação',
      items: ['WhatsApp (API oficial e Evolution API)']
    },
    {
      category: 'Sistemas Jurídicos',
      items: ['Datajud', 'PJ-E', 'E-PROC', 'E-SAJ']
    },
    {
      category: 'Autenticação e Segurança',
      items: ['OAuth 2.0', 'JWT (JSON Web Tokens)', 'Auth0', 'Keycloak']
    },
    {
      category: 'Notificações',
      items: ['Email (SendGrid, Mailgun)', 'SMS (Twilio)', 'Push Notifications (Firebase Cloud Messaging)']
    },
    {
      category: 'Armazenamento em Nuvem',
      items: ['AWS S3', 'Google Cloud Storage', 'Azure Blob Storage']
    },
    {
      category: 'Utilitários',
      items: ['ViaCep', 'Google Maps API', 'Correios API']
    },
    {
      category: 'Inteligência Artificial',
      items: ['OpenAI', 'Google AI', 'Azure AI']
    }
  ],
  images: []
};

export const projects = [moonlightProject, middlemanProject, integracoesProject];

