
let alumni = [
    {
        nama: "Fahmi Daris Fauzan",
        prodi: "Teknik Informatika",
        tahun: 2022,
        pekerjaan: "Web Developer"
    },
    {
        nama: "Raihan raka",
        prodi: "Sistem Informasi",
        tahun: 2023,
        pekerjaan: "Data Analyst"
    },
    {
        nama: "Ikmar Falih darussalam",
        prodi: "Desain Komunikasi Visual",
        tahun: 2024,
        pekerjaan: "Graphic Designer"
    },
    {
        nama: "Muhammad Ainur Rofiq",
        prodi: "Teknik Sipil",
        tahun: 2024,
        pekerjaan: "Site Engineer"
    }
];

let tabel = document.getElementById("dataAlumni");

for (let i = 0; i < alumni.length; i++) {

    tabel.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${alumni[i].nama}</td>
            <td>${alumni[i].prodi}</td>
            <td>${alumni[i].tahun}</td>
            <td>${alumni[i].pekerjaan}</td>
        </tr>
    `;
}

document.getElementById("jumlahAlumni").innerHTML =
    "Jumlah Alumni: " + alumni.length + " Orang";
