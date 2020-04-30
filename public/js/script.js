$(function () {
    $('.tombolTambahData').on('click', function () {
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
    });
    $('.tampilModalUbah').on('click', function () {
        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/Mahasiswa/ubah');

        const id = $(this).data('id');
        $.ajax({
            url: 'http://localhost/phpmvc/public/Mahasiswa/getubah',
            // nama data yang dikirimkan , id isi datanya            
            data: {
                id: id
            },
            method: 'post',
            // object di dalam javascript
            dataType: 'json',
            success: function (data) {
                $('#id').val(data.id);
                $('#nama').val(data.nama);
                $('#npm').val(data.npm);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
            }
        });
    });
});