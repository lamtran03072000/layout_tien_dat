/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xl: { max: '1279px' }, // Màn hình nhỏ hơn 1280px
        lg: { max: '1023px' }, // Màn hình nhỏ hơn 1024px
        md: { max: '767px' }, // Màn hình nhỏ hơn 768px
        sm: { max: '639px' }, // Màn hình nhỏ hơn 640px
      },
      screens: {
        // '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1024px', min: '640px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '639px' },
        // // => @media (max-width: 992px) { ... }
        // lg: { max: '992px', min: '768px' },
        // // => @media (max-width: 992px) { ... }

        // md: { max: '767px' },
        // // => @media (max-width: 767px) { ... }

        // sm: { max: '639px' },
        // // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        ul: {
          listStyleType: theme('listStyleType.disc'), // Ví dụ: sử dụng dấu chấm cho danh sách
          paddingLeft: theme('padding.12'),
        },
        li: {
          marginBottom: theme('spacing.1'), // Khoảng cách giữa các mục li
          // Thêm các styles khác bạn muốn áp dụng mặc định
        },
      });
    }),
  ],
};
