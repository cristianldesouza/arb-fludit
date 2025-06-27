module.exports = Object.freeze({
	CACHING: false,
	CACHE_CONTROL_TIME: 3600,
	CMS_ENDPOINT: 'https://metacms.highstakes.tech',
	PUBLIC_KEY:
		'BBSIN_16XjPEEKOkcGwLHgnBFPjZgxBjFQHZ_BXn206dP3nzLpU7WryrIgmQ629AIg0rQo9I8Cl51QijEoOnsYk',
	LANGUAGES: ['pt', 'en', 'es', 'de', 'fr'],
	DOMAIN: 'fludit.com',
	SITE_NAME: 'Fludit',
	SITE_SLOGAN: {
		pt: 'Fluxo financeiro descomplicado',
		en: 'Uncomplicated financial flow',
		es: 'Flujo financiero sin complicaciones',
		de: 'Unkomplizierter Finanzfluss',
		fr: 'Flux financier simplifié',
	},
	SITE_DESCRIPTION: {
		pt: 'Conteúdos práticos, análises de mercado e dicas estratégicas para otimizar suas finanças pessoais',
		en: 'Practical content, market analysis and strategic tips to optimize your personal finances',
		es: 'Contenido práctico, análisis de mercado y consejos estratégicos para optimizar tus finanzas personales',
		de: 'Praktische Inhalte, Marktanalysen und strategische Tipps zur Optimierung Ihrer persönlichen Finanzen',
		fr: 'Contenu pratique, analyses de marché et conseils stratégiques pour optimiser vos finances personnelles',
	},
	AUTHORS_DESCRIPTION: {
		pt: 'Conheça nossos especialistas em finanças dedicados a trazer insights claros e soluções eficazes para o seu fluxo financeiro',
		en: 'Meet our finance experts dedicated to delivering clear insights and effective solutions for your financial flow',
		es: 'Conoce a nuestros expertos en finanzas dedicados a brindar insights claros y soluciones efectivas para tu flujo financiero',
		de: 'Lernen Sie unsere Finanzexperten kennen, die sich der Bereitstellung klarer Einblicke und effektiver Lösungen für Ihren Finanzfluss widmen',
		fr: 'Rencontrez nos experts financiers dédiés à fournir des insights clairs et des solutions efficaces pour votre flux financier',
	},
	MENU: {
		pt: `<li class="menuItem">
  <a class="itemLink" href="/c/gestao-de-portifolio/">
    <span class="point"></span><span class="itemTitle">Gestão de Portifólio</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/c/investimentos/">
    <span class="point"></span><span class="itemTitle">Investimentos</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/c/cartoes-de-credito/">
    <span class="point"></span><span class="itemTitle">Cartões de Crédito</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/c/emprestimos-pessoais/">
    <span class="point"></span><span class="itemTitle">Empréstimos Pessoais</span>
  </a>
</li>`,

		en: `<li class="menuItem">
  <a class="itemLink" href="/en/c/financial-planning/">
    <span class="point"></span><span class="itemTitle">Financial Planning</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/en/c/investments/">
    <span class="point"></span><span class="itemTitle">Investments</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/en/c/credit-cards/">
    <span class="point"></span><span class="itemTitle">Credit Cards</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/en/c/personal-loans/">
    <span class="point"></span><span class="itemTitle">Personal Loans</span>
  </a>
</li>`,

		es: `<li class="menuItem">
  <a class="itemLink" href="/es/c/planificacion-financiera/">
    <span class="point"></span><span class="itemTitle">Planificación Financiera</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/es/c/inversiones/">
    <span class="point"></span><span class="itemTitle">Inversiones</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/es/c/tarjetas-de-credito/">
    <span class="point"></span><span class="itemTitle">Tarjetas de Crédito</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/es/c/prestamos-personales/">
    <span class="point"></span><span class="itemTitle">Préstamos Personales</span>
  </a>
</li>`,

		de: `<li class="menuItem">
  <a class="itemLink" href="/de/c/finanzplanung/">
    <span class="point"></span><span class="itemTitle">Finanzplanung</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/de/c/investitionen/">
    <span class="point"></span><span class="itemTitle">Investitionen</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/de/c/kreditkarten/">
    <span class="point"></span><span class="itemTitle">Kreditkarten</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/de/c/darlehen/">
    <span class="point"></span><span class="itemTitle">Darlehen</span>
  </a>
</li>`,

		fr: `<li class="menuItem">
  <a class="itemLink" href="/fr/c/planification-financiere/">
    <span class="point"></span><span class="itemTitle">Planification Financière</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/fr/c/investissements/">
    <span class="point"></span><span class="itemTitle">Investissements</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/fr/c/cartes-de-credit/">
    <span class="point"></span><span class="itemTitle">Cartes de Crédit</span>
  </a>
</li>
<li class="menuItem">
  <a class="itemLink" href="/fr/c/prets-personnels/">
    <span class="point"></span><span class="itemTitle">Prêts Personnels</span>
  </a>
</li>`,
	},

	FOOTER_LEFT_MENU: {
		pt: `<a href="/s/sobre/">Quem Somos</a>
<div class="tabbarIcon"> /</div>
<a href="/a/">Especialistas</a>
<div class="tabbarIcon"> /</div>
<a href="/s/contato/">Contato</a>
<div class="tabbarIcon"> /</div>
<a href="/s/termos-de-uso/">Termos de Uso</a>
<div class="tabbarIcon"> /</div>
<a href="/s/politica-de-privacidade/">Política de Privacidade</a>`,
		en: `<a href="/en/s/about-us/">About Us</a>
<div class="tabbarIcon"> /</div>
<a href="/en/a/">Experts</a>
<div class="tabbarIcon"> /</div>
<a href="/en/s/contact/">Contact</a>
<div class="tabbarIcon"> /</div>
<a href="/en/s/terms-of-use/">Terms of Use</a>
<div class="tabbarIcon"> /</div>
<a href="/en/s/privacy-policy/">Privacy Policy</a>`,
		es: `<a href="/es/s/sobre-nosotros/">Sobre Nosotros</a>
<div class="tabbarIcon"> /</div>
<a href="/es/a/">Expertos</a>
<div class="tabbarIcon"> /</div>
<a href="/es/s/contacto/">Contacto</a>
<div class="tabbarIcon"> /</div>
<a href="/es/s/terminos-de-uso/">Términos de Uso</a>
<div class="tabbarIcon"> /</div>
<a href="/es/s/politica-de-privacidad/">Política de Privacidad</a>`,
		de: `<a href="/de/s/uber-uns/">Über Uns</a>
<div class="tabbarIcon"> /</div>
<a href="/de/a/">Experten</a>
<div class="tabbarIcon"> /</div>
<a href="/de/s/kontakt/">Kontakt</a>
<div class="tabbarIcon"> /</div>
<a href="/de/s/nutzungsbedingungen/">Nutzungsbedingungen</a>
<div class="tabbarIcon"> /</div>
<a href="/de/s/datenschutzerklarung/">Datenschutzerklärung</a>`,
		fr: `<a href="/fr/s/a-propos/">À Propos</a>
<div class="tabbarIcon"> /</div>
<a href="/fr/a/">Experts</a>
<div class="tabbarIcon"> /</div>
<a href="/fr/s/contact/">Contact</a>
<div class="tabbarIcon"> /</div>
<a href="/fr/s/conditions-d-utilisation/">Conditions d’Utilisation</a>
<div class="tabbarIcon"> /</div>
<a href="/fr/s/politique-de-confidentialite/">Politique de Confidentialité</a>`,
	},
	FOOTER_RIGHT_MENU: {
		pt: `Aviso: Este site fornece informações financeiras apenas para fins educacionais e informativos. Não constitui aconselhamento personalizado; investimentos envolvem riscos, incluindo possível perda de capital. Desempenho passado não garante resultados futuros. Consulte um profissional antes de investir.`,
		en: `Notice: This site provides financial information for educational and informational purposes only. It is not personalized advice; investments carry risk, including potential capital loss. Past performance does not guarantee future results. Please consult a qualified professional before investing.`,
		es: `Aviso: Este sitio ofrece información financiera solo con fines educativos e informativos. No constituye asesoramiento personalizado; las inversiones implican riesgos, incluida la posible pérdida de capital. El rendimiento pasado no garantiza resultados futuros. Consulte a un profesional antes de invertir.`,
		de: `Hinweis: Diese Website bietet Finanzinformationen nur zu Bildungs- und Informationszwecken. Sie stellt keine persönliche Beratung dar; Investitionen bergen Risiken, einschließlich möglicher Kapitalverluste. Vergangene Wertentwicklungen garantieren keine zukünftigen Ergebnisse. Bitte konsultieren Sie einen Fachmann, bevor Sie investieren.`,
		fr: `Avis : Ce site fournit des informations financières uniquement à des fins pédagogiques et informatives. Il ne constitue pas un conseil personnalisé ; les investissements comportent des risques, y compris la perte de capital. Les performances passées ne garantissent pas les résultats futurs. Veuillez consulter un professionnel avant d’investir.`,
	},
	READ_TIME: {
		en: 'minutes to read',
		es: 'min de lectura',
		pt: 'min de leitura',
		fr: 'minutes de lecture',
		de: 'Minuten zu lesen',
	},
	PRELOADER: {
		LOADING: {
			pt: 'Carregando',
			en: 'Loading',
			es: 'Cargando',
			fr: 'Chargement',
			de: 'Laden',
		},
		SECURE: {
			pt: 'Site Seguro',
			en: 'Secure Site',
			es: 'Sitio Seguro',
			fr: 'Site Sécurisé',
			de: 'Sichere Seite',
		},
	},
	WRITTEN_BY: {
		en: 'By',
		es: 'Por',
		pt: 'Por',
		fr: 'Par',
		de: 'Von',
	},
	POPULAR_CATEGORIES_TITLE: {
		en: 'Popular Categories',
		es: 'Categorías Populares',
		pt: 'Categorias Populares',
		fr: 'Catégories Populaires',
		de: 'Beliebte Kategorien',
	},
	LOGO_URL: 'https://via.placeholder.com/150',
	ALL_RIGHTS: {
		en: `All rights reserved.`,
		pt: `Todos os direitos reservados.`,
		es: `Todos los derechos reservados.`,
		fr: `Tous droits réservés.`,
		de: `Alle Rechte vorbehalten.`,
	},
	SOCIAL_MEDIA: {
		instagram: 'https://www.instagram.com/mejorescreditos/',
		facebook: 'https://www.facebook.com/mejorescreditos/',
	},
	PRO_POINTS_LANGUAGE: {
		pt: 'Pontos Positivos',
		es: 'Puntos Positivos',
		en: 'Pros',
		fr: 'Points Positifs',
		de: 'Vorteile',
	},
	CONS_POINTS_LANGUAGE: {
		pt: 'Pontos Negativos',
		es: 'Puntos Negativos',
		en: 'Cons',
		fr: 'Points Négatifs',
		de: 'Nachteile',
	},
	SIDEBAR_TITLE: {
		pt: 'Últimos Posts',
		en: 'Latest Articles',
		es: 'Últimos Artículos',
		fr: 'Derniers Articles',
		de: 'Neueste Artikel',
	},
	RELATED_TITLE: {
		pt: 'Artigos Relacionados',
		en: 'Related Articles',
		es: 'Artículos Relacionados',
		fr: 'Articles Connexes',
		de: 'Verwandte Artikel',
	},
	CONTACT_DATA: {
		TITLE: {
			pt: 'Contato',
			en: 'Contact',
			es: 'Contacto',
			fr: 'Contact',
			de: 'Kontakt',
		},
		SUBTITLE: {
			pt: 'Entre em Contato com Nossa Equipe',
			en: 'Get in Contact with Our Team',
			es: 'Póngase en Contacto con Nuestro Equipo',
			fr: 'Contactez Notre Équipe',
			de: 'Nehmen Sie Kontakt mit Unserem Team auf',
		},
		TEXT: {
			pt: 'Nos envie uma mensagem usando o formulário abaixo e nós entraremos em contato o mais rápido possível.',
			en: 'Send us a message using the form below and we will contact you as soon as possible.',
			es: 'Envíenos un mensaje mediante el siguiente formulario y nos pondremos en contacto con usted lo antes posible.',
			fr: 'Envoyez-nous un message via le formulaire ci-dessous et nous vous contacterons dès que possible.',
			de: 'Senden Sie uns eine Nachricht über das untenstehende Formular und wir werden Sie so schnell wie möglich kontaktieren.',
		},
		PLACEHOLDER_NAME: {
			pt: 'Nome',
			en: 'Name',
			es: 'Nombre',
			fr: 'Nom',
			de: 'Name',
		},
		PLACEHOLDER_SUBJECT: {
			pt: 'Assunto',
			en: 'Subject',
			es: 'Asunto',
			fr: 'Sujet',
			de: 'Betreff',
		},
		PLACEHOLDER_MESSAGE: {
			pt: 'Mensagem',
			en: 'Message',
			es: 'Mensaje',
			fr: 'Message',
			de: 'Nachricht',
		},
		BUTTON_TEXT: {
			pt: 'Enviar Mensagem',
			en: 'Send Message',
			es: 'Enviar Mensaje',
			fr: 'Envoyer le Message',
			de: 'Nachricht Senden',
		},
		SENDING_MESSAGE: {
			pt: 'Enviando...',
			en: 'Sending...',
			es: 'Envío...',
			fr: 'Envoi...',
			de: 'Senden...',
		},
		SUCCESS_MESSAGE: {
			pt: 'Sua mensagem foi enviada com sucesso!',
			en: 'Your message has been sent successfully!',
			es: '¡Tu mensaje ha sido enviado exitosamente!',
			fr: 'Votre message a été envoyé avec succès !',
			de: 'Ihre Nachricht wurde erfolgreich gesendet!',
		},
		SERVER_ERROR_MESSAGE: {
			pt: 'Ocorreu um erro ao mandar sua mensagem.',
			en: 'An error occurred while sending your message.',
			es: 'Se produjo un error al enviar su mensaje.',
			fr: `Une erreur s'est produite lors de l'envoi de votre message.`,
			de: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten.',
		},
		FORM_ERROR_MESSAGE: {
			pt: 'Houve um problema ao mandar sua mensagem. Por favor tente novamente mais tarde.',
			en: 'There was a problem submitting your message. Please try again later.',
			es: 'Hubo un problema al enviar su mensaje. Inténtelo de nuevo más tarde.',
			fr: `Un problème est survenu lors de l'envoi de votre message. Veuillez réessayer plus tard.`,
			de: 'Beim Senden Ihrer Nachricht ist ein Problem aufgetreten. Bitte versuchen Sie es später erneut.',
		},
		FILL_INPUTS_MESSAGE: {
			pt: 'Preencha todos os campos',
			en: 'Please fill in all fields',
			es: 'Por favor, rellena todos los campos',
			fr: 'Veuillez remplir tous les champs',
			de: 'Bitte füllen Sie alle Felder aus',
		},
	},
	PAGINATION: {
		NEXT: {
			pt: 'Próxima',
			en: 'Next',
			es: 'Seguinte',
			fr: 'Suivant',
			de: 'Nächste',
		},
		PREVIOUS: {
			pt: 'Anterior',
			en: 'Previous',
			es: 'Anterior',
			fr: 'Précédent',
			de: 'Vorherige',
		},
	},
	DATE_FORMATS: {
		en: 'MM/DD/YYYY',
		es: 'DD/MM/YYYY',
		pt: 'DD/MM/YYYY - HH:mm',
		de: 'DD.MM.YYYY',
		fr: 'DD/MM/YYYY',
	},
	AUTHORS_LIST_TITLE: {
		en: 'Authors',
		es: 'Autores',
		pt: 'Conheça Nosso Time',
		de: 'Autoren',
		fr: 'Auteurs',
	},
	AUTHOR_ABOUT_TITLE: {
		pt: 'Sobre o Autor:',
		en: 'About the Author:',
		es: 'Sobre el Autor:',
		fr: "À propos de l'auteur:",
		de: 'Über den Autor:',
	},
	NOT_FOUND: {
		pt: {
			TITLE: 'Página não encontrada',
			TEXT: 'A URL pode estar incorreta ou a página pode não existir mais.',
		},
		en: {
			TITLE: 'Page Not Found',
			TEXT: 'The URL might be incorrect or the page may no longer exist.',
		},
		es: {
			TITLE: 'Página no encontrada',
			TEXT: 'Puede que la URL sea incorrecta o que la página ya no exista.',
		},
		de: {
			TITLE: 'Seite nicht gefunden',
			TEXT: 'Die URL könnte falsch sein oder die Seite existiert nicht mehr.',
		},
		fr: {
			TITLE: 'Page non trouvée',
			TEXT: "L'URL est peut-être incorrecte ou la page n'existe plus.",
		},
	},
	READ_ALSO: {
		pt: 'Leia também...',
		en: 'Read also...',
		es: 'Lee también...',
		de: 'Lies auch...',
		fr: 'Lire aussi...',
	},
	SEARCH: {
		NOT_FOUND: {
			pt: 'Nenhum post encontrado.',
			en: 'No posts found.',
			es: 'No se encontraron publicaciones.',
			de: 'Keine Beiträge gefunden.',
			fr: 'Aucun post trouvé.',
		},
		RESULT: {
			pt: 'Pesquisa',
			en: 'Search',
			es: 'Buscar',
			de: 'Suche',
			fr: 'Recherche',
		},
		ACTION: {
			pt: 'Pesquisar',
			en: 'Search',
			es: 'Buscar',
			de: 'Suche',
			fr: 'Recherche',
		},
		PLACEHOLDER: {
			pt: 'Buscar',
			en: 'Search',
			es: 'Buscar',
			fr: 'Rechercher',
			de: 'Suche',
		},
	},
	READ_MORE_TITLE: {
		pt: 'Leia mais',
		en: 'Read more',
		es: 'Leer más',
		fr: 'Lire la suite',
		de: 'Weiterlesen',
	},
	POSTS_BY: {
		pt: 'Posts de',
		en: 'Posts by',
		es: 'Posts de',
		fr: 'Posts de',
		de: 'Beiträge von',
	},
	CATEGORY: {
		pt: 'Categoria:',
		en: 'Category:',
		es: 'Categoría:',
		fr: 'Catégorie:',
		de: 'Kategorie:',
	},
	REFERENCES_TITLE: {
		pt: 'Referências',
		en: 'References',
		es: 'Referencias',
		fr: 'Références',
		de: 'Referenzen',
	},
	TABLE_OF_CONTENT_TITLE: {
		en: 'Table of Contents',
		es: 'Tabla de Contenidos',
		pt: 'Tabela de Conteúdo',
		de: 'Inhaltsverzeichnis',
		fr: 'Table des Matières',
	},
});
