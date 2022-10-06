function render(myData) {
    let data = document.getElementById('element-data')

    data.innerHTML = ''

    myData.forEach(item => {
        let element =
        `
        <div class="item">
            <h2>${item.nama_lengkap}</h2>
            <p>Nama Panggilan : ${item.nama_panggilan} </p>
            <p>Nomor Telepon : ${item.nomor_telepon} </p>
            <p>id Line : ${item.id_line} </p>
            <p>Tanggal Lahir : ${item.tanggal_lahir} </p>
            <p>NIM : ${item.nim} </p>
            <p>Email : ${item.email} </p>
            <p>Hobi : ${item.hobi} </p>
        </div>
        `

        data.insertAdjacentHTML("beforeend", element);
    });

}