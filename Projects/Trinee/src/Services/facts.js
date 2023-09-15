const CAT_FACTS = "https://catfact.ninja/fact";

async function getRandomFact() {
  const res = await fetch(CAT_FACTS);
  const data = await res.json();
  const { fact } = data;
  return fact;
}

export { getRandomFact };
