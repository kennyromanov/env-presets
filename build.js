import esbuild from 'esbuild';

esbuild.build({
    entryPoints: [ 'src/index.ts' ],
    outfile: 'dist/index.js',
    bundle: true,
    platform: 'node',
    format: 'esm',
    sourcemap: false,
    minify: true,
}).catch(() => process.exit(1));
