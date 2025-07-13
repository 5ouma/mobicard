<h1 align="center">Mobicard</h1>

<div align="center">

**📇 Turn your smartphone into a name card**

<br />

[![GitHub Release](https://img.shields.io/github/v/release/5ouma/mobicard?style=flat-square)](https://github.com/5ouma/mobicard/releases)
[![CI](https://img.shields.io/github/actions/workflow/status/5ouma/mobicard/ci.yml?label=CI&style=flat-square)](https://github.com/5ouma/mobicard/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/actions/workflow/status/5ouma/mobicard/release.yml?label=Release&style=flat-square)](https://github.com/5ouma/mobicard/actions/workflows/release.yml)
[![pre-commit](https://img.shields.io/github/actions/workflow/status/5ouma/mobicard/pre-commit.yml?label=pre-commit&style=flat-square)](https://github.com/5ouma/mobicard/actions/workflows/pre-commit.yml)
[![codecov](https://codecov.io/github/5ouma/mobicard/graph/badge.svg)](https://codecov.io/github/5ouma/mobicard)

![Repobeats Analytics Image](https://repobeats.axiom.co/api/embed/3d399f151e4fca968a226771b22d4ce8fc372183.svg)

</div>

<br /><br />

## 📊 Usage

1. Create a new project with `mobicard` template

   ```sh
   npm create astro --template 5ouma/mobicard
   ```

2. Copy the [`meta.tmpl.json`] to `meta.json` and edit as you prefer

   > [👾 Meta File](#-meta-file)

3. Build and Preview the project

   ```sh
   npm run build
   ```

   ```sh
   npm run preview
   ```

<br /><br />

## 🔨 Development

1. Clone this repository

   ```sh
   git clone https://github.com/5ouma/mobicard.git
   ```

2. Copy the [`meta.tmpl.json`] to `meta.json` and edit as you prefer

   > [👾 Meta File](#-meta-file)

3. Run the development server

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
  "homepage": "Your Homepage URL",
  "email": "Your Email",
  "sns": [{ "service": "Service Name", "id": "Your ID" }],
  "card": "Your Card URL"
}
```

[`meta.tmpl.json`]: ./meta.tmpl.json

> [!NOTE]
> Valid contact services are:
>
> - Bluesky
> - Facebook
> - GitHub
> - Instagram
> - Mastodon
> - Misskey
> - Threads
> - Twitter
> - YouTube

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
I would recommend reading [CONTRIBUTING.md](./.github/CONTRIBUTING.md)
for a better development experience.
