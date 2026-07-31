# Lab 8 – Movie Website (phần Trưởng nhóm)

Project React theo yêu cầu Bài thực hành 08: website giới thiệu phim sử dụng React, React Router và quy trình Git Flow cơ bản.

## Phạm vi đã thực hiện

- Cấu trúc dự án React theo Create React App.
- Cài đặt và cấu hình `react-router-dom`.
- Header có logo và menu điều hướng.
- Footer có thông tin cơ bản.
- `MainLayout` dùng chung Header/Footer cho toàn bộ trang.
- Route `/`, `/about`, `/movies/:movieId` và trang 404.
- Các trang Home/About/Detail hiện chỉ là placeholder để các thành viên khác thay thế.

## Chạy dự án

```bash
npm install
npm start
```

Ứng dụng mặc định chạy tại `http://localhost:3000`.

## Quy trình branch

```bash
# Sau khi tạo repository trên GitHub

git init
git branch -M main
git add .
git commit -m "chore: initialize React project"

git remote add origin <URL_REPOSITORY_GITHUB>
git push -u origin main

git checkout -b develop
git push -u origin develop

git checkout -b feature/header-footer
git add .
git commit -m "feat: add shared header footer and main layout"
git push -u origin feature/header-footer
```

Sau đó tạo Pull Request từ `feature/header-footer` vào `develop`.

## Quy tắc làm việc cho nhóm

1. Không code trực tiếp trên `main`.
2. Mỗi tính năng tạo branch từ `develop`.
3. Trước khi tạo PR, chạy `git pull origin develop` và xử lý conflict nếu có.
4. PR phải có mô tả thay đổi và được review trước khi merge.

> Branch hiện tại khi bàn giao: `feature/header-footer`.
