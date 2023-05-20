<template>
    <article>
        <header class="entry-header">
            <h1 class="entry-title">

                <a
                
                    :href="`/blog/${blog.id}`"
                    rel="bookmark"
                    target="_blank"

                >

                    {{  blog.title }}

                </a>

            </h1>
            <div class="entry-meta">
                <span class="posted-on"><time class="entry-date published">{{ blog.createdAt }}</time></span>						
                <span class="comments-link"><a href="#">Leave a comment</a></span>
            </div>
            <div class="entry-thumbnail">						
                <img :src="blog.image" :alt="blog.preview" @error="(e) => handleErrorImage(e)">
            </div>
        </header>
        <div class="entry-summary">
            <p>
                {{ blog.description }}
            </p>
        </div>
        <footer class="entry-footer">
            <span class="cat-links">
            Posted in <a href="#" rel="category tag">audio</a>, <a href="#" rel="category tag">embed</a>, <a href="#" rel="category tag">media</a>
            </span>
        </footer>
    </article>
</template>

<script>

import mixinErrorImage from "@/mixins/errorImage";

export default {
    name: 'BlogCard',
    props: {
        blog: {
            type: Object
        }
    },
    mixins: [mixinErrorImage],
}
</script>