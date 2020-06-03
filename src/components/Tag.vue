<template>
    <div
        :class="[
            'flex',
            'flex-row',
            'justify-between',
            'mb-3',
            'mr-4',
            'transition-colors',
            'duration-300',
            'ease-in-out',
            'rounded-sm',
            'cursor-pointer',
            'lg:mb-0',
            'bg-background',
            'text-primary',
            'select-none',
            tagClasses,
        ]"
        @click="addFilter"
    >
        <p class="px-2 py-1 text-sm font-bold">{{ title }}</p>
        <span
            class="flex flex-row items-center p-2 transition-colors duration-300 ease-in-out rounded-r-sm bg-primary hover:bg-dark-grayish-cyan"
            v-show="deletable"
            @click.stop="removeFilter"
        >
            <img class="w-3 h-3" src="/assets/icons/icon-remove.svg" />
        </span>
    </div>
</template>

<script>
    export default {
        name: 'Tag',
        props: ['title', 'deletable'],
        computed: {
            tagClasses() {
                return {
                    'hover:bg-primary': !this.deletable,
                    'hover:text-white': !this.deletable,
                };
            },
        },
        methods: {
            addFilter(event) {
                if (this.deletable) return;

                this.$store.commit('filterBy', this.title);
            },
            removeFilter(event) {
                this.$store.commit('removeFilter', this.title);
            },
        },
    };
</script>
