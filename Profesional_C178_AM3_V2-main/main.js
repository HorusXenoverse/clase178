var latitude = 22.7868542
var  longitude = 88.3643296

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

var newMap = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 16,
})

newMap.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {eneableHighAccuracy: true},
        trackUserLocation: true
    })
)

newMap.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
    }),
    "top-left"
)