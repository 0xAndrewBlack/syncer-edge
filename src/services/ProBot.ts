import type { Context, Probot } from "probot";

export default (app: Probot) => {
  app.log("Yay! The app was loaded!");

  app.on("issues.opened", async (context: Context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: JSON.stringify(context) }),
    );
  });
};
