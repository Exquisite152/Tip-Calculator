if(window.navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        const{latitude, longtitude} =position.coords;
        console.log(latitude, longtitude);
    }, err => {
        console.error(err);
    });
}

// navigator.geolocation.getCurrentPosition(
//     successCallback,
//     failureCallback
// );