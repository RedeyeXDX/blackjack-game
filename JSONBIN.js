const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3/b";
const BIN_ID = "6734cab9ad19ca34f8c985d0";
const MASTER_KEY =
  "$2a$10$ohMIi5jVgCZfB0kZh76.3uCs2CmNnJRWWuadntyixAnFC9Htvaog.";
async function loadJsonBin() {
  const response = await axios.get(
    BASE_JSON_BIN_URL + "/" + BIN_ID + "/latest"
  );
  return response.data.record;
}

async function renderScoreJSonBin() {
  const scoreData = await loadJsonBin();
  if (scoreData) {
    score = scoreData;
    updateScore();
  }
}

console.log(process.env);
