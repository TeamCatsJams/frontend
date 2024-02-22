import { defineConfig } from 'vite'
import Unfonts from 'unplugin-fonts/vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),Unfonts({
    custom:{
      display:'swap',
      families:{
        'Product Sans':{src: './assets/fonts/ProductSans*',
        transform(font) {
          if (font.basename === 'ProductSans-Bold')
            font.weight = 700

          return font
        },
      },
      }
    }
  })],
})
