defmodule OcwWebpage.Model.Result do
  alias OcwWebpage.Model
  defstruct [:attempts, :average, :competitor]

  def new(%{attempts: attempts, average: average, person: competitor}) do
    competitor = Model.Person.new(competitor)
    struct(__MODULE__, %{attempts: attempts, average: average, competitor: competitor})
  end

  def to_map(%{attempts: attempts, average: average, competitor: competitor}) do
    %{
      attempts: Enum.map(attempts, &convert_to_tournament_time_format/1),
      best_solve: Enum.min(attempts) |> convert_to_tournament_time_format(),
      average: average |> convert_to_tournament_time_format(),
      competitor: Model.Person.to_map(competitor)
    }
  end

  defp convert_to_tournament_time_format(miliseconds) when miliseconds / 1000 < 10 do
    "00:0#{float_to_binary(miliseconds)}"
  end

  defp convert_to_tournament_time_format(miliseconds)
       when miliseconds / 1000 >= 10 and miliseconds / 1000 < 60 do
    "00:#{float_to_binary(miliseconds)}"
  end

  defp convert_to_tournament_time_format(miliseconds)
       when miliseconds / 1000 >= 60 and miliseconds / 1000 < 600 do
    {minutes, remaining_miliseconds} = to_minutes_and_seconds(miliseconds)

    case remaining_miliseconds / 1000 < 10 do
      true ->
        "0#{minutes}:0#{float_to_binary(remaining_miliseconds)}"

      false ->
        "0#{minutes}:#{float_to_binary(remaining_miliseconds)}"
    end
  end

  defp convert_to_tournament_time_format(miliseconds)
       when miliseconds / 1000 >= 600 and miliseconds / 1000 < 3600 do
    {minutes, remaining_miliseconds} = to_minutes_and_seconds(miliseconds)

    case remaining_miliseconds / 1000 < 10 do
      true ->
        "#{minutes}:0#{float_to_binary(remaining_miliseconds)}"

      false ->
        "#{minutes}:#{float_to_binary(remaining_miliseconds)}"
    end
  end

  defp to_minutes_and_seconds(miliseconds) do
    minutes =
      miliseconds
      |> div(1000)
      |> div(60)

    {minutes, miliseconds - minutes * 60 * 1000}
  end

  # defp calculate_average(attempts) do
  #   case Enum.count(attempts) < 5 do
  #     true ->
  #       nil

  #     false ->
  #       {min, max} = Enum.min_max(attempts)
  #       remaining_attempts = Enum.filter(attempts, fn x -> x != min and x != max end)
  #       Enum.reduce(remaining_attempts, fn x, acc -> x + acc end) / Enum.count(remaining_attempts)
  #   end
  # end

  defp float_to_binary(miliseconds), do: :erlang.float_to_binary(miliseconds / 1000, decimals: 2)
end
