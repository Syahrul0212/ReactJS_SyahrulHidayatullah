# Berikut adalah tiga poin penting dalam event handling pada React:

## Menetapkan Event Handler: Untuk menangani event pada React, pengembang harus menetapkan event handler. Event handler adalah fungsi JavaScript yang akan dijalankan ketika event terjadi pada elemen yang ditargetkan. Cara menetapkan event handler di React adalah dengan menggunakan properti event seperti onClick, onChange, dll.

## Memahami "this" dalam Event Handler: Dalam event handler di React, keyword "this" akan mengacu pada objek event, bukan pada komponen React. Oleh karena itu, untuk mengakses state atau properti dalam event handler, pengembang harus menggunakan bind() method atau arrow function.

## Preventing Default Behavior: Beberapa event pada elemen HTML memiliki perilaku default, seperti mengirim formulir atau menavigasi ke halaman baru. Dalam beberapa kasus, pengembang ingin menghentikan perilaku default tersebut. Untuk menghentikan perilaku default, pengembang dapat menggunakan method preventDefault() pada objek event yang diteruskan ke event handler.