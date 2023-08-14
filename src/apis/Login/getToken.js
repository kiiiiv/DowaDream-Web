import axios from "axios";

const CLIENT_ID = "263882411657-kanoto1m439tbjmhahgc0hgv9u58t451.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const AUTHORIZATION_URL = "AUTHORIZATION_SERVER_AUTH_URL";
const TOKEN_URL = "AUTHORIZATION_SERVER_TOKEN_URL";
const REDIRECT_URI = "http://localhost:3000/callback";

const getToken = async (code) => {
  const response = await axios({
    method: "POST",
    url: TOKEN_URL,
    data: {
      grant_type: "authorization_code",
      client_id: "263882411657-kanoto1m439tbjmhahgc0hgv9u58t451.apps.googleusercontent.com",
      client_secret: "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",
      code: code,
      redirect_uri: REDIRECT_URI,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data.access_token;
};

export default getToken;