<template>
    <div class="section-padding-t90 section-padding-bottom" :style="{backgroundColor: '#f8faff'}">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title fz-32">We help our clients solve business problems, increase <br> visibility, and achieve unexpected results</h2>
            </div>
            <!-- Section Title End -->
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30" v-observe-visibility="{callback: visibilityChanged, once: true}">
                        <div class="col mt-30" data-aos="fade-up" v-for="(item, i) in funFacts" :key="i">
                            <div class="funfact" v-if="isVisible">
                                <div class="number">
                                    <span class="counter">
                                        <countTo :startVal='startVal' :endVal='item.count' :duration='4000'></countTo>
                                    </span>
                                </div>
                                <h6 class="text">{{ item.text }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import countTo from 'vue-count-to';

    import funFacts from "~/data/funfacts.json"
    export default {
        components: {
            countTo
        },
        data () {
            return {
                funFacts,
                startVal: 0,
                isVisible: false
            }
        },
        methods: {
            visibilityChanged (isVisible) {
                this.isVisible = isVisible
            },
        },
    };
</script>
