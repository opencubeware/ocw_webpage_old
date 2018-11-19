alias OcwWebpage.Constants.{RoundName, EventName}
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

Enum.each(round_names, fn [name, id] -> Repo.insert(%RoundName{name: name, name_id: id}) end)
Enum.each(event_names, fn [name, id] -> Repo.insert(%EventName{name: name, name_id: id}) end)
