$( document ).ready(function() {

    $(document).ready(function() {
        $('#role').on("change", function() {
            var roletype = $(this).val();
            optionswitch(roletype);
        });
    });
    function optionswitch(myfilter) {
        console.log(myfilter);
        if(myfilter == 'adak'){
            $('.nimajah').remove();
            $('.jurusanajah').remove();
        }
        if(myfilter == 'dosen'){
            $('.nimajah').remove();
            $('.jurusanajah').remove();
        }
        if(myfilter == 'mhs'){
            var container = document.createElement('div');
            container.setAttribute("class", "form-group nimajah");
            $(container).append('<label for="nim">NIM</label><input type="number" class="form-control" id="nim" placeholder="nim" name="nim" required autofocus>');
            $('.classnim').after(container);

            var container1 = document.createElement('div');
            container1.setAttribute("class", "form-group jurusanajah");
            $(container1).append('<label for="jurusan">jurusan</label><select class="form-control" name="jurusan" id="jurusan"><option value="ti">Teknik Informatika</option><option value="si">Sistem Informasi</option></select>');
            $('.classjurusan').after(container1);
        }
    }
    $(".login").click(function(e){
        e.preventDefault();
        var username = jQuery('input[name="username"]').val();
        var password = jQuery('input[name="password"]').val();
        var role = jQuery('select[name="role"]').val()
        function openlink(role) {
            if(role == 'mhs'){
                window.location.replace('mhs/krs.php');
            }else if(role == 'dosen'){
                window.location.replace('dosen/read.php');
            }else if(role == 'adak'){
                window.location.replace('adak');
            }
        }
        if(username != '' && password != '' && role != ''){
            $.ajax({
                dataType: 'json',
                type:'POST',
                url: 'auth/login.php',
                data:{username:username, password:password, role:role},
                error: function(e) {
                    var object = JSON.parse(e.responseText);
                    alert(object.message);
                  },
            }).done(function(data){
                alert('Login Success')
                openlink(role)
            });
        }else{
            alert('Ada data yang kosong')
        }
     
    });
    $(".register").click(function(e){
     
        e.preventDefault();
        var name = jQuery('input[name="nama"]').val(), 
            username = jQuery('input[name="username"]').val(),
            password = jQuery('input[name="password"]').val(),
            role = jQuery('select[name="role"]').val(),
            alamat = jQuery('input[name="alamat"]').val(),
            email = jQuery('input[name="email"]').val(),
            nim = (jQuery('input[name="nim"]').val() != null) ? jQuery('input[name="nim"]').val(): '',
            jurusan = (jQuery('select[name="jurusan"]').val() != null) ? jQuery('select[name="jurusan"]').val(): '';
        if(name != '' && username != '' && password != '' && role != ''){
            $.ajax({
                dataType: 'json',
                type:'POST',
                url: 'auth/register.php',
                data:{name:name,username:username, password:password, role:role, nim:nim, jurusan:jurusan,alamat:alamat,email:email},
                error: function(e) {
                    var object = JSON.parse(e.responseText);
                    alert(object.message);
                  },
            }).done(function(data){
                alert('Data berhasil ditambah')
                window.location.replace('index.php');
            });
        }else{
            alert('Ada data yang kosong')
        }
     
    });
});