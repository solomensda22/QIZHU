/** @type {import('tailwindcss').Config} */
module.exports = {
  //文件路径根据自己项目来定，可能是 ./src/**/*.{js,ts,jsx,tsx}
  purge: [
    "./src/**/*.{js,jsx,vue}",// 需要进行 Purge 的文件路径，可以是 JS、JSX、Vue 文件
    "./public/index.html"// 需要进行 Purge 的 HTML 文件路径
  ],
  darkMode: false, // 暗色模式配置，可以是 false、'media' 或 'class'
  theme: {
    extend: {} // 扩展 Tailwind CSS 主题配置
  },
  variants: {}, // 变体配置，用于定制生成的类名变体
  plugins: []// 插件配置，用于启用额外的 Tailwind 插件
  
};
