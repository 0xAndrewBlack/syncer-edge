import { createNodeMiddleware, createProbot } from "probot";

import app from "../../../services/ProBot";

const probot = createProbot();

export default createNodeMiddleware(app, {
  probot,
  webhooksPath: "/api/v1/github/",
});
