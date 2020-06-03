<template>
    <div id="app" class="min-h-screen m-0 bg-background">
        <header class="bg-primary">
            <picture>
                <source srcset="/assets/images/bg-header-desktop.svg" media="(min-width: 768px)" />
                <img
                    src="/assets/images/bg-header-mobile.svg"
                    alt="Grayish Teal background in header"
                />
            </picture>
        </header>

        <div
            class="grid row-gap-10 p-8 md:row-gap-6 lg:row-gap-6 grid-col-1 md:py-16 md:px-20 lg:px-48 "
        >
            <transition name="fade">
                <div
                    id="filterOptions"
                    class="flex flex-row items-center px-2 py-4 -mt-16 bg-white rounded-md md:-mt-24 md:px-6 md:py-4 shadow-cyan-xl"
                    v-show="filters.length > 0"
                >
                    <div class="flex flex-row flex-wrap items-center">
                        <template v-for="(filter, index) in filters">
                            <Tag :key="index" :title="filter" :deletable="true" />
                        </template>
                    </div>

                    <button
                        class="px-4 py-2 ml-auto text-sm font-bold text-gray-cyan hover:underline hover:text-primary"
                        @click="clearFilters"
                    >
                        Clear
                    </button>
                </div>
            </transition>
            <template v-for="(job, index) in jobs">
                <JobCard :job="job" :key="index" />
            </template>
        </div>
    </div>
</template>

<script>
    import JobCard from './components/JobCard';
    import Tag from './components/Tag';

    export default {
        name: 'App',
        components: {
            JobCard,
            Tag,
        },
        data() {
            return {
                jobs: [{
                        id: 1,
                        company: 'Photosnap',
                        logo: 'photosnap.svg',
                        new: true,
                        featured: true,
                        position: 'Senior Frontend Developer',
                        role: 'Frontend',
                        level: 'Senior',
                        postedAt: '1d ago',
                        contract: 'Full Time',
                        location: 'USA Only',
                        languages: ['HTML', 'CSS', 'JavaScript'],
                        tools: [],
                    },
                    {
                        id: 2,
                        company: 'Manage',
                        logo: 'manage.svg',
                        new: true,
                        featured: true,
                        position: 'Fullstack Developer',
                        role: 'Fullstack',
                        level: 'Midweight',
                        postedAt: '1d ago',
                        contract: 'Part Time',
                        location: 'Remote',
                        languages: ['Python'],
                        tools: ['React'],
                    },
                    {
                        id: 3,
                        company: 'Account',
                        logo: 'account.svg',
                        new: true,
                        featured: false,
                        position: 'Junior Frontend Developer',
                        role: 'Frontend',
                        level: 'Junior',
                        postedAt: '2d ago',
                        contract: 'Part Time',
                        location: 'USA Only',
                        languages: ['JavaScript'],
                        tools: ['React', 'Sass'],
                    },
                    {
                        id: 4,
                        company: 'MyHome',
                        logo: 'myhome.svg',
                        new: false,
                        featured: false,
                        position: 'Junior Frontend Developer',
                        role: 'Frontend',
                        level: 'Junior',
                        postedAt: '5d ago',
                        contract: 'Contract',
                        location: 'USA Only',
                        languages: ['CSS', 'JavaScript'],
                        tools: [],
                    },
                    {
                        id: 5,
                        company: 'Loop Studios',
                        logo: 'loop-studios.svg',
                        new: false,
                        featured: false,
                        position: 'Software Engineer',
                        role: 'FullStack',
                        level: 'Midweight',
                        postedAt: '1w ago',
                        contract: 'Full Time',
                        location: 'Worldwide',
                        languages: ['JavaScript'],
                        tools: ['Ruby', 'Sass'],
                    },
                    {
                        id: 6,
                        company: 'FaceIt',
                        logo: 'faceit.svg',
                        new: false,
                        featured: false,
                        position: 'Junior Backend Developer',
                        role: 'Backend',
                        level: 'Junior',
                        postedAt: '2w ago',
                        contract: 'Full Time',
                        location: 'UK Only',
                        languages: ['Ruby'],
                        tools: ['RoR'],
                    },
                    {
                        id: 7,
                        company: 'Shortly',
                        logo: 'shortly.svg',
                        new: false,
                        featured: false,
                        position: 'Junior Developer',
                        role: 'Frontend',
                        level: 'Junior',
                        postedAt: '2w ago',
                        contract: 'Full Time',
                        location: 'Worldwide',
                        languages: ['HTML', 'JavaScript'],
                        tools: ['Sass'],
                    },
                    {
                        id: 8,
                        company: 'Insure',
                        logo: 'insure.svg',
                        new: false,
                        featured: false,
                        position: 'Junior Frontend Developer',
                        role: 'Frontend',
                        level: 'Junior',
                        postedAt: '2w ago',
                        contract: 'Full Time',
                        location: 'USA Only',
                        languages: ['JavaScript'],
                        tools: ['Vue', 'Sass'],
                    },
                    {
                        id: 9,
                        company: 'Eyecam Co.',
                        logo: 'eyecam-co.svg',
                        new: false,
                        featured: false,
                        position: 'Full Stack Engineer',
                        role: 'Fullstack',
                        level: 'Midweight',
                        postedAt: '3w ago',
                        contract: 'Full Time',
                        location: 'Worldwide',
                        languages: ['JavaScript', 'Python'],
                        tools: ['Django'],
                    },
                    {
                        id: 10,
                        company: 'The Air Filter Company',
                        logo: 'the-air-filter-company.svg',
                        new: false,
                        featured: false,
                        position: 'Front-end Dev',
                        role: 'Frontend',
                        level: 'Junior',
                        postedAt: '1mo ago',
                        contract: 'Part Time',
                        location: 'Worldwide',
                        languages: ['JavaScript'],
                        tools: ['React', 'Sass'],
                    },],
            };
        },
        computed: {
            filters() {
                return this.$store.state.filters;
            },
        },
        methods: {
            clearFilters() {
                this.$store.commit('removeAllFilters');
            },
        },
    };
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.2s ease-in-out;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }
</style>
