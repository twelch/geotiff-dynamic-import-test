import geotiff from "geotiff"
(async function loadTiff() {
    const tiff = await geotiff.fromUrl('http://localhost:8082/octocorals.tif');
    console.log('tiff', tiff)
})()