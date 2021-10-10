module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx,mdx,md}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                indigo: {
                    850: '#022351',
                    950: '#011632'
                },
                blue: {
                    850: '#1441FA',
                    950: '#103AE5'
                },
                red: {
                    850: '#FA2A37',
                    950: '#E52531'
                },
                yellow: {
                    850: '#FFB700'
                },
                gray: {
                    850: '#FEF8F1',
                    950: '#EBEBEB'
                }
                // 'tqa-blue-dark': '#022351',
                // 'tqa-blue-darker': '#011632',
                // 'tqa-blue-light': '#1441FA',
                // 'tqa-blue-lighter': '#103AE5',
                // 'tqa-red': '#FA2A37',
                // 'tqa-red-darker': '#E52531',
                // 'tqa-yellow': '#FFB700',
                // 'tqa-beige': '#FEF8F1',
                // 'regal-grey': '#EBEBEB',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};