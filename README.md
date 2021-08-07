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