<template>
    <div id="content" class="site-content">
        <div id="primary" class="content-area column two-thirds">
            <main id="main" class="site-main" role="main">
                <article>
                    <header class="entry-header">
                    <h1 class="entry-title">{{ fetchedData.title }}</h1>
                    <div class="entry-meta">
                        <span class="posted-on">
                            <time class="entry-date published">{{ fetchedData.createdAt }}</time>
                        </span>						
                        <span class="comments-link">
                            <a href="#">Leave a comment</a>
                        </span>
                    </div>
                    <div class="entry-thumbnail">					
                        <img :src="fetchedData.image" :alt="fetchedData.preview" @error="(e) => handleErrorImage(e)">
                    </div>
                    </header>
                    <!-- .entry-header -->
                    <div class="entry-content">
                        {{ fetchedData.description }}
                    </div>
                    <!-- .entry-content -->
                    <footer class="entry-footer">
                        <span class="cat-links">
                            Posted in 
                            <a href="#" rel="category tag">audio</a>, 
                            <a href="#" rel="category tag">embed</a>, 
                            <a href="#" rel="category tag">media</a>
                        </span>
                    </footer>
                <!-- .entry-footer -->
                </article>
                <!-- #post-## -->
                <nav class="navigation post-navigation" role="navigation">
                    <h1 class="screen-reader-text">Post navigation</h1>
                    <div class="nav-links">
                        <div class="nav-previous">
                            <a href="#" rel="prev"><span class="meta-nav">←</span> Thanks for watching!</a>
                        </div>
                    </div>
                    <!-- .nav-links -->
                </nav>
                <!-- .navigation -->
                <div id="comments" class="comments-area">
                    <div id="respond" class="comment-respond">
                        <h3 id="reply-title" class="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="/demo-moschino/embed-audio/#respond" style="display:none;">Cancel reply</a></small></h3>
                        <form action="http://www.themepush.com/demo-moschino/wp-comments-post.php" method="post" id="commentform" class="comment-form" novalidate="">
                            <p class="comment-notes">
                                <span id="email-notes">Your email address will not be published.</span> Required fields are marked <span class="required">*</span>
                            </p>
                            <p class="comment-form-comment">
                                <label for="comment">Comment</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" required="required"></textarea>
                            </p>
                            <p class="comment-form-author">
                                <label for="author">Name <span class="required">*</span></label><input id="author" name="author" type="text" value="" size="30" aria-required="true" required="required">
                            </p>
                            <p class="comment-form-email">
                                <label for="email">Email <span class="required">*</span></label><input id="email" name="email" type="email" value="" size="30" aria-describedby="email-notes" aria-required="true" required="required">
                            </p>
                            <p class="comment-form-url">
                                <label for="url">Website</label><input id="url" name="url" type="url" value="" size="30">
                            </p>
                            <p class="form-submit">
                                <input name="submit" type="submit" id="submit" class="submit" value="Post Comment"><input type="hidden" name="comment_post_ID" value="90" id="comment_post_ID">
                                <input type="hidden" name="comment_parent" id="comment_parent" value="0">
                            </p>
                        </form>
                    </div>
                    <!-- #respond -->
                </div>
            <!-- #comments -->
            </main>
            <!-- #main -->
        </div>
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
                <aside id="text-6" class="widget widget_text">
                    <h4 class="widget-title">Like us on Facebook</h4>
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

import mixinErrorImage from "@/mixins/errorImage";

export default {
    name: 'BlogPageId',
    asyncData({ route }) {
      return http.get("posts/" + route.params.id).then((res) => {
        return { fetchedData: res.data };
      });
    },
    mixins: [mixinErrorImage]
}
</script>