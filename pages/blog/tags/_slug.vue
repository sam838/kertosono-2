<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne :items="items" title="Find all our latest news by tag" backgroundUrl= "/images/bg/breadcrumb-bg-four.jpg" />

        <!-- Blog Section Start -->
        <div class="section-padding fix">
            <div class="container">
                <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                    <div class="col mt-30" v-for="(blog, index) in tagsBlog" :key="index">
                        <BlogGridItem :blog="blog" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog Section End -->

        <CallToActionTwo />
        <TheFooter />
    </div>
</template>

<script>
    import blogData from "~/data/blog.json"

    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            BlogGridItem: () => import('@/components/BlogGridItem'),
            CallToActionTwo: () => import('@/components/CallToActionTwo'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                blogData,
                slug: this.$route.params.slug,

                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Tags',
                        active: true
                    },
                    {
                        text: this.$route.params.slug,
                        active: true
                    }
                ]
            }
        },

        computed: {
            tagsBlog() {
                return this.blogData.filter(item => item.tags.includes(this.slug))
            }
        },

        head() {
            return {
                title: this.slug
            }
        },
    };
</script>


