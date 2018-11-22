defmodule OcwWebpage.DataAccess.Round do
  import Ecto.Query, only: [from: 2]
  alias OcwWebpage.LivePage
  alias OcwWebpage.Constants.{RoundName, EventName}
  alias OcwWebpage.Repo

  def fetch_and_preload(tournament_name, event_name, round_name) do
    full_round_query(tournament_name, event_name, round_name)
    |> Repo.all()
    |> Repo.preload(event: [:event_name, :tournament], round_name: [], results: [:person])
  end

  defp full_round_query(tournament_name, event_name, round_name) do
    from(r in LivePage.Round,
      join: rn in RoundName,
      on: r.round_name_id == rn.name_id,
      join: e in LivePage.Event,
      on: r.event_id == e.id,
      join: t in LivePage.Tournament,
      on: t.id == e.tournament_id,
      join: en in EventName,
      on: e.event_name_id == en.name_id,
      where: rn.name == ^round_name and en.name == ^event_name and t.name == ^tournament_name
    )
  end
end
