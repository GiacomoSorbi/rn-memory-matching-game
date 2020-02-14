import * as cardSets from "../constants";

export const addKey = n => e => ({ ...e, key: e.label + n });

export const generateBoard = (
  numberOfDifferentCards,
  selectedCardSets = ["total"]
) => {
  const baseSet = shuffle(
    selectedCardSets.reduce((acc, iter) => {
      acc.push(...(cardSets[iter] || []));
      return acc;
    }, [])
  ).slice(0, numberOfDifferentCards);
  const chosenCards = shuffle(
    (base => base.map(addKey(1)).concat(base.map(addKey(2))))(
      baseSet.map(e => ({ label: e, visible: false }))
    )
  );
  return chosenCards;
};

// using the Fisher-Yates algo: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
export const shuffle = (arr, inPlace = true) => {
  // shallow copy if not inPlace, modifying the input array otherwise
  const base = inPlace ? arr : [].concat(arr);
  for (let i = arr.length, j; i; ) {
    j = Math.floor(Math.random() * i);
    [base[i], base[j]] = [base[j], base[--i]];
  }
  return base;
};
