import { Round } from 'js/components/tournament/main-sidebar-list'

export const CurrentCategoryAndRound = {
  puzzle: '4x4x4',
  round: 'First Round' as Round,
  description: 'Average of 5, top 32 proceed to the semifinal'
}
export const MainBoardRecordStub = {
  wr: {
    single: {
      person: 'Rafał Studnicki',
      time: '00:05.70'
    },
    average: {
      person: 'Rafał Studnicki',
      time: '00:05.70'
    }
  },
  cr: {
    single: {
      person: 'Rafał Studnicki',
      time: '00:05.70'
    },
    average: {
      person: 'Rafał Studnicki',
      time: '00:05.70'
    }
  },
  nr: {
    single: {
      person: 'Rafał Studnicki',
      time: '00:05.70'
    },
    average: {
      person: 'Rafał Studnicki',
      time: '00:05.70'
    }
  },
  cb: {
    single: {
      person: 'Rafał Studnicki',
      time: '00:05.70'
    },
    average: {
      person: 'Rafał Studnicki',
      time: '00:05.70'
    }
  },
}

export const MainBoardSidebarCategoriesStub = {
  categories: [
    {
      puzzle: '3x3x3',
      rounds: ['First Round', 'Second Round', 'Final Round'] as Round[]
    },
    {
      puzzle: '4x4x4',
      rounds: ['First Round', 'Second Round', 'Final Round'] as Round[]
    },
    {
      puzzle: '5x5x5',
      rounds: ['First Round', 'Second Round', 'Final Round'] as Round[]
    },
    {
      puzzle: 'Megaminx',
      rounds: ['Combined First', 'Final Round'] as Round[]
    },
  ]
}

export const MainBoardTableStub = [
  {
    place: 1,
    country: 'Poland',
    full_name: 'Rafał Studnicki',
    attempts: [
      {
        result: '00:05.70',
        record: 'wr'
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
    ],
    best_attempt: {
      result: '00:10.70',
    },
    average: {
      result: '00:10.70',
    }
  },
  {
    place: 2,
    country: 'Poland',
    full_name: 'Rafał Studnicki',
    attempts: [
      {
        result: '00:05.70',
        record: 'wr'
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
    ],
    best_attempt: {
      result: '00:10.70',
    },
    average: {
      result: '00:10.70',
      record: 'er'
    }
  },
  {
    place: 3,
    country: 'Poland',
    full_name: 'Rafał Studnicki',
    attempts: [
      {
        result: '00:05.70',
        record: 'wr'
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
    ],
    best_attempt: {
      result: '00:10.70',
    },
    average: {
      result: '00:10.70',
    }
  },
  {
    place: 4,
    country: 'Poland',
    full_name: 'Kamil Zieliński',
    attempts: [
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
        record: 'nr'
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
    ],
    best_attempt: {
      result: '00:10.70',
    },
    average: {
      result: '00:10.70',
    }
  },
  {
    place: 5,
    country: 'Poland',
    full_name: 'Rafał Studnicki',
    attempts: [
      {
        result: '00:05.70',
        record: 'wr'
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
      {
        result: '00:05.70',
      },
    ],
    best_attempt: {
      result: '00:10.70',
    },
    average: {
      result: '00:10.70',
    }
  }
]
