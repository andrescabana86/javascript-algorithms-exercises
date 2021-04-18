export const objAndArrCombinedExample = {
  squadName: 'Super hero squad',
  homeTown: 'Metro City',
  formed: 2016,
  secretBase: 'Super tower',
  active: true,
  members: [
    {
      name: 'Molecule Man',
      age: 29,
      secretIdentity: 'Dan Jukes',
      powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast'],
    },
    {
      name: 'Madame Uppercut',
      age: 39,
      secretIdentity: 'Jane Wilson',
      powers: ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes'],
    },
    {
      name: 'Eternal Flame',
      age: 1000000,
      secretIdentity: 'Unknown',
      powers: ['Immortality', 'Heat Immunity', 'Inferno', 'Teleportation', 'Interdimensional travel'],
    },
  ],
}

export const objAndArrCombinedExampleEncoded = [
  'squadName="Super hero squad"',
  'homeTown="Metro City"',
  'formed=2016',
  'secretBase="Super tower"',
  'active=true',
  'members[0]/name="Molecule Man"',
  'members[0]/age=29',
  'members[0]/secretIdentity="Dan Jukes"',
  'members[0]/powers[0]="Radiation resistance"',
  'members[0]/powers[1]="Turning tiny"',
  'members[0]/powers[2]="Radiation blast"',
  'members[1]/name="Madame Uppercut"',
  'members[1]/age=39',
  'members[1]/secretIdentity="Jane Wilson"',
  'members[1]/powers[0]="Million tonne punch"',
  'members[1]/powers[1]="Damage resistance"',
  'members[1]/powers[2]="Superhuman reflexes"',
  'members[2]/name="Eternal Flame"',
  'members[2]/age=1000000',
  'members[2]/secretIdentity="Unknown"',
  'members[2]/powers[0]="Immortality"',
  'members[2]/powers[1]="Heat Immunity"',
  'members[2]/powers[2]="Inferno"',
  'members[2]/powers[3]="Teleportation"',
  'members[2]/powers[4]="Interdimensional travel"',
]

export const arrOfObjExample = {
  members: [
    {
      name: 'Molecule Man',
      age: 29,
      secretIdentity: 'Dan Jukes',
      powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast'],
    },
    {
      name: 'Madame Uppercut',
      age: 39,
      secretIdentity: 'Jane Wilson',
      powers: ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes'],
    },
  ],
}

export const arrOfObjExampleEncoded = [
  'members[0]/name="Molecule Man"',
  'members[0]/age=29',
  'members[0]/secretIdentity="Dan Jukes"',
  'members[0]/powers[0]="Radiation resistance"',
  'members[0]/powers[1]="Turning tiny"',
  'members[0]/powers[2]="Radiation blast"',
  'members[1]/name="Madame Uppercut"',
  'members[1]/age=39',
  'members[1]/secretIdentity="Jane Wilson"',
  'members[1]/powers[0]="Million tonne punch"',
  'members[1]/powers[1]="Damage resistance"',
  'members[1]/powers[2]="Superhuman reflexes"',
]

export const objExample = {
  car: {
    color: 'blue',
    year: 1999,
    broken: ['left mirror', 'right door'],
  },
}

export const objExampleEncoded = [
  'car/color="blue"',
  'car/year=1999',
  'car/broken[0]="left mirror"',
  'car/broken[1]="right door"',
]

export const arrExample = {
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}

export const arrExampleEncoded = [
  'values[0]=1',
  'values[1]=2',
  'values[2]=3',
  'values[3]=4',
  'values[4]=5',
  'values[5]=6',
  'values[6]=7',
  'values[7]=8',
  'values[8]=9',
  'values[9]=10',
]
