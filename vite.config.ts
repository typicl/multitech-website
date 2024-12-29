import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    base: '/multitech-website/',
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: ['src'],
          silenceDeprecations: ['import', 'legacy-js-api'],
          additionalData: `
          @use 'sass:color';
          @import "./src/styles/_base-refs.scss";
          `,
        },
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
            process: true,
          }),
        ],
      },
      include: [],
    },
    plugins: [
      ViteImageOptimizer(),
      nodePolyfills({
        include: ['http', 'https'],
      }),
      react(),
      svgr(),
      tsconfigPaths(),
    ],
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },
  };
});
