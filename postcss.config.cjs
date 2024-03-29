const isProdution = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},

    ...(isProdution ? {
      cssnano: {}
    } : {})
  }
};
