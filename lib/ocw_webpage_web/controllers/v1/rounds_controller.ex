defmodule OcwWebpageWeb.Api.V1.Rounds do
  use OcwWebpageWeb, :controller

  alias OcwWebpage.Constants.{EventName, RoundName}

  def show(conn, %{
        "tournament_id" => tournament_id,
        "event_name" => event_name,
        "round_name" => round_name
      }) do
    conn
    |> put_status(:accepted)
    |> json(mock(tournament_id, event_name, round_name))
  end

  defp mock(_tournament_id, event_name, round_name) do
    %{
      tournament: %{id: "1"},
      event: %{name: EventName.to_string(event_name)},
      round: %{name: RoundName.to_string(round_name)}
    }
  end
end
