


//MENGHITUNG LUAS SEGITIGA
function hitungLuasSegitiga() {
    event.preventDefault();
    let alas = document.getElementById("alasSegitiga").value;
    let tinggi = document.getElementById("tinggiSegitiga").value;
  
    let luas = 0.5 * alas * tinggi;
  
    document.getElementById("rumusLuasSegitiga").innerHTML =
      "L = 1/2 x a x t <br/>" + "L = 1/2 x " + alas + " x " + tinggi;
    document.getElementById("hasilLuasSegitiga").innerHTML = "L = " + luas;
  }
  
  //MENGHITUNG KELILING SEGITIGA
  function hitungKelilingSegitiga() {
    event.preventDefault();
    let sisi1 = parseInt(document.getElementById("sisi1").value);
    let sisi2 = parseInt(document.getElementById("sisi2").value);
    let sisi3 = parseInt(document.getElementById("sisi3").value);
  
    let keliling = sisi1 + sisi2 + sisi3;
    document.getElementById("rumusKelilingSegitiga").innerHTML =
      "K = S1 + S2 + S3 <br/>" + "K = " + sisi1 + " + " + sisi2 + " + " + sisi3;
    document.getElementById("hasilKelilingSegitiga").innerHTML =
      "K = " + keliling;
  }
  
  //MENGHITUNG LUAS JAJAR GENJANG
  function hitungLuasJajarGenjang() {
    event.preventDefault();
    let alas = document.getElementById("alasJajarGenjang").value;
    let tinggi = document.getElementById("tinggiJajarGenjang").value;
  
    let luas = alas * tinggi;
    document.getElementById("rumusLuasJajarGenjang").innerHTML =
      "L = a x t <br/>" + "L = " + alas + " x " + tinggi;
    document.getElementById("hasilLuasJajarGenjang").innerHTML = "L = " + luas;
  }
  
  //MENGHITUNG KELILING JAJAR GENJANG
  function hitungKelilingJajarGenjang() {
    event.preventDefault();
    let panjang = parseInt(document.getElementById("panjangJajarGenjang").value);
    let lebar = parseInt(document.getElementById("lebarJajarGenjang").value);
  
    let keliling = 2 * (panjang + lebar);
    document.getElementById("rumusKelilingJajarGenjang").innerHTML =
      "K = 2 x (a + b) <br/>" + "K = 2 x (" + panjang + " + " + lebar + ")";
    document.getElementById("hasilKelilingJajarGenjang").innerHTML = "K = " + keliling;
  }
  
  //RESET LUAS SEGITIGA
  function resetluasSegitiga() {
    document.getElementById("alasSegitiga").value = "";
    document.getElementById("tinggiSegitiga").value = "";
    document.getElementById("rumusLuasSegitiga").innerHTML = "";
    document.getElementById("hasilLuasSegitiga").innerHTML = "";
  }
  
  //RESET KELILING SEGITIGA
  function resetkelilingSegitiga() {
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
    document.getElementById("rumusKelilingSegitiga").innerHTML = "";
    document.getElementById("hasilKelilingSegitiga").innerHTML = "";
  }
  
  //RESET LUAS JAJAR GENJANG
  function resetluasJajarGenjang() {
    document.getElementById("alasJajarGenjang").value = "";
    document.getElementById("tinggiJajarGenjang").value = "";
    document.getElementById("rumusLuasJajarGenjang").innerHTML = "";
    document.getElementById("hasilLuasJajarGenjang").innerHTML = "";
  }
  
  //RESET KELILING JAJAR GENJANG
  function resetkelilingJajarGenjang() {
    document.getElementById("panjangJajarGenjang").value = "";
    document.getElementById("lebarJajarGenjang").value = "";
    document.getElementById("rumusKelilingJajarGenjang").innerHTML = "";
    document.getElementById("hasilKelilingJajarGenjang").innerHTML = "";
  }
  