# Git Flow cho Lab 8

## Các nhánh chính

- `main`: chỉ chứa phiên bản đã hoàn thiện.
- `develop`: nhánh tích hợp tính năng.

## Feature branches

- `feature/header-footer`
- `feature/home-page`
- `feature/about-page`
- `feature/movie-detail`

## Tạo feature branch đúng cách

```bash
git checkout develop
git pull origin develop
git checkout -b feature/ten-tinh-nang
```

## Commit và tạo Pull Request

```bash
git add .
git commit -m "feat: mo ta ngan gon"
git push -u origin feature/ten-tinh-nang
```

Tạo Pull Request: `feature/ten-tinh-nang` → `develop`.

## Xử lý conflict

```bash
git checkout feature/ten-tinh-nang
git fetch origin
git merge origin/develop
```

Mở file conflict, xóa các dấu `<<<<<<<`, `=======`, `>>>>>>>`, giữ nội dung hợp lý rồi:

```bash
git add .
git commit -m "fix: resolve merge conflict"
git push
```
