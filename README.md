Project structure

- src
 - component
  + Là nhung component nhan vao props va render UI, duoc su dung o nhieu noi trong ung dung
  + Thuong se khong co xu ly logic o nhung component nay
  + Button, Card, Modal, Header, Text....

 - modules
  + Noi chua nhung component chính cho ứng dụng, sẽ có những xử lý logic như call api, xử lý nghiệp vụ
  + Có thể là 1 page, hoặc tập hợp 1 nhóm các chức năng

  - Home (modules) 
   - components: Chỉ chứa các component được sử dụng trực tiếp bên trong chính module này, những coponent này có thể chứa các tác vụ logic như call API...
   - pages: Component sẽ kết nối trực tiếp với router

 - apis/services
  + Setup thư viện gọi API (axios)
  + Định nghĩa các function gọi API
  