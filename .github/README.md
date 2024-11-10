<h1 align="center">Mobicard</h1>

<div align="center">

**🪪 Turn your smartphone into a name card**

[![GitHub Release](https://img.shields.io/github/v/release/5ouma/mobicard?style=flat-square)](https://github.com/5ouma/mobicard/releases)
<br />
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/5ouma/mobicard?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/5ouma/mobicard?style=flat-square)
[![GitHub last commit](https://img.shields.io/github/last-commit/5ouma/mobicard?style=flat-square)](https://github.com/5ouma/mobicard/commit/HEAD)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/5ouma/mobicard?style=flat-square)](https://github.com/5ouma/mobicard/commits/main)
<br />
[![CI](https://img.shields.io/github/actions/workflow/status/5ouma/mobicard/ci.yml?label=ci&style=flat-square)](https://github.com/5ouma/mobicard/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/actions/workflow/status/5ouma/mobicard/release.yml?label=release&style=flat-square)](https://github.com/5ouma/mobicard/actions/workflows/release.yml)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/5ouma/mobicard/main.svg?style=flat-square)](https://results.pre-commit.ci/latest/github/5ouma/mobicard/main)
[![codecov](https://codecov.io/github/5ouma/mobicard/graph/badge.svg)](https://codecov.io/github/5ouma/mobicard)

</div>

<br /><br />

## 📊 Usage

1. Clone this repository

   ```sh
   git clone https://github.com/5ouma/mobicard.git
   ```

2. Copy the [`meta.tmpl.json`] to `meta.json` and edit as you prefer

   [`meta.tmpl.json`]: ../meta.tmpl.json

   > [👾 Meta File](#-meta-file)

3. Install the dependencies

   ```sh
   bun install
   ```

4. Build or Run the development server

   - For production

     1. Build the project

        ```sh
        bun run build
        ```

     2. Deploy the created `dist` directory

   - For development

     ```sh
     # Run the development server
     bun run dev
     ```

     ```sh
     # Run the Astrobook
     bun run astrobook
     ```

<br /><br />

## 👾 Meta File

```json
{
  "name": "Your Name",
  "description": "Your Description",
  "icon": "Your Icon URL",
  "contacts": [{ "service": "Service Name", "id": "Your ID" }],
  "homepage": "Your Homepage URL"
}
```

> [!NOTE]
> Valid contact services are:
>
> - Bluesky
> - Facebook
> - GitHub
> - Instagram
> - Mastodon
> - Misskey
> - Posts
> - Twitter
> - Mail

<br /><br />

## 🆘 Help

- [**⚠️ Issues**]: Feature Requests or Bug Reports
- [**💬 Discussions**]: General Chats or Questions
- [**🛡️ Security Advisories**]: Security Issues that should not be public

[**⚠️ Issues**]: https://github.com/5ouma/mobicard/issues/new/choose
[**💬 Discussions**]: https://github.com/5ouma/mobicard/discussions/new/choose
[**🛡️ Security Advisories**]: https://github.com/5ouma/mobicard/security/advisories/new

<br /><br />

## 🎽 Contributing

I happily welcome your contributions!
Before you contribute,
I would recommend reading [CONTRIBUTING.md](./CONTRIBUTING.md)
for a better development experience.
