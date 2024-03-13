import { build } from 'esbuild'

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  outdir: 'dist',
  sourcemap: false,
  platform: 'node'
}).then(function(){
    console.log('', 'Aplication was successfully built')
}).catch(function(err){
    console.error('', err)
})