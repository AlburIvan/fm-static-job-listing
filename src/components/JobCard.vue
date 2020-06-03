<template>
    <div
        class="relative flex flex-row bg-white rounded-md shadow-cyan-xl"
        v-show="showIfFilterEnabled"
    >
        <div class="w-1 rounded-l-full bg-primary" v-show="job.featured"></div>
        <div class="flex flex-col w-full px-4 md:p-6 md:flex-row md:items-center">
            <img
                class="w-12 h-12 -mt-6 rounded-full md:h-20 md:w-20 md:mt-0 md:mr-6"
                :src="companyIcon"
                :alt="[job.company, ' company logo']"
            />

            <div class="md:mr-6">
                <div class="flex flex-row items-center mt-2 space-x-4">
                    <p class="text-xs font-bold text-primary">{{ job.company }}</p>
                    <span
                        class="px-2 py-1 text-xs font-bold text-white uppercase rounded-full bg-primary"
                        v-show="job.new"
                    >
                        New!
                    </span>
                    <span
                        class="px-2 py-1 text-xs font-bold text-white uppercase rounded-full bg-dark-grayish-cyan"
                        v-show="job.featured"
                    >
                        Featured
                    </span>
                </div>
                <p
                    class="my-1 font-bold transition-colors duration-200 ease-in-out cursor-pointer text-dark-grayish-cyan font-spartan hover:text-primary"
                >
                    {{ job.position }}
                </p>
                <div class="flex flex-row items-center my-2 text-xs text-gray-cyan">
                    {{ job.postedAt }}
                    <small class="mx-2">●</small>
                    {{ job.contract }}
                    <small class="mx-2">●</small>
                    {{ job.location }}
                </div>
            </div>

            <hr class="my-3 border-gray-500 border-solid border-1 md:hidden" />
            <div class="flex flex-row flex-wrap my-4 md:ml-auto">
                <Tag v-for="(tag, index) in orderedTags" :key="index" :title="tag" />
            </div>
        </div>
    </div>
</template>

<script>
    import Tag from './Tag';

    export default {
        name: 'JobCard',
        components: { Tag },
        props: ['job'],
        computed: {
            companyIcon() {
                return `/assets/images/${this.job.logo}`;
            },
            orderedTags() {
                return [this.job.role, this.job.level, ...this.job.languages, ...this.job.tools];
            },
            showIfFilterEnabled() {
                if (this.$store.state.filters.length === 0) return true;

                return this.$store.state.filters.every((element) =>
                    this.orderedTags.includes(element)
                );
            },
        },
    };
</script>
