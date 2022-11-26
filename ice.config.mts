import {defineConfig} from '@ice/app';

export default defineConfig(() => ({
    outputDir: 'dist',

    ssr: true,
    ssg: false,

    splitChunks: false,

    hash: false,

    syntaxFeatures: {
        exportDefaultFrom: true
    },

    dropLogLevel: 'warn'
}));