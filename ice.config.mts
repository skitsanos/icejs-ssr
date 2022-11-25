import {defineConfig} from '@ice/app';

export default defineConfig(() => ({
    outputDir: 'dist',

    ssr: true,

    polyfill: false,

    syntaxFeatures: {
        exportDefaultFrom: true
    },
    transform: (code, id) =>
    {
        if (id.includes('src/pages') && id.endsWith('.js'))
        {
            return code;
        }
        return null;
    },
    /*    webpack: (webpackConfig) =>
        {
            if (process.env.NODE_ENV !== 'test')
            {
                //webpackConfig.plugins?.push(new SpeedMeasurePlugin());
            }
            return webpackConfig;
        },*/
    dropLogLevel: 'warn'

}));