import type { Props } from "./Bio.astro";

export const Default: Props = {
  name: "Bio Name",
  description: "Bio Description",
  icon: "https://avatars.githubusercontent.com/withastro",
};

export const Japanese: Props = {
  name: "名前",
  description: "説明",
  icon: "https://avatars.githubusercontent.com/withastro",
};

export const Long: Props = {
  name: "Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Bio Name",
  description:
    "Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Bio Description",
  icon: "https://avatars.githubusercontent.com/withastro",
};
