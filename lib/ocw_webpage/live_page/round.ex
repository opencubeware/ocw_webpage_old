defmodule OcwWebpage.LivePage.Round do
  use Ecto.Schema
  alias OcwWebpage.LivePage.{Event, Result, Round}
  alias OcwWebpage.Constants.RoundName
  alias OcwWebpage.DataAccess

  schema "rounds" do
    belongs_to(:round_name, RoundName,
      foreign_key: :round_name_id,
      references: :name_id,
      type: :integer
    )

    has_many(:results, Result)
    belongs_to(:event, Event)
  end

  def name(%Round{round_name: %RoundName{name: _name}} = preloaded_round) do
    {:ok, preloaded_round.round_name.name}
  end

  def name(%Round{round_name: %Ecto.Association.NotLoaded{}, round_name_id: nil}) do
    {:error, :round_does_not_have_name}
  end

  def name(%Round{round_name: %Ecto.Association.NotLoaded{}, round_name_id: _id}) do
    {:error, :round_name_not_preloaded}
  end

  def translate_to_json(tournament_name, event_name, round_name) do
    [
      %Round{
        event: %{event_name: %{name: event_name}, tournament: %{name: tournament_name}},
        round_name: %{name: round_name},
        results: results
      }
    ] = DataAccess.Round.fetch_and_preload(tournament_name, event_name, round_name)

    %{
      name: round_name,
      tournament: %{name: tournament_name},
      event: %{name: event_name},
      results: map_results(results)
    }
  end

  def map_results(results) do
    Enum.map(results, fn %{attempts: attempts, person: person} ->
      %{
        attempts: attempts,
        competitor: %{
          first_name: person.first_name,
          last_name: person.last_name,
          wca_id: person.wca_id,
          country: person.country
        }
      }
    end)
  end
end
