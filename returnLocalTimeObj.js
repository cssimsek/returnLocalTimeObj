function returnLocalTimeObj(zoneStringsArr){
     var zoneStrings = {}
     zoneStringsArr.forEach(function(zoneStr){
        zoneStrings[""+zoneStr] = (new Date()).toLocaleTimeString("en-us",{timeZone:zoneStr});
     });
     return zoneStrings;
}