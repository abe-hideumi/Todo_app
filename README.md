# Todo Application

NestJS + Prisma + GraphQL-codegen + React を使用したシンプルなTodoアプリケーション

## 📋 機能

- ✅ **Todo作成**: タイトルを入力して新しいTodoを追加
- ✅ **Todo一覧表示**: 作成したTodoを一覧で表示
- ✅ **ステータス変更**: チェックボックスで完了/未完了を切り替え
- ✅ **Todo削除**: ゴミ箱ボタンでTodoを削除

## 🛠️ 技術スタック

### バックエンド
- **NestJS**: Node.jsフレームワーク
- **Prisma**: ORM(データベース操作)
- **GraphQL + Apollo Server**: API構築
- **PostgreSQL**: データベース

### フロントエンド
- **React**: UIライブラリ
- **Vite**: ビルドツール
- **Apollo Client**: GraphQLクライアント
- **TypeScript**: 型安全な開発

## 🚀 セットアップ手順

### 前提条件
- Node.js (v18以上)
- Docker & Docker Compose
- npm または yarn

### 1. リポジトリをクローン
```bash
git clone <リポジトリURL> todo_app
cd todo_app
```

### 2. PostgreSQLをDockerで起動
```bash
docker-compose up -d
```

### 3. バックエンドのセットアップ
```bash
cd backend

# 依存パッケージのインストール
npm install

# Prismaのマイグレーション実行
npx prisma migrate dev

# 開発サーバー起動
npm run start:dev
```

バックエンドが `http://localhost:3000` で起動します。
GraphQL Playground: `http://localhost:3000/graphql`

### 4. フロントエンドのセットアップ

**別のターミナルを開いて:**
```bash
cd frontend

# 依存パッケージのインストール
npm install

# 開発サーバー起動
npm run dev
```

フロントエンドが `http://localhost:5173` で起動します。

## 📖 使い方

1. ブラウザで `http://localhost:5173` を開く
2. 「タスクを追加」にタイトルを入力して「+」ボタンをクリック
3. チェックボックスでタスクの完了/未完了を切り替え
4. ゴミ箱ボタンでタスクを削除

## 🎥 動作確認動画

https://github.com/user-attachments/assets/fa7c4f51-1ed2-44d7-8a8b-a252b192a729

## 🎯 今後の拡張案

- [ ] フィルタリング機能(ステータスごと)
- [ ] ソート機能(作成日時、期限)
- [ ] 説明フィールドの追加
- [ ] 期限設定機能
- [ ] IN_PROGRESSステータスの活用

## 📄 ライセンス

MIT