defmodule OcwWebpageWeb.Api.V1.Rounds do
  use OcwWebpageWeb, :controller

  def show(conn, %{
        "tournament_id" => tournament_id,
        "event_id" => event_id,
        "round_id" => round_id
      }) do
    conn
    |> put_status(:accepted)
    |> json(mock(tournament_id, event_id, round_id))
  end

  defp mock(_tournament_id, event_id, round_id) do
    %{
      tournament: %{id: "1"},
      event: event_mock(event_id),
      round: round_mock(round_id)
    }
  end

  defp event_mock(event_id) do
    event_name =
      case event_id do
        "1" -> "3x3x3"
        "2" -> "4x4x4"
        "3" -> "5x5x5"
        "4" -> "Megaminx"
      end

    %{id: event_id, name: event_name}
  end

  defp round_mock(round_id) do
    round_name =
      case round_id do
        "1" -> "First Round"
        "2" -> "Second Round"
        "3" -> "Final Round"
      end

    %{id: round_id, name: round_name}
  end
end
