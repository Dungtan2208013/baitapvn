function Hotel(name,rooms,booked){
  this.name = name;
  this.rooms =rooms;
  this.booked = booked;
  this.checkAvailability = function(){
    return this.rooms = this.booked;
  };
}

var quayHotel = new Hotel('Quay',40,25);
var parkHotel = new Hotel('Parl',120,77);

var detals1 =  quayHotel.name +'rooms:';
    detals1 += quayHotel.checkAvailability();
    var elHotel1 = document.getElementById('hotel1');
    elHotel1.textContent = detals1;

var detals2 =  parkHotel.name +'rooms:';
    detals2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = detals2;
