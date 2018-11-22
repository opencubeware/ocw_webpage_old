defmodule OcwWebpage.Model.Round do
  defstruct [:event, :name, :results]

  def new(%{
        event: %{event_name: %{name: event_name}, tournament: %{name: tournament_name}},
        round_name: %{name: round_name},
        results: results
      }) do
    event = %{name: event_name, tournament_name: tournament_name}

    struct(__MODULE__, %{event: event, name: round_name, results: map_results(results)})
  end

  def to_map(%__MODULE__{
        event: %{name: event_name, tournament_name: tournament_name},
        name: name,
        results: results
      }) do
    %{
      name: name,
      tournament: %{name: tournament_name},
      event: %{name: event_name},
      results: results
    }
  end

  defp map_results(results) do
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
