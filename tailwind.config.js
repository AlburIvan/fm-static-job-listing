module.exports = {
    purge: ['./src/**/*.html', './src/**/*.vue'],
    theme: {
        fontFamily: {
            display: ['Spartan', 'sans-serif'],
            body: ['Spartan', 'sans-serif'],
        },
        screens: {
            sm: '375px',
            md: '648px',
            lg: '1440px',
        },
        boxShadow: {
            'cyan-xl': '0 25px 50px -12px rgba(91, 164, 164, .20)',
        },
        extend: {
            colors: {
                primary: 'hsl(180, 29%, 50%)',
                background: 'hsl(180, 52%, 96%)',
                'gray-cyan': 'hsl(180, 8%, 52%)',
                'dark-grayish-cyan': 'hsl(180, 14%, 20%)',
            },
        },
    },
    variants: {},
    plugins: [],
};
