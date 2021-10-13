module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx,mdx,md}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'tqa-blue-dark': '#022351',
                'tqa-blue-darker': '#011632',
                'tqa-blue-light': '#1441FA',
                'tqa-blue-lighter': '#103AE5',
                'tqa-red': '#FA2A37',
                'tqa-red-darker': '#E52531',
                'tqa-yellow': '#FFB700',
                'tqa-beige': '#FEF8F1',
                'regal-grey': '#EBEBEB',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
