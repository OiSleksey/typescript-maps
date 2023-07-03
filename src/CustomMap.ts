export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(mapDivId: any) {
    this.googleMap = new google.maps.Map(mapDivId, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
