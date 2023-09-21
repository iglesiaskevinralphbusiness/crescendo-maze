export const characters = [
  {
    name: 'adventurer01',
    walkingAnimationMapping: 0,
    stopFrame: {
      up: 37,
      right: 25,
      down: 1,
      left: 13
    },
    animateFrame: {
      up: [36, 38],
      right: [24, 26],
      down: [0, 2],
      left: [12, 14]
    }
  },
  {
    name: 'adventurer02',
    walkingAnimationMapping: 1,
    stopFrame: {
      up: 40,
      right: 28,
      down: 4,
      left: 16
    },
    animateFrame: {
      up: [39, 41],
      right: [27, 29],
      down: [3, 5],
      left: [15, 17]
    }
  },
  {
    name: 'elf',
    walkingAnimationMapping: 2,
    stopFrame: {
      up: 43,
      right: 31,
      down: 7,
      left: 19
    },
    animateFrame: {
      up: [42, 44],
      right: [30, 32],
      down: [7, 8],
      left: [18, 20]
    }
  },
  {
    name: 'mage',
    walkingAnimationMapping: 3,
    stopFrame: {
      up: 46,
      right: 34,
      down: 10,
      left: 22
    },
    animateFrame: {
      up: [45, 47],
      right: [33, 35],
      down: [9, 11],
      left: [21, 23]
    }
  },
  {
    name: 'queen',
    walkingAnimationMapping: 4,
    stopFrame: {
      up: 85,
      right: 73,
      down: 49,
      left: 61
    },
    animateFrame: {
      up: [84, 86],
      right: [72, 74],
      down: [48, 50],
      left: [60, 62]
    }
  },
  {
    name: 'knight',
    walkingAnimationMapping: 5,
    stopFrame: {
      up: 88,
      right: 76,
      down: 52,
      left: 64
    },
    animateFrame: {
      up: [87, 89],
      right: [75, 77],
      down: [51, 53],
      left: [63, 65]
    }
  },
  {
    name: 'ranger',
    walkingAnimationMapping: 6,
    stopFrame: {
      up: 91,
      right: 79,
      down: 55,
      left: 67
    },
    animateFrame: {
      up: [90, 92],
      right: [78, 80],
      down: [54, 56],
      left: [66, 68]
    }
  },
  {
    name: 'kid',
    walkingAnimationMapping: 7,
    stopFrame: {
      up: 94,
      right: 82,
      down: 58,
      left: 70
    },
    animateFrame: {
      up: [93, 95],
      right: [81, 83],
      down: [57, 59],
      left: [69, 71]
    }
  },
]

export const positionNaming = [
  {
    name: 'Finished',
    blocks: {
      from: [0, 0],
      to: [7, 6]
    }
  },
  {
    name: 'Near Finish Line',
    blocks: {
      from: [8, 0],
      to: [38, 24]
    }
  },
  {
    name: 'Starting Point (ST)',
    blocks: {
      from: [70, 70],
      to: [79, 79]
    }
  },
  {
    name: 'Private Room',
    blocks: {
      from: [90, 30],
      to: [99, 39]
    }
  },
  {
    name: 'Upper Dried Forest',
    blocks: {
      from: [58, 76],
      to: [69, 99]
    }
  },
  {
    name: 'Lower Dried Forest',
    blocks: {
      from: [61, 100],
      to: [79, 113]
    }
  },
  {
    name: 'Right Part of ST',
    blocks: {
      from: [80, 67],
      to: [95, 85]
    }
  },
  {
    name: 'Lower Part of ST',
    blocks: {
      from: [74, 81],
      to: [79, 98]
    }
  },
  {
    name: 'Left Part of ST',
    blocks: {
      from: [58, 68],
      to: [68, 74]
    }
  },
  {
    name: 'Empty Cemetery',
    blocks: {
      from: [69, 56],
      to: [77, 67]
    }
  },
  {
    name: 'Mini Cemetery',
    blocks: {
      from: [46, 112],
      to: [59, 122]
    }
  },
  {
    name: 'Maze Cemetery',
    blocks: {
      from: [101, 56],
      to: [121, 88]
    }
  },
  {
    name: 'Exit Maze Cemetery',
    blocks: {
      from: [123, 86],
      to: [130, 94]
    }
  },
  {
    name: 'Fountain Park',
    blocks: {
      from: [111, 101],
      to: [117, 109]
    }
  },
  {
    name: 'Dead End Private Room',
    blocks: {
      from: [131, 99],
      to: [133, 108]
    }
  },
  {
    name: 'Lower Ancient Poles',
    blocks: {
      from: [76, 26],
      to: [89, 43]
    }
  },
  {
    name: 'Upper Ancient Poles',
    blocks: {
      from: [83, 17],
      to: [91, 25]
    }
  },
  {
    name: 'Private House ',
    blocks: {
      from: [91, 31],
      to: [98, 38]
    }
  },
  {
    name: 'Upper Part Maze',
    blocks: {
      from: [50, 11],
      to: [74, 33]
    }
  },
  {
    name: 'Upper Part Maze',
    blocks: {
      from: [75, 11],
      to: [81, 24]
    }
  },
  {
    name: 'Armory',
    blocks: {
      from: [30, 46],
      to: [39, 60]
    }
  },
  {
    name: 'Forest',
    blocks: {
      from: [7, 30],
      to: [28, 57]
    }
  },
  {
    name: 'Private Cemetery',
    blocks: {
      from: [3, 61],
      to: [10, 75]
    }
  },
  {
    name: 'Barrels Storage Room',
    blocks: {
      from: [12, 66],
      to: [24, 80]
    }
  },
  {
    name: 'Rice Storage Room',
    blocks: {
      from: [28, 62],
      to: [38, 74]
    }
  },
  {
    name: 'Maze Garden',
    blocks: {
      from: [0, 95],
      to: [32, 149]
    }
  },
  {
    name: 'Maze Garden',
    blocks: {
      from: [37, 166],
      to: [32, 149]
    }
  },
  {
    name: 'Left Upper Part Maze',
    blocks: {
      from: [0, 0],
      to: [79, 69]
    }
  },
  {
    name: 'Right Upper Part Maze',
    blocks: {
      from: [80, 0],
      to: [134, 69]
    }
  },
  {
    name: 'Left Lower Part Maze',
    blocks: {
      from: [0, 70],
      to: [79, 149]
    }
  },
  {
    name: 'Right Lower Part Maze',
    blocks: {
      from: [80, 70],
      to: [134, 149]
    }
  }
];