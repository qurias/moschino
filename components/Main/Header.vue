<template>
    <header id="masthead" class="site-header">
		<div class="site-branding">
			<h1 class="site-title"><a href="index.html" rel="home">Moschino</a></h1>
			<h2 class="site-description">Minimalist Portfolio HTML Template</h2>
		</div>
		<nav id="site-navigation" class="main-navigation">
            <button class="menu-toggle">Menu</button>
            <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
            <div class="menu-menu-1-container">
                <ul id="menu-menu-1" class="menu">
                    <li v-for="link of links" :key="link.id">

                        <nuxt-link :to="link.url">
                            {{ link.name }}
                        </nuxt-link>

                        <template v-if="link.submenu?.length">

                            <ul class="sub-menu">
                                
                                <li v-for="url of link.submenu" :key="url.id">
                                    
                                    <nuxt-link :to="url.url">
                                        {{ url.name }}
                                    </nuxt-link>

                                </li>

                            </ul>

                        </template>

                    </li>
                </ul>
            </div>
		</nav>
	</header>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            links: [
                {
                    id: 1,
                    name: 'Home',
                    url: '/'
                },
                {
                    id: 2,
                    name: 'About',
                    url: '/about'
                },
                {
                    id: 3,
                    name: 'Shop',
                    url: '/shop'
                },
                {
                    id: 4,
                    name: 'Blog',
                    url: '/blog'
                },
                // {
                //     id: 5,
                //     name: 'Elements',
                //     url: '/elements'
                // },
                {
                    id: 6,
                    name: 'Pages',
                    url: '#',
                    submenu: [
                        {
                            id: 8,
                            name: 'Portfolio Item',
                            url: '/portfolio-item'
                        },
                        {
                            id: 9,
                            name: 'Blog Article',
                            url: '/blog-single'
                        },
                        {
                            id: 10,
                            name: 'Shop Item',
                            url: '/shop-single'
                        },
                        {
                            id: 11,
                            name: 'Portfolio Category',
                            url: '/portfolio-category'
                        }
                    ]
                },
                {
                    id: 7,
                    name: 'Contact',
                    url: '/contact'
                },
            ],
        }
    }
}

</script>