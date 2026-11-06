import type { Metadata } from "next";

import {
  DeepLinkPage,
  deepLinkMetadata,
  deepLinkPath,
} from "@/components/deeplink/deep-link-page";

// App link landing for monlooq.com/p/*. The app opens it directly when
// installed; this page only renders when it is not.
export async function generateMetadata(
  props: PageProps<"/p/[...slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  return deepLinkMetadata("post", deepLinkPath("p", slug));
}

export default async function Page(props: PageProps<"/p/[...slug]">) {
  const { slug } = await props.params;
  return <DeepLinkPage kind="post" path={deepLinkPath("p", slug)} />;
}
