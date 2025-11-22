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

export const getProjects = (t) => {
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

  return [moonlightProject, middlemanProject, integracoesProject];
};
