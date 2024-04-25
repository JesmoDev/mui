export class MUIStore {
  public static instance: MUIStore = new MUIStore();

  #api: MuiApi = new MuiApi();

  search(query: string) {
    return this.#api.search(query);
  }
}

class MuiApi {
  search(query: string) {
    return MUIData.items.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase());
    });
  }
}

class MUIData {
  static items = [
    {
      id: 1,
      name: "Flameblade",
      description: "A sword engulfed in magical flames.",
      damage: 20,
      damageType: "fire",
    },
    {
      id: 2,
      name: "Thunderstaff",
      description: "A staff crackling with electric energy.",
      damage: 12,
      damageType: "lightning",
    },
    {
      id: 3,
      name: "Amulet of the Wind",
      description: "An amulet that grants its wearer unparalleled speed.",
    },
    {
      id: 4,
      name: "Crystal Shield",
      description: "A shield made of enchanted crystal.",
      armor: 5,
    },
    {
      id: 5,
      name: "Soulstone",
      description: "A gem that traps the souls of fallen enemies.",
    },
    {
      id: 6,
      name: "Staff of Healing",
      description: "A staff that radiates healing energy.",
      damage: 8,
      damageType: "radiant",
    },
    {
      id: 7,
      name: "Shadow Cloak",
      description: "A cloak that grants its wearer the ability to meld with shadows.",
    },
    {
      id: 8,
      name: "Frostbite Gauntlets",
      description: "Gauntlets imbued with the power of ice.",
      damage: 10,
      damageType: "cold",
    },
    {
      id: 9,
      name: "Helm of Telepathy",
      description: "A helmet that allows the wearer to read minds.",
    },
    {
      id: 10,
      name: "Serpent's Fang",
      description: "A dagger crafted from the fang of a mythical serpent.",
      damage: 6,
      damageType: "poison",
    },
    {
      id: 11,
      name: "Phoenix Feather",
      description: "A feather from the legendary phoenix, said to grant immense power.",
    },
    {
      id: 12,
      name: "Gloves of Strength",
      description: "Gloves that increase the wearer's physical strength.",
    },
    {
      id: 13,
      name: "Ethereal Cloak",
      description: "A cloak that allows the wearer to phase through solid objects.",
    },
    {
      id: 14,
      name: "Golem Heart",
      description: "A magical crystal that powers constructs.",
    },
    {
      id: 15,
      name: "Aegis Plate",
      description: "A suit of armor that grants protection from all forms of harm.",
      armor: 10,
    },
    {
      id: 16,
      name: "Wand of Illusion",
      description: "A wand capable of creating lifelike illusions.",
    },
    {
      id: 17,
      name: "Whispering Dagger",
      description: "A dagger that whispers secrets to its wielder.",
      damage: 8,
      damageType: "psychic",
    },
    {
      id: 18,
      name: "Crown of Wisdom",
      description: "A crown that enhances the wearer's intelligence.",
    },
    {
      id: 19,
      name: "Orcish Waraxe",
      description: "A brutal axe wielded by orcish warriors.",
      damage: 15,
      damageType: "slashing",
    },
    {
      id: 20,
      name: "Spectral Chainmail",
      description: "Chainmail woven from ethereal strands, providing ghostly protection.",
      armor: 8,
    },
  ];
}
