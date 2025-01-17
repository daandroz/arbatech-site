module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Asegúrate de incluir todos los archivos que uses
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#BB86FC',  // Morado
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false, // Si usas container de Tailwind y no lo necesitas, desactívalo.
  },
}
