class RandomName {
  constructor(min, max) { //можеш це просто константами зробити
    this.MIN = min;
    this.MAX = max;
  }

  #adjs = [
    "autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark",
    "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter",
    "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue",
    "billowing", "broken", "cold", "damp", "falling", "frosty", "green",
    "long", "late", "lingering", "bold", "little", "morning", "muddy", "old",
    "red", "rough", "still", "small", "sparkling", "throbbing", "shy",
    "wandering", "withered", "wild", "black", "young", "holy", "solitary",
    "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine",
    "polished", "ancient", "purple", "lively", "nameless"
  ];

  #nouns = [
    "waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning",
    "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter",
    "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook",
    "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly",
    "feather", "grass", "haze", "mountain", "night", "pond", "darkness",
    "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder",
    "violet", "water", "wildflower", "wave", "water", "resonance", "sun",
    "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper",
    "frog", "smoke", "star", "dragon", "bayraktar", "javelin"
  ];

  #getRandomNumber = () => Math.floor(Math.random() * ((this.MAX + 1) - this.MIN)) + this.MIN;

  #formWords = () => {
    const adj = this.#adjs[Math.floor(Math.random() * this.#adjs.length)];
    const noun = this.#nouns[Math.floor(Math.random() * this.#nouns.length)];
    return [adj, noun, this.#adjs, this.#nouns]
  }

  getRName() {
    const [adj, noun, adjs, nouns] = this.#formWords()

    console.log(adjs.length * nouns.length * (this.MAX - this.MIN));

    const num = this.#getRandomNumber()

    return `${adj}-${noun}-${num}`
  }
}

const username = new RandomName(1000, 9999)

console.log(username.getRName());