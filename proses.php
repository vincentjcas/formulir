<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Hasil Pendaftaran</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 50px;
            background-color: #e9ecef;
        }

        .success-box {
            background: white;
            padding: 30px;
            border-radius: 10px;
            display: inline-block;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #28a745;
        }
    </style>
</head>

<body>
    <div class="success-box">
        <?php
        // Mengecek apakah ada data yang dikirim melalui metode POST
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $nama = htmlspecialchars($_POST['nama']);
            $nim = htmlspecialchars($_POST['nim']);
            $email = htmlspecialchars($_POST['email']);

            echo "<h1>Pendaftaran Berhasil!</h1>";
            echo "<p>Terima kasih, <strong>$nama</strong>.</p>";
            echo "<p>NIM Anda <strong>$nim</strong> dengan email <strong>$email</strong> telah tersimpan di sistem kami.</p>";
            echo "<br><a href='index.html' style='text-decoration:none; padding:10px 20px; background:#007bff; color:white; border-radius:5px;'>Kembali ke Form</a>";
        } else {
            echo "<h1>Akses Ditolak</h1>";
            echo "<p>Silakan isi form terlebih dahulu.</p>";
        }
        ?>
    </div>
</body>

</html> 