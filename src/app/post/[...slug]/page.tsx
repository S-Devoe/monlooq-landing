import type { Metadata } from "next";

import {
  DeepLinkPage,
  deepLinkMetadata,
  deepLinkPath,
} from "@/components/deeplink/deep-link-page";

// App link landing for monlooq.com/post/*. The app opens it directly when
// installed; this page only renders when it is not.
export async function generateMetadata(
  props: PageProps<"/post/[...slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  return deepLinkMetadata("post", deepLinkPath("post", slug));
}

export default async function Page(props: PageProps<"/post/[...slug]">) {
  const { slug } = await props.params;
  return <DeepLinkPage kind="post" path={deepLinkPath("post", slug)} />;
}
