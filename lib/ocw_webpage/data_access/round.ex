defmodule OcwWebpage.DataAccess.Round do
  import Ecto.Query, only: [from: 2]
  alias OcwWebpage.DataAccess.Schemas
  alias OcwWebpage.Repo

  def fetch(tournament_name, event_name, round_name) do
    full_round_query(tournament_name, event_name, round_name)
    |> Repo.all()
  end

  defp full_round_query(tournament_name, event_name, round_name) do
    from(r in Schemas.Round,
      join: e in Schemas.Event,
      on: r.event_id == e.id,
      join: t in Schemas.Tournament,
      on: t.id == e.tournament_id,
      where:
        r.round_name_fk == ^round_name and e.event_name_fk == ^event_name and
          t.name == ^tournament_name,
      preload: [event: [:event_name, :tournament], round_name: [], results: [:person]]
    )
  end
end
