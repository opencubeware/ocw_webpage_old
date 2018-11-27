defmodule OcwWebpage.DataAccess.Round do
  import Ecto.Query, only: [from: 2]
  alias OcwWebpage.DataAccess.Schemas
  alias OcwWebpage.Repo
  alias OcwWebpage.Constants

  def fetch(tournament_name, event_name, round_name) do
    full_round_query(tournament_name, event_name, round_name)
    |> Repo.all()
  end

  defp full_round_query(tournament_name, event_name, round_name) do
    from(r in Schemas.Round,
      join: e in Schemas.Event,
      on: r.event_id == e.id,
      join: rn in Constants.RoundName,
      on: r.round_name_id == rn.id,
      join: en in Constants.EventName,
      on: e.event_name_id == en.id,
      join: t in Schemas.Tournament,
      on: t.id == e.tournament_id,
      where: rn.name == ^round_name and en.name == ^event_name and t.name == ^tournament_name,
      preload: [event: [:event_name, :tournament], round_name: [], results: [:person]]
    )
  end
end
