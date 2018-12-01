defmodule OcwWebpage.Model.Round do
  alias OcwWebpage.Model
  defstruct [:event, :name, :results, :tournament_name]

  @type t :: %__MODULE__{
          event: Model.Event.t(),
          name: String.t(),
          results: [Model.Result.t()],
          tournament_name: String.t()
        }

  @spec new(%{
          event: %{event_name: %{name: String.t()}, tournament: %{name: String.t()}},
          results: map(),
          round_name: %{name: String.t()}
        }) :: t()
  def new(%{
        event: %{tournament: %{name: tournament_name}} = event,
        round_name: %{name: round_name},
        results: results
      }) do
    struct(__MODULE__, %{
      event: Model.Event.new(event),
      name: round_name,
      tournament_name: tournament_name,
      results: Enum.map(results, &Model.Result.new/1)
    })
  end

  @spec to_map(t()) :: %{
          event: map(),
          name: String.t(),
          results: [map()],
          tournament_name: String.t()
        }
  def to_map(%__MODULE__{
        event: event,
        name: name,
        results: results,
        tournament_name: tournament_name
      }) do
    %{
      name: name,
      event: Model.Event.to_map(event),
      tournament_name: tournament_name,
      results: map_results(results)
    }
  end

  defp map_results(results) do
    results
    |> Enum.map(&Model.Result.to_map/1)
    |> Enum.sort_by(fn map -> {map.average, map.best_solve} end)
  end
end
