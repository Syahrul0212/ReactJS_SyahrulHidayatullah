# React Hook adalah fitur baru di React yang memungkinkan pengembang untuk menggunakan state dan fitur React lainnya dalam komponen fungsi (functional components). Berikut adalah tiga poin penting tentang React Hook:

## Menggantikan Class Components
### Dengan adanya React Hook, kini pengembang dapat menggunakan fitur-fitur React seperti state dan lifecycle methods di dalam komponen fungsi tanpa harus menggunakan Class Components. Ini memberikan fleksibilitas yang lebih besar untuk mengelola state dan efek samping (side effects) dalam komponen.

## Memudahkan Penggunaan State
### React Hook memiliki useState() yang memudahkan penggunaan state di dalam komponen fungsi. useState() mengembalikan state saat ini dan sebuah fungsi untuk mengubahnya. Dengan demikian, pengembang dapat dengan mudah membuat dan mengelola state di dalam komponen fungsi.

## Mengelola Efek Samping
### React Hook juga memiliki useEffect() yang memungkinkan pengembang untuk mengelola efek samping (side effects) dalam komponen fungsi. Efek samping bisa berupa pengambilan data dari server, manipulasi DOM, atau pemanfaatan browser APIs lainnya. useEffect() akan dijalankan setiap kali komponen dirender dan dapat digunakan untuk membersihkan efek samping saat komponen dihapus dari DOM. Ini memudahkan pengembang untuk mengelola efek samping tanpa harus menggunakan lifecycle methods di dalam Class Components.