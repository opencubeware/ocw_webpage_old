# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     OcwWebpage.Repo.insert!(%OcwWebpage.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias OcwWebpageWeb.Schemas.RoundName
alias OcwWebpage.Repo

round_names = [
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

Enum.each(round_names, fn [name, id] -> Repo.insert(%RoundName{name: name, round_name_id: id}) end)
