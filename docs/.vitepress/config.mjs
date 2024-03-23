import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fabrica Abierta",
  description: "Conocimiento y herramientas libres para producir. Por una economía democrática y solidaria. Tutoriales, herramientas, y más.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Formalización',
        items: [
          { text: '¿Cuando necesito formalizarme?', link: '/formalizacion/index' },
          { text: 'Paso 1: Crear una empresa', link: '/formalizacion/empresa-en-un-dia' },
          { text: 'Paso 2: Servicio de Impuestos Internos', link: '/formalizacion/inicio-de-actividades' },
          { text: 'Paso 3: Patente Comercial', link: '/formalizacion/patente-comercial' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    themeConfig: {
      search: {
        provider: 'local'
      }
    }

  }
})
