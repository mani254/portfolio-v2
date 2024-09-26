export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            quickSand: 'Quicksand'
         },
         colors: {
            dark: ({ opacityValue }) => `rgba(45,45,45,${opacityValue})`,
            shaded: ({ opacityValue }) => `rgba(246,245,250,${opacityValue})`,
            'lavendar-gray': "#DBDDE2",
         },
         container: {
            center: true,
            padding: {
               DEFAULT: '1rem',
            }
         },
         screens: {
            '2xl': '1430px',
            '3xl': '1560px'
         },
         fontSize: {
            xs: '14px',
            sm: '16px',
            md: '18px',
            lg: '22px',
            xl: '32px',
            '2xl': '48px',
            '3xl': '58px',
            '4xl': '68px'
         },
      },
   },
   plugins: [],
}
