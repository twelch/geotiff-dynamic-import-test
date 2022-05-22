// See https://github.com/TypeStrong/ts-node/discussions/1290
import {dynamicImport} from 'tsimportlib';

(async function loadTiff() {
  // const geotiff = await import('geotiff');
  const geotiff = await dynamicImport('geotiff', module) as typeof import('geotiff');
  const tiff = await geotiff.fromUrl('http://localhost:8082/octocorals.tif');
  console.log('tiff', tiff)
})()

