var viewer = new Cesium.Viewer('cesiumContainer');
var line1 = viewer.entities;
line1.add({
     polyline : {
         positions : Cesium.Cartesian3.fromDegreesArrayHeights([
-75 , 35 , 200000 ,
 123 , 45 , 3000000 ,
 135 , 40 , 0 ,
 20 , 80 , 40000000 
]),
         width : 5,
         material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.#00ff7f)
     }});
