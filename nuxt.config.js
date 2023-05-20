export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Moschino | Minimalist Free HTML Portfolio by WowThemes.net',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	  { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Oswald:400,500,700%7CRoboto:400,500,700%7CHerr+Von+Muellerhoff:400,500,700%7CQuattrocento+Sans:400,500,700",      },
    ],
	
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	"@/assets/styles/styles.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
	{ src: "~/plugins/pagination", mode: "client" }, 
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
	"@nuxtjs/axios", 
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
