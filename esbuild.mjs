import { build } from 'esbuild'

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  outdir: 'dist',
  sourcemap: false
}).then(function(){
    console.log('', 'Aplication was successfully built')
}).catch(function(err){
    console.error('', err)
})