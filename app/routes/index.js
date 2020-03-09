import Route from "@ember/routing/route";
import fetch from "fetch";

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch("http://localhost:5000");
    const urls = await response.json();
    return { urls };
  }
}
