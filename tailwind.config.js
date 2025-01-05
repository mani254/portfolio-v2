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
            'dark-1': ({ opacityValue }) => `rgba(52,52,52,${opacityValue})`,
            shaded: ({ opacityValue }) => `rgba(246,245,250,${opacityValue})`,
            'lavendar-gray': "#DBDDE2",
         },

         container: {
            center: true,
            padding: {
               DEFAULT: '5px',
            }
         },
         screens: {
            '2xl': '1430px',
            '3xl': '1560px'
         },
         fontSize: {
            xxs: '14px',
            xs: '15px',
            sm: '18px',
            md: '22px',
            lg: '28px',
            xl: '32px',
            '2xl': '40px',
            '3xl': '58px',
            '4xl': '68px'
         },
      },
   },
   plugins: [],
}
