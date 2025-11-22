// No Next.js, os assets do public/ são servidos na raiz
// Então usamos caminhos relativos começando com /assets/
const HelicebrasImage1 = '/assets/helicebras/imagem_2022-12-14_075548157.png';
const HelicebrasImage2 = '/assets/helicebras/imagem_2022-12-14_075624133.png';
const MoonlightLogo = '/assets/moonlight-bot/logo_moonlight.gif';
const Screenshot1 = '/assets/moonlight-bot/Captura de tela 2025-11-07 061620.png';
const Screenshot2 = '/assets/moonlight-bot/Captura de tela 2025-11-07 061659.png';
const Screenshot3 = '/assets/moonlight-bot/Captura de tela 2025-11-07 061723.png';
const Screenshot4 = '/assets/moonlight-bot/Captura de tela 2025-11-07 061748.png';
const Screenshot5 = '/assets/moonlight-bot/Captura de tela 2025-11-07 061840.png';
const IntegracoesLogo = '/assets/integrações/logo.png';
const MiddlemanLogo = '/assets/mmbot/logo-mm.jpg';
const MMImage1 = '/assets/mmbot/image_1.png';
const MMImage2 = '/assets/mmbot/image_2.png';
const MMImage3 = '/assets/mmbot/image_3.png';
const MMImage4 = '/assets/mmbot/image_4.png';
const MMImage5 = '/assets/mmbot/image_5.png';
const MMImage6 = '/assets/mmbot/image_6.png';
const MMImage7 = '/assets/mmbot/image_7.png';
const MMImage8 = '/assets/mmbot/image_8.png';
const MMImage9 = '/assets/mmbot/image_9.png';
const MMImage10 = '/assets/mmbot/image_10.png';
const MMImage11 = '/assets/mmbot/image_11.png';

export const getProjects = (t) => {
  const helicebrasProject = {
    id: 'helicebras',
    title: t('projectData.helicebras.title'),
    shortDescription: t('projectData.helicebras.shortDescription'),
    logo: HelicebrasImage1,
    technologies: ['Next.js', 'HTML', 'CSS', 'Javascript'],
    description: t('projectData.helicebras.description'),
    images: [HelicebrasImage1, HelicebrasImage2]
  };
  const moonlightProject = {
    id: 'moonlight',
    title: t('projectData.moonlight.title'),
    shortDescription: t('projectData.moonlight.shortDescription'),
    logo: MoonlightLogo,
    technologies: ['Java', 'Spring Boot', 'JDA (lib)'],
    description: t('projectData.moonlight.description'),
    images: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5],
    link: 'https://discord.gg/moonlightsrv'
  };

  const middlemanProject = {
    id: 'middleman',
    title: t('projectData.middleman.title'),
    shortDescription: t('projectData.middleman.shortDescription'),
    logo: MiddlemanLogo,
    technologies: ['Java', 'Spring Boot', 'JDA (lib)'],
    description: t('projectData.middleman.description'),
    images: [MMImage1, MMImage2, MMImage3, MMImage4, MMImage5, MMImage6, MMImage7, MMImage8, MMImage9, MMImage10, MMImage11]
  };

  const integracoesProject = {
    id: 'integracoes',
    title: t('projectData.integracoes.title'),
    shortDescription: t('projectData.integracoes.shortDescription'),
    logo: IntegracoesLogo,
    technologies: ['Java', 'Python', 'Node'],
    integrations: [
      {
        category: t('projectData.integracoes.integrations.ecommerce.category'),
        items: t('projectData.integracoes.integrations.ecommerce.items', { returnObjects: true })
      },
      {
        category: t('projectData.integracoes.integrations.comunicacao.category'),
        items: t('projectData.integracoes.integrations.comunicacao.items', { returnObjects: true })
      },
      {
        category: t('projectData.integracoes.integrations.juridicos.category'),
        items: t('projectData.integracoes.integrations.juridicos.items', { returnObjects: true })
      },
      {
        category: t('projectData.integracoes.integrations.autenticacao.category'),
        items: t('projectData.integracoes.integrations.autenticacao.items', { returnObjects: true })
      },
      {
        category: t('projectData.integracoes.integrations.notificacoes.category'),
        items: t('projectData.integracoes.integrations.notificacoes.items', { returnObjects: true })
      },
      {
        category: t('projectData.integracoes.integrations.armazenamento.category'),
        items: t('projectData.integracoes.integrations.armazenamento.items', { returnObjects: true })
      },
      {
        category: t('projectData.integracoes.integrations.utilitarios.category'),
        items: t('projectData.integracoes.integrations.utilitarios.items', { returnObjects: true })
      },
      {
        category: t('projectData.integracoes.integrations.ia.category'),
        items: t('projectData.integracoes.integrations.ia.items', { returnObjects: true })
      }
    ],
    images: []
  };

  return [helicebrasProject, moonlightProject, middlemanProject, integracoesProject];
};
