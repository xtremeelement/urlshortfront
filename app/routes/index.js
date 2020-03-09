import Route from "@ember/routing/route";
import fetch from "fetch";

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch("https://boiling-depths-40974.herokuapp.com/");
    const urls = await response.json();
    return { urls };
  }
}
