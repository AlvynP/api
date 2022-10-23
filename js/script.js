function tampilkanSemuaMenu() {
    $.getJSON("data2/pizza.json", function(data) {
        // console.log(data);
        let menu = data.Menu;
        // console.log(menu);
        $.each(menu, function(i, data) {
            // console.log(data);
            $("#daftar-menu").append(
                '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' +
                data.gambar +
                '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' +
                data.nama +
                '</h5><p class="card-text">' +
                data.deskripsi +
                '</p><h5 class="card-title">Rp. ' +
                data.harga +
                ',-</h5><a href="order.html" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
            );
        });
    });
}

tampilkanSemuaMenu();

$(".nav-link").on("click", function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");

    let kategori = $(this).html();
    $("h1").html(kategori);

    if (kategori == "Menu") {
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON("data2/pizza.json", function(data) {
        let menu = data.Menu;
        let content = "";

        $.each(menu, function(i, data) {
            if (data.kategori == kategori) {
                content +=
                    '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' +
                    data.gambar +
                    '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' +
                    data.nama +
                    '</h5><p class="card-text">' +
                    data.deskripsi +
                    '</p><h5 class="card-title">Rp. ' +
                    data.harga +
                    ',-</h5><a href="order.html" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });
        $("#daftar-menu").html(content);
    });
});