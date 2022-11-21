<template>
    <div class="comment-form-wrap">
        <div class="comment-respond">
            <h3 class="title">Comments</h3>
            <Disqus shortname="admin" />
        </div>
    </div>
</template>

<script>
    import { Disqus } from 'vue-disqus';

    export default {
        components: {
            Disqus
        }
    };
</script>