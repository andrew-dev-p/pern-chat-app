export const funEmojis = [
  "👾",
  "⭐",
  "🌟",
  "🎉",
  "🎊",
  "🎈",
  "🎁",
  "🎂",
  "🎄",
  "🎃",
  "🎗",
  "🎟",
  "🎫",
  "🎖",
  "🏆",
  "🏅",
  "🥇",
  "🥈",
  "🥉",
  "⚽",
  "🏀",
  "🏈",
  "⚾",
  "🎾",
  "🏐",
  "🏉",
  "🎱",
  "🏓",
  "🏸",
  "🥅",
  "🏒",
  "🏑",
  "🏏",
  "⛳",
  "🏹",
  "🎣",
  "🥊",
  "🥋",
  "🎽",
  "⛸",
  "🥌",
  "🛷",
  "🎿",
  "⛷",
  "🏂",
  "🏋️",
  "🤼",
  "🤸",
  "🤺",
  "⛹️",
  "🤾",
  "🏌️",
  "🏇",
  "🧘",
];

export const getRandomEmoji = () => {
  return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};

export function extractTime(dateString: string) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

function padZero(number: number) {
  return number.toString().padStart(2, "0");
}
