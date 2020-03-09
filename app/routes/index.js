import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
  model() {
    return [
      {
        url: "google.com",
        tiny: "test"
      },
      {
        url: "bing.com",
        tiny: "test2"
      }
    ];
  }
}
