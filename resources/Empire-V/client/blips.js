import alt from 'alt-client';
import * as natives from 'natives';


alt.onServer('loadBlips', () => {
    alt.log('Loading blips');
    alt.emitServer('loadBlips');
});


alt.onServer('loadMarkers', () => {
    alt.log('Loading markers');
    alt.emitServer('loadMarkers');
});




alt.onServer('addBlip', (name, sprite, color, x, y, z) => {
   const blip = new alt.PointBlip(x, y, z);
    blip.sprite = sprite;
    blip.color = color;
    blip.name = name;
    blip.scale = 0.7;
    blip.shortRange = true;

});


alt.onServer('addColeshape', (name, color, sprite, x, y, z) => {
    const blip = new alt.PointBlip(x, y, z);
    blip.sprite = sprite;
    blip.color = color;
    blip.name = name;
    blip.scale = 0.7;
    blip.shortRange = true;
    
    const coleshape = new alt.ColshapeCylinder(x, y, z, 1, 1);
    coleshape.name = name;
    coleshape.color = color;
    coleshape.sprite = sprite;
    coleshape.scale = 0.7;
    coleshape.shortRange = true;
    coleshape.isEntityInside = false;
    coleshape.isPlayerInside = false;
    coleshape.isVehicleInside = false;
    coleshape.isPickupInside = false;
    coleshape.isBlipInside = false;
    coleshape.isMarkerInside = false;
    coleshape.isColshapeInside = false;
    coleshape.isPedInside = false;
    coleshape.isObjectInside = false;    
});

alt.onServer('addMarker', (name, sprite, color, x, y, z) => {
    const marker = new alt.PointBlip(x, y, z);
    marker.sprite = sprite;
    marker.color = color;
    marker.name = name;
    marker.scale = 0.7;
    marker.shortRange = true;

});

alt.onServer('deleteBlip', (name) => {
    alt.removeBlip(name);
});

alt.onServer('deleteMarker', (name) => {
    alt.removeBlip(name);
});
