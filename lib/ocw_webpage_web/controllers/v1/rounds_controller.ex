defmodule OcwWebpageWeb.Api.V1.Rounds do
  use OcwWebpageWeb, :controller

  alias OcwWebpage.LivePage.Round

  def show(conn, %{
        "tournament_name" => tournament_name,
        "event_name" => event_name,
        "round_name" => round_name
      }) do
    conn
    |> put_status(:accepted)
    |> json(Round.translate_to_json(tournament_name, event_name, round_name))
  end
end
