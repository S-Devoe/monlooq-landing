import type { Metadata } from "next";

import {
  DeepLinkPage,
  deepLinkMetadata,
  deepLinkPath,
} from "@/components/deeplink/deep-link-page";

// App link landing for monlooq.com/user/*. The app opens it directly when
// installed; this page only renders when it is not.
export async function generateMetadata(
  props: PageProps<"/user/[...slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  return deepLinkMetadata("user", deepLinkPath("user", slug));
}

export default async function Page(props: PageProps<"/user/[...slug]">) {
  const { slug } = await props.params;
  return <DeepLinkPage kind="user" path={deepLinkPath("user", slug)} />;
}
