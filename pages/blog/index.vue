<template>
        <div id="content" class="site-content">
        <div id="primary" class="content-area column two-thirds">
            <main id="main" class="site-main" role="main">
            <div class="grid bloggrid">
                        
                <BlogCard 
                
                    v-for="blog of paginationArray"
                    :key="blog.id"
                    :blog="blog"
                
                />

            </div>
            <div class="clearfix">
            </div>
            <nav class="pagination">
                <pagination v-model="page" :records="fetchedData?.length" @paginate="handleClickPagination" :options="options" :per-page="10"/>
            </nav>
            </main>
            <!-- #main -->
        </div>
        <!-- #primary -->
        
        <div id="secondary" class="column third">
            <div id="sidebar-1" class="widget-area" role="complementary">
            
                <aside id="text-5" class="widget widget_text">
                <h4 class="widget-title">About Me</h4>
                <div class="textwidget">
                    <p>
                        <img src="http://www.themepush.com/demo-hypnosa/wp-content/uploads/sites/9/2015/09/avatar5.png" class="alignleft" style="width:80px;border-radius:50%;margin-bottom:0;"> I'm a professional photographer for 10 years. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                </aside>
                
                <aside id="recent-posts-2" class="widget widget_recent_entries">
                <h4 class="widget-title">Recent Posts</h4>
                <ul>
                    <li>
                    <a href="blog-single.html">Somewhere in time</a>
                    </li>
                    <li>
                    <a href="blog-single.html">Thanks for watching!</a>
                    </li>
                    <li>
                    <a href="blog-single.html/">Who could have thought?</a>
                    </li>
                    <li>
                    <a href="blog-single.html">Text Alignement</a>
                    </li>
                    <li>
                    <a href="blog-single.html">HTML Tags and Formatting</a>
                    </li>
                </ul>
                </aside>
                
                <aside id="recent-comments-2" class="widget widget_recent_comments">
                <h4 class="widget-title">Recent Comments</h4>
                <ul id="recentcomments">
                    <li class="recentcomments"><span>ThemePush</span> on <a href="blog-single.html">Male T-Shirt</a></li>
                    <li class="recentcomments"><span>ThemePush</span> on <a href="blog-single.html">Male T-Shirt</a></li>
                    <li class="recentcomments"><span><a href="#" rel="external nofollow" class="url">Mr WordPress</a></span> on <a href="blog-single.html">Thanks for watching!</a></li>
                    <li class="recentcomments"><span>Maria</span> on <a href="blog-single.html">Gray Blouse</a></li>
                    <li class="recentcomments"><span>Maria</span> on <a href="blog-single.html">Retro Dress</a></li>
                </ul>
                </aside>
                
            </div>
            <!-- .widget-area -->
        </div>
        <!-- #secondary -->
    </div>
</template>
  
<script>

  import http from "@/services/http-common";

  import BlogCard from "@/components/Blog/BlogCard"

  export default {
    name: 'BlogPage',
    data() {
        return {
            page: this.$route.query.page ? this.$route.query.page : 1,
            options : {
                chunk: 5,
                totalPages: 15,
                texts: {
                    count: '',
                    edgeNavigation: false
                }
            },
            paginationArray: []
       }    
    },
    components: {
        BlogCard,
    },
    asyncData({ route }) {
      return http.get("posts").then((res) => {
        return { fetchedData: res.data };
      });
    },
    methods: {
        handleClickPagination(e) {
            this.updatePaginationArray()
        },
        updatePaginationArray() {
            this.paginationArray = this.fetchedData.slice((this.page == 1 ? 0 : this.page * 10 - 10), 10 * this.page)
            this.$router.push({ path: '/blog', query: { page: this.page }})

            if (process.browser){
                window?.scrollTo(0, 0)
            }
        }
    },
    created() {
        this.updatePaginationArray()
    }
  }
</script>
  