<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="../../assets/bootstrap/css/bootstrap.min.css">
    <title>Daftar Mahasiswa</title>
</head>
<body>
<div class="container mt-3">
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <span class="my-auto">Daftar Dosen</span>
      </div>
      <div class="card-body">
        <div class="row justify-content-left align-items-left">
          <a href="../index.php" class="btn btn-primary">+ Home</a>
          <a href="create.php" class="btn btn-primary">+ Tambah Data Dosen</a>
        </div><br>
        <div class="row justify-content-center align-items-center">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <?php
              include("../../config/koneksi.php");
              $no=0;
              $query = "SELECT * FROM `dosen`";
              $result = $koneksi->query($query);
              while($data = mysqli_fetch_row($result))
              {
              $no++;
            ?>
            <tbody>
              <tr>
              <?php
                echo "<td align=center>$no</td>";
                echo "<td align=center>$data[1]</td>";
                echo "<td align=center>$data[2]</td>";
                echo "<td align=center>$data[3]</td>";
                echo '<td align=center><a href="update.php?id='.$data[0].'" class="btn btn-success">Edit</a> |
                <a href="delete.php?id='.$data[0].'" class="btn btn-danger">Delete</a></td>
                '
                ?>
                </td>
              </tr>
            </tbody>
            <?php
            }
            ?>
          </table>
        </div>
        <div class="row justify-content-left align-items-left">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  
</div>
<script src="../assets/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>