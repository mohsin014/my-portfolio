import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f08c9d52f1bc168dd4454a9feae3d518@o4509950125015040.ingest.de.sentry.io/4509950133796944",
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "system",
      autoInject: true, 
    }),
  ],
});
