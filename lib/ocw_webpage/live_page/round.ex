defmodule OcwWebpage.LivePage.Round do
  alias OcwWebpageWeb.Schemas.{Round, RoundName}

  def name(%Round{round_name: %RoundName{name: _name}} = preloaded_round) do
    preloaded_round.round.name
  end

  def name(%Round{round_name: %Ecto.Association.NotLoaded{}, round_name_id: nil}) do
    "Round does not have name"
  end

  def name(%Round{round_name: %Ecto.Association.NotLoaded{}, round_name_id: _id}) do
    "RoundName not preloaded"
  end
end
