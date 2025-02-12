import { a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Aircraft: a.model({
    Model: a.string(),
    TailNumber: a.string(),
    ImageUrl: a.string()
  }).authorization((allow) => [allow.owner()]), // Allow only the owner
});

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey", // Use API key
  },
});