defmodule OcwWebpage.LivePage.Round do
  use Ecto.Schema
  alias OcwWebpage.LivePage.{Event, Result, Round}
  alias OcwWebpage.Constants.RoundName

  schema "rounds" do
    belongs_to(:round_name, RoundName,
      foreign_key: :round_name_id,
      references: :name_id,
      type: :integer
    )

    has_many(:results, Result)
    belongs_to(:event, Event)
  end

  def name(%Round{round_name: %RoundName{name: _name}} = preloaded_round) do
    {:ok, preloaded_round.round_name.name}
  end

  def name(%Round{round_name: %Ecto.Association.NotLoaded{}, round_name_id: nil}) do
    {:error, :round_does_not_have_name}
  end

  def name(%Round{round_name: %Ecto.Association.NotLoaded{}, round_name_id: _id}) do
    {:error, :round_name_not_preloaded}
  end
end
