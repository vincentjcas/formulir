const nimInput = document.getElementById('nim');
const nimError = document.getElementById('nimError');
const teleponInput = document.getElementById('telepon');
const teleponError = document.getElementById('teleponError');
const form = document.getElementById('formPendaftaran');

// 1. Validasi NIM secara Real-time (Tidak bisa input huruf & harus 9 digit)
nimInput.addEventListener('input', function (e) {
    // Memaksa menghapus semua karakter yang bukan angka
    this.value = this.value.replace(/[^0-9]/g, '');

    // Cek panjang karakter
    if (this.value.length > 0 && this.value.length < 9) {
        nimError.textContent = 'NIM harus terdiri dari tepat 9 angka.';
    } else if (this.value.length === 9) {
        nimError.textContent = '';
    }
});

// 2. Validasi Telepon secara Real-time
teleponInput.addEventListener('input', function (e) {
    // Hanya izinkan angka
    this.value = this.value.replace(/[^0-9]/g, '');

    // Cek format nomor telepon
    if (this.value.length > 0 && this.value.length < 10) {
        teleponError.textContent = 'Nomor telepon minimal 10 digit.';
    } else if (this.value.length >= 10) {
        teleponError.textContent = '';
    }
});

// 3. Interaksi saat form dikirim (Konfirmasi & Validasi Akhir)
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const namaValue = document.getElementById('nama').value;
    const nimValue = nimInput.value;
    const emailValue = document.getElementById('email').value;
    const teleponValue = teleponInput.value;
    const jurusanValue = document.getElementById('jurusan').value;
    const semesterValue = document.getElementById('semester').value;
    const genderValue = document.querySelector('input[name="gender"]:checked')?.value || '';
    const alamatValue = document.getElementById('alamat').value;

    // Validasi NIM
    if (nimValue.length !== 9) {
        alert('Mohon perbaiki NIM Anda. Harus terdiri dari 9 angka.');
        nimInput.focus();
        return;
    }

    // Validasi Telepon
    if (teleponValue.length < 10) {
        alert('Nomor telepon minimal 10 digit.');
        teleponInput.focus();
        return;
    }

    // Munculkan dialog konfirmasi
    const konfirmasi = confirm("Apakah Anda yakin data yang diisi sudah benar dan ingin mengirimkannya?");

    if (konfirmasi) {
        // Tampilkan semua data di halaman sukses
        document.getElementById('resultNama').textContent = namaValue;
        document.getElementById('resultNim').textContent = nimValue;
        document.getElementById('resultEmail').textContent = emailValue;
        document.getElementById('resultTelepon').textContent = teleponValue;
        document.getElementById('resultJurusan').textContent = jurusanValue;
        document.getElementById('resultSemester').textContent = 'Semester ' + semesterValue;
        document.getElementById('resultGender').textContent = genderValue;
        document.getElementById('resultAlamat').textContent = alamatValue;
        
        // Sembunyikan form, tampilkan success dengan animasi
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('successContainer').style.display = 'block';
        
        // Scroll ke atas
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Fungsi untuk kembali ke form
function kembaliKeForm() {
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('successContainer').style.display = 'none';
    form.reset();
    // Reset error messages
    nimError.textContent = '';
    teleponError.textContent = '';
}