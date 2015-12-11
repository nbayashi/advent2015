var viewer = new Cesium.Viewer('cesiumContainer');
var line1 = viewer.entities;
line1.add({
     polyline : {
         positions : Cesium.Cartesian3.fromDegreesArrayHeights([
 139.632509 , 35.68453 , 200000 ,
-122.555284 , 38.058506 , 2000001 ,
 20.28 ,-39.2839 , 9000 
]),
         width : 10,
         material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.GREEN)
     }});
viewer.zoomTo(viewer.entities);
