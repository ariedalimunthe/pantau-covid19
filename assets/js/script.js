$(document).ready(function () {
  getKasus();
  getProvinsi();
  getProvinsi2();
  getSembuh();
  getMeninggal();
  getIndonesia();
  
});


function getKasus() {
  $.ajax({
    url: 'https://api.kawalcorona.com/positif/',
    success: function (data) {
      try {
        var json = data;

        var nama = json.name;
        var jumlah = json.value;

        $("#nama").html(nama);
        $("#jumlah").html(jumlah + ' orang');


      } catch (e) {
        alert('Gagal Mendapatkan data');
      }
    },
    erorr: function (resp) {

    }
  })
}

function getMeninggal() {
  $.ajax({
    url: 'https://api.kawalcorona.com/meninggal/',
    success: function (data) {
      try {
        var json = data;

        var meinggal = json.name;
        var total = json.value;

        $("#meninggal").html(meinggal);
        $("#totalmeninggal").html(total + " Jiwa");
      } catch (e) {
        alert('Gagal Mendapatkan data');
      }
    },
    erorr: function (resp) {

    }
  })
}

function getSembuh() {
  $.ajax({
    url: 'https://api.kawalcorona.com/sembuh/',
    success: function (data) {
      try {
        var json = data;

        var meinggal = json.name;
        var total = json.value;

        $("#sembuh").html(meinggal);
        $("#totalsembuh").html(total + ' Jiwa');
      } catch (e) {
        alert('Gagal Mendapatkan data');
      }
    },
    erorr: function (resp) {

    }
  })
}

function getIndonesia() {
  $.ajax({
    url: 'https://coronavirus-19-api.herokuapp.com/countries/indonesia',


    success: function (data) {
      try {

        var json = data;
        var kasus = json.cases;
        var positif = json.active;
        var imeninggal = json.deaths;
        var isembuh = json.recovered;
        var negara = json.country;
        var today = json.todayDeaths;
        var today2 = json.todayCases;

        $("#kasus").html(kasus);
        $("#ipositif").html(positif);
        $("#imeninggal").html(imeninggal);
        $("#isembuh").html(isembuh);
        $("#negara").html(negara);
        $("#today").html(today);
        $("#kasushari").html(today2);
      } catch (e) {
        alert('Gagal Mendapatkan data');
      }
    },
    erorr: function (resp) {

    }
  })
}

function getProvinsi() {
  $.ajax({
    url: 'https://coronavirus-19-api.herokuapp.com/countries',
    success: function (data) {
      try {
        var json = data;

        if (json.length > 0) {
          var html = [];

          var i;

          for (i = 0; i < json.length; i++) {
            var dataNegara = json[i];

            var namaNegara = dataNegara.country;

            if (namaNegara === 'Indonesia') {
              var kasus = dataNegara.cases;
              var positif = dataNegara.active;
              var mati = dataNegara.deaths;
              var sembuh = dataNegara.recovered;
              $('#kasusi').html(kasus)
              $('#positifi').html(positif)
              $('#matii').html(mati)
              $('#sembuhi').html(sembuh)
            } else if (namaNegara === 'Malaysia') {
              var kasus = dataNegara.cases;
              var positif = dataNegara.active;
              var mati = dataNegara.deaths;
              var sembuh = dataNegara.recovered;
              $('#kasusm').html(kasus)
              $('#positifm').html(positif)
              $('#matiim').html(mati)
              $('#sembuhim').html(sembuh)
            } else if (namaNegara === 'Singapore') {
              var kasus = dataNegara.cases;
              var positif = dataNegara.active;
              var mati = dataNegara.deaths;
              var sembuh = dataNegara.recovered;
              $('#kasuss').html(kasus)
              $('#positifs').html(positif)
              $('#matis').html(mati)
              $('#sembuhs').html(sembuh)
            } else if (namaNegara === 'Thailand') {
              var kasus = dataNegara.cases;
              var positif = dataNegara.active;
              var mati = dataNegara.deaths;
              var sembuh = dataNegara.recovered;
              $('#kasust').html(kasus)
              $('#positift').html(positif)
              $('#matit').html(mati)
              $('#sembuht').html(sembuh)
            } else if (namaNegara === 'Philippines') {
              var kasus = dataNegara.cases;
              var positif = dataNegara.active;
              var mati = dataNegara.deaths;
              var sembuh = dataNegara.recovered;
              $('#kasusp').html(kasus)
              $('#positifp').html(positif)
              $('#matip').html(mati)
              $('#sembuhp').html(sembuh)
            }
          }
        }
      } catch {
        alert('Eror')
      }
    }
  })
}

function getProvinsi2() {
  $.ajax({
    url: 'https://api.kawalcorona.com/indonesia/provinsi/',
    success: function (data) {
      try {
        var json = data;

        if (json.length > 0) {
          var html = [];

          var i;

          for (i = 0; i < json.length; i++) {
            var dataNegara = json[i]['attributes'];

            var namaNegara = dataNegara.Provinsi;

            if (namaNegara === 'DKI Jakarta') {
              var positif = dataNegara.Kasus_Posi;
              var sembuh = dataNegara.Kasus_Semb;
              var mati = dataNegara.Kasus_Meni;
              $('#positifdki').html(positif)
              $('#sembuhdki').html(sembuh)
              $('#matidki ').html(mati)
            } else if (namaNegara === 'Jawa Barat') {
              var positif = dataNegara.Kasus_Posi;
              var sembuh = dataNegara.Kasus_Semb;
              var mati = dataNegara.Kasus_Meni;
              $('#positifjabar').html(positif)
              $('#sembuhjabar').html(sembuh)
              $('#matijabar ').html(mati)
            } else if (namaNegara === 'Banten') {
              var positif = dataNegara.Kasus_Posi;
              var sembuh = dataNegara.Kasus_Semb;
              var mati = dataNegara.Kasus_Meni;
              $('#positif-banten').html(positif)
              $('#sembuh-banten').html(sembuh)
              $('#mati-banten').html(mati)
            } else if (namaNegara === 'Jawa Timur') {
              var positif = dataNegara.Kasus_Posi;
              var sembuh = dataNegara.Kasus_Semb;
              var mati = dataNegara.Kasus_Meni;
              $('#positif-jatim').html(positif)
              $('#sembuh-jatim').html(sembuh)
              $('#mati-jatim').html(mati)
            } else if (namaNegara === 'Jawa Tengah') {
              var positif = dataNegara.Kasus_Posi;
              var sembuh = dataNegara.Kasus_Semb;
              var mati = dataNegara.Kasus_Meni;
              $('#positif-jateng').html(positif)
              $('#sembuh-jateng').html(sembuh)
              $('#mati-jateng').html(mati)
            } else if (namaNegara === 'Kalimantan Timur') {
              var positif = dataNegara.Kasus_Posi;
              var sembuh = dataNegara.Kasus_Semb;
              var mati = dataNegara.Kasus_Meni;
              $('#positif-kaltim').html(positif)
              $('#sembuh-kaltim').html(sembuh)
              $('#mati-kaltim').html(mati)
            } else if (namaNegara === 'Bali') {
              var positif = dataNegara.Kasus_Posi;
              var sembuh = dataNegara.Kasus_Semb;
              var mati = dataNegara.Kasus_Meni;
              $('#positif-bali').html(positif)
              $('#sembuh-bali').html(sembuh)
              $('#mati-bali').html(mati)
            } else if (namaNegara === 'Sumatera Utara') {
              var positif = dataNegara.Kasus_Posi;
              var sembuh = dataNegara.Kasus_Semb;
              var mati = dataNegara.Kasus_Meni;
              $('#positif-yogya').html(positif)
              $('#sembuh-yogya').html(sembuh)
              $('#mati-yogya').html(mati)
            }
          }
        }
      } catch {
        alert('Eror')
      }
    }
  })
}


