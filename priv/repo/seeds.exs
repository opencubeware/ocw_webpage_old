alias OcwWebpage.Constants.{RoundName, EventName}
alias OcwWebpage.DataAccess.Schemas.{Round, Event, Person, Tournament, Result}
alias OcwWebpage.Repo

round_names = [
  ["First Round", 1],
  ["Second Round", 2],
  ["Third Round", 3],
  ["Final Round", 4],
  ["Combined First", 5],
  ["Combined Final", 6]
]

event_names = [
  ["3x3x3", 1],
  ["2x2x2", 2],
  ["4x4x4", 3],
  ["5x5x5", 4],
  ["6x6x6", 5],
  ["7x7x7", 6],
  ["3x3x3 Blindfolded", 7],
  ["3x3x3 Fewest Moves", 8],
  ["3x3x3 One-Handed", 9],
  ["3x3x3 With Feet", 10],
  ["Clock", 11],
  ["Megaminx", 12],
  ["Pyraminx", 13],
  ["Skewb", 14],
  ["Square-1", 15],
  ["4x4x4 Blindfolded", 16],
  ["5x5x5 Blindfolded", 17],
  ["3x3x3 Multi-Blind", 18]
]

Enum.each(round_names, fn [name, id] -> Repo.insert(%RoundName{name: name, id: id}) end)
Enum.each(event_names, fn [name, id] -> Repo.insert(%EventName{name: name, id: id}) end)

event_name1 = Repo.get(EventName, 1)
event_name2 = Repo.get(EventName, 2)
event_name3 = Repo.get(EventName, 3)
event_name4 = Repo.get(EventName, 4)
event_name5 = Repo.get(EventName, 5)
event_name6 = Repo.get(EventName, 6)

round_name1 = Repo.get(RoundName, 1)
round_name2 = Repo.get(RoundName, 2)
round_name3 = Repo.get(RoundName, 3)
round_name4 = Repo.get(RoundName, 4)
round_name5 = Repo.get(RoundName, 5)
round_name6 = Repo.get(RoundName, 6)

round_names = [round_name1, round_name2, round_name3, round_name4, round_name5]

person1 =
  Repo.insert!(%Person{
    first_name: "John",
    last_name: "Doe",
    wca_id: "2018dupa",
    country: "England"
  })

person2 =
  Repo.insert!(%Person{
    first_name: "Rafał",
    last_name: "Studnicki",
    wca_id: "1984down",
    country: "Poland"
  })

person3 =
  Repo.insert!(%Person{
    first_name: "Kamil",
    last_name: "Zieliński",
    wca_id: "2009lol",
    country: "France"
  })

tournament = Repo.insert!(%Tournament{name: "Cracow Open 2013"})

event1 = Repo.insert!(%Event{event_name: event_name1, tournament: tournament})
event2 = Repo.insert!(%Event{event_name: event_name2, tournament: tournament})

round1 = Repo.insert!(%Round{round_name: round_name1, event: event1})
round2 = Repo.insert!(%Round{round_name: round_name2, event: event1})
round3 = Repo.insert!(%Round{round_name: round_name1, event: event2})
round4 = Repo.insert!(%Round{round_name: round_name2, event: event2})

Repo.insert(%Result{
  round: round1,
  attempts: [5100, 6200, 7300, 5800, 7400],
  average: 636,
  competitor_id: person1.id
})

Repo.insert(%Result{
  round: round1,
  attempts: [810, 620, 730, 580, 740],
  average: 696,
  competitor_id: person2.id
})

Repo.insert(%Result{
  round: round1,
  attempts: [710, 620, 580, 720, 480],
  average: 622,
  competitor_id: person3.id
})

Repo.insert(%Result{
  round: round3,
  attempts: [310, 620, 730, 530, 740],
  average: 622,
  competitor_id: person1.id
})

Repo.insert(%Result{
  round: round3,
  attempts: [710, 620, 580, 720, 480],
  average: 586,
  competitor_id: person2.id
})

Repo.insert(%Result{
  round: round3,
  attempts: [310, 620, 730, 530, 740],
  average: 586,
  competitor_id: person3.id
})

Repo.insert(%Result{
  round: round2,
  attempts: [810, 620, 730, 580, 740],
  average: 696,
  competitor_id: person1.id
})

Repo.insert(%Result{
  round: round2,
  attempts: [310, 620, 730, 530, 740],
  average: 696,
  competitor_id: person2.id
})

Repo.insert(%Result{
  round: round2,
  attempts: [810, 620, 730, 580, 740],
  average: 696,
  competitor_id: person3.id
})

Repo.insert(%Result{
  round: round4,
  attempts: [310, 620, 730, 530, 740],
  average: 586,
  competitor_id: person1.id
})

Repo.insert(%Result{
  round: round4,
  attempts: [810, 620, 730, 580, 740],
  average: 586,
  competitor_id: person2.id
})

Repo.insert(%Result{
  round: round4,
  attempts: [310, 620, 730, 530, 740],
  average: 586,
  competitor_id: person3.id
})
