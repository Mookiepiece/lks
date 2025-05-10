import ghpages from "gh-pages";

ghpages.publish(".", {
  src: ["index.html", "web.v12.json"],
});
