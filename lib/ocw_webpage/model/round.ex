defmodule OcwWebpage.Model.Round do
  alias OcwWebpage.Model
  defstruct [:event, :name, :results, :tournament_name]

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
      results: Enum.map(results, &Model.Result.to_map/1)
    }
  end
end
