defmodule OcwWebpage.Model.Result do
  alias OcwWebpage.Model
  defstruct [:attempts, :competitor]

  def new(%{attempts: attempts, person: competitor}) do
    competitor = Model.Person.new(competitor)
    struct(__MODULE__, %{attempts: attempts, competitor: competitor})
  end

  def to_map(%{attempts: attempts, competitor: competitor}) do
    %{
      attempts: Enum.map(attempts, &convert_to_tournament_time_format/1),
      competitor: Model.Person.to_map(competitor)
    }
  end

  def convert_to_tournament_time_format(miliseconds) when miliseconds / 1000 < 10 do
    "00:0#{:erlang.float_to_binary(miliseconds / 1000, decimals: 2)}"
  end

  def convert_to_tournament_time_format(miliseconds)
      when miliseconds / 1000 >= 10 and miliseconds / 1000 < 60 do
    "00:#{:erlang.float_to_binary(miliseconds / 1000, decimals: 2)}"
  end

  def convert_to_tournament_time_format(miliseconds)
      when miliseconds / 1000 >= 60 and miliseconds / 1000 < 600 do
    {minutes, miliseconds} = to_minutes_and_seconds(miliseconds)

    case miliseconds / 1000 < 10 do
      true ->
        "0#{minutes}:0#{:erlang.float_to_binary(miliseconds / 1000, decimals: 2)}"

      false ->
        "0#{minutes}:#{:erlang.float_to_binary(miliseconds / 1000, decimals: 2)}"
    end
  end

  def convert_to_tournament_time_format(miliseconds)
      when miliseconds / 1000 >= 600 and miliseconds / 1000 < 3600 do
    {minutes, miliseconds} = to_minutes_and_seconds(miliseconds)

    case miliseconds / 1000 < 10 do
      true ->
        "#{minutes}:0#{:erlang.float_to_binary(miliseconds / 1000, decimals: 2)}"

      false ->
        "#{minutes}:#{:erlang.float_to_binary(miliseconds / 1000, decimals: 2)}"
    end
  end

  defp to_minutes_and_seconds(miliseconds) do
    minutes =
      miliseconds
      |> div(1000)
      |> div(60)

    {minutes, miliseconds - minutes * 60 * 1000}
  end
end
