var map = L.map("map").setView([51.505, -0.09], 13); // 51 deh al lat(خطوط الطول) w al 0.9 deh al lng(دوائر العرض) m3mola london by defualt
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// let lng = 31.23147; // خطوط الطول longitude
// let lat = 30.06041; // دوائر العرض latitude
let ip_Address;
let btn = document.getElementById("btn");
let IP_Address = document.getElementById("IP_Address");
let Location2 = document.getElementById("Location");
let Timezone = document.getElementById("Timezone");
let ISP = document.getElementById("ISP");
btn.addEventListener("click", (e) => {
  e.preventDefault(); //34an me3mlsh refresh le page
  ip_Address = document.getElementById("ip_Address").value;
  // https://geo.ipify.org/api/v2/country,city?apiKey=at_yKBIdOGyRAyJ4f2tqenAPLlKs2Ald&ipAddress=197.161.125.121
  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_yKBIdOGyRAyJ4f2tqenAPLlKs2Ald&ipAddress=${ip_Address}`
  )
    .then((data) => {
      let x = data.json(); //34an yrg3 aldata zy ma hya
      // console.log(x);
      // console.log(data);
      return x;
    })
    .then((x) => {
      // console.log(x);
      // console.log(x.location.city);
      IP_Address.innerHTML = x.ip;
      Location2.innerHTML = x.location.city;
      Timezone.innerHTML = x.location.timezone;
      ISP.innerHTML = x.isp;
      map.setView([x.location.lat, x.location.lng], 13); // deh 34an y8er al map bdl ma hya 3la london by defualt hyro7 3la almkan bta3 al ip
      document.getElementById("ip_Address").value = ""; //yfdy al search bar
    })
    .catch(() => {
      console.log("failed to reload data");
    });
});
