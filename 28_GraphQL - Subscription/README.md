# (28) GraphQL – Subscription
Cara menggunakan Subscription :
-	Menginstall subscriptions-transport-ws untuk mengaktifkan koneksi ke websocket, yaitu dengan yarn add @apollo/client subscriptions-transport-ws
-	Import semua modul yang diperlukan dan pisahkan antara http dan websocket.
-	Buat httpLink untuk Query dan mutation, wsLink untuk subscription serta tambahkan header untuk authentication.
-	Tambahkan split function dan gunakan fungsi tersebut sebagai tautan pada saat kita membuat client. Fungsi split ini digunakan untuk menggabungkan dua buah Link menjadi satu Link dengan jenis operasi yang dijalankan.
Penggunaan Subscription dengan menggunakan useSubscription :
-	Import Subscription dari apollo client dan lakukan definisi.
-	Aktifkan Subscription dan mulai untuk menggunakannya.
Penggunaan Subscription dengan menggunakan subscribeToMore :
subscribeToMore merupakan fungsi yang digunakan unuk  menjalankan Subscription, subscribeToMore biasanya digunakan untuk Subscription pada bidang tertentu yang disertai dengan Query. Pada umumnya subscribeToMore digunakan ketika server akan mengembalikan 1 data yang akan diperbarui, atau dengan kata lain pada saat memperbarui data sebelumnya fungsi ini akan mengembalikan data yang diperbarui.
