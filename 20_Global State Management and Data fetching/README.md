# Global state adalah sebuah objek atau variabel yang disimpan di dalam memori yang bisa diakses dan digunakan oleh seluruh komponen pada sebuah aplikasi. Beberapa poin penting mengenai global state adalah:

## Shared Data: 
### Global state memungkinkan untuk menyimpan data yang bersifat shared atau bersama-sama di antara seluruh komponen yang ada pada aplikasi. Ini sangat berguna ketika kita ingin menyimpan data yang harus diakses oleh beberapa komponen pada waktu yang bersamaan.

## Accessible: 
### Global state memungkinkan untuk mengakses data dari seluruh bagian pada aplikasi. Jadi, kita tidak perlu mengirim data dari satu komponen ke komponen yang lain dengan cara yang rumit.

## State Management: 
### Dengan menggunakan global state, kita dapat mengelola state pada aplikasi secara global. Dalam artian, kita dapat memperbarui data pada global state dan semua komponen yang menggunakan data tersebut akan secara otomatis diupdate. Dengan begitu, kita tidak perlu memperbarui data pada setiap komponen yang ada pada aplikasi.