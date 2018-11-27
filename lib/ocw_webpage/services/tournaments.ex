defmodule OcwWebpage.Services.Tournaments do
  alias OcwWebpage.DataAccess
  alias OcwWebpage.Model

  def fetch_round(tournament_name, event_name, round_name) do
    with [round] <- DataAccess.Round.fetch(tournament_name, event_name, round_name),
         %Model.Round{} = model <- Model.Round.new(round) do
      Model.Round.to_map(model)
    end
  end
end
