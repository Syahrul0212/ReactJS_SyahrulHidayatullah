# (14) REACT FUNDAMENTAL
## JSX 
JSX merupakan singkatan dari java script XML. JSX merupakan ekstensi pada javascript.
Alasan menggunakan JSX :
-	JSX dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logika UI
-	Separation of technology => Separation of concerns
JSX vs React.createElement :
-	Kita tidak perlu menggunakan JSX, tapi JSX memudahkan kita menulis aplikasi React
-	Syntac Sugar dari fungsi (React.createElement : component, prop, …children)
Spesifikasi jenis Elemen React :
-	Kapitalisasi untuk komponen React 
-	Huruf kecil (lowecase) untuk komponen bawaan.
Menaruh expression pada JSX yaitu kita dapat menaruh ekespresi JS yang valid pada JSX dengan menggunakan kurung kurawal. Misalnya :
-	2 + 2
-	User.FirstName
-	formatName(user)
JSX merupakan sebuah expression. Setelah dikompilasi, exspresi dari JSX akan menjadi panggilan fungsi JavaScript biasa dan menjadi objek JavaScript.
Menentukan atribut dengan JSX : 
-	Tanda kutip untuk menentukan string literal
-	Kurung kurawal untuk menyematkan ekspresi JavaScript
-	React DOM menggunakan camelCase sebagai konvensi penamaan.
Menspesifikasikan Elemen Anak dengan JSX :
-	Jika tag bersifat kosong (tidak memiliki elemen anak), kita dapat menutupnya secara langsung dengan />
-	Tag JSX dimungkinkan untuk memiliki elemen anak.
## Pengenalan React Component 
Komponen React adalah bagian kode yang dapat digunakan kembali dan digunakan untuk menentukan tampilan, behavior, dan state sebagian UI. Didalam Komponen terapat suatu Props => State => Dom.
Membagi UI menjadi beberapa component :
-	Filerable Product label
-	Search Bar
-	Product Table
-	Product Category Row
-	Product Row
Semua komponen tersebut dapat digunakan beberapa kali sesuai dengan kebutuhan yang digunakan.
## Component Composition
Pengertian dari props :
-	Merupakan singkatan dari properti, membuat kita dapat memberikan argumen / data pada component
-	Props membantu untuk membuat komponen menjadi lebih dinamis
-	Props dioper ke component sama seperti memberikan pada tag HTML
-	Props pada component adalah read-only dan tidak dapat diubah.
One Way data Flow secara umum artinya adalah data hanya 1 dan hanya memiliki 1 cara untuk di transfer ke bagian yang lain.
Komposisi komponen :
-	Kontainmen
-	Spesialisasi
## React Lifecycle 
Merupakan sederetan event yang terjadi pada saat aplikasi itu muncul sampai aplikasi tersebut menghilang. 
Event tersebut terbagi menjadi 3 :
-	Mounting (lahir)
-	Updating (tumbuh/berkembang)
-	Unmounting (mati)
Pada setiap event akan terbagi menjadi 3 fase :
-	Render phase
-	Pre-commit phase
-	Commit phase
Lifecycle method yang sering digunakan :
1.	render()
Fungsi dari render sering dipakai, merupakan required pada class component, Pure function yaitu tidak boleh ada setState().

2.	componentDidMount()
Merupakan sebuah method yang dipanggil ketika komponen sudah di render untuk pertama kali, merupakan tempat untuk pemanggilan API, Boleh terdapat setState().

3.	componentDidUpdate()
Merupakan komponen yang dipanggil ketika terjadi update (props atau state berubah)
4.	componentWillUnmount()
Merupakan komponen yang dipanggil ketika sebuah component akan dihancurkan, sangat cocok untuk clean up actions
Beberapa lifecycle method yang sering dipakai :
1.	shouldComponentUpdate()
2.	static getDerivedStateFromProps()
3.	getSnapshotBeforeUpdate()
## Conditional 
Render Bersyarat : Membuat komponen berbeda yang mencangkup perilaku yang dibutuhkan, lalu kita dapat me-render hanya beberapa bagian saja, berdasarkan state aplikasi anda.
-	Menggunakan If
-	Inline If dengan operator &&
-	Inline If-Else dengan ternary conditional operator
-	Mencegah komponen untuk rendering
Render List : membangun koleksi dari beberapa elemen dan menyertakan dalam JSX menggunakan tanda kurung kurawal {}.
Key : membantu react untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.
## Directory Structure
React merupakan sebuah library, jadi react tidak memeiliki pendapat tentang bagaimana cara memasukkan file ke folder. 
Cara pengelompokan pada sebuah React : 
-	Pengelompokan berdasarkan fitur atau rute
-	Pengelompokan berdasarkan jenis file
hal-hal yang perlu dihindari dalam struktur direktori :
-	Hindari terlalu banyak nesting
-	Jangan terlalu memikirkannya
## Styling Inline
Classes dan CSS : dengan membuat file css lalu memanggil idnya ke kelas tersebut
Atribut Style : dengan cara menempel atribut tersebut ke file JSX
Modul CSS : menggunakan modul CSS namun CSSnya akan ke scop ke satu elemen dan tidak akan menyebar ke lainnya.



# Berikut adalah tiga poin penting dalam React fundamental:

## Komponen: React adalah sebuah library berbasis komponen. Komponen adalah bagian-bagian kecil yang membentuk aplikasi React. Komponen dapat digunakan kembali (reusable) dan dibuat dari kode JavaScript dan JSX. Komponen dapat menerima properti (props) dan memiliki state, serta memiliki method hidup (lifecycle methods) yang memungkinkan interaksi dengan aplikasi.

## Virtual DOM: React menggunakan konsep Virtual DOM (Document Object Model) untuk mengoptimalkan pengalaman pengguna. Virtual DOM adalah representasi dari struktur DOM dalam memori. Setiap perubahan pada tampilan UI diterapkan pada Virtual DOM terlebih dahulu, dan kemudian React membandingkan Virtual DOM baru dengan Virtual DOM lama untuk menentukan bagian mana yang harus diperbarui. Hal ini memungkinkan aplikasi React bekerja lebih cepat dan efisien dalam mengupdate tampilan UI.

## State Management: React menggunakan state untuk menyimpan data yang berubah dalam sebuah komponen. State hanya dapat diubah melalui setState() method, dan setiap kali state berubah, React akan secara otomatis memperbarui tampilan UI. Untuk manajemen state yang lebih kompleks, React memiliki opsi seperti Redux dan Context API. Dengan state management yang baik, pengembang dapat membuat aplikasi React yang dinamis dan interaktif.