<template>
    <div id="page">
      <div class="container">
        <Header />
        <Nuxt />
      </div>
      <Footer />
    </div>
  </template>
  
<script>

    import Header from "@/components/Main/Header.vue"

    import Footer from "@/components/Main/Footer.vue"

    export default {
        name: "DefaultLayout",
        components: {
            Header,
            Footer
        }
    };

</script>