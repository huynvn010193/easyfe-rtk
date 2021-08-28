- Phân biệt Effect và Effect Creator:

- Effect: chỉ đởn giản là một javascript object có chứa thông tin để saga middleware biết cần phải làm gì.
- Effect Creator: là một fuction trả về một Effect. Và nó không thực thi Effect này, người thực thi là saga middleware, chứ không phải Effect Creator.
  => Các hàm các bạn dùng trong redux-saga: takeEvery, takeLastest ... đây là những Effect Creator.

===== Các Effect Creator ====

- TakeEvery(pattern, saga, ...args): chạy saga mỗi lần khi có action pattern được dispatch, dispatch bao nhiêu sẽ chạy bấy nhiêu saga.
- takeLastes(pattern, saga,...args ): chạy saga, nhưng khi có action pattern mới được dispatch, thì cái saga trước đó bị cancel.
- takeLeading(pattern, saga,...args ): chạy saga khi action pattern được dispatch. Những action tiếp theo sẽ bị cancel cho đến khi Saga trước đó chạy xong.
- put(action): dispatch action từ saga.
- call(fn,...agrs): gọi hàm fn và truyền tham số args vào hàm đó.
- all([...effects]): chạy tất cả effects cùng 1 lúc.
- take(pattern) and fork(fn,...args): mô hình watcher...worker, đợi dispatch action pattern thì sẽ thực hiện 1 cái task nào đó.
- debounce(ms, pattern, saga, ...args):

====== Giải thích các effect =======
Trong general function khi gọi trực tiếp API => yeild funtionCalAPI => trả ra 1 Promise() => rất khó test
Để giải quyết vấn đề trên ta dùng hàm call => yeild call(funtionCalAPI, thamso) => trả về 1 JS object

fork and spawn : Cả 2 đều là non-blocking call(tức sẽ không đợi và chạy qua dòng tiếp theo lun):

- fork: có mối liên hệ với thằng ca(tức xảy ra lỗi sẽ báo lên tk cha và cancel các task fork khác)
- spawn: không có mối liên hệ nào với tk cha cả

Viết code sao dễ test => sử dụng call -> trả về 1 object.

- Roter: -> react-router-dom + typescript: @types/react-router-dom.

Cài đặt Material UI: yarn add @material-ui/core @material-ui/icons
Add 2 link vào index.html in public folder:

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  
  test ubuntu
