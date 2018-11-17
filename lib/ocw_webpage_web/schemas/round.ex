defmodule OcwWebpageWeb.Schemas.Round do
  use Ecto.Schema
  alias OcwWebpageWeb.Schemas.{Round, RoundName}

  schema "rounds" do
    belongs_to(:round_name, RoundName,
      foreign_key: :round_name_id,
      references: :name_id,
      type: :integer
    )
  end

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
