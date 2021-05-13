const themes = [
    {
      title: "Общение",
      isActive: true,
      color: "blue",
      serverTitle: 'sp',
    },
    {
      title: "Трабл",
      isActive: false,
      color: "orange",
      serverTitle: 'pr',
    },
    {
      title: "Demo",
      isActive: false,
      color: "red",
      serverTitle: 'ft',
    }
  ]

  const genders = [
    {
      id: 0,
      title: "?",
      isActive: false
    },
    {
      id: 1,
      title: "М",
      isActive: false
    },
    {
      id: 2,
      title: "Ж",
      isActive: false
    },
  ];

  const old = [
    {
      id: 0,
      title: "?",
      isActive: false
    },
    {
      id: 1,
      title: "< 16",
      isActive: false
    },
    {
      id: 2,
      title: "17 - 21",
      isActive: false
    },
    {
      id: 3,
      title: "22 - 27",
      isActive: false
    },
    {
      id: 4,
      title: "28 - 35",
      isActive: false
    },
    {
      id: 5,
      title: "36 <",
      isActive: false
    },
  ];

  export {themes, genders, old};