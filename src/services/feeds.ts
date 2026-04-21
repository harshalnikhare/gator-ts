import { XMLParser } from "fast-xml-parser";

type RSSFeed = {
  "?xml": string;
  rss: {
    channel: {
      title: string;
      link: string;
      description: string;
      item: RSSItem[];
    };
  };
};

type RSSItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
};

export async function fetchFeed(feedUrl: string): Promise<RSSFeed | null> {
  const feedData = await fetch(feedUrl, {
    method: "GET",
    headers: {
      "User-Agent": "gator",
    },
  });
  const feedXML = await feedData.text();

  const parser = new XMLParser();
  let parsedFeed: RSSFeed = parser.parse(feedXML);

  if (!parsedFeed?.rss?.channel) {
    throw new Error("Channel is not present in xml");
  }
  const { title, link, description, item } = parsedFeed.rss.channel;

  item.forEach((el) => {
    const { title, link, description } = el;
  });

  return parsedFeed;
}
